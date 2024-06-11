'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Jabatan",
	autoid: false,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master jabatan
	`,

	persistent: {
		mst_jabatan : {
			primarykeys: ['jabatan_id'],
			comment: 'Daftar Jabatan',
			data: {
				jabatan_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: true, options:{required:true,invalidMessage:'ID is required'}},
				jabatan_nama: {text:'Nama', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama is required'}},
				jabatan_isdisabled: {text:'isDisable', type: dbtype.boolean, null:false, default:'0'},
			},

			defaultsearch: ['jabatan_id', 'jabatan_nama', ],

			uniques: {
				
            }
			
		},

	},

	schema: {
		title: 'Jabatan',
		header: 'mst_jabatan',
		detils: {}
	}
}