-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_card`;


CREATE TABLE IF NOT EXISTS `mst_card` (
	`card_id` varchar(36) NOT NULL , 
	`card_name` varchar(255) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `card_name` (`card_name`),
	PRIMARY KEY (`card_id`)
) 
ENGINE=InnoDB
COMMENT='Master Kartu Identitas';


ALTER TABLE `mst_card` ADD COLUMN IF NOT EXISTS  `card_name` varchar(255) NOT NULL  AFTER `card_id`;


ALTER TABLE `mst_card` MODIFY COLUMN IF EXISTS  `card_name` varchar(255) NOT NULL   AFTER `card_id`;


ALTER TABLE `mst_card` ADD CONSTRAINT `card_name` UNIQUE IF NOT EXISTS  (`card_name`);







