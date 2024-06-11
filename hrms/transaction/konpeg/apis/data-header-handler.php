<?php namespace FGTA4\apis;

if (!defined('FGTA4')) {
	die('Forbiden');
}

require_once __ROOT_DIR.'/rootdir/helper/calculate.php';

class konpeg_headerHandler extends WebAPI  {

	public function DataSaving(object &$obj, object &$key)
	{
		$obj->konpeg_dtberakhir = \Calculate::getEndDate($obj->konpeg_periodval, $obj->period_id, $obj->konpeg_dtmulai);
	}

}		
		
		
		