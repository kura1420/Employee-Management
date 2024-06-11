-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_bloodtype`;


CREATE TABLE IF NOT EXISTS `mst_bloodtype` (
	`bloodtype_id` varchar(36) NOT NULL , 
	`bloodtype_name` varchar(255) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `bloodtype_name` (`bloodtype_name`),
	PRIMARY KEY (`bloodtype_id`)
) 
ENGINE=InnoDB
COMMENT='Master Blood Type';


ALTER TABLE `mst_bloodtype` ADD COLUMN IF NOT EXISTS  `bloodtype_name` varchar(255) NOT NULL  AFTER `bloodtype_id`;


ALTER TABLE `mst_bloodtype` MODIFY COLUMN IF EXISTS  `bloodtype_name` varchar(255) NOT NULL   AFTER `bloodtype_id`;


ALTER TABLE `mst_bloodtype` ADD CONSTRAINT `bloodtype_name` UNIQUE IF NOT EXISTS  (`bloodtype_name`);







