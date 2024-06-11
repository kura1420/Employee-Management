'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Religion",
	autoid: false,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master religion
	`,

	persistent: {
		mst_religion : {
			primarykeys: ['religion_id'],
			comment: 'Master Religion",',
			data: {
				religion_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: true, suppresslist:false, options:{required:true,invalidMessage:'ID required'}},
				religion_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name required'}},
			},
			uniques: {
				'religion_name' : ['religion_name']
			},
			defaultsearch: ['religion_id', 'religion_name'],
		}


	},

	schema: {
		title: 'Religion',
		header: 'mst_religion',
		detils: {
		}
	}
}



