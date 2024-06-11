'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Hubungan Keluarga",
	autoid: true,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master hubkel
	`,

	persistent: {
		mst_hubkel : {
			primarykeys: ['hubkel_id'],
			comment: 'Master Hubungan Keluarga',
			data: {
				hubkel_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				hubkel_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name required'}},
			},
			uniques: {
				'hubkel_name' : ['hubkel_name']
			},
			defaultsearch: [ 'hubkel_name' ],
		}


	},

	schema: {
		title: 'Hubungan Keluarga',
		header: 'mst_hubkel',
		detils: {
		}
	}
}



