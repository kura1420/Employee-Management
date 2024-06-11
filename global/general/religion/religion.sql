-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_religion`;


CREATE TABLE IF NOT EXISTS `mst_religion` (
	`religion_id` varchar(36) NOT NULL , 
	`religion_name` varchar(255) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `religion_name` (`religion_name`),
	PRIMARY KEY (`religion_id`)
) 
ENGINE=InnoDB
COMMENT='Master Religion",';


ALTER TABLE `mst_religion` ADD COLUMN IF NOT EXISTS  `religion_name` varchar(255) NOT NULL  AFTER `religion_id`;


ALTER TABLE `mst_religion` MODIFY COLUMN IF EXISTS  `religion_name` varchar(255) NOT NULL   AFTER `religion_id`;


ALTER TABLE `mst_religion` ADD CONSTRAINT `religion_name` UNIQUE IF NOT EXISTS  (`religion_name`);







