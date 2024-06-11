'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Divisi",
	autoid: false,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master divisi
	`,

	persistent: {
		mst_divisi : {
			primarykeys: ['divisi_id'],
			comment: 'Daftar Divisi',
			data: {
				divisi_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: true, options:{required:true,invalidMessage:'ID is required'}},
				divisi_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name is required'}},
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
					}),
				},
				divisi_descr: {text:'Descr', type: dbtype.varchar(10000), null:true, uppercase: false, suppresslist: true, options:{multiline:true,} },
				divisi_isdisabled: {caption:'Status', text:'Disabled', type: dbtype.boolean, null:false, default:'0'},
			},

			defaultsearch: ['divisi_id', 'divisi_name'],

			uniques: {
				'divisi_name' : ['divisi_name']
            }
			
		},

	},

	schema: {
		title: 'Divisi',
		header: 'mst_divisi',
		detils: {}
	}
}