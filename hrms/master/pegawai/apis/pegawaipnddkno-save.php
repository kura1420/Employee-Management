<?php namespace FGTA4\apis;

if (!defined('FGTA4')) {
	die('Forbiden');
}

require_once __ROOT_DIR.'/core/sqlutil.php';
require_once __DIR__ . '/xapi.base.php';
//require_once __ROOT_DIR . "/core/sequencer.php";


if (is_file(__DIR__ .'/data-pegawaipnddkno-handler.php')) {
	require_once __DIR__ .'/data-pegawaipnddkno-handler.php';
}



use \FGTA4\exceptions\WebException;
//use \FGTA4\utils\Sequencer;



/**
 * hrms/master/pegawai/apis/pegawaipnddkno-save.php
 *
 * ==========
 * Detil-Save
 * ==========
 * Menampilkan satu baris data/record sesuai PrimaryKey,
 * dari tabel pegawaipnddkno pegawai (mst_pegawaipnddkno)
 *
 * Agung Nugroho <agung@fgta.net> http://www.fgta.net
 * Tangerang, 26 Maret 2021
 *
 * digenerate dengan FGTA4 generator
 * tanggal 13/06/2024
 */
$API = new class extends pegawaiBase {
	
	public function execute($data, $options, $files) {
		$event = 'on-save';
		$tablename = 'mst_pegawaipnddkno';
		$primarykey = 'pegawaipnddkno_id';
		$autoid = $options->autoid;
		$datastate = $data->_state;

		$userdata = $this->auth->session_get_user();

		$handlerclassname = "\\FGTA4\\apis\\pegawai_pegawaipnddknoHandler";
		if (class_exists($handlerclassname)) {
			$hnd = new pegawai_pegawaipnddknoHandler($data, $options);
			$hnd->caller = &$this;
			$hnd->db = &$this->db;
			$hnd->auth = $this->auth;
			$hnd->reqinfo = $this->reqinfo;
			$hnd->event = $event;
		} else {
			$hnd = new \stdClass;
		}

		try {
			
			if (method_exists(get_class($hnd), 'init')) {
				// init(object &$options) : void
				$hnd->init($options);
			}
			
			// data yang akan di update dari table
			$sqlUpdateField  = [
					'pegawaipnddkno_id', 'pegawaipnddkno_tempat', 'pegawaipnddkno_kegiatan', 'regency_id',
					'pegawaipnddkno_tahun', 'pegawaipnddkno_file', 'pegawaipnddkno_descr', 'pegawai_id'
			];
			if (method_exists(get_class($hnd), 'setUpdateField')) {
				// setUpdateField(&$sqlUpdateField, $data, $options)
				$hnd->setUpdateField($sqlUpdateField, $data, $options);
			}



			$result = new \stdClass; 
			
			$key = new \stdClass;
			$obj = new \stdClass;
			foreach ($sqlUpdateField as $fieldname) {
				if ($fieldname==$primarykey) {
					$key->{$fieldname} = $value;
				}
				if (property_exists($data, $fieldname)) {
					$obj->{$fieldname} = $data->{$fieldname};
				}
			}


			// apabila ada tanggal, ubah ke format sql sbb:
			// $obj->tanggal = (\DateTime::createFromFormat('d/m/Y',$obj->tanggal))->format('Y-m-d');



			if ($obj->pegawaipnddkno_file=='') { $obj->pegawaipnddkno_file = '--NULL--'; }






			// current user & timestamp	
			if ($datastate=='NEW') {
				$obj->_createby = $userdata->username;
				$obj->_createdate = date("Y-m-d H:i:s");

				if (method_exists(get_class($hnd), 'PreCheckInsert')) {
					// PreCheckInsert($data, &$obj, &$options)
					$hnd->PreCheckInsert($data, $obj, $options);
				}
			} else {
				$obj->_modifyby = $userdata->username;
				$obj->_modifydate = date("Y-m-d H:i:s");	

				if (method_exists(get_class($hnd), 'PreCheckUpdate')) {
					// PreCheckUpdate($data, &$obj, &$key, &$options)
					$hnd->PreCheckUpdate($data, $obj, $key, $options);
				}
			}

			//handle data sebelum sebelum save
			if (method_exists(get_class($hnd), 'DataSaving')) {
				// ** DataSaving(object &$obj, object &$key) : void
				$hnd->DataSaving($obj, $key);
			}

			$this->db->setAttribute(\PDO::ATTR_AUTOCOMMIT,0);
			$this->db->beginTransaction();

			try {

				$action = '';
				if ($datastate=='NEW') {
					$action = 'NEW';
					if ($autoid) {
						$obj->{$primarykey} = $this->NewId($hnd, $obj);
					}
					$cmd = \FGTA4\utils\SqlUtility::CreateSQLInsert($tablename, $obj);
				} else {
					$action = 'MODIFY';
					$cmd = \FGTA4\utils\SqlUtility::CreateSQLUpdate($tablename, $obj, $key);
				}

				$stmt = $this->db->prepare($cmd->sql);
				$stmt->execute($cmd->params);

				
				// Update user & timestamp di header
				$header_table = 'mst_pegawai';
				$header_primarykey = 'pegawai_id';
				$detil_primarykey = 'pegawai_id';
				$sqlrec = "update $header_table set _modifyby = :user_id, _modifydate=NOW() where $header_primarykey = :$header_primarykey";
				$stmt = $this->db->prepare($sqlrec);
				$stmt->execute([
					":user_id" => $userdata->username,
					":$header_primarykey" => $obj->{$detil_primarykey}
				]);

				\FGTA4\utils\SqlUtility::WriteLog($this->db, $this->reqinfo->modulefullname, $tablename, $obj->{$primarykey}, $action, $userdata->username, (object)[]);
				\FGTA4\utils\SqlUtility::WriteLog($this->db, $this->reqinfo->modulefullname, $header_table, $obj->{$detil_primarykey}, $action . "_DETIL", $userdata->username, (object)[]);


				$fieldname = 'pegawaipnddkno_file';	
				if (property_exists($files, $fieldname)) {

					$file_id = "$tablename/" .$obj->{$primarykey};
					$doc = $files->{$fieldname};
					$doc->doctype = $tablename;
					$doc->docid = $obj->{$primarykey};
					$file_base64data = $doc->data;
					unset($doc->data);

					$overwrite = true;
					$res = $this->cdb->addAttachment($file_id, $doc, 'filedata', $file_base64data, $overwrite);	
					$rev = $res->asObject()->rev;

					$key->{$primarykey} = "$tablename/" .$obj->{$primarykey};
					
					$objfile = new \stdClass;
					$objfile->{$primarykey} = $key->{$primarykey};
					$objfile->pegawaipnddkno_file = $rev;
					$cmd = \FGTA4\utils\SqlUtility::CreateSQLUpdate($tablename, $objfile, $key);
					$stmt = $this->db->prepare($cmd->sql);
					$stmt->execute($cmd->params);
				}				
			
			


				// result
				$options->criteria = [
					"pegawaipnddkno_id" => $obj->pegawaipnddkno_id
				];

				$criteriaValues = [
					"pegawaipnddkno_id" => " pegawaipnddkno_id = :pegawaipnddkno_id "
				];
				if (method_exists(get_class($hnd), 'buildOpenCriteriaValues')) {
					// buildOpenCriteriaValues(object $options, array &$criteriaValues) : void
					$hnd->buildOpenCriteriaValues($options, $criteriaValues);
				}

				$where = \FGTA4\utils\SqlUtility::BuildCriteria($options->criteria, $criteriaValues);
				$result = new \stdClass; 
	
				if (method_exists(get_class($hnd), 'prepareOpenData')) {
					// prepareOpenData(object $options, $criteriaValues) : void
					$hnd->prepareOpenData($options, $criteriaValues);
				}

				$sqlFieldList = [
					'pegawaipnddkno_id' => 'A.`pegawaipnddkno_id`', 'pegawaipnddkno_tempat' => 'A.`pegawaipnddkno_tempat`', 'pegawaipnddkno_kegiatan' => 'A.`pegawaipnddkno_kegiatan`', 'regency_id' => 'A.`regency_id`',
					'pegawaipnddkno_tahun' => 'A.`pegawaipnddkno_tahun`', 'pegawaipnddkno_file' => 'A.`pegawaipnddkno_file`', 'pegawaipnddkno_descr' => 'A.`pegawaipnddkno_descr`', 'pegawai_id' => 'A.`pegawai_id`',
					'_createby' => 'A.`_createby`', '_createdate' => 'A.`_createdate`', '_modifyby' => 'A.`_modifyby`', '_modifydate' => 'A.`_modifydate`'
				];
				$sqlFromTable = "mst_pegawaipnddkno A";
				$sqlWhere = $where->sql;


				if (method_exists(get_class($hnd), 'SqlQueryOpenBuilder')) {
					// SqlQueryOpenBuilder(array &$sqlFieldList, string &$sqlFromTable, string &$sqlWhere, array &$params) : void
					$hnd->SqlQueryOpenBuilder($sqlFieldList, $sqlFromTable, $sqlWhere, $where->params);
				}
				$sqlFields = \FGTA4\utils\SqlUtility::generateSqlSelectFieldList($sqlFieldList);
	
			
				$sqlData = "
					select 
					$sqlFields 
					from 
					$sqlFromTable 
					$sqlWhere 
				";
	
				$stmt = $this->db->prepare($sqlData);
				$stmt->execute($where->params);
				$row  = $stmt->fetch(\PDO::FETCH_ASSOC);
	
				$record = [];
				foreach ($row as $key => $value) {
					$record[$key] = $value;
				}

				$dataresponse = array_merge($record, [
					//  untuk lookup atau modify response ditaruh disini
					'regencies_name' => \FGTA4\utils\SqlUtility::Lookup($record['regency_id'], $this->db, 'regencies', 'id', 'name'),

					'_createby' => \FGTA4\utils\SqlUtility::Lookup($record['_createby'], $this->db, $GLOBALS['MAIN_USERTABLE'], 'user_id', 'user_fullname'),
					'_modifyby' => \FGTA4\utils\SqlUtility::Lookup($record['_modifyby'], $this->db, $GLOBALS['MAIN_USERTABLE'], 'user_id', 'user_fullname'),
				]);
				
				if (method_exists(get_class($hnd), 'DataOpen')) {
					//  DataOpen(array &$record) : void 
					$hnd->DataOpen($dataresponse);
				}


				$result->dataresponse = (object) $dataresponse;
				if (method_exists(get_class($hnd), 'DataSavedSuccess')) {
					// DataSavedSuccess(object &$result) : void
					$hnd->DataSavedSuccess($result);
				}

				$this->db->commit();
				return $result;				
				
			} catch (\Exception $ex) {
				$this->db->rollBack();
				throw $ex;
			} finally {
				$this->db->setAttribute(\PDO::ATTR_AUTOCOMMIT,1);
			}
			
		} catch (\Exception $ex) {
			throw $ex;
		}
	}

	public function NewId($hnd, $obj) {
		// dipanggil hanya saat $autoid == true;

		$id = null;
		$handled = false;
		if (method_exists(get_class($hnd), 'CreateNewId')) {
			// CreateNewId(object $obj) : string
			$id = $hnd->CreateNewId($obj);
			$handled = true;
		}

		if (!$handled) {
			$id = uniqid();
		}

		return $id;
	}

};