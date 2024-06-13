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
 * hrms/master/pegawai/apis/open.php
 *
 * ====
 * Open
 * ====
 * Menampilkan satu baris data/record sesuai PrimaryKey,
 * dari tabel header pegawai (mst_pegawai)
 *
 * Agung Nugroho <agung@fgta.net> http://www.fgta.net
 * Tangerang, 26 Maret 2021
 *
 * digenerate dengan FGTA4 generator
 * tanggal 13/06/2024
 */
$API = new class extends pegawaiBase {
	
	public function execute($options) {
		$event = 'on-open';
		$tablename = 'mst_pegawai';
		$primarykey = 'pegawai_id';
		$userdata = $this->auth->session_get_user();

		$handlerclassname = "\\FGTA4\\apis\\pegawai_headerHandler";
		$hnd = null;
		if (class_exists($handlerclassname)) {
			$hnd = new pegawai_headerHandler($options);
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
				"pegawai_id" => " pegawai_id = :pegawai_id "
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
				'pegawai_id' => 'A.`pegawai_id`', 'pegawai_nama' => 'A.`pegawai_nama`', 'pegawai_email' => 'A.`pegawai_email`', 'pegawai_hp' => 'A.`pegawai_hp`',
				'pegawai_foto' => 'A.`pegawai_foto`', 'card_id' => 'A.`card_id`', 'gender_id' => 'A.`gender_id`', 'bloodtype_id' => 'A.`bloodtype_id`',
				'religion_id' => 'A.`religion_id`', 'pegawai_iswna' => 'A.`pegawai_iswna`', 'countries_id' => 'A.`countries_id`', 'marital_id' => 'A.`marital_id`',
				'pnddk_id' => 'A.`pnddk_id`', 'worktype_id' => 'A.`worktype_id`', 'pegawai_tmptlahir' => 'A.`pegawai_tmptlahir`', 'pegawai_tgllahir' => 'A.`pegawai_tgllahir`',
				'province_id' => 'A.`province_id`', 'regency_id' => 'A.`regency_id`', 'district_id' => 'A.`district_id`', 'villages_id' => 'A.`villages_id`',
				'pegawai_kodepos' => 'A.`pegawai_kodepos`', 'pegawai_alamat' => 'A.`pegawai_alamat`', '_createby' => 'A.`_createby`', '_createdate' => 'A.`_createdate`',
				'_createby' => 'A.`_createby`', '_createdate' => 'A.`_createdate`', '_modifyby' => 'A.`_modifyby`', '_modifydate' => 'A.`_modifydate`'
			];
			$sqlFromTable = "mst_pegawai A";
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
				'pegawai_tgllahir' => date("d/m/Y", strtotime($record['pegawai_tgllahir'])),
				
				// // jikalau ingin menambah atau edit field di result record, dapat dilakukan sesuai contoh sbb: 
				// 'tambahan' => 'dta',
				//'tanggal' => date("d/m/Y", strtotime($record['tanggal'])),
				//'gendername' => $record['gender']
				
				'card_name' => \FGTA4\utils\SqlUtility::Lookup($record['card_id'], $this->db, 'mst_card', 'card_id', 'card_name'),
				'gender_name' => \FGTA4\utils\SqlUtility::Lookup($record['gender_id'], $this->db, 'mst_gender', 'gender_id', 'gender_name'),
				'bloodtype_name' => \FGTA4\utils\SqlUtility::Lookup($record['bloodtype_id'], $this->db, 'mst_bloodtype', 'bloodtype_id', 'bloodtype_name'),
				'religion_name' => \FGTA4\utils\SqlUtility::Lookup($record['religion_id'], $this->db, 'mst_religion', 'religion_id', 'religion_name'),
				'name' => \FGTA4\utils\SqlUtility::Lookup($record['countries_id'], $this->db, 'countries', 'id', 'name'),
				'marital_name' => \FGTA4\utils\SqlUtility::Lookup($record['marital_id'], $this->db, 'mst_marital', 'marital_id', 'marital_name'),
				'pnddk_name' => \FGTA4\utils\SqlUtility::Lookup($record['pnddk_id'], $this->db, 'mst_pnddk', 'pnddk_id', 'pnddk_name'),
				'worktype_name' => \FGTA4\utils\SqlUtility::Lookup($record['worktype_id'], $this->db, 'mst_worktype', 'worktype_id', 'worktype_name'),
				'tmptlahir_name' => \FGTA4\utils\SqlUtility::Lookup($record['pegawai_tmptlahir'], $this->db, 'regencies', 'id', 'name'),
				'prov_name' => \FGTA4\utils\SqlUtility::Lookup($record['province_id'], $this->db, 'provinces', 'id', 'name'),
				'regencies_name' => \FGTA4\utils\SqlUtility::Lookup($record['regency_id'], $this->db, 'regencies', 'id', 'name'),
				'districts_name' => \FGTA4\utils\SqlUtility::Lookup($record['district_id'], $this->db, 'districts', 'id', 'name'),
				'villagess_name' => \FGTA4\utils\SqlUtility::Lookup($record['villages_id'], $this->db, 'villages', 'id', 'name'),


				'_createby' => \FGTA4\utils\SqlUtility::Lookup($record['_createby'], $this->db, $GLOBALS['MAIN_USERTABLE'], 'user_id', 'user_fullname'),
				'_modifyby' => \FGTA4\utils\SqlUtility::Lookup($record['_modifyby'], $this->db, $GLOBALS['MAIN_USERTABLE'], 'user_id', 'user_fullname'),

			]);


			$file_id = "$tablename/" . $result->record[$primarykey];
			try { $result->record['pegawai_foto_doc'] = $this->cdb->getAttachment($file_id, 'filedata'); } catch (\Exception $ex) {}
			

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