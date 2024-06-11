-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_penempatan`;


CREATE TABLE IF NOT EXISTS `mst_penempatan` (
	`penempatan_id` varchar(36) NOT NULL , 
	`penempatan_nama` varchar(255) NOT NULL , 
	`penempatan_telp` varchar(20)  , 
	`penempatan_email` varchar(255)  , 
	`province_id` varchar(36) NOT NULL , 
	`regency_id` varchar(36) NOT NULL , 
	`penempatan_alamat` varchar(10000) NOT NULL , 
	`penempatan_isdisabled` tinyint(1) NOT NULL DEFAULT 0, 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`penempatan_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Penempatan';


ALTER TABLE `mst_penempatan` ADD COLUMN IF NOT EXISTS  `penempatan_nama` varchar(255) NOT NULL  AFTER `penempatan_id`;
ALTER TABLE `mst_penempatan` ADD COLUMN IF NOT EXISTS  `penempatan_telp` varchar(20)   AFTER `penempatan_nama`;
ALTER TABLE `mst_penempatan` ADD COLUMN IF NOT EXISTS  `penempatan_email` varchar(255)   AFTER `penempatan_telp`;
ALTER TABLE `mst_penempatan` ADD COLUMN IF NOT EXISTS  `province_id` varchar(36) NOT NULL  AFTER `penempatan_email`;
ALTER TABLE `mst_penempatan` ADD COLUMN IF NOT EXISTS  `regency_id` varchar(36) NOT NULL  AFTER `province_id`;
ALTER TABLE `mst_penempatan` ADD COLUMN IF NOT EXISTS  `penempatan_alamat` varchar(10000) NOT NULL  AFTER `regency_id`;
ALTER TABLE `mst_penempatan` ADD COLUMN IF NOT EXISTS  `penempatan_isdisabled` tinyint(1) NOT NULL DEFAULT 0 AFTER `penempatan_alamat`;


ALTER TABLE `mst_penempatan` MODIFY COLUMN IF EXISTS  `penempatan_nama` varchar(255) NOT NULL   AFTER `penempatan_id`;
ALTER TABLE `mst_penempatan` MODIFY COLUMN IF EXISTS  `penempatan_telp` varchar(20)    AFTER `penempatan_nama`;
ALTER TABLE `mst_penempatan` MODIFY COLUMN IF EXISTS  `penempatan_email` varchar(255)    AFTER `penempatan_telp`;
ALTER TABLE `mst_penempatan` MODIFY COLUMN IF EXISTS  `province_id` varchar(36) NOT NULL   AFTER `penempatan_email`;
ALTER TABLE `mst_penempatan` MODIFY COLUMN IF EXISTS  `regency_id` varchar(36) NOT NULL   AFTER `province_id`;
ALTER TABLE `mst_penempatan` MODIFY COLUMN IF EXISTS  `penempatan_alamat` varchar(10000) NOT NULL   AFTER `regency_id`;
ALTER TABLE `mst_penempatan` MODIFY COLUMN IF EXISTS  `penempatan_isdisabled` tinyint(1) NOT NULL DEFAULT 0  AFTER `penempatan_alamat`;



ALTER TABLE `mst_penempatan` ADD KEY IF NOT EXISTS `province_id` (`province_id`);
ALTER TABLE `mst_penempatan` ADD KEY IF NOT EXISTS `regency_id` (`regency_id`);

ALTER TABLE `mst_penempatan` ADD CONSTRAINT `fk_mst_penempatan_provinces` FOREIGN KEY IF NOT EXISTS  (`province_id`) REFERENCES `provinces` (`id`);
ALTER TABLE `mst_penempatan` ADD CONSTRAINT `fk_mst_penempatan_regencies` FOREIGN KEY IF NOT EXISTS  (`regency_id`) REFERENCES `regencies` (`id`);





