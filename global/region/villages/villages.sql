-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `villages`;


CREATE TABLE IF NOT EXISTS `villages` (
	`id` varchar(36) NOT NULL , 
	`name` varchar(255) NOT NULL , 
	`district_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Kecamatan';


ALTER TABLE `villages` ADD COLUMN IF NOT EXISTS  `name` varchar(255) NOT NULL  AFTER `id`;
ALTER TABLE `villages` ADD COLUMN IF NOT EXISTS  `district_id` varchar(36) NOT NULL  AFTER `name`;


ALTER TABLE `villages` MODIFY COLUMN IF EXISTS  `name` varchar(255) NOT NULL   AFTER `id`;
ALTER TABLE `villages` MODIFY COLUMN IF EXISTS  `district_id` varchar(36) NOT NULL   AFTER `name`;



ALTER TABLE `villages` ADD KEY IF NOT EXISTS `district_id` (`district_id`);

ALTER TABLE `villages` ADD CONSTRAINT `fk_villages_districts` FOREIGN KEY IF NOT EXISTS  (`district_id`) REFERENCES `districts` (`id`);





