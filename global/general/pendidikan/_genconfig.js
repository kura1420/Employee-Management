'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Pendidikan",
	autoid: true,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master pendidikan
	`,

	persistent: {
		mst_pnddk : {
			primarykeys: ['pnddk_id'],
			comment: 'Master Pendidikan',
			data: {
				pnddk_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				pnddk_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name required'}},
			},
			uniques: {
				'pnddk_name' : ['pnddk_name']
			},
			defaultsearch: ['pnddk_id', 'pnddk_name'],
		}


	},

	schema: {
		title: 'Pendidikan',
		header: 'mst_pnddk',
		detils: {
		}
	}
}



