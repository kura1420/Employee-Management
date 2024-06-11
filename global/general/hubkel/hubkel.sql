-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_hubkel`;


CREATE TABLE IF NOT EXISTS `mst_hubkel` (
	`hubkel_id` varchar(36) NOT NULL , 
	`hubkel_name` varchar(255) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `hubkel_name` (`hubkel_name`),
	PRIMARY KEY (`hubkel_id`)
) 
ENGINE=InnoDB
COMMENT='Master Hubungan Keluarga';


ALTER TABLE `mst_hubkel` ADD COLUMN IF NOT EXISTS  `hubkel_name` varchar(255) NOT NULL  AFTER `hubkel_id`;


ALTER TABLE `mst_hubkel` MODIFY COLUMN IF EXISTS  `hubkel_name` varchar(255) NOT NULL   AFTER `hubkel_id`;


ALTER TABLE `mst_hubkel` ADD CONSTRAINT `hubkel_name` UNIQUE IF NOT EXISTS  (`hubkel_name`);







