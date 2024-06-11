<?php

// https://stackoverflow.com/questions/14649645/resize-image-in-php
// https://stackoverflow.com/questions/3876299/merging-two-images-with-php


$sumber = __DIR__ . '/sumber/FB19PBLT2NC/1.jpg';
$hasil = __DIR__ . '/hasil/1-resized.jpg';



imagereziser::resize($sumber, $hasil, 500, 600);



class imagereziser {

	public static function resize($path_sumber, $path_hasil, $target_width, $target_height) {
		
		list($width, $height) = getimagesize($path_sumber);
		$rasio_sumber = $width / $height;
		$rasio_target = $target_width / $target_height;



		if ($rasio_sumber==1) {
			if ($rasio_sumber==$rasio_target) {
				$new_width = $target_width;
				$new_height = $target_height;
			} else {
				if ($target_width>$target_height) {
					$new_width = $target_height;
					$new_height = $target_height;
				} else {
					$new_width = $target_width;
					$new_height = $target_width;
				}
			}
		} else {
			if ($target_width>$target_height) {

			} else {

			}
		}

		
		// if ($rasio_sumber > $rasio_target) {
		// 	$new_width = $target_width;
		// 	$new_height = $height / $rasio_sumber;
		// } else {
		// 	$new_width = $width / $rasio_sumber;
		// 	$new_height = $target_height;
		// }

		echo "$new_width $new_height";
		


	}
}