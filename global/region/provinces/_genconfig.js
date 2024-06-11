'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Provinsi",
	autoid: true,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master provinsi
	`,

	persistent: {
		provinces : {
			primarykeys: ['id'],
			comment: 'Daftar Provinsi',
			data: {
				id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true},
				name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name is required'}},
			},

			defaultsearch: [
				'name',
			],

			uniques: {
				
            }
			
		},

	},

	schema: {
		title: 'Provinsi',
		header: 'provinces',
		detils: {}
	}
}