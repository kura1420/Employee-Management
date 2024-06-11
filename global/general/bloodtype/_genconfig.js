'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Blood Type",
	autoid: true,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master bloodtype
	`,

	persistent: {
		mst_bloodtype : {
			primarykeys: ['bloodtype_id'],
			comment: 'Master Blood Type',
			data: {
				bloodtype_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				bloodtype_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name required'}},
			},
			uniques: {
				'bloodtype_name' : ['bloodtype_name']
			},
			defaultsearch: ['bloodtype_id', 'bloodtype_name'],
		}


	},

	schema: {
		title: 'Blood Type',
		header: 'mst_bloodtype',
		detils: {
		}
	}
}



