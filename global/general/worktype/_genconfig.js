'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Work Type",
	autoid: true,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master worktype
	`,

	persistent: {
		mst_worktype : {
			primarykeys: ['worktype_id'],
			comment: 'Master Work Type",',
			data: {
				worktype_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				worktype_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name required'}},
			},
			uniques: {
				'worktype_name' : ['worktype_name']
			},
			defaultsearch: ['worktype_id', 'worktype_name'],
		}


	},

	schema: {
		title: 'Work Type',
		header: 'mst_worktype',
		detils: {
		}
	}
}



