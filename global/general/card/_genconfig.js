'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Kartu Identitas",
	autoid: false,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master card
	`,

	persistent: {
		mst_card : {
			primarykeys: ['card_id'],
			comment: 'Master Kartu Identitas',
			data: {
				card_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:false, options:{required:true,invalidMessage:'ID required'}},
				card_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name required'}},
			},
			uniques: {
				'card_name' : ['card_name']
			},
			defaultsearch: ['card_id', 'card_name'],
		}


	},

	schema: {
		title: 'Kartu Identitas',
		header: 'mst_card',
		detils: {
		}
	}
}



