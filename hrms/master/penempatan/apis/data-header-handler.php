<?php namespace FGTA4\apis;

if (!defined('FGTA4')) {
	die('Forbiden');
}



class penempatan_headerHandler extends WebAPI  {

	public function buildListCriteriaValues(object &$options, array &$criteriaValues) : void
	{
		$criteriaValues['penempatan_isdisabled'] = " A.penempatan_isdisabled = :penempatan_isdisabled";
	}

}		
		
		
		