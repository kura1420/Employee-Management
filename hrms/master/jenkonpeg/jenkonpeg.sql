-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_jenkonpeg`;


CREATE TABLE IF NOT EXISTS `mst_jenkonpeg` (
	`jenkonpeg_id` varchar(36) NOT NULL , 
	`jenkonpeg_name` varchar(255) NOT NULL , 
	`jenkonpeg_descr` varchar(10000)  , 
	`jenkonpeg_isdisabled` tinyint(1) NOT NULL DEFAULT 0, 
	`jenkonpeg_ispermanent` tinyint(1) NOT NULL DEFAULT 0, 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `jenkonpeg_name` (`jenkonpeg_name`),
	PRIMARY KEY (`jenkonpeg_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Jenis Kontrak Pegawai';


ALTER TABLE `mst_jenkonpeg` ADD COLUMN IF NOT EXISTS  `jenkonpeg_name` varchar(255) NOT NULL  AFTER `jenkonpeg_id`;
ALTER TABLE `mst_jenkonpeg` ADD COLUMN IF NOT EXISTS  `jenkonpeg_descr` varchar(10000)   AFTER `jenkonpeg_name`;
ALTER TABLE `mst_jenkonpeg` ADD COLUMN IF NOT EXISTS  `jenkonpeg_isdisabled` tinyint(1) NOT NULL DEFAULT 0 AFTER `jenkonpeg_descr`;
ALTER TABLE `mst_jenkonpeg` ADD COLUMN IF NOT EXISTS  `jenkonpeg_ispermanent` tinyint(1) NOT NULL DEFAULT 0 AFTER `jenkonpeg_isdisabled`;


ALTER TABLE `mst_jenkonpeg` MODIFY COLUMN IF EXISTS  `jenkonpeg_name` varchar(255) NOT NULL   AFTER `jenkonpeg_id`;
ALTER TABLE `mst_jenkonpeg` MODIFY COLUMN IF EXISTS  `jenkonpeg_descr` varchar(10000)    AFTER `jenkonpeg_name`;
ALTER TABLE `mst_jenkonpeg` MODIFY COLUMN IF EXISTS  `jenkonpeg_isdisabled` tinyint(1) NOT NULL DEFAULT 0  AFTER `jenkonpeg_descr`;
ALTER TABLE `mst_jenkonpeg` MODIFY COLUMN IF EXISTS  `jenkonpeg_ispermanent` tinyint(1) NOT NULL DEFAULT 0  AFTER `jenkonpeg_isdisabled`;


ALTER TABLE `mst_jenkonpeg` ADD CONSTRAINT `jenkonpeg_name` UNIQUE IF NOT EXISTS  (`jenkonpeg_name`);







