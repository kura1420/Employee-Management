-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_worktype`;


CREATE TABLE IF NOT EXISTS `mst_worktype` (
	`worktype_id` varchar(36) NOT NULL , 
	`worktype_name` varchar(255) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `worktype_name` (`worktype_name`),
	PRIMARY KEY (`worktype_id`)
) 
ENGINE=InnoDB
COMMENT='Master Work Type",';


ALTER TABLE `mst_worktype` ADD COLUMN IF NOT EXISTS  `worktype_name` varchar(255) NOT NULL  AFTER `worktype_id`;


ALTER TABLE `mst_worktype` MODIFY COLUMN IF EXISTS  `worktype_name` varchar(255) NOT NULL   AFTER `worktype_id`;


ALTER TABLE `mst_worktype` ADD CONSTRAINT `worktype_name` UNIQUE IF NOT EXISTS  (`worktype_name`);







