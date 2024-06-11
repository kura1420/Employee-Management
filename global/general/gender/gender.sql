-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_gender`;


CREATE TABLE IF NOT EXISTS `mst_gender` (
	`gender_id` varchar(36) NOT NULL , 
	`gender_name` varchar(255) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `gender_name` (`gender_name`),
	PRIMARY KEY (`gender_id`)
) 
ENGINE=InnoDB
COMMENT='Master Gender';


ALTER TABLE `mst_gender` ADD COLUMN IF NOT EXISTS  `gender_name` varchar(255) NOT NULL  AFTER `gender_id`;


ALTER TABLE `mst_gender` MODIFY COLUMN IF EXISTS  `gender_name` varchar(255) NOT NULL   AFTER `gender_id`;


ALTER TABLE `mst_gender` ADD CONSTRAINT `gender_name` UNIQUE IF NOT EXISTS  (`gender_name`);







