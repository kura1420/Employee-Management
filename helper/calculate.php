<?php

class Calculate {

	public static function getEndDate($qty, $typePeriod, $start) {
		$period = match ($typePeriod) {
			'HRI' => 'days',
			'BLN' => 'months',
			'THN' => 'years',
			default => throw new \Exception("type period $typePeriod tidak ditemukan"),
		};

		$date = date('Y-m-d', strtotime($start . ' + ' . $qty . ' ' . $period));
		
		return $date;
	}

}