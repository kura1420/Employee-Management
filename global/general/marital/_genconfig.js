'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Marital",
	autoid: false,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master marital
	`,

	persistent: {
		mst_marital : {
			primarykeys: ['marital_id'],
			comment: 'Master Marital',
			data: {
				marital_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: true, suppresslist:false, options:{required:true,invalidMessage:'ID required'}},
				marital_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name required'}},
			},
			uniques: {
				'marital_name' : ['marital_name']
			},
			defaultsearch: ['marital_id', 'marital_name'],
		}


	},

	schema: {
		title: 'Marital',
		header: 'mst_marital',
		detils: {
		}
	}
}



