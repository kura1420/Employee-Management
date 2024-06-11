'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Kontrak Pegawai",
	autoid: true,
	printing: true,
	idprefix: 'CON/',
	notes: `program untuk master Kontrak Pegawai`,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk transaction Kontrak Pegawai
	`,

	persistent: {
		trn_konpeg : {
			primarykeys: ['konpeg_id'],
			comment: 'Daftar Kontrak Pegawai',
			data: {
				konpeg_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: true, suppresslist:true, hidden:true,},

				pegawai_id: {
					text:'Pegawai', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Pegawai required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_pegawai',
						field_value: 'pegawai_id', field_display: 'pegawai_nama',
						api: 'hrms/master/pegawai/list',
						title: 'Daftar Pegawai',
						field_mappings: [
							`{mapping: 'pegawai_id', text: 'ID'}`,
							`{mapping: 'pegawai_nama',  text: 'Name'}`,
							`{mapping: 'pegawai_email',  text: 'Email'}`,
							`{mapping: 'pegawai_hp',  text: 'Handphone'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},
				
				dept_id: {
					text:'Dept', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Dept required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_dept',
						field_value: 'dept_id', field_display: 'dept_name',
						api: 'hrms/master/dept/list',
						title: 'Daftar Dept',
						field_mappings: [
							`{mapping: 'dept_id', text: 'ID'}`,
							`{mapping: 'dept_name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
							criteria.dept_isdisabled = 0;
						`,
						OnSelectedScript: `
				if (record.dept_id !== args.PreviousValue) {
					form.setValue(obj.cbo_divisi_id, "0", "-- PILIH --");
				}
				`,
					}),
				},
				divisi_id: {
					text:'Divisi', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Divisi required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_divisi',
						field_value: 'divisi_id', field_display: 'divisi_name',
						api: 'hrms/master/divisi/list',
						title: 'Daftar Divisi',
						field_mappings: [
							`{mapping: 'divisi_id', text: 'ID'}`,
							`{mapping: 'divisi_name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
							criteria.divisi_isdisabled = 0;
							criteria.dept_id = form.getValue(obj.cbo_dept_id);
						`,
					}),
				},
				jabatan_id: {
					text:'Jabatan', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Jabatan required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_jabatan',
						field_value: 'jabatan_id', field_display: 'jabatan_nama',
						api: 'hrms/master/jabatan/list',
						title: 'Daftar Jabatan',
						field_mappings: [
							`{mapping: 'jabatan_id', text: 'ID'}`,
							`{mapping: 'jabatan_nama',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
							criteria.jabatan_isdisabled = 0;
						`,
					}),
				},

				penempatan_id: {
					text:'Penempatan', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Penempatan required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_penempatan',
						field_value: 'penempatan_id', field_display: 'penempatan_nama',
						api: 'hrms/master/penempatan/list',
						title: 'Daftar Penempatan',
						field_mappings: [
							`{mapping: 'penempatan_id', text: 'ID'}`,
							`{mapping: 'penempatan_nama',  text: 'Nama'}`,
							`{mapping: 'prov_name',  text: 'Provinsi'}`,
							`{mapping: 'regencies_name',  text: 'Kota'}`,
							`{mapping: 'penempatan_alamat',  text: 'Alamat'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
							criteria.penempatan_isdisabled = 0;
						`,
					}),
				},

				jenkonpeg_id: {
					text:'Jenis Kontrak', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Jenis Kontrak required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_jenkonpeg',
						field_value: 'jenkonpeg_id', field_display: 'jenkonpeg_name',
						api: 'hrms/master/jenkonpeg/list',
						title: 'Daftar Jenis Kontrak',
						field_mappings: [
							`{mapping: 'jenkonpeg_id', text: 'ID'}`,
							`{mapping: 'jenkonpeg_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
							criteria.jenkonpeg_isdisabled = 0;
						`,
					}),
				},

				konpeg_periodval: {text:'Periode Kontrak', type: dbtype.int(11), null:true, suppresslist:true, options: {required: true, invalidMessage: 'Periode Kontrak is required'} },
				period_id: {
					text:'Periode', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Periode required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'mst_period',
						field_value: 'period_id', field_display: 'period_name',
						api: 'global/general/period/list',
						title: 'Daftar Periode',
						field_mappings: [
							`{mapping: 'period_id', text: 'ID'}`,
							`{mapping: 'period_name',  text: 'Nama'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
						staticfilter: `
							criteria.period_isdisabled = 0;
						`,
					}),
				},

				konpeg_dtmulai: {text:'Tgl. Bergabung', type: dbtype.date, null:false, suppresslist:true, options: {required: true, invalidMessage: 'Tgl. Bergabung is required'} },
				konpeg_dtberakhir: {text:'Tgl. Berakhir', type: dbtype.date, null:true, suppresslist:true, options: {disabled: true,} },
				konpeg_isextend: {text:'isExtend', type: dbtype.boolean, null:false, default:'0'},
				konpeg_iswork: {text:'isWork', type: dbtype.boolean, null:false, default:'0', suppresslist:false, unset:true, options: {disabled: true,} },
				konpeg_file: { 
					text: "Attach", type: dbtype.varchar(100), null: true, uppercase: true, suppresslist: true, 
					options: { required: false, invalidMessage: "", }, 
					comp: comp.Filebox(), 
					tips: '*File Surat Pernajian/Perintah Kerja', tipstype: 'visible',
				},
				konpeg_workat:  {text:'Work Execute At', type: dbtype.datetime, suppresslist: false, comp: comp.Textbox(), options: { disabled: true }, },
				konpeg_workby:  { text: 'Work Execute By', type: dbtype.varchar(14), suppresslist: false, options: { disabled: true }, lookup:'user' },
				konpeg_catatan: {text:'Catatan', type: dbtype.varchar(25555), null:true, suppresslist:true, options: {multiline:true,} },
			},

			defaultsearch: ['konpeg_id', ],

			uniques: {
				
            }
			
		},

	},

	schema: {
		title: 'Kontrak Pegawai',
		header: 'trn_konpeg',
		detils: {},
		xtions: {
			request: {
				buttonname: 'btn_work',
				buttontext: 'isWork',
			},
			unrequest: {
				buttonname: 'btn_unwork',
				buttontext: 'Unwork',
			},
		},
	}
}