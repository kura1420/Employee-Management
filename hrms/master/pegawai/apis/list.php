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
 * hrms/master/pegawai/apis/list.php
 *
 * ========
 * DataList
 * ========
 * Menampilkan data-data pada tabel header pegawai (mst_pegawai)
 * sesuai dengan parameter yang dikirimkan melalui variable $option->criteria
 *
 * Agung Nugroho <agung@fgta.net> http://www.fgta.net
 * Tangerang, 26 Maret 2021
 *
 * digenerate dengan FGTA4 generator
 * tanggal 13/06/2024
 */
$API = new class extends pegawaiBase {

	public function execute($options) {

		$userdata = $this->auth->session_get_user();

		$handlerclassname = "\\FGTA4\\apis\\pegawai_headerHandler";
		if (class_exists($handlerclassname)) {
			$hnd = new pegawai_headerHandler($options);
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
				"search" => " A.pegawai_id LIKE CONCAT('%', :search, '%') OR A.pegawai_nama LIKE CONCAT('%', :search, '%') OR A.pegawai_hp LIKE CONCAT('%', :search, '%') OR A.pegawai_email LIKE CONCAT('%', :search, '%') "
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
					 
				]);
				*/


				// lookup data id yang refer ke table lain
				$this->addFields('card_name', 'card_id', $record, 'mst_card', 'card_name', 'card_id');
				$this->addFields('gender_name', 'gender_id', $record, 'mst_gender', 'gender_name', 'gender_id');
				$this->addFields('bloodtype_name', 'bloodtype_id', $record, 'mst_bloodtype', 'bloodtype_name', 'bloodtype_id');
				$this->addFields('religion_name', 'religion_id', $record, 'mst_religion', 'religion_name', 'religion_id');
				$this->addFields('name', 'countries_id', $record, 'countries', 'name', 'id');
				$this->addFields('marital_name', 'marital_id', $record, 'mst_marital', 'marital_name', 'marital_id');
				$this->addFields('pnddk_name', 'pnddk_id', $record, 'mst_pnddk', 'pnddk_name', 'pnddk_id');
				$this->addFields('worktype_name', 'worktype_id', $record, 'mst_worktype', 'worktype_name', 'worktype_id');
				$this->addFields('tmptlahir_name', 'pegawai_tmptlahir', $record, 'regencies', 'name', 'id');
				$this->addFields('prov_name', 'province_id', $record, 'provinces', 'name', 'id');
				$this->addFields('regencies_name', 'regency_id', $record, 'regencies', 'name', 'id');
				$this->addFields('districts_name', 'district_id', $record, 'districts', 'name', 'id');
				$this->addFields('villagess_name', 'villages_id', $record, 'villages', 'name', 'id');
					 


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