'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Gender",
	autoid: false,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master gender
	`,

	persistent: {
		mst_gender : {
			primarykeys: ['gender_id'],
			comment: 'Master Gender',
			data: {
				gender_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: true, suppresslist:false, options:{required:true,invalidMessage:'ID required'}},
				gender_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name required'}},
			},
			uniques: {
				'gender_name' : ['gender_name']
			},
			defaultsearch: ['gender_id', 'gender_name'],
		}


	},

	schema: {
		title: 'Gender',
		header: 'mst_gender',
		detils: {
		}
	}
}



