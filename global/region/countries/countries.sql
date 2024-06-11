SET FOREIGN_KEY_CHECKS=0;

drop table if exists `countries`;


CREATE TABLE IF NOT EXISTS `countries` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL , 
	`iso2` varchar(255) NOT NULL , 
	`iso3` varchar(255) NOT NULL , 
	`phone_code` int(7)  , 
	`postcode_required` tinyint(1) NOT NULL DEFAULT 0, 
	`is_eu` tinyint(1) NOT NULL DEFAULT 0, 
	`_createby` varchar(14) NULL , 
	`_createdate` datetime NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14) NULL , 
	`_modifydate` datetime NULL , 
	PRIMARY KEY (`id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Country';


ALTER TABLE `countries` ADD COLUMN IF NOT EXISTS  `name` varchar(255) NOT NULL  AFTER `id`;
ALTER TABLE `countries` ADD COLUMN IF NOT EXISTS  `iso2` varchar(255) NOT NULL  AFTER `name`;
ALTER TABLE `countries` ADD COLUMN IF NOT EXISTS  `iso3` varchar(255) NOT NULL  AFTER `iso2`;
ALTER TABLE `countries` ADD COLUMN IF NOT EXISTS  `phone_code` int(7)   AFTER `iso3`;
ALTER TABLE `countries` ADD COLUMN IF NOT EXISTS  `postcode_required` tinyint(1) NOT NULL DEFAULT 0 AFTER `phone_code`;
ALTER TABLE `countries` ADD COLUMN IF NOT EXISTS  `is_eu` tinyint(1) NOT NULL DEFAULT 0 AFTER `postcode_required`;


ALTER TABLE `countries` MODIFY COLUMN IF EXISTS  `name` varchar(255) NOT NULL   AFTER `id`;
ALTER TABLE `countries` MODIFY COLUMN IF EXISTS  `iso2` varchar(255) NOT NULL   AFTER `name`;
ALTER TABLE `countries` MODIFY COLUMN IF EXISTS  `iso3` varchar(255) NOT NULL   AFTER `iso2`;
ALTER TABLE `countries` MODIFY COLUMN IF EXISTS  `phone_code` int(7)    AFTER `iso3`;
ALTER TABLE `countries` MODIFY COLUMN IF EXISTS  `postcode_required` tinyint(1) NOT NULL DEFAULT 0  AFTER `phone_code`;
ALTER TABLE `countries` MODIFY COLUMN IF EXISTS  `is_eu` tinyint(1) NOT NULL DEFAULT 0  AFTER `postcode_required`;









