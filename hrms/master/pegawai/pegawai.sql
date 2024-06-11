-- SET FOREIGN_KEY_CHECKS=0;

-- drop table if exists `mst_pegawai`;
-- drop table if exists `mst_pegawaialmt`;
-- drop table if exists `mst_pegawaipnddk`;
-- drop table if exists `mst_pegawaikerja`;
-- drop table if exists `mst_pegawaipnddkno`;
-- drop table if exists `mst_pegawaikel`;
-- drop table if exists `mst_pegawaiorg`;
-- drop table if exists `mst_pegawairef`;
-- drop table if exists `mst_pegawaicard`;
-- drop table if exists `mst_pegawaiattch`;


CREATE TABLE IF NOT EXISTS `mst_pegawai` (
	`pegawai_id` varchar(36) NOT NULL , 
	`pegawai_nama` varchar(255) NOT NULL , 
	`pegawai_email` varchar(255)  , 
	`pegawai_hp` varchar(20) NOT NULL , 
	`pegawai_foto` varchar(90)  , 
	`card_id` varchar(36) NOT NULL , 
	`gender_id` varchar(36) NOT NULL , 
	`bloodtype_id` varchar(36)  , 
	`religion_id` varchar(36)  , 
	`pegawai_iswna` tinyint(1) NOT NULL DEFAULT 0, 
	`countries_id` varchar(36)  , 
	`marital_id` varchar(36) NOT NULL , 
	`pnddk_id` varchar(36) NOT NULL , 
	`worktype_id` varchar(36) NOT NULL , 
	`pegawai_tmptlahir` varchar(36) NOT NULL , 
	`pegawai_tgllahir` date NOT NULL , 
	`province_id` varchar(36) NOT NULL , 
	`regency_id` varchar(36) NOT NULL , 
	`district_id` varchar(36)  , 
	`villages_id` varchar(36)  , 
	`pegawai_kodepos` int(11)  , 
	`pegawai_alamat` varchar(10000) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`pegawai_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Pegawai';


ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pegawai_nama` varchar(255) NOT NULL  AFTER `pegawai_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pegawai_email` varchar(255)   AFTER `pegawai_nama`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pegawai_hp` varchar(20) NOT NULL  AFTER `pegawai_email`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pegawai_foto` varchar(90)   AFTER `pegawai_hp`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `card_id` varchar(36) NOT NULL  AFTER `pegawai_foto`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `gender_id` varchar(36) NOT NULL  AFTER `card_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `bloodtype_id` varchar(36)   AFTER `gender_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `religion_id` varchar(36)   AFTER `bloodtype_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pegawai_iswna` tinyint(1) NOT NULL DEFAULT 0 AFTER `religion_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `countries_id` varchar(36)   AFTER `pegawai_iswna`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `marital_id` varchar(36) NOT NULL  AFTER `countries_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pnddk_id` varchar(36) NOT NULL  AFTER `marital_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `worktype_id` varchar(36) NOT NULL  AFTER `pnddk_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pegawai_tmptlahir` varchar(36) NOT NULL  AFTER `worktype_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pegawai_tgllahir` date NOT NULL  AFTER `pegawai_tmptlahir`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `province_id` varchar(36) NOT NULL  AFTER `pegawai_tgllahir`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `regency_id` varchar(36) NOT NULL  AFTER `province_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `district_id` varchar(36)   AFTER `regency_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `villages_id` varchar(36)   AFTER `district_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pegawai_kodepos` int(11)   AFTER `villages_id`;
ALTER TABLE `mst_pegawai` ADD COLUMN IF NOT EXISTS  `pegawai_alamat` varchar(10000) NOT NULL  AFTER `pegawai_kodepos`;


ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pegawai_nama` varchar(255) NOT NULL   AFTER `pegawai_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pegawai_email` varchar(255)    AFTER `pegawai_nama`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pegawai_hp` varchar(20) NOT NULL   AFTER `pegawai_email`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pegawai_foto` varchar(90)    AFTER `pegawai_hp`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `card_id` varchar(36) NOT NULL   AFTER `pegawai_foto`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `gender_id` varchar(36) NOT NULL   AFTER `card_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `bloodtype_id` varchar(36)    AFTER `gender_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `religion_id` varchar(36)    AFTER `bloodtype_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pegawai_iswna` tinyint(1) NOT NULL DEFAULT 0  AFTER `religion_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `countries_id` varchar(36)    AFTER `pegawai_iswna`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `marital_id` varchar(36) NOT NULL   AFTER `countries_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pnddk_id` varchar(36) NOT NULL   AFTER `marital_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `worktype_id` varchar(36) NOT NULL   AFTER `pnddk_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pegawai_tmptlahir` varchar(36) NOT NULL   AFTER `worktype_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pegawai_tgllahir` date NOT NULL   AFTER `pegawai_tmptlahir`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `province_id` varchar(36) NOT NULL   AFTER `pegawai_tgllahir`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `regency_id` varchar(36) NOT NULL   AFTER `province_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `district_id` varchar(36)    AFTER `regency_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `villages_id` varchar(36)    AFTER `district_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pegawai_kodepos` int(11)    AFTER `villages_id`;
ALTER TABLE `mst_pegawai` MODIFY COLUMN IF EXISTS  `pegawai_alamat` varchar(10000) NOT NULL   AFTER `pegawai_kodepos`;



ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `card_id` (`card_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `gender_id` (`gender_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `bloodtype_id` (`bloodtype_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `religion_id` (`religion_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `countries_id` (`countries_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `marital_id` (`marital_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `pnddk_id` (`pnddk_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `worktype_id` (`worktype_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `pegawai_tmptlahir` (`pegawai_tmptlahir`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `province_id` (`province_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `regency_id` (`regency_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `district_id` (`district_id`);
ALTER TABLE `mst_pegawai` ADD KEY IF NOT EXISTS `villages_id` (`villages_id`);

ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_mst_card` FOREIGN KEY IF NOT EXISTS  (`card_id`) REFERENCES `mst_card` (`card_id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_mst_gender` FOREIGN KEY IF NOT EXISTS  (`gender_id`) REFERENCES `mst_gender` (`gender_id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_mst_bloodtype` FOREIGN KEY IF NOT EXISTS  (`bloodtype_id`) REFERENCES `mst_bloodtype` (`bloodtype_id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_mst_religion` FOREIGN KEY IF NOT EXISTS  (`religion_id`) REFERENCES `mst_religion` (`religion_id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_countries` FOREIGN KEY IF NOT EXISTS  (`countries_id`) REFERENCES `countries` (`id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_mst_marital` FOREIGN KEY IF NOT EXISTS  (`marital_id`) REFERENCES `mst_marital` (`marital_id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_mst_pnddk` FOREIGN KEY IF NOT EXISTS  (`pnddk_id`) REFERENCES `mst_pnddk` (`pnddk_id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_mst_worktype` FOREIGN KEY IF NOT EXISTS  (`worktype_id`) REFERENCES `mst_worktype` (`worktype_id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_regencies` FOREIGN KEY IF NOT EXISTS  (`pegawai_tmptlahir`) REFERENCES `regencies` (`id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_provinces` FOREIGN KEY IF NOT EXISTS  (`province_id`) REFERENCES `provinces` (`id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_regencies_2` FOREIGN KEY IF NOT EXISTS  (`regency_id`) REFERENCES `regencies` (`id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_districts` FOREIGN KEY IF NOT EXISTS  (`district_id`) REFERENCES `districts` (`id`);
ALTER TABLE `mst_pegawai` ADD CONSTRAINT `fk_mst_pegawai_villages` FOREIGN KEY IF NOT EXISTS  (`villages_id`) REFERENCES `villages` (`id`);





CREATE TABLE IF NOT EXISTS `mst_pegawaialmt` (
	`pegawaialmt_id` varchar(36) NOT NULL , 
	`province_id` varchar(36) NOT NULL , 
	`regency_id` varchar(36) NOT NULL , 
	`district_id` varchar(36)  , 
	`villages_id` varchar(36)  , 
	`pegawaialmt_kodepos` int(11)  , 
	`pegawaialmt_alamat` varchar(10000) NOT NULL , 
	`pegawai_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`pegawaialmt_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Alamat Sesuai Domisili';


ALTER TABLE `mst_pegawaialmt` ADD COLUMN IF NOT EXISTS  `province_id` varchar(36) NOT NULL  AFTER `pegawaialmt_id`;
ALTER TABLE `mst_pegawaialmt` ADD COLUMN IF NOT EXISTS  `regency_id` varchar(36) NOT NULL  AFTER `province_id`;
ALTER TABLE `mst_pegawaialmt` ADD COLUMN IF NOT EXISTS  `district_id` varchar(36)   AFTER `regency_id`;
ALTER TABLE `mst_pegawaialmt` ADD COLUMN IF NOT EXISTS  `villages_id` varchar(36)   AFTER `district_id`;
ALTER TABLE `mst_pegawaialmt` ADD COLUMN IF NOT EXISTS  `pegawaialmt_kodepos` int(11)   AFTER `villages_id`;
ALTER TABLE `mst_pegawaialmt` ADD COLUMN IF NOT EXISTS  `pegawaialmt_alamat` varchar(10000) NOT NULL  AFTER `pegawaialmt_kodepos`;
ALTER TABLE `mst_pegawaialmt` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `pegawaialmt_alamat`;


ALTER TABLE `mst_pegawaialmt` MODIFY COLUMN IF EXISTS  `province_id` varchar(36) NOT NULL   AFTER `pegawaialmt_id`;
ALTER TABLE `mst_pegawaialmt` MODIFY COLUMN IF EXISTS  `regency_id` varchar(36) NOT NULL   AFTER `province_id`;
ALTER TABLE `mst_pegawaialmt` MODIFY COLUMN IF EXISTS  `district_id` varchar(36)    AFTER `regency_id`;
ALTER TABLE `mst_pegawaialmt` MODIFY COLUMN IF EXISTS  `villages_id` varchar(36)    AFTER `district_id`;
ALTER TABLE `mst_pegawaialmt` MODIFY COLUMN IF EXISTS  `pegawaialmt_kodepos` int(11)    AFTER `villages_id`;
ALTER TABLE `mst_pegawaialmt` MODIFY COLUMN IF EXISTS  `pegawaialmt_alamat` varchar(10000) NOT NULL   AFTER `pegawaialmt_kodepos`;
ALTER TABLE `mst_pegawaialmt` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `pegawaialmt_alamat`;



ALTER TABLE `mst_pegawaialmt` ADD KEY IF NOT EXISTS `province_id` (`province_id`);
ALTER TABLE `mst_pegawaialmt` ADD KEY IF NOT EXISTS `regency_id` (`regency_id`);
ALTER TABLE `mst_pegawaialmt` ADD KEY IF NOT EXISTS `district_id` (`district_id`);
ALTER TABLE `mst_pegawaialmt` ADD KEY IF NOT EXISTS `villages_id` (`villages_id`);
ALTER TABLE `mst_pegawaialmt` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);

ALTER TABLE `mst_pegawaialmt` ADD CONSTRAINT `fk_mst_pegawaialmt_provinces` FOREIGN KEY IF NOT EXISTS  (`province_id`) REFERENCES `provinces` (`id`);
ALTER TABLE `mst_pegawaialmt` ADD CONSTRAINT `fk_mst_pegawaialmt_regencies` FOREIGN KEY IF NOT EXISTS  (`regency_id`) REFERENCES `regencies` (`id`);
ALTER TABLE `mst_pegawaialmt` ADD CONSTRAINT `fk_mst_pegawaialmt_districts` FOREIGN KEY IF NOT EXISTS  (`district_id`) REFERENCES `districts` (`id`);
ALTER TABLE `mst_pegawaialmt` ADD CONSTRAINT `fk_mst_pegawaialmt_villages` FOREIGN KEY IF NOT EXISTS  (`villages_id`) REFERENCES `villages` (`id`);
ALTER TABLE `mst_pegawaialmt` ADD CONSTRAINT `fk_mst_pegawaialmt_mst_pegawai` FOREIGN KEY IF NOT EXISTS (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);





CREATE TABLE IF NOT EXISTS `mst_pegawaipnddk` (
	`pegawaipnddk_id` varchar(36) NOT NULL , 
	`pnddk_id` varchar(36) NOT NULL , 
	`pegawaipnddk_nama` varchar(255) NOT NULL , 
	`pegawaipnddk_jurusan` varchar(255)  , 
	`pegawaipnddk_lulus` int(11) NOT NULL , 
	`regency_id` varchar(36) NOT NULL , 
	`pegawaipnddk_file` varchar(90)  , 
	`pegawai_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`pegawaipnddk_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Riwayat Pendidikan';


ALTER TABLE `mst_pegawaipnddk` ADD COLUMN IF NOT EXISTS  `pnddk_id` varchar(36) NOT NULL  AFTER `pegawaipnddk_id`;
ALTER TABLE `mst_pegawaipnddk` ADD COLUMN IF NOT EXISTS  `pegawaipnddk_nama` varchar(255) NOT NULL  AFTER `pnddk_id`;
ALTER TABLE `mst_pegawaipnddk` ADD COLUMN IF NOT EXISTS  `pegawaipnddk_jurusan` varchar(255)   AFTER `pegawaipnddk_nama`;
ALTER TABLE `mst_pegawaipnddk` ADD COLUMN IF NOT EXISTS  `pegawaipnddk_lulus` int(11) NOT NULL  AFTER `pegawaipnddk_jurusan`;
ALTER TABLE `mst_pegawaipnddk` ADD COLUMN IF NOT EXISTS  `regency_id` varchar(36) NOT NULL  AFTER `pegawaipnddk_lulus`;
ALTER TABLE `mst_pegawaipnddk` ADD COLUMN IF NOT EXISTS  `pegawaipnddk_file` varchar(90)   AFTER `regency_id`;
ALTER TABLE `mst_pegawaipnddk` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `pegawaipnddk_file`;


ALTER TABLE `mst_pegawaipnddk` MODIFY COLUMN IF EXISTS  `pnddk_id` varchar(36) NOT NULL   AFTER `pegawaipnddk_id`;
ALTER TABLE `mst_pegawaipnddk` MODIFY COLUMN IF EXISTS  `pegawaipnddk_nama` varchar(255) NOT NULL   AFTER `pnddk_id`;
ALTER TABLE `mst_pegawaipnddk` MODIFY COLUMN IF EXISTS  `pegawaipnddk_jurusan` varchar(255)    AFTER `pegawaipnddk_nama`;
ALTER TABLE `mst_pegawaipnddk` MODIFY COLUMN IF EXISTS  `pegawaipnddk_lulus` int(11) NOT NULL   AFTER `pegawaipnddk_jurusan`;
ALTER TABLE `mst_pegawaipnddk` MODIFY COLUMN IF EXISTS  `regency_id` varchar(36) NOT NULL   AFTER `pegawaipnddk_lulus`;
ALTER TABLE `mst_pegawaipnddk` MODIFY COLUMN IF EXISTS  `pegawaipnddk_file` varchar(90)    AFTER `regency_id`;
ALTER TABLE `mst_pegawaipnddk` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `pegawaipnddk_file`;



ALTER TABLE `mst_pegawaipnddk` ADD KEY IF NOT EXISTS `pnddk_id` (`pnddk_id`);
ALTER TABLE `mst_pegawaipnddk` ADD KEY IF NOT EXISTS `regency_id` (`regency_id`);
ALTER TABLE `mst_pegawaipnddk` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);

ALTER TABLE `mst_pegawaipnddk` ADD CONSTRAINT `fk_mst_pegawaipnddk_mst_pnddk` FOREIGN KEY IF NOT EXISTS  (`pnddk_id`) REFERENCES `mst_pnddk` (`pnddk_id`);
ALTER TABLE `mst_pegawaipnddk` ADD CONSTRAINT `fk_mst_pegawaipnddk_regencies` FOREIGN KEY IF NOT EXISTS  (`regency_id`) REFERENCES `regencies` (`id`);
ALTER TABLE `mst_pegawaipnddk` ADD CONSTRAINT `fk_mst_pegawaipnddk_mst_pegawai` FOREIGN KEY IF NOT EXISTS (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);





CREATE TABLE IF NOT EXISTS `mst_pegawaikerja` (
	`pegawaikerja_id` varchar(36) NOT NULL , 
	`pegawaikerja_nama` varchar(255) NOT NULL , 
	`pegawaikerja_thnmasuk` int(11) NOT NULL , 
	`pegawaikerja_thnkeluar` int(11) NOT NULL , 
	`pegawaikerja_jabatan` varchar(255) NOT NULL , 
	`pegawaikerja_descr` varchar(10000) NOT NULL , 
	`pegawaikerja_alasan` varchar(10000) NOT NULL , 
	`pegawaikerja_file` varchar(90)  , 
	`pegawai_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`pegawaikerja_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Riwayat Pendidikan';


ALTER TABLE `mst_pegawaikerja` ADD COLUMN IF NOT EXISTS  `pegawaikerja_nama` varchar(255) NOT NULL  AFTER `pegawaikerja_id`;
ALTER TABLE `mst_pegawaikerja` ADD COLUMN IF NOT EXISTS  `pegawaikerja_thnmasuk` int(11) NOT NULL  AFTER `pegawaikerja_nama`;
ALTER TABLE `mst_pegawaikerja` ADD COLUMN IF NOT EXISTS  `pegawaikerja_thnkeluar` int(11) NOT NULL  AFTER `pegawaikerja_thnmasuk`;
ALTER TABLE `mst_pegawaikerja` ADD COLUMN IF NOT EXISTS  `pegawaikerja_jabatan` varchar(255) NOT NULL  AFTER `pegawaikerja_thnkeluar`;
ALTER TABLE `mst_pegawaikerja` ADD COLUMN IF NOT EXISTS  `pegawaikerja_descr` varchar(10000) NOT NULL  AFTER `pegawaikerja_jabatan`;
ALTER TABLE `mst_pegawaikerja` ADD COLUMN IF NOT EXISTS  `pegawaikerja_alasan` varchar(10000) NOT NULL  AFTER `pegawaikerja_descr`;
ALTER TABLE `mst_pegawaikerja` ADD COLUMN IF NOT EXISTS  `pegawaikerja_file` varchar(90)   AFTER `pegawaikerja_alasan`;
ALTER TABLE `mst_pegawaikerja` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `pegawaikerja_file`;


ALTER TABLE `mst_pegawaikerja` MODIFY COLUMN IF EXISTS  `pegawaikerja_nama` varchar(255) NOT NULL   AFTER `pegawaikerja_id`;
ALTER TABLE `mst_pegawaikerja` MODIFY COLUMN IF EXISTS  `pegawaikerja_thnmasuk` int(11) NOT NULL   AFTER `pegawaikerja_nama`;
ALTER TABLE `mst_pegawaikerja` MODIFY COLUMN IF EXISTS  `pegawaikerja_thnkeluar` int(11) NOT NULL   AFTER `pegawaikerja_thnmasuk`;
ALTER TABLE `mst_pegawaikerja` MODIFY COLUMN IF EXISTS  `pegawaikerja_jabatan` varchar(255) NOT NULL   AFTER `pegawaikerja_thnkeluar`;
ALTER TABLE `mst_pegawaikerja` MODIFY COLUMN IF EXISTS  `pegawaikerja_descr` varchar(10000) NOT NULL   AFTER `pegawaikerja_jabatan`;
ALTER TABLE `mst_pegawaikerja` MODIFY COLUMN IF EXISTS  `pegawaikerja_alasan` varchar(10000) NOT NULL   AFTER `pegawaikerja_descr`;
ALTER TABLE `mst_pegawaikerja` MODIFY COLUMN IF EXISTS  `pegawaikerja_file` varchar(90)    AFTER `pegawaikerja_alasan`;
ALTER TABLE `mst_pegawaikerja` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `pegawaikerja_file`;



ALTER TABLE `mst_pegawaikerja` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);

ALTER TABLE `mst_pegawaikerja` ADD CONSTRAINT `fk_mst_pegawaikerja_mst_pegawai` FOREIGN KEY IF NOT EXISTS (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);





CREATE TABLE IF NOT EXISTS `mst_pegawaipnddkno` (
	`pegawaipnddkno_id` varchar(36) NOT NULL , 
	`pegawaipnddkno_tempat` varchar(255) NOT NULL , 
	`pegawaipnddkno_kegiatan` varchar(255) NOT NULL , 
	`regency_id` varchar(36) NOT NULL , 
	`pegawaipnddkno_tahun` int(11) NOT NULL , 
	`pegawaipnddkno_file` varchar(90)  , 
	`pegawaipnddkno_descr` varchar(10000) NOT NULL , 
	`pegawai_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`pegawaipnddkno_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Pendidikan Non Formal';


ALTER TABLE `mst_pegawaipnddkno` ADD COLUMN IF NOT EXISTS  `pegawaipnddkno_tempat` varchar(255) NOT NULL  AFTER `pegawaipnddkno_id`;
ALTER TABLE `mst_pegawaipnddkno` ADD COLUMN IF NOT EXISTS  `pegawaipnddkno_kegiatan` varchar(255) NOT NULL  AFTER `pegawaipnddkno_tempat`;
ALTER TABLE `mst_pegawaipnddkno` ADD COLUMN IF NOT EXISTS  `regency_id` varchar(36) NOT NULL  AFTER `pegawaipnddkno_kegiatan`;
ALTER TABLE `mst_pegawaipnddkno` ADD COLUMN IF NOT EXISTS  `pegawaipnddkno_tahun` int(11) NOT NULL  AFTER `regency_id`;
ALTER TABLE `mst_pegawaipnddkno` ADD COLUMN IF NOT EXISTS  `pegawaipnddkno_file` varchar(90)   AFTER `pegawaipnddkno_tahun`;
ALTER TABLE `mst_pegawaipnddkno` ADD COLUMN IF NOT EXISTS  `pegawaipnddkno_descr` varchar(10000) NOT NULL  AFTER `pegawaipnddkno_file`;
ALTER TABLE `mst_pegawaipnddkno` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `pegawaipnddkno_descr`;


ALTER TABLE `mst_pegawaipnddkno` MODIFY COLUMN IF EXISTS  `pegawaipnddkno_tempat` varchar(255) NOT NULL   AFTER `pegawaipnddkno_id`;
ALTER TABLE `mst_pegawaipnddkno` MODIFY COLUMN IF EXISTS  `pegawaipnddkno_kegiatan` varchar(255) NOT NULL   AFTER `pegawaipnddkno_tempat`;
ALTER TABLE `mst_pegawaipnddkno` MODIFY COLUMN IF EXISTS  `regency_id` varchar(36) NOT NULL   AFTER `pegawaipnddkno_kegiatan`;
ALTER TABLE `mst_pegawaipnddkno` MODIFY COLUMN IF EXISTS  `pegawaipnddkno_tahun` int(11) NOT NULL   AFTER `regency_id`;
ALTER TABLE `mst_pegawaipnddkno` MODIFY COLUMN IF EXISTS  `pegawaipnddkno_file` varchar(90)    AFTER `pegawaipnddkno_tahun`;
ALTER TABLE `mst_pegawaipnddkno` MODIFY COLUMN IF EXISTS  `pegawaipnddkno_descr` varchar(10000) NOT NULL   AFTER `pegawaipnddkno_file`;
ALTER TABLE `mst_pegawaipnddkno` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `pegawaipnddkno_descr`;



ALTER TABLE `mst_pegawaipnddkno` ADD KEY IF NOT EXISTS `regency_id` (`regency_id`);
ALTER TABLE `mst_pegawaipnddkno` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);

ALTER TABLE `mst_pegawaipnddkno` ADD CONSTRAINT `fk_mst_pegawaipnddkno_regencies` FOREIGN KEY IF NOT EXISTS  (`regency_id`) REFERENCES `regencies` (`id`);
ALTER TABLE `mst_pegawaipnddkno` ADD CONSTRAINT `fk_mst_pegawaipnddkno_mst_pegawai` FOREIGN KEY IF NOT EXISTS (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);





CREATE TABLE IF NOT EXISTS `mst_pegawaikel` (
	`pegawaikel_id` varchar(36) NOT NULL , 
	`hubkel_id` varchar(36) NOT NULL , 
	`pegawaikel_nama` varchar(255) NOT NULL , 
	`pegawaikel_tmptlahir` varchar(36)  , 
	`pegawaikel_tgllahir` date  , 
	`pegawai_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`pegawaikel_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Pendidikan Non Formal';


ALTER TABLE `mst_pegawaikel` ADD COLUMN IF NOT EXISTS  `hubkel_id` varchar(36) NOT NULL  AFTER `pegawaikel_id`;
ALTER TABLE `mst_pegawaikel` ADD COLUMN IF NOT EXISTS  `pegawaikel_nama` varchar(255) NOT NULL  AFTER `hubkel_id`;
ALTER TABLE `mst_pegawaikel` ADD COLUMN IF NOT EXISTS  `pegawaikel_tmptlahir` varchar(36)   AFTER `pegawaikel_nama`;
ALTER TABLE `mst_pegawaikel` ADD COLUMN IF NOT EXISTS  `pegawaikel_tgllahir` date   AFTER `pegawaikel_tmptlahir`;
ALTER TABLE `mst_pegawaikel` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `pegawaikel_tgllahir`;


ALTER TABLE `mst_pegawaikel` MODIFY COLUMN IF EXISTS  `hubkel_id` varchar(36) NOT NULL   AFTER `pegawaikel_id`;
ALTER TABLE `mst_pegawaikel` MODIFY COLUMN IF EXISTS  `pegawaikel_nama` varchar(255) NOT NULL   AFTER `hubkel_id`;
ALTER TABLE `mst_pegawaikel` MODIFY COLUMN IF EXISTS  `pegawaikel_tmptlahir` varchar(36)    AFTER `pegawaikel_nama`;
ALTER TABLE `mst_pegawaikel` MODIFY COLUMN IF EXISTS  `pegawaikel_tgllahir` date    AFTER `pegawaikel_tmptlahir`;
ALTER TABLE `mst_pegawaikel` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `pegawaikel_tgllahir`;



ALTER TABLE `mst_pegawaikel` ADD KEY IF NOT EXISTS `hubkel_id` (`hubkel_id`);
ALTER TABLE `mst_pegawaikel` ADD KEY IF NOT EXISTS `pegawaikel_tmptlahir` (`pegawaikel_tmptlahir`);
ALTER TABLE `mst_pegawaikel` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);

ALTER TABLE `mst_pegawaikel` ADD CONSTRAINT `fk_mst_pegawaikel_mst_hubkel` FOREIGN KEY IF NOT EXISTS  (`hubkel_id`) REFERENCES `mst_hubkel` (`hubkel_id`);
ALTER TABLE `mst_pegawaikel` ADD CONSTRAINT `fk_mst_pegawaikel_regencies` FOREIGN KEY IF NOT EXISTS  (`pegawaikel_tmptlahir`) REFERENCES `regencies` (`id`);
ALTER TABLE `mst_pegawaikel` ADD CONSTRAINT `fk_mst_pegawaikel_mst_pegawai` FOREIGN KEY IF NOT EXISTS (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);





CREATE TABLE IF NOT EXISTS `mst_pegawaiorg` (
	`pegawaiorg_id` varchar(36) NOT NULL , 
	`pegawaiorg_nama` varchar(255) NOT NULL , 
	`pegawaiorg_sebagai` varchar(255) NOT NULL , 
	`regency_id` varchar(36) NOT NULL , 
	`pegawaiorg_tahun` int(11) NOT NULL , 
	`pegawaiorg_descr` varchar(10000) NOT NULL , 
	`pegawai_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`pegawaiorg_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Pendidikan Non Formal';


ALTER TABLE `mst_pegawaiorg` ADD COLUMN IF NOT EXISTS  `pegawaiorg_nama` varchar(255) NOT NULL  AFTER `pegawaiorg_id`;
ALTER TABLE `mst_pegawaiorg` ADD COLUMN IF NOT EXISTS  `pegawaiorg_sebagai` varchar(255) NOT NULL  AFTER `pegawaiorg_nama`;
ALTER TABLE `mst_pegawaiorg` ADD COLUMN IF NOT EXISTS  `regency_id` varchar(36) NOT NULL  AFTER `pegawaiorg_sebagai`;
ALTER TABLE `mst_pegawaiorg` ADD COLUMN IF NOT EXISTS  `pegawaiorg_tahun` int(11) NOT NULL  AFTER `regency_id`;
ALTER TABLE `mst_pegawaiorg` ADD COLUMN IF NOT EXISTS  `pegawaiorg_descr` varchar(10000) NOT NULL  AFTER `pegawaiorg_tahun`;
ALTER TABLE `mst_pegawaiorg` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `pegawaiorg_descr`;


ALTER TABLE `mst_pegawaiorg` MODIFY COLUMN IF EXISTS  `pegawaiorg_nama` varchar(255) NOT NULL   AFTER `pegawaiorg_id`;
ALTER TABLE `mst_pegawaiorg` MODIFY COLUMN IF EXISTS  `pegawaiorg_sebagai` varchar(255) NOT NULL   AFTER `pegawaiorg_nama`;
ALTER TABLE `mst_pegawaiorg` MODIFY COLUMN IF EXISTS  `regency_id` varchar(36) NOT NULL   AFTER `pegawaiorg_sebagai`;
ALTER TABLE `mst_pegawaiorg` MODIFY COLUMN IF EXISTS  `pegawaiorg_tahun` int(11) NOT NULL   AFTER `regency_id`;
ALTER TABLE `mst_pegawaiorg` MODIFY COLUMN IF EXISTS  `pegawaiorg_descr` varchar(10000) NOT NULL   AFTER `pegawaiorg_tahun`;
ALTER TABLE `mst_pegawaiorg` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `pegawaiorg_descr`;



ALTER TABLE `mst_pegawaiorg` ADD KEY IF NOT EXISTS `regency_id` (`regency_id`);
ALTER TABLE `mst_pegawaiorg` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);

ALTER TABLE `mst_pegawaiorg` ADD CONSTRAINT `fk_mst_pegawaiorg_regencies` FOREIGN KEY IF NOT EXISTS  (`regency_id`) REFERENCES `regencies` (`id`);
ALTER TABLE `mst_pegawaiorg` ADD CONSTRAINT `fk_mst_pegawaiorg_mst_pegawai` FOREIGN KEY IF NOT EXISTS (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);





CREATE TABLE IF NOT EXISTS `mst_pegawairef` (
	`pegawairef_id` varchar(36) NOT NULL , 
	`pegawairef_nama` varchar(255) NOT NULL , 
	`pegawairef_hubungan` varchar(255) NOT NULL , 
	`pegawairef_handphone` varchar(20)  , 
	`pegawai_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`pegawairef_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Pendidikan Non Formal';


ALTER TABLE `mst_pegawairef` ADD COLUMN IF NOT EXISTS  `pegawairef_nama` varchar(255) NOT NULL  AFTER `pegawairef_id`;
ALTER TABLE `mst_pegawairef` ADD COLUMN IF NOT EXISTS  `pegawairef_hubungan` varchar(255) NOT NULL  AFTER `pegawairef_nama`;
ALTER TABLE `mst_pegawairef` ADD COLUMN IF NOT EXISTS  `pegawairef_handphone` varchar(20)   AFTER `pegawairef_hubungan`;
ALTER TABLE `mst_pegawairef` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `pegawairef_handphone`;


ALTER TABLE `mst_pegawairef` MODIFY COLUMN IF EXISTS  `pegawairef_nama` varchar(255) NOT NULL   AFTER `pegawairef_id`;
ALTER TABLE `mst_pegawairef` MODIFY COLUMN IF EXISTS  `pegawairef_hubungan` varchar(255) NOT NULL   AFTER `pegawairef_nama`;
ALTER TABLE `mst_pegawairef` MODIFY COLUMN IF EXISTS  `pegawairef_handphone` varchar(20)    AFTER `pegawairef_hubungan`;
ALTER TABLE `mst_pegawairef` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `pegawairef_handphone`;



ALTER TABLE `mst_pegawairef` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);

ALTER TABLE `mst_pegawairef` ADD CONSTRAINT `fk_mst_pegawairef_mst_pegawai` FOREIGN KEY IF NOT EXISTS (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);





CREATE TABLE IF NOT EXISTS `mst_pegawaicard` (
	`pegawaicard_id` varchar(36) NOT NULL , 
	`card_id` varchar(36) NOT NULL , 
	`pegawaicard_number` varchar(255) NOT NULL , 
	`pegawaicard_isexpired` tinyint(1) NOT NULL DEFAULT 0, 
	`pegawaicard_expired` date  , 
	`pegawaicard_file` varchar(90)  , 
	`pegawai_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `pegawaicard_number` (`pegawaicard_number`),
	PRIMARY KEY (`pegawaicard_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Pendidikan Non Formal';


ALTER TABLE `mst_pegawaicard` ADD COLUMN IF NOT EXISTS  `card_id` varchar(36) NOT NULL  AFTER `pegawaicard_id`;
ALTER TABLE `mst_pegawaicard` ADD COLUMN IF NOT EXISTS  `pegawaicard_number` varchar(255) NOT NULL  AFTER `card_id`;
ALTER TABLE `mst_pegawaicard` ADD COLUMN IF NOT EXISTS  `pegawaicard_isexpired` tinyint(1) NOT NULL DEFAULT 0 AFTER `pegawaicard_number`;
ALTER TABLE `mst_pegawaicard` ADD COLUMN IF NOT EXISTS  `pegawaicard_expired` date   AFTER `pegawaicard_isexpired`;
ALTER TABLE `mst_pegawaicard` ADD COLUMN IF NOT EXISTS  `pegawaicard_file` varchar(90)   AFTER `pegawaicard_expired`;
ALTER TABLE `mst_pegawaicard` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `pegawaicard_file`;


ALTER TABLE `mst_pegawaicard` MODIFY COLUMN IF EXISTS  `card_id` varchar(36) NOT NULL   AFTER `pegawaicard_id`;
ALTER TABLE `mst_pegawaicard` MODIFY COLUMN IF EXISTS  `pegawaicard_number` varchar(255) NOT NULL   AFTER `card_id`;
ALTER TABLE `mst_pegawaicard` MODIFY COLUMN IF EXISTS  `pegawaicard_isexpired` tinyint(1) NOT NULL DEFAULT 0  AFTER `pegawaicard_number`;
ALTER TABLE `mst_pegawaicard` MODIFY COLUMN IF EXISTS  `pegawaicard_expired` date    AFTER `pegawaicard_isexpired`;
ALTER TABLE `mst_pegawaicard` MODIFY COLUMN IF EXISTS  `pegawaicard_file` varchar(90)    AFTER `pegawaicard_expired`;
ALTER TABLE `mst_pegawaicard` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `pegawaicard_file`;


ALTER TABLE `mst_pegawaicard` ADD CONSTRAINT `pegawaicard_number` UNIQUE IF NOT EXISTS  (`pegawaicard_number`);

ALTER TABLE `mst_pegawaicard` ADD KEY IF NOT EXISTS `card_id` (`card_id`);
ALTER TABLE `mst_pegawaicard` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);

ALTER TABLE `mst_pegawaicard` ADD CONSTRAINT `fk_mst_pegawaicard_mst_card` FOREIGN KEY IF NOT EXISTS  (`card_id`) REFERENCES `mst_card` (`card_id`);
ALTER TABLE `mst_pegawaicard` ADD CONSTRAINT `fk_mst_pegawaicard_mst_pegawai` FOREIGN KEY IF NOT EXISTS (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);





CREATE TABLE IF NOT EXISTS `mst_pegawaiattch` (
	`pegawaiattch_id` varchar(36) NOT NULL , 
	`pegawaiattch_number` varchar(255) NOT NULL , 
	`pegawaiattch_file` varchar(90)  , 
	`pegawaiattch_isexpired` tinyint(1) NOT NULL DEFAULT 0, 
	`pegawaiattch_expired` date  , 
	`pegawai_id` varchar(36) NOT NULL , 
	`_createby` varchar(14) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(14)  , 
	`_modifydate` datetime  , 
	UNIQUE KEY `pegawaiattch_number` (`pegawaiattch_number`),
	PRIMARY KEY (`pegawaiattch_id`)
) 
ENGINE=InnoDB
COMMENT='Daftar Pendidikan Non Formal';


ALTER TABLE `mst_pegawaiattch` ADD COLUMN IF NOT EXISTS  `pegawaiattch_number` varchar(255) NOT NULL  AFTER `pegawaiattch_id`;
ALTER TABLE `mst_pegawaiattch` ADD COLUMN IF NOT EXISTS  `pegawaiattch_file` varchar(90)   AFTER `pegawaiattch_number`;
ALTER TABLE `mst_pegawaiattch` ADD COLUMN IF NOT EXISTS  `pegawaiattch_isexpired` tinyint(1) NOT NULL DEFAULT 0 AFTER `pegawaiattch_file`;
ALTER TABLE `mst_pegawaiattch` ADD COLUMN IF NOT EXISTS  `pegawaiattch_expired` date   AFTER `pegawaiattch_isexpired`;
ALTER TABLE `mst_pegawaiattch` ADD COLUMN IF NOT EXISTS  `pegawai_id` varchar(36) NOT NULL  AFTER `pegawaiattch_expired`;


ALTER TABLE `mst_pegawaiattch` MODIFY COLUMN IF EXISTS  `pegawaiattch_number` varchar(255) NOT NULL   AFTER `pegawaiattch_id`;
ALTER TABLE `mst_pegawaiattch` MODIFY COLUMN IF EXISTS  `pegawaiattch_file` varchar(90)    AFTER `pegawaiattch_number`;
ALTER TABLE `mst_pegawaiattch` MODIFY COLUMN IF EXISTS  `pegawaiattch_isexpired` tinyint(1) NOT NULL DEFAULT 0  AFTER `pegawaiattch_file`;
ALTER TABLE `mst_pegawaiattch` MODIFY COLUMN IF EXISTS  `pegawaiattch_expired` date    AFTER `pegawaiattch_isexpired`;
ALTER TABLE `mst_pegawaiattch` MODIFY COLUMN IF EXISTS  `pegawai_id` varchar(36) NOT NULL   AFTER `pegawaiattch_expired`;


ALTER TABLE `mst_pegawaiattch` ADD CONSTRAINT `pegawaiattch_number` UNIQUE IF NOT EXISTS  (`pegawaiattch_number`);

ALTER TABLE `mst_pegawaiattch` ADD KEY IF NOT EXISTS `pegawai_id` (`pegawai_id`);

ALTER TABLE `mst_pegawaiattch` ADD CONSTRAINT `fk_mst_pegawaiattch_mst_pegawai` FOREIGN KEY IF NOT EXISTS (`pegawai_id`) REFERENCES `mst_pegawai` (`pegawai_id`);





