'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Kelurahan",
	autoid: true,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master districts
	`,

	persistent: {
		districts : {
			primarykeys: ['id'],
			comment: 'Daftar Kelurahan',
			data: {
				id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				name: {text:'Nama', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama is required'}},
				regency_id: {
					text:'Kota', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Kota required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'regencies',
						field_value: 'id', field_display: 'name', field_display_name: 'regencies_name',
						api: 'global/region/regencies/list',
						title: 'Daftar Kota',
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
		title: 'Kelurahan',
		header: 'districts',
		detils: {}
	}
}