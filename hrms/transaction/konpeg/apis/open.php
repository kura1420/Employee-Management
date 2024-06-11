<?php namespace FGTA4\apis;

if (!defined('FGTA4')) {
	die('Forbiden');
}

require_once __ROOT_DIR.'/core/sqlutil.php';
require_once __DIR__ . '/xapi.base.php';

if (is_file(__DIR__ .'/data-header-handler.php')) {
	require_once __DIR__ .'/data-header-handler.php';
}


use \FGTA4\exceptions\WebException;


/**
 * hrms/transaction/konpeg/apis/open.php
 *
 * ====
 * Open
 * ====
 * Menampilkan satu baris data/record sesuai PrimaryKey,
 * dari tabel header konpeg (trn_konpeg)
 *
 * Agung Nugroho <agung@fgta.net> http://www.fgta.net
 * Tangerang, 26 Maret 2021
 *
 * digenerate dengan FGTA4 generator
 * tanggal 10/06/2024
 */
$API = new class extends konpegBase {
	
	public function execute($options) {
		$event = 'on-open';
		$tablename = 'trn_konpeg';
		$primarykey = 'konpeg_id';
		$userdata = $this->auth->session_get_user();

		$handlerclassname = "\\FGTA4\\apis\\konpeg_headerHandler";
		$hnd = null;
		if (class_exists($handlerclassname)) {
			$hnd = new konpeg_headerHandler($options);
			$hnd->caller = &$this;
			$hnd->db = $this->db;
			$hnd->auth = $this->auth;
			$hnd->reqinfo = $this->reqinfo;
			$hnd->event = $event;
		} else {
			$hnd = new \stdClass;
		}

		try {

			// cek apakah user boleh mengeksekusi API ini
			if (!$this->RequestIsAllowedFor($this->reqinfo, "open", $userdata->groups)) {
				throw new \Exception('your group authority is not allowed to do this action.');
			}

			if (method_exists(get_class($hnd), 'init')) {
				// init(object &$options) : void
				$hnd->init($options);
			}

			if (method_exists(get_class($hnd), 'PreCheckOpen')) {
				// PreCheckOpen($data, &$key, &$options)
				$hnd->PreCheckOpen($data, $key, $options);
			}

			$criteriaValues = [
				"konpeg_id" => " konpeg_id = :konpeg_id "
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
			

			if (method_exists(get_class($hnd), 'prepareOpenData')) {
				// prepareOpenData(object $options, $criteriaValues) : void
				$hnd->prepareOpenData($options, $criteriaValues);
			}


			$sqlFieldList = [
				'konpeg_id' => 'A.`konpeg_id`', 'pegawai_id' => 'A.`pegawai_id`', 'dept_id' => 'A.`dept_id`', 'divisi_id' => 'A.`divisi_id`',
				'jabatan_id' => 'A.`jabatan_id`', 'penempatan_id' => 'A.`penempatan_id`', 'jenkonpeg_id' => 'A.`jenkonpeg_id`', 'konpeg_periodval' => 'A.`konpeg_periodval`',
				'period_id' => 'A.`period_id`', 'konpeg_dtmulai' => 'A.`konpeg_dtmulai`', 'konpeg_dtberakhir' => 'A.`konpeg_dtberakhir`', 'konpeg_isextend' => 'A.`konpeg_isextend`',
				'konpeg_iswork' => 'A.`konpeg_iswork`', 'konpeg_file' => 'A.`konpeg_file`', 'konpeg_workat' => 'A.`konpeg_workat`', 'konpeg_workby' => 'A.`konpeg_workby`',
				'konpeg_catatan' => 'A.`konpeg_catatan`', '_createby' => 'A.`_createby`', '_createdate' => 'A.`_createdate`', '_modifyby' => 'A.`_modifyby`',
				'_createby' => 'A.`_createby`', '_createdate' => 'A.`_createdate`', '_modifyby' => 'A.`_modifyby`', '_modifydate' => 'A.`_modifydate`'
			];
			$sqlFromTable = "trn_konpeg A";
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



			$result->record = array_merge($record, [
				'konpeg_dtmulai' => date("d/m/Y", strtotime($record['konpeg_dtmulai'])),
				'konpeg_dtberakhir' => date("d/m/Y", strtotime($record['konpeg_dtberakhir'])),
				
				// // jikalau ingin menambah atau edit field di result record, dapat dilakukan sesuai contoh sbb: 
				// 'tambahan' => 'dta',
				//'tanggal' => date("d/m/Y", strtotime($record['tanggal'])),
				//'gendername' => $record['gender']
				
				'pegawai_nama' => \FGTA4\utils\SqlUtility::Lookup($record['pegawai_id'], $this->db, 'mst_pegawai', 'pegawai_id', 'pegawai_nama'),
				'dept_name' => \FGTA4\utils\SqlUtility::Lookup($record['dept_id'], $this->db, 'mst_dept', 'dept_id', 'dept_name'),
				'divisi_name' => \FGTA4\utils\SqlUtility::Lookup($record['divisi_id'], $this->db, 'mst_divisi', 'divisi_id', 'divisi_name'),
				'jabatan_nama' => \FGTA4\utils\SqlUtility::Lookup($record['jabatan_id'], $this->db, 'mst_jabatan', 'jabatan_id', 'jabatan_nama'),
				'penempatan_nama' => \FGTA4\utils\SqlUtility::Lookup($record['penempatan_id'], $this->db, 'mst_penempatan', 'penempatan_id', 'penempatan_nama'),
				'jenkonpeg_name' => \FGTA4\utils\SqlUtility::Lookup($record['jenkonpeg_id'], $this->db, 'mst_jenkonpeg', 'jenkonpeg_id', 'jenkonpeg_name'),
				'period_name' => \FGTA4\utils\SqlUtility::Lookup($record['period_id'], $this->db, 'mst_period', 'period_id', 'period_name'),
				'konpeg_workby' => \FGTA4\utils\SqlUtility::Lookup($record['konpeg_workby'], $this->db, $GLOBALS['MAIN_USERTABLE'], 'user_id', 'user_fullname'),


				'_createby' => \FGTA4\utils\SqlUtility::Lookup($record['_createby'], $this->db, $GLOBALS['MAIN_USERTABLE'], 'user_id', 'user_fullname'),
				'_modifyby' => \FGTA4\utils\SqlUtility::Lookup($record['_modifyby'], $this->db, $GLOBALS['MAIN_USERTABLE'], 'user_id', 'user_fullname'),

			]);


			$file_id = "$tablename/" . $result->record[$primarykey];
			try { $result->record['konpeg_file_doc'] = $this->cdb->getAttachment($file_id, 'filedata'); } catch (\Exception $ex) {}
			

			if (method_exists(get_class($hnd), 'DataOpen')) {
				//  DataOpen(array &$record) : void 
				$hnd->DataOpen($result->record);
			}

			return $result;
		} catch (\Exception $ex) {
			throw $ex;
		}
	}

};