-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_jabatan`;


CREATE TABLE IF NOT EXISTS `mst_jabatan` (
	`jabatan_id` varchar(36) NOT NULL , 
	`jabatan_nama` varchar(255) NOT NULL , 
	`jabatan_isdisabled` tinyint(1) NOT NULL DEFAULT 0, 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`jabatan_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Jabatan';


ALTER TABLE `mst_jabatan` ADD COLUMN IF NOT EXISTS  `jabatan_nama` varchar(255) NOT NULL  AFTER `jabatan_id`;
ALTER TABLE `mst_jabatan` ADD COLUMN IF NOT EXISTS  `jabatan_isdisabled` tinyint(1) NOT NULL DEFAULT 0 AFTER `jabatan_nama`;


ALTER TABLE `mst_jabatan` MODIFY COLUMN IF EXISTS  `jabatan_nama` varchar(255) NOT NULL   AFTER `jabatan_id`;
ALTER TABLE `mst_jabatan` MODIFY COLUMN IF EXISTS  `jabatan_isdisabled` tinyint(1) NOT NULL DEFAULT 0  AFTER `jabatan_nama`;









