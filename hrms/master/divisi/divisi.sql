-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_divisi`;


CREATE TABLE IF NOT EXISTS `mst_divisi` (
	`divisi_id` varchar(36) NOT NULL , 
	`divisi_name` varchar(255) NOT NULL , 
	`dept_id` varchar(36) NOT NULL , 
	`divisi_descr` varchar(10000)  , 
	`divisi_isdisabled` tinyint(1) NOT NULL DEFAULT 0, 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `divisi_name` (`divisi_name`),
	PRIMARY KEY (`divisi_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Divisi';


ALTER TABLE `mst_divisi` ADD COLUMN IF NOT EXISTS  `divisi_name` varchar(255) NOT NULL  AFTER `divisi_id`;
ALTER TABLE `mst_divisi` ADD COLUMN IF NOT EXISTS  `dept_id` varchar(36) NOT NULL  AFTER `divisi_name`;
ALTER TABLE `mst_divisi` ADD COLUMN IF NOT EXISTS  `divisi_descr` varchar(10000)   AFTER `dept_id`;
ALTER TABLE `mst_divisi` ADD COLUMN IF NOT EXISTS  `divisi_isdisabled` tinyint(1) NOT NULL DEFAULT 0 AFTER `divisi_descr`;


ALTER TABLE `mst_divisi` MODIFY COLUMN IF EXISTS  `divisi_name` varchar(255) NOT NULL   AFTER `divisi_id`;
ALTER TABLE `mst_divisi` MODIFY COLUMN IF EXISTS  `dept_id` varchar(36) NOT NULL   AFTER `divisi_name`;
ALTER TABLE `mst_divisi` MODIFY COLUMN IF EXISTS  `divisi_descr` varchar(10000)    AFTER `dept_id`;
ALTER TABLE `mst_divisi` MODIFY COLUMN IF EXISTS  `divisi_isdisabled` tinyint(1) NOT NULL DEFAULT 0  AFTER `divisi_descr`;


ALTER TABLE `mst_divisi` ADD CONSTRAINT `divisi_name` UNIQUE IF NOT EXISTS  (`divisi_name`);

ALTER TABLE `mst_divisi` ADD KEY IF NOT EXISTS `dept_id` (`dept_id`);

ALTER TABLE `mst_divisi` ADD CONSTRAINT `fk_mst_divisi_mst_dept` FOREIGN KEY IF NOT EXISTS  (`dept_id`) REFERENCES `mst_dept` (`dept_id`);





