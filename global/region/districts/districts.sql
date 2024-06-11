-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `districts`;


CREATE TABLE IF NOT EXISTS `districts` (
	`id` varchar(36) NOT NULL , 
	`name` varchar(255) NOT NULL , 
	`regency_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Kelurahan';


ALTER TABLE `districts` ADD COLUMN IF NOT EXISTS  `name` varchar(255) NOT NULL  AFTER `id`;
ALTER TABLE `districts` ADD COLUMN IF NOT EXISTS  `regency_id` varchar(36) NOT NULL  AFTER `name`;


ALTER TABLE `districts` MODIFY COLUMN IF EXISTS  `name` varchar(255) NOT NULL   AFTER `id`;
ALTER TABLE `districts` MODIFY COLUMN IF EXISTS  `regency_id` varchar(36) NOT NULL   AFTER `name`;



ALTER TABLE `districts` ADD KEY IF NOT EXISTS `regency_id` (`regency_id`);

ALTER TABLE `districts` ADD CONSTRAINT `fk_districts_regencies` FOREIGN KEY IF NOT EXISTS  (`regency_id`) REFERENCES `regencies` (`id`);





