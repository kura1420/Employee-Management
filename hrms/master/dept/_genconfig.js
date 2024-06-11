'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Departement",
	autoid: false,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master departement
	`,

	persistent: {
		mst_dept : {
			primarykeys: ['dept_id'],
			comment: 'Daftar Departement',
			data: {
				dept_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: true, options:{required:true,invalidMessage:'ID is required'}},
				dept_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name is required'}},
				dept_descr: {text:'Descr', type: dbtype.varchar(10000), null:true, uppercase: false, suppresslist: true, options:{multiline:true,} },
				dept_isdisabled: {caption:'Status', text:'Disabled', type: dbtype.boolean, null:false, default:'0'},
			},

			defaultsearch: ['dept_id', 'dept_name'],

			uniques: {
				'dept_name' : ['dept_name']
            }
			
		},

	},

	schema: {
		title: 'Department',
		header: 'mst_dept',
		detils: {}
	}
}