<?php namespace FGTA4\apis;

if (!defined('FGTA4')) {
	die('Forbiden');
}



class jabatan_headerHandler extends WebAPI  {

	public function buildListCriteriaValues(object &$options, array &$criteriaValues) : void
	{
		$criteriaValues['jabatan_isdisabled'] = " A.jabatan_isdisabled = :jabatan_isdisabled";
	}

}		
		
		
		