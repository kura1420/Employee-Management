'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Country",
	autoid: true,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master countries
	`,

	persistent: {
		countries : {
			primarykeys: ['id'],
			comment: 'Daftar Country',
			data: {
				id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true},
				name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name is required'}},
				iso2: {text:'ISO2', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'ISO2 is required'}},
				iso3: {text:'ISO3', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'ISO3 is required'}},
				phone_code: {text:'Phone Code', type: dbtype.int(7), null:true, suppresslist:true, options: {required: true, invalidMessage: 'Phone Code wajib diisi'} },
				postcode_required: {text:'Postcode', type: dbtype.boolean, null:false, default:'0'},
				is_eu: {text:'isEU', type: dbtype.boolean, null:false, default:'0'},
			},

			defaultsearch: [
				'name',
			],

			uniques: {
				
            }
			
		},

	},

	schema: {
		title: 'Country',
		header: 'countries',
		detils: {}
	}
}