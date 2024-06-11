<?php namespace FGTA4\apis;

if (!defined('FGTA4')) {
	die('Forbiden');
}


require_once __ROOT_DIR.'/core/sqlutil.php';
require_once __DIR__ . '/xapi.base.php';


use \FGTA4\exceptions\WebException;


$API = new class extends WebAPI {

	protected $tablename = 'trn_konpeg';
	protected $primarykey = 'konpeg_id';
	protected $action = 'MODIFY';

	function __construct() {
		$this->debugoutput = true;
		$DB_CONFIG = DB_CONFIG[$GLOBALS['MAINDB']];
		$DB_CONFIG['param'] = DB_CONFIG_PARAM[$GLOBALS['MAINDBTYPE']];
		$this->db = new \PDO(
					$DB_CONFIG['DSN'], 
					$DB_CONFIG['user'], 
					$DB_CONFIG['pass'], 
					$DB_CONFIG['param']
		);	
	}

	public function execute($param) {
		try {
			$userdata = $this->auth->session_get_user(); 

			$tablename = 'trn_konpeg';
			$primarykey = 'konpeg_id';
			$action = 'MODIFY';
			
			$key = new \stdClass;
			$obj = new \stdClass;
			foreach ($param as $fieldname => $value) {
				if ($fieldname=='event') { continue; }
				if ($fieldname==$this->primarykey) {
					$key->{$fieldname} = $value;
				}
				$obj->{$fieldname} = $value;
			}

			$obj->konpeg_iswork = 0;
			$obj->konpeg_workat = date("Y-m-d H:i:s");
			$obj->konpeg_workby = $userdata->username;

			$obj->_modifyby = $userdata->username;
			$obj->_modifydate = date("Y-m-d H:i:s");

			$cmd = \FGTA4\utils\SqlUtility::CreateSQLUpdate($tablename, $obj, $key);

			$stmt = $this->db->prepare($cmd->sql);
			$stmt->execute($cmd->params);

			\FGTA4\utils\SqlUtility::WriteLog($this->db, $this->reqinfo->modulefullname, $tablename, $obj->{$primarykey}, $action, $userdata->username, (object)[]);

			$SQL = "SELECT * FROM {$tablename} WHERE {$primarykey} = :$primarykey";
			$stmt = $this->db->prepare($SQL);
			$stmt->execute([":$primarykey" => $obj->{$primarykey}]);
			$row  = $stmt->fetch(\PDO::FETCH_ASSOC);

			return (object)[
				'success' => true,
				'dataresponse' => (object) $row
			];
		} catch (\Exception $ex) {
			throw $ex;
		}
	}
};