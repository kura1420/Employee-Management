-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_tupoksi`;


CREATE TABLE IF NOT EXISTS `mst_tupoksi` (
	`tupoksi_id` varchar(36) NOT NULL , 
	`dept_id` varchar(36) NOT NULL , 
	`divisi_id` varchar(36) NOT NULL , 
	`jabatan_id` varchar(36) NOT NULL , 
	`tupoksi_tugas` varchar(10000) NOT NULL , 
	`tupoksi_fungsi` varchar(10000) NOT NULL , 
	`tupoksi_isdisabled` tinyint(1) NOT NULL DEFAULT 0, 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`tupoksi_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Tugas Pokok dan FungSi';


ALTER TABLE `mst_tupoksi` ADD COLUMN IF NOT EXISTS  `dept_id` varchar(36) NOT NULL  AFTER `tupoksi_id`;
ALTER TABLE `mst_tupoksi` ADD COLUMN IF NOT EXISTS  `divisi_id` varchar(36) NOT NULL  AFTER `dept_id`;
ALTER TABLE `mst_tupoksi` ADD COLUMN IF NOT EXISTS  `jabatan_id` varchar(36) NOT NULL  AFTER `divisi_id`;
ALTER TABLE `mst_tupoksi` ADD COLUMN IF NOT EXISTS  `tupoksi_tugas` varchar(10000) NOT NULL  AFTER `jabatan_id`;
ALTER TABLE `mst_tupoksi` ADD COLUMN IF NOT EXISTS  `tupoksi_fungsi` varchar(10000) NOT NULL  AFTER `tupoksi_tugas`;
ALTER TABLE `mst_tupoksi` ADD COLUMN IF NOT EXISTS  `tupoksi_isdisabled` tinyint(1) NOT NULL DEFAULT 0 AFTER `tupoksi_fungsi`;


ALTER TABLE `mst_tupoksi` MODIFY COLUMN IF EXISTS  `dept_id` varchar(36) NOT NULL   AFTER `tupoksi_id`;
ALTER TABLE `mst_tupoksi` MODIFY COLUMN IF EXISTS  `divisi_id` varchar(36) NOT NULL   AFTER `dept_id`;
ALTER TABLE `mst_tupoksi` MODIFY COLUMN IF EXISTS  `jabatan_id` varchar(36) NOT NULL   AFTER `divisi_id`;
ALTER TABLE `mst_tupoksi` MODIFY COLUMN IF EXISTS  `tupoksi_tugas` varchar(10000) NOT NULL   AFTER `jabatan_id`;
ALTER TABLE `mst_tupoksi` MODIFY COLUMN IF EXISTS  `tupoksi_fungsi` varchar(10000) NOT NULL   AFTER `tupoksi_tugas`;
ALTER TABLE `mst_tupoksi` MODIFY COLUMN IF EXISTS  `tupoksi_isdisabled` tinyint(1) NOT NULL DEFAULT 0  AFTER `tupoksi_fungsi`;



ALTER TABLE `mst_tupoksi` ADD KEY IF NOT EXISTS `dept_id` (`dept_id`);
ALTER TABLE `mst_tupoksi` ADD KEY IF NOT EXISTS `divisi_id` (`divisi_id`);
ALTER TABLE `mst_tupoksi` ADD KEY IF NOT EXISTS `jabatan_id` (`jabatan_id`);

ALTER TABLE `mst_tupoksi` ADD CONSTRAINT `fk_mst_tupoksi_mst_dept` FOREIGN KEY IF NOT EXISTS  (`dept_id`) REFERENCES `mst_dept` (`dept_id`);
ALTER TABLE `mst_tupoksi` ADD CONSTRAINT `fk_mst_tupoksi_mst_divisi` FOREIGN KEY IF NOT EXISTS  (`divisi_id`) REFERENCES `mst_divisi` (`divisi_id`);
ALTER TABLE `mst_tupoksi` ADD CONSTRAINT `fk_mst_tupoksi_mst_jabatan` FOREIGN KEY IF NOT EXISTS  (`jabatan_id`) REFERENCES `mst_jabatan` (`jabatan_id`);





