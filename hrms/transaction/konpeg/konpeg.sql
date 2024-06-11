-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `trn_konpeg`;


CREATE TABLE IF NOT EXISTS `trn_konpeg` (
	`konpeg_id` varchar(36) NOT NULL , 
	`pegawai_id` varchar(36) NOT NULL , 
	`dept_id` varchar(36) NOT NULL , 
	`divisi_id` varchar(36) NOT NULL , 
	`jabatan_id` varchar(36) NOT NULL , 
	`penempatan_id` varchar(36) NOT NULL , 
	`jenkonpeg_id` varchar(36) NOT NULL , 
	`konpeg_periodval` int(11)  , 
	`period_id` varchar(36) NOT NULL , 
	`konpeg_dtmulai` date NOT NULL , 
	`konpeg_dtberakhir` date  , 
	`konpeg_isextend` tinyint(1) NOT NULL DEFAULT 0, 
	`konpeg_iswork` tinyint(1) NOT NULL DEFAULT 0, 
	`konpeg_file` varchar(100)  , 
	`konpeg_workat` datetime  , 
	`konpeg_workby` varchar(14)  , 
	`konpeg_catatan` varchar(25555)  , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`konpeg_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Kontrak Pegawai';


ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `konpeg_id`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `dept_id` varchar(36) NOT NULL  AFTER `pegawai_id`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `divisi_id` varchar(36) NOT NULL  AFTER `dept_id`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `jabatan_id` varchar(36) NOT NULL  AFTER `divisi_id`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `penempatan_id` varchar(36) NOT NULL  AFTER `jabatan_id`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `jenkonpeg_id` varchar(36) NOT NULL  AFTER `penempatan_id`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `konpeg_periodval` int(11)   AFTER `jenkonpeg_id`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `period_id` varchar(36) NOT NULL  AFTER `konpeg_periodval`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `konpeg_dtmulai` date NOT NULL  AFTER `period_id`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `konpeg_dtberakhir` date   AFTER `konpeg_dtmulai`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `konpeg_isextend` tinyint(1) NOT NULL DEFAULT 0 AFTER `konpeg_dtberakhir`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `konpeg_iswork` tinyint(1) NOT NULL DEFAULT 0 AFTER `konpeg_isextend`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `konpeg_file` varchar(100)   AFTER `konpeg_iswork`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `konpeg_workat` datetime   AFTER `konpeg_file`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `konpeg_workby` varchar(14)   AFTER `konpeg_workat`;
ALTER TABLE `trn_konpeg` ADD COLUMN IF NOT EXISTS  `konpeg_catatan` varchar(25555)   AFTER `konpeg_workby`;


ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `konpeg_id`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `dept_id` varchar(36) NOT NULL   AFTER `pegawai_id`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `divisi_id` varchar(36) NOT NULL   AFTER `dept_id`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `jabatan_id` varchar(36) NOT NULL   AFTER `divisi_id`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `penempatan_id` varchar(36) NOT NULL   AFTER `jabatan_id`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `jenkonpeg_id` varchar(36) NOT NULL   AFTER `penempatan_id`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `konpeg_periodval` int(11)    AFTER `jenkonpeg_id`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `period_id` varchar(36) NOT NULL   AFTER `konpeg_periodval`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `konpeg_dtmulai` date NOT NULL   AFTER `period_id`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `konpeg_dtberakhir` date    AFTER `konpeg_dtmulai`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `konpeg_isextend` tinyint(1) NOT NULL DEFAULT 0  AFTER `konpeg_dtberakhir`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `konpeg_iswork` tinyint(1) NOT NULL DEFAULT 0  AFTER `konpeg_isextend`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `konpeg_file` varchar(100)    AFTER `konpeg_iswork`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `konpeg_workat` datetime    AFTER `konpeg_file`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `konpeg_workby` varchar(14)    AFTER `konpeg_workat`;
ALTER TABLE `trn_konpeg` MODIFY COLUMN IF EXISTS  `konpeg_catatan` varchar(25555)    AFTER `konpeg_workby`;



ALTER TABLE `trn_konpeg` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);
ALTER TABLE `trn_konpeg` ADD KEY IF NOT EXISTS `dept_id` (`dept_id`);
ALTER TABLE `trn_konpeg` ADD KEY IF NOT EXISTS `divisi_id` (`divisi_id`);
ALTER TABLE `trn_konpeg` ADD KEY IF NOT EXISTS `jabatan_id` (`jabatan_id`);
ALTER TABLE `trn_konpeg` ADD KEY IF NOT EXISTS `penempatan_id` (`penempatan_id`);
ALTER TABLE `trn_konpeg` ADD KEY IF NOT EXISTS `jenkonpeg_id` (`jenkonpeg_id`);
ALTER TABLE `trn_konpeg` ADD KEY IF NOT EXISTS `period_id` (`period_id`);

ALTER TABLE `trn_konpeg` ADD CONSTRAINT `fk_trn_konpeg_mst_pegawai` FOREIGN KEY IF NOT EXISTS  (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);
ALTER TABLE `trn_konpeg` ADD CONSTRAINT `fk_trn_konpeg_mst_dept` FOREIGN KEY IF NOT EXISTS  (`dept_id`) REFERENCES `mst_dept` (`dept_id`);
ALTER TABLE `trn_konpeg` ADD CONSTRAINT `fk_trn_konpeg_mst_divisi` FOREIGN KEY IF NOT EXISTS  (`divisi_id`) REFERENCES `mst_divisi` (`divisi_id`);
ALTER TABLE `trn_konpeg` ADD CONSTRAINT `fk_trn_konpeg_mst_jabatan` FOREIGN KEY IF NOT EXISTS  (`jabatan_id`) REFERENCES `mst_jabatan` (`jabatan_id`);
ALTER TABLE `trn_konpeg` ADD CONSTRAINT `fk_trn_konpeg_mst_penempatan` FOREIGN KEY IF NOT EXISTS  (`penempatan_id`) REFERENCES `mst_penempatan` (`penempatan_id`);
ALTER TABLE `trn_konpeg` ADD CONSTRAINT `fk_trn_konpeg_mst_jenkonpeg` FOREIGN KEY IF NOT EXISTS  (`jenkonpeg_id`) REFERENCES `mst_jenkonpeg` (`jenkonpeg_id`);
ALTER TABLE `trn_konpeg` ADD CONSTRAINT `fk_trn_konpeg_mst_period` FOREIGN KEY IF NOT EXISTS  (`period_id`) REFERENCES `mst_period` (`period_id`);





