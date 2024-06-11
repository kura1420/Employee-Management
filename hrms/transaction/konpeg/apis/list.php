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
 * hrms/transaction/konpeg/apis/list.php
 *
 * ========
 * DataList
 * ========
 * Menampilkan data-data pada tabel header konpeg (trn_konpeg)
 * sesuai dengan parameter yang dikirimkan melalui variable $option->criteria
 *
 * Agung Nugroho <agung@fgta.net> http://www.fgta.net
 * Tangerang, 26 Maret 2021
 *
 * digenerate dengan FGTA4 generator
 * tanggal 10/06/2024
 */
$API = new class extends konpegBase {

	public function execute($options) {

		$userdata = $this->auth->session_get_user();

		$handlerclassname = "\\FGTA4\\apis\\konpeg_headerHandler";
		if (class_exists($handlerclassname)) {
			$hnd = new konpeg_headerHandler($options);
			$hnd->caller = &$this;
			$hnd->db = $this->db;
			$hnd->auth = $this->auth;
			$hnd->reqinfo = $this->reqinfo;
		} else {
			$hnd = new \stdClass;
		}


		try {
		
			// cek apakah user boleh mengeksekusi API ini
			if (!$this->RequestIsAllowedFor($this->reqinfo, "list", $userdata->groups)) {
				throw new \Exception('your group authority is not allowed to do this action.');
			}

			if (method_exists(get_class($hnd), 'init')) {
				// init(object &$options) : void
				$hnd->init($options);
			}

			$criteriaValues = [
				"search" => " A.konpeg_id LIKE CONCAT('%', :search, '%') "
			];

			if (method_exists(get_class($hnd), 'buildListCriteriaValues')) {
				// ** buildListCriteriaValues(object &$options, array &$criteriaValues) : void
				//    apabila akan modifikasi parameter2 untuk query
				//    $criteriaValues['fieldname'] = " A.fieldname = :fieldname";  <-- menambahkan field pada where dan memberi parameter value
				//    $criteriaValues['fieldname'] = "--";                         <-- memberi parameter value tanpa menambahkan pada where
				//    $criteriaValues['fieldname'] = null                          <-- tidak memberi efek pada query secara langsung, parameter digunakan untuk keperluan lain 
				//
				//    untuk memberikan nilai default apabila paramter tidak dikirim
				//    // \FGTA4\utils\SqlUtility::setDefaultCriteria($options->criteria, '--fieldscriteria--', '--value--');
				$hnd->buildListCriteriaValues($options, $criteriaValues);
			}

			$where = \FGTA4\utils\SqlUtility::BuildCriteria($options->criteria, $criteriaValues);
			
			$maxrow = 30;
			$offset = (property_exists($options, 'offset')) ? $options->offset : 0;

			/* prepare DbLayer Temporay Data Helper if needed */
			if (method_exists(get_class($hnd), 'prepareListData')) {
				// ** prepareListData(object $options, array $criteriaValues) : void
				//    misalnya perlu mebuat temporary table,
				//    untuk membuat query komplex dapat dibuat disini	
				$hnd->prepareListData($options, $criteriaValues);
			}


			/* Data Query Configuration */
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
			$sqlLimit = "LIMIT $maxrow OFFSET $offset";

			if (method_exists(get_class($hnd), 'SqlQueryListBuilder')) {
				// ** SqlQueryListBuilder(array &$sqlFieldList, string &$sqlFromTable, string &$sqlWhere, array &$params) : void
				//    menambah atau memodifikasi field-field yang akan ditampilkan
				//    apabila akan memodifikasi join table
				//    apabila akan memodifikasi nilai parameter
				$hnd->SqlQueryListBuilder($sqlFieldList, $sqlFromTable, $sqlWhere, $where->params);
			}
			
			// filter select columns
			if (!property_exists($options, 'selectFields')) {
				$options->selectFields = [];
			}
			$columsSelected = $this->SelectColumns($sqlFieldList, $options->selectFields);
			$sqlFields = \FGTA4\utils\SqlUtility::generateSqlSelectFieldList($columsSelected);


			/* Sort Configuration */
			if (!property_exists($options, 'sortData')) {
				$options->sortData = [];
			}
			if (!is_array($options->sortData)) {
				if (is_object($options->sortData)) {
					$options->sortData = (array)$options->sortData;
				} else {
					$options->sortData = [];
				}
			}

		


			if (method_exists(get_class($hnd), 'sortListOrder')) {
				// ** sortListOrder(array &$sortData) : void
				//    jika ada keperluan mengurutkan data
				//    $sortData['fieldname'] = 'ASC/DESC';
				$hnd->sortListOrder($options->sortData);
			}
			$sqlOrders = \FGTA4\utils\SqlUtility::generateSqlSelectSort($options->sortData);


			/* Compose SQL Query */
			$sqlCount = "select count(*) as n from $sqlFromTable $sqlWhere";
			$sqlData = "
				select 
				$sqlFields 
				from 
				$sqlFromTable 
				$sqlWhere 
				$sqlOrders 
				$sqlLimit
			";

			/* Execute Query: Count */
			$stmt = $this->db->prepare($sqlCount );
			$stmt->execute($where->params);
			$row  = $stmt->fetch(\PDO::FETCH_ASSOC);
			$total = (float) $row['n'];

			/* Execute Query: Retrieve Data */
			$stmt = $this->db->prepare($sqlData);
			$stmt->execute($where->params);
			$rows  = $stmt->fetchall(\PDO::FETCH_ASSOC);


			$handleloop = false;
			if (method_exists(get_class($hnd), 'DataListLooping')) {
				$handleloop = true;
			}

			/* Proces result */
			$records = [];
			foreach ($rows as $row) {
				$record = [];
				foreach ($row as $key => $value) {
					$record[$key] = $value;
				}


				/*
				$record = array_merge($record, [
					// // jikalau ingin menambah atau edit field di result record, dapat dilakukan sesuai contoh sbb: 
					//'tanggal' => date("d/m/y", strtotime($record['tanggal'])),
				 	//'tambahan' => 'dta'
					'pegawai_nama' => \FGTA4\utils\SqlUtility::Lookup($record['pegawai_id'], $this->db, 'mst_pegawai', 'pegawai_id', 'pegawai_nama'),
					'dept_name' => \FGTA4\utils\SqlUtility::Lookup($record['dept_id'], $this->db, 'mst_dept', 'dept_id', 'dept_name'),
					'divisi_name' => \FGTA4\utils\SqlUtility::Lookup($record['divisi_id'], $this->db, 'mst_divisi', 'divisi_id', 'divisi_name'),
					'jabatan_nama' => \FGTA4\utils\SqlUtility::Lookup($record['jabatan_id'], $this->db, 'mst_jabatan', 'jabatan_id', 'jabatan_nama'),
					'penempatan_nama' => \FGTA4\utils\SqlUtility::Lookup($record['penempatan_id'], $this->db, 'mst_penempatan', 'penempatan_id', 'penempatan_nama'),
					'jenkonpeg_name' => \FGTA4\utils\SqlUtility::Lookup($record['jenkonpeg_id'], $this->db, 'mst_jenkonpeg', 'jenkonpeg_id', 'jenkonpeg_name'),
					'period_name' => \FGTA4\utils\SqlUtility::Lookup($record['period_id'], $this->db, 'mst_period', 'period_id', 'period_name'),
					'konpeg_workby' => \FGTA4\utils\SqlUtility::Lookup($record['konpeg_workby'], $this->db, $GLOBALS['MAIN_USERTABLE'], 'user_id', 'user_fullname'),
					 
				]);
				*/


				// lookup data id yang refer ke table lain
				$this->addFields('pegawai_nama', 'pegawai_id', $record, 'mst_pegawai', 'pegawai_nama', 'pegawai_id');
				$this->addFields('dept_name', 'dept_id', $record, 'mst_dept', 'dept_name', 'dept_id');
				$this->addFields('divisi_name', 'divisi_id', $record, 'mst_divisi', 'divisi_name', 'divisi_id');
				$this->addFields('jabatan_nama', 'jabatan_id', $record, 'mst_jabatan', 'jabatan_nama', 'jabatan_id');
				$this->addFields('penempatan_nama', 'penempatan_id', $record, 'mst_penempatan', 'penempatan_nama', 'penempatan_id');
				$this->addFields('jenkonpeg_name', 'jenkonpeg_id', $record, 'mst_jenkonpeg', 'jenkonpeg_name', 'jenkonpeg_id');
				$this->addFields('period_name', 'period_id', $record, 'mst_period', 'period_name', 'period_id');
				$this->addFields('konpeg_workby', 'konpeg_workby', $record, $GLOBALS['MAIN_USERTABLE'], 'user_fullname', 'user_id');
					 


				if ($handleloop) {
					// ** DataListLooping(array &$record) : void
					//    apabila akan menambahkan field di record
					$hnd->DataListLooping($record);
				}

				array_push($records, $record);
			}

			/* modify and finalize records */
			if (method_exists(get_class($hnd), 'DataListFinal')) {
				// ** DataListFinal(array &$records) : void
				//    finalisasi data list
				$hnd->DataListFinal($records);
			}

			// kembalikan hasilnya
			$result = new \stdClass; 
			$result->total = $total;
			$result->offset = $offset + $maxrow;
			$result->maxrow = $maxrow;
			$result->records = $records;
			return $result;
		} catch (\Exception $ex) {
			throw $ex;
		}
	}

};