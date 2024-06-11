'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Kota",
	autoid: true,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master kota
	`,

	persistent: {
		regencies : {
			primarykeys: ['id'],
			comment: 'Daftar Kota',
			data: {
				id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name is required'}},
				province_id: {
					text:'Provinsi', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Provinsi required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'provinces',
						field_value: 'id', field_display: 'name', field_display_name: 'prov_name',
						api: 'global/region/provinces/list',
						title: 'Daftar Provinsi',
						field_mappings: [
							`{mapping: 'id', text: 'ID'}`,
							`{mapping: 'name',  text: 'Name'}`,
						],
						onDataLoadingHandler: true,
						onDataLoadedHandler: true,
						onSelectedHandler: true,
					}),
				},
			},

			defaultsearch: [
				'name',
			],

			uniques: {
				
            }
			
		},

	},

	schema: {
		title: 'Kota',
		header: 'regencies',
		detils: {}
	}
}