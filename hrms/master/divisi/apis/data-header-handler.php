<?php namespace FGTA4\apis;

if (!defined('FGTA4')) {
	die('Forbiden');
}



class divisi_headerHandler extends WebAPI  {

	public function buildListCriteriaValues(object &$options, array &$criteriaValues) : void
	{
		$criteriaValues['divisi_isdisabled'] = " A.divisi_isdisabled = :divisi_isdisabled";
		$criteriaValues['dept_id'] = " A.dept_id = :dept_id";
	}

}		
		
		
		