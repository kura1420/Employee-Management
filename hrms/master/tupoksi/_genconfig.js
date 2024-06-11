'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "TuPokSi",
	autoid: true,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master tugas pokok dan fungsi
	`,

	persistent: {
		mst_tupoksi : {
			primarykeys: ['tupoksi_id'],
			comment: 'Daftar Tugas Pokok dan FungSi',
			data: {
				tupoksi_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
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
				tupoksi_tugas: {text:'Tugas', type: dbtype.varchar(10000), null:false, uppercase: false, suppresslist: true, options:{multiline:true,required:true,invalidMessage:'Tugas required',} },
				tupoksi_fungsi: {text:'Fungsi', type: dbtype.varchar(10000), null:false, uppercase: false, suppresslist: true, options:{multiline:true,required:true,invalidMessage:'Fungsi required',} },
				tupoksi_isdisabled: {caption:'Status', text:'Disabled', type: dbtype.boolean, null:false, default:'0'},
			},

			defaultsearch: [],

			uniques: {
				
            }
			
		},

	},

	schema: {
		title: 'TuPokSi',
		header: 'mst_tupoksi',
		detils: {}
	}
}