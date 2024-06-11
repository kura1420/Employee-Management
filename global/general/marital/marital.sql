-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_marital`;


CREATE TABLE IF NOT EXISTS `mst_marital` (
	`marital_id` varchar(36) NOT NULL , 
	`marital_name` varchar(255) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `marital_name` (`marital_name`),
	PRIMARY KEY (`marital_id`)
) 
ENGINE=InnoDB
COMMENT='Master Marital';


ALTER TABLE `mst_marital` ADD COLUMN IF NOT EXISTS  `marital_name` varchar(255) NOT NULL  AFTER `marital_id`;


ALTER TABLE `mst_marital` MODIFY COLUMN IF EXISTS  `marital_name` varchar(255) NOT NULL   AFTER `marital_id`;


ALTER TABLE `mst_marital` ADD CONSTRAINT `marital_name` UNIQUE IF NOT EXISTS  (`marital_name`);







