-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `regencies`;


CREATE TABLE IF NOT EXISTS `regencies` (
	`id` varchar(36) NOT NULL , 
	`name` varchar(255) NOT NULL , 
	`province_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Kota';


ALTER TABLE `regencies` ADD COLUMN IF NOT EXISTS  `name` varchar(255) NOT NULL  AFTER `id`;
ALTER TABLE `regencies` ADD COLUMN IF NOT EXISTS  `province_id` varchar(36) NOT NULL  AFTER `name`;


ALTER TABLE `regencies` MODIFY COLUMN IF EXISTS  `name` varchar(255) NOT NULL   AFTER `id`;
ALTER TABLE `regencies` MODIFY COLUMN IF EXISTS  `province_id` varchar(36) NOT NULL   AFTER `name`;



ALTER TABLE `regencies` ADD KEY IF NOT EXISTS `province_id` (`province_id`);

ALTER TABLE `regencies` ADD CONSTRAINT `fk_regencies_provinces` FOREIGN KEY IF NOT EXISTS  (`province_id`) REFERENCES `provinces` (`id`);





