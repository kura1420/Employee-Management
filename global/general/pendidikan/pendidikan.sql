-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_pnddk`;


CREATE TABLE IF NOT EXISTS `mst_pnddk` (
	`pnddk_id` varchar(36) NOT NULL , 
	`pnddk_name` varchar(255) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `pnddk_name` (`pnddk_name`),
	PRIMARY KEY (`pnddk_id`)
) 
ENGINE=InnoDB
COMMENT='Master Pendidikan';


ALTER TABLE `mst_pnddk` ADD COLUMN IF NOT EXISTS  `pnddk_name` varchar(255) NOT NULL  AFTER `pnddk_id`;


ALTER TABLE `mst_pnddk` MODIFY COLUMN IF EXISTS  `pnddk_name` varchar(255) NOT NULL   AFTER `pnddk_id`;


ALTER TABLE `mst_pnddk` ADD CONSTRAINT `pnddk_name` UNIQUE IF NOT EXISTS  (`pnddk_name`);







