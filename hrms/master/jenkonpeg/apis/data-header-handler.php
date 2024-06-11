<?php namespace FGTA4\apis;

if (!defined('FGTA4')) {
	die('Forbiden');
}



class jenkonpeg_headerHandler extends WebAPI  {

	public function buildListCriteriaValues(object &$options, array &$criteriaValues) : void
	{
		$criteriaValues['jenkonpeg_isdisabled'] = " A.jenkonpeg_isdisabled = :jenkonpeg_isdisabled";
	}

}		
		
		
		