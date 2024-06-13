'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Pegawai",
	autoid: false,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master pegawai
	`,

	persistent: {
		mst_pegawai : {
			primarykeys: ['pegawai_id'],
			comment: 'Daftar Pegawai',
			data: {
				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, options:{required:true,invalidMessage:'Number ID is required'}},
				pegawai_nama: {text:'Nama Lengkap', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama Lengkap is required'}},
				pegawai_email: {text:'Email', type: dbtype.varchar(255), null:true, suppresslist:false, options: {validType:'email'} },
				pegawai_hp: {text:'Handphone', type: dbtype.varchar(20), null:false, suppresslist:false, options: {required: true, invalidMessage: 'Handphone wajib diisi'} },
				pegawai_foto: { text: "Foto", type: dbtype.varchar(90), null: true, uppercase: false, suppresslist: true, options: { accept: 'image/*' }, comp: comp.Filebox(), },

				card_id: {
					text:'Kartu Identitas', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Kartu Identitas required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_card',
						field_value: 'card_id', field_display: 'card_name',
						api: 'global/general/card/list',
						title: 'Daftar Kartu Identitas',
						field_mappings: [
							`{mapping: 'card_id', text: 'ID'}`,
							`{mapping: 'card_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},
				
				gender_id: {
					text:'Jenis Kelamin', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Jenis Kelamin required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_gender',
						field_value: 'gender_id', field_display: 'gender_name',
						api: 'global/general/gender/list',
						title: 'Daftar Jenis Kelamin',
						field_mappings: [
							`{mapping: 'gender_id', text: 'ID'}`,
							`{mapping: 'gender_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},

				bloodtype_id: {
					text:'Golongan Darah', type: dbtype.varchar(36), null:true, suppresslist: true,
					options:{ prompt:'-- PILIH --' },
					comp: comp.Combo({
						table: 'mst_bloodtype',
						field_value: 'bloodtype_id', field_display: 'bloodtype_name',
						api: 'global/general/bloodtype/list',
						title: 'Daftar Golongan Darah',
						field_mappings: [
							`{mapping: 'bloodtype_id', text: 'ID'}`,
							`{mapping: 'bloodtype_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},

				religion_id: {
					text:'Agama', type: dbtype.varchar(36), null:true, suppresslist: true,
					options:{ prompt:'-- PILIH --' },
					comp: comp.Combo({
						table: 'mst_religion',
						field_value: 'religion_id', field_display: 'religion_name',
						api: 'global/general/religion/list',
						title: 'Daftar Agama',
						field_mappings: [
							`{mapping: 'religion_id', text: 'ID'}`,
							`{mapping: 'religion_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},

				pegawai_iswna: {text:'isWna', type: dbtype.boolean, null:false, default:0},

				countries_id: {
					text:'Negara', type: dbtype.varchar(36), null:true, suppresslist: true,
					options:{ prompt:'-- PILIH --' },
					comp: comp.Combo({
						table: 'countries',
						field_value: 'id', field_display: 'name',
						api: 'global/region/countries/list',
						title: 'Daftar Negara',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},

				marital_id: {
					text:'Status Perkawinan', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Status Perkawinan required', prompt:'-- PILIH --' },
					comp: comp.Combo({
						table: 'mst_marital',
						field_value: 'marital_id', field_display: 'marital_name',
						api: 'global/general/marital/list',
						title: 'Daftar Status Perkawinan',
						field_mappings: [
							`{mapping: 'marital_id', text: 'ID'}`,
							`{mapping: 'marital_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},

				pnddk_id: {
					text:'Pendidikan Terakhir', type: dbtype.varchar(36), null:false, suppresslist: true,
					options:{required:true,invalidMessage:'Pendidikan Terakhir required', prompt:'-- PILIH --' },
					comp: comp.Combo({
						table: 'mst_pnddk',
						field_value: 'pnddk_id', field_display: 'pnddk_name',
						api: 'global/general/pendidikan/list',
						title: 'Daftar Pendidikan',
						field_mappings: [
							`{mapping: 'pnddk_id', text: 'ID'}`,
							`{mapping: 'pnddk_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},

				worktype_id: {
					text:'Pekerjaan', type: dbtype.varchar(36), null:false, suppresslist: true,
					options:{ prompt:'-- PILIH --' },
					comp: comp.Combo({
						table: 'mst_worktype',
						field_value: 'worktype_id', field_display: 'worktype_name',
						api: 'global/general/worktype/list',
						title: 'Daftar Pekerjaan',
						field_mappings: [
							`{mapping: 'worktype_id', text: 'ID'}`,
							`{mapping: 'worktype_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},

				pegawai_tmptlahir: {
					text:'Kota', type: dbtype.varchar(36), null:false, suppresslist: true,
					options:{required:true,invalidMessage:'Kota required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'regencies',
						field_value: 'id', field_display: 'name', field_display_name: 'tmptlahir_name',
						api: 'global/region/regencies/list',
						title: 'Daftar Kota',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
					section: section.Begin('Tempat & Tgl. Lahir'),
				},
				pegawai_tgllahir: {
					text:'Tanggal', type: dbtype.date, null:false, suppresslist:false, 
					options: {required: true, invalidMessage: 'Tanggal lahir wajib diisi'},
					section: section.End(),
				},

				province_id: {
					text:'Provinsi', type: dbtype.varchar(36), null:false, suppresslist: true,
					options:{required:true,invalidMessage:'Provinsi required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'provinces',
						field_value: 'id', field_display: 'name', field_display_name: 'prov_name',
						api: 'global/region/provinces/list',
						title: 'Daftar Provinsi',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						OnSelectedScript: `
				form.setValue(obj.cbo_hubkel_id, "0", "-- PILIH --");
				form.setValue(obj.cbo_district_id, "0", "-- PILIH --");
				form.setValue(obj.cbo_villages_id, "0", "-- PILIH --");
        	`,
					}),
					section: section.Begin('Alamat Sesuai KTP'),
				},
				regency_id: {
					text:'Kota', type: dbtype.varchar(36), null:false, suppresslist: true,
					options:{required:true,invalidMessage:'Kota required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'regencies',
						field_value: 'id', field_display: 'name', field_display_name: 'regencies_name',
						api: 'global/region/regencies/list',
						title: 'Daftar Kota',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
				criteria.province_id = form.getValue(obj.cbo_province_id);
			`,
						OnSelectedScript: `
				form.setValue(obj.cbo_district_id, "0", "-- PILIH --");
				form.setValue(obj.cbo_villages_id, "0", "-- PILIH --");
			`,
					}),
				},
				district_id: {
					text:'Kecamatan', type: dbtype.varchar(36), null:true, suppresslist: true,
					options:{ prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'districts',
						field_value: 'id', field_display: 'name', field_display_name: 'districts_name',
						api: 'global/region/districts/list',
						title: 'Daftar Kecamatan',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
				criteria.regency_id = form.getValue(obj.cbo_regency_id);
			`,
						OnSelectedScript: `
				form.setValue(obj.cbo_villages_id, "0", "-- PILIH --");
			`,
					}),
				},
				villages_id: {
					text:'Kelurahan', type: dbtype.varchar(36), null:true, suppresslist: true,
					options:{ prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'villages',
						field_value: 'id', field_display: 'name', field_display_name: 'villagess_name',
						api: 'global/region/villages/list',
						title: 'Daftar Kelurahan',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
				criteria.villages = form.getValue(obj.cbo_villages);
			`,
					}),
				},
				pegawai_kodepos: {text:'Kode POS', type: dbtype.int(11), null:true, suppresslist:true, },
				pegawai_alamat: {
					text:'Alamat', type: dbtype.varchar(10000), null:false, uppercase: false, suppresslist:true, options:{required:true,invalidMessage:'Alamat is required',multiline:true},
					section: section.End(),
				},
			},

			defaultsearch: [ 'pegawai_id', 'pegawai_nama', 'pegawai_hp', 'pegawai_email' ],

			uniques: {
				
            }
			
		},

		mst_pegawaialmt: {
			primarykeys: ['pegawaialmt_id'],
			comment: 'Daftar Alamat Sesuai Domisili',
			data: {
				pegawaialmt_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				province_id: {
					text:'Provinsi', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Provinsi required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'provinces',
						field_value: 'id', field_display: 'name', field_display_name: 'prov_name',
						api: 'global/region/provinces/list',
						title: 'Daftar Provinsi',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						OnSelectedScript: `
				form.setValue(obj.cbo_regency_id, "0", "-- PILIH --");
				form.setValue(obj.cbo_district_id, "0", "-- PILIH --");
				form.setValue(obj.cbo_villages_id, "0", "-- PILIH --");
        	`,
					}),
				},
				regency_id: {
					text:'Kota', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Kota required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'regencies',
						field_value: 'id', field_display: 'name', field_display_name: 'regencies_name',
						api: 'global/region/regencies/list',
						title: 'Daftar Kota',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
				criteria.province_id = form.getValue(obj.cbo_province_id);
			`,
						OnSelectedScript: `
				form.setValue(obj.cbo_district_id, "0", "-- PILIH --");
				form.setValue(obj.cbo_villages_id, "0", "-- PILIH --");
			`,
					}),
				},
				district_id: {
					text:'Kecamatan', type: dbtype.varchar(36), null:true, suppresslist: false,
					options:{ prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'districts',
						field_value: 'id', field_display: 'name', field_display_name: 'districts_name',
						api: 'global/region/districts/list',
						title: 'Daftar Kecamatan',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
				criteria.regency_id = form.getValue(obj.cbo_regency_id);
			`,
						OnSelectedScript: `
				form.setValue(obj.cbo_villages_id, "0", "-- PILIH --");
			`,
					}),
				},
				villages_id: {
					text:'Kelurahan', type: dbtype.varchar(36), null:true, suppresslist: false,
					options:{ prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'villages',
						field_value: 'id', field_display: 'name', field_display_name: 'villagess_name',
						api: 'global/region/villages/list',
						title: 'Daftar Kelurahan',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
				criteria.villages = form.getValue(obj.cbo_villages);
			`,
					}),
				},
				pegawaialmt_kodepos: {text:'Kode POS', type: dbtype.int(11), null:true, suppresslist:false, },
				pegawaialmt_alamat: { text:'Alamat', type: dbtype.varchar(10000), null:false, uppercase: false, suppresslist:false, options:{required:true,invalidMessage:'Alamat is required',multiline:true}, },
				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, hidden:true,},
			},
			uniques: {
				
			},
			defaultsearch: [ 'pegawaialmt_alamat', 'pegawaialmt_kodepos' ],
		},

		mst_pegawaipnddk: {
			primarykeys: ['pegawaipnddk_id'],
			comment: 'Daftar Riwayat Pendidikan',
			data: {
				pegawaipnddk_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				
				pnddk_id: {
					text:'Pendidikan', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Pendidikan required', prompt:'-- PILIH --' },
					comp: comp.Combo({
						table: 'mst_pnddk',
						field_value: 'pnddk_id', field_display: 'pnddk_name',
						api: 'global/general/pendidikan/list',
						title: 'Daftar Pendidikan',
						field_mappings: [
							`{mapping: 'pnddk_id', text: 'ID'}`,
							`{mapping: 'pnddk_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},

				pegawaipnddk_nama: {text:'Nama Tempat', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama Tempat is required'}},
				pegawaipnddk_jurusan: {text:'Jurusan', type: dbtype.varchar(255), null:true, uppercase: false, },
				pegawaipnddk_lulus: {text:'Tahun Lulus', type: dbtype.int(11), null:false, suppresslist:false, options: {required: true, invalidMessage: 'Tahun Lulus wajib diisi'} },

				regency_id: {
					text:'Kota', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Kota required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'regencies',
						field_value: 'id', field_display: 'name', field_display_name: 'regencies_name',
						api: 'global/region/regencies/list',
						title: 'Daftar Kota',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},
				pegawaipnddk_file: { text: "Izasah", type: dbtype.varchar(90), null: true, uppercase: false, suppresslist: true, comp: comp.Filebox(), },

				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, hidden:true,},
			},
			uniques: {
				
			},
			defaultsearch: [ 'pegawaipnddk_nama', 'pegawaipnddk_jurusan', 'pegawaipnddk_lulus' ],
		},

		mst_pegawaikerja: {
			primarykeys: ['pegawaikerja_id'],
			comment: 'Daftar Riwayat Pendidikan',
			data: {
				pegawaikerja_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				pegawaikerja_nama: {text:'Perusahaan', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Perusahaan is required'}},
				pegawaikerja_thnmasuk: {text:'Tahun Masuk', type: dbtype.int(11), null:false, suppresslist:false, options: {required: true, invalidMessage: 'Tahun Masuk wajib diisi'} },
				pegawaikerja_thnkeluar: {text:'Tahun Keluar', type: dbtype.int(11), null:false, suppresslist:false, options: {required: true, invalidMessage: 'Tahun Keluar wajib diisi'} },
				pegawaikerja_jabatan: {text:'Jabatan', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Jabatan is required'}},
				pegawaikerja_descr: { text:'Keterangan Pekerjaan', type: dbtype.varchar(10000), null:false, uppercase: false, suppresslist:true, options:{required:true,invalidMessage:'Keterangan Pekerjaan is required',multiline:true}, },
				pegawaikerja_alasan: { text:'Alasan Keluar', type: dbtype.varchar(10000), null:false, uppercase: false, suppresslist:true, options:{required:true,invalidMessage:'Alasan Keluar is required',multiline:true}, },
				pegawaikerja_file: { text: "Paklaring", type: dbtype.varchar(90), null: true, uppercase: false, suppresslist: true, comp: comp.Filebox(), },

				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, hidden:true,},
			},
			uniques: {
				
			},
			defaultsearch: [ 'pegawaikerja_nama', 'pegawaikerja_jabatan' ],
		},

		mst_pegawaipnddkno: {
			primarykeys: ['pegawaipnddkno_id'],
			comment: 'Daftar Pendidikan Non Formal',
			data: {
				pegawaipnddkno_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				pegawaipnddkno_tempat: {text:'Nama Tempat', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama Tempat is required'}},
				pegawaipnddkno_kegiatan: {text:'Nama Kegiatan', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama Kegiatan is required'}},
				regency_id: {
					text:'Kota', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Kota required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'regencies',
						field_value: 'id', field_display: 'name', field_display_name: 'regencies_name',
						api: 'global/region/regencies/list',
						title: 'Daftar Kota',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},
				pegawaipnddkno_tahun: {text:'Tahun', type: dbtype.int(11), null:false, suppresslist:false, options: {required: true, invalidMessage: 'Tahun wajib diisi'} },
				pegawaipnddkno_file: { text: "Sertifikat", type: dbtype.varchar(90), null: true, uppercase: false, suppresslist: true, comp: comp.Filebox(), },
				pegawaipnddkno_descr: { text:'Keterangan', type: dbtype.varchar(10000), null:false, uppercase: false, suppresslist:true, options:{required:true,invalidMessage:'Keterangan is required',multiline:true}, },

				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, hidden:true,},
			},
			uniques: {
				
			},
			defaultsearch: [ 'pegawaipnddkno_nama', 'pegawaipnddkno_tahun' ],
		},

		mst_pegawaikel: {
			primarykeys: ['pegawaikel_id'],
			comment: 'Daftar Pendidikan Non Formal',
			data: {
				pegawaikel_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				
				hubkel_id: {
					text:'Hubungan Keluarga', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Hubungan Keluarga required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_hubkel',
						field_value: 'hubkel_id', field_display: 'hubkel_name',
						api: 'global/general/hubkel/list',
						title: 'Daftar Hubungan Keluarga',
						field_mappings: [
							`{mapping: 'hubkel_id', text: 'ID'}`,
							`{mapping: 'hubkel_name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},

				pegawaikel_nama: {text:'Nama', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama is required'}},
				pegawaikel_tmptlahir: {
					text:'Kota', type: dbtype.varchar(36), null:true, suppresslist: true,
					options:{ prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'regencies',
						field_value: 'id', field_display: 'name', 
						api: 'global/region/regencies/list',
						title: 'Daftar Kota',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},
				pegawaikel_tgllahir: { text:'Tanggal', type: dbtype.date, null:true, suppresslist:true, },

				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, hidden:true,},
			},
			uniques: {
				
			},
			defaultsearch: [ 'pegawaikel_nama' ],
		},

		mst_pegawaiorg: {
			primarykeys: ['pegawaiorg_id'],
			comment: 'Daftar Pendidikan Non Formal',
			data: {
				pegawaiorg_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				
				pegawaiorg_nama: {text:'Nama', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama is required'}},
				pegawaiorg_sebagai: {text:'Sebagai', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Sebagai is required'}},
				regency_id: {
					text:'Kota', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Kota required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'regencies',
						field_value: 'id', field_display: 'name', field_display_name: 'regencies_name',
						api: 'global/region/regencies/list',
						title: 'Daftar Kota',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},
				pegawaiorg_tahun: {text:'Tahun', type: dbtype.int(11), null:false, suppresslist:false, options: {required: true, invalidMessage: 'Tahun wajib diisi'} },
				pegawaiorg_descr: { text:'Keterangan', type: dbtype.varchar(10000), null:false, uppercase: false, suppresslist:true, options:{required:true,invalidMessage:'Keterangan is required',multiline:true}, },

				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, hidden:true,},
			},
			uniques: {
				
			},
			defaultsearch: [ 'pegawaiorg_nama', 'pegawaiorg_sebagai' ],
		},

		mst_pegawairef: {
			primarykeys: ['pegawairef_id'],
			comment: 'Daftar Pendidikan Non Formal',
			data: {
				pegawairef_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				
				pegawairef_nama: {text:'Nama', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama is required'}},
				pegawairef_hubungan: {text:'Hubungan', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Hubungan is required'}},
				pegawairef_handphone: {text:'No. Handphone', type: dbtype.varchar(20), null:true, uppercase: false, },

				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, hidden:true,},
			},
			uniques: {
				
			},
			defaultsearch: [ 'pegawaiorg_nama', 'pegawaiorg_sebagai' ],
		},

		mst_pegawaicard: {
			primarykeys: ['pegawaicard_id'],
			comment: 'Daftar Pendidikan Non Formal',
			data: {
				pegawaicard_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				
				card_id: {
					text:'Kartu', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Kartu required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_card',
						field_value: 'card_id', field_display: 'card_name',
						api: 'global/general/card/list',
						title: 'Daftar Kartu',
						field_mappings: [
							`{mapping: 'card_id', text: 'ID'}`,
							`{mapping: 'card_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},
				pegawaicard_number: {text:'Number', type: dbtype.varchar(255), null:false, suppresslist:false, options: {required: true, invalidMessage: 'Handphone wajib diisi'} },
				pegawaicard_isexpired: {text:'isExpired', type: dbtype.boolean, null:false, default:0},
				pegawaicard_expired: { text:'Tgl. Expired', type: dbtype.date, null:true, suppresslist:false, },
				pegawaicard_file: { text: "Attachment", type: dbtype.varchar(90), null: true, uppercase: false, suppresslist: true, comp: comp.Filebox(), },

				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, hidden:true,},
			},
			uniques: {
				pegawaicard_number: ['pegawaicard_number'],
			},
			defaultsearch: [ 'pegawaicard_number'],
		},

		mst_pegawaiattch: {
			primarykeys: ['pegawaiattch_id'],
			comment: 'Daftar Pendidikan Non Formal',
			data: {
				pegawaiattch_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				pegawaiattch_number: {text:'Number', type: dbtype.varchar(255), null:false, suppresslist:false, options: {required: true, invalidMessage: 'Handphone wajib diisi'} },
				pegawaiattch_file: { text: "Attachment", type: dbtype.varchar(90), null: true, uppercase: false, suppresslist: true, comp: comp.Filebox(), },
				pegawaiattch_isexpired: {text:'isExpired', type: dbtype.boolean, null:false, default:0},
				pegawaiattch_expired: { text:'Tgl. Expired', type: dbtype.date, null:true, suppresslist:false, },

				pegawai_id: {text:'Number ID', type: dbtype.varchar(36), null:false, uppercase: false, hidden:true,},
			},
			uniques: {
				pegawaiattch_number: ['pegawaiattch_number'],
			},
			defaultsearch: [ 'pegawaiattch_number'],
		},
	},

	schema: {
		title: 'Pegawai',
		header: 'mst_pegawai',
		detils: {
			pegawaialmt : {
				title: 'Alamat Sesuai Domisili', table: 'mst_pegawaialmt', form: true, headerview: 'pegawaialmt_id',
				editorHandler: true,
				listHandler: true
			},

			pegawaicard : {
				title: 'Kartu', table: 'mst_pegawaicard', form: true, headerview: 'pegawaicard_number',
				editorHandler: true,
				listHandler: true
			},

			pegawaiattch : {
				title: 'Sertifikat/File Pendukung Lainnya', table: 'mst_pegawaiattch', form: true, headerview: 'pegawaiattch_number',
				editorHandler: true,
				listHandler: true
			},

			pegawaikel : {
				title: 'Keluarga', table: 'mst_pegawaikel', form: true, headerview: 'hubkel_id',
				editorHandler: true,
				listHandler: true
			},

			pegawaipnddk : {
				title: 'Riwayat Pendidikan', table: 'mst_pegawaipnddk', form: true, headerview: 'pnddk_id',
				editorHandler: true,
				listHandler: true
			},

			pegawaikerja : {
				title: 'Riwayat Perkejaan', table: 'mst_pegawaikerja', form: true, headerview: 'pegawaikerja_nama',
				editorHandler: true,
				listHandler: true
			},

			pegawaipnddkno : {
				title: 'Riwayat Pendidikan Non Formal', table: 'mst_pegawaipnddkno', form: true, headerview: 'pegawaipnddkno_nama',
				editorHandler: true,
				listHandler: true
			},

			pegawaiorg : {
				title: 'Organisasi', table: 'mst_pegawaiorg', form: true, headerview: 'pegawaiorg_nama',
				editorHandler: true,
				listHandler: true
			},

			pegawairef : {
				title: 'Referensi', table: 'mst_pegawairef', form: true, headerview: 'pegawairef_nama',
				editorHandler: true,
				listHandler: true
			},
		}
	}
}