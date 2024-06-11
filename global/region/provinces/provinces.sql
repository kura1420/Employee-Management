-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `provinces`;


CREATE TABLE IF NOT EXISTS `provinces` (
	`id` varchar(36) NOT NULL , 
	`name` varchar(255) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Provinsi';


ALTER TABLE `provinces` ADD COLUMN IF NOT EXISTS  `name` varchar(255) NOT NULL  AFTER `id`;


ALTER TABLE `provinces` MODIFY COLUMN IF EXISTS  `name` varchar(255) NOT NULL   AFTER `id`;









