'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Kelurahan",
	autoid: true,
	
	jsonOverwrite: true,

	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master kelurahan
	`,

	persistent: {
		villages : {
			primarykeys: ['id'],
			comment: 'Daftar Kelurahan',
			data: {
				id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: false, suppresslist:true, hidden:true,},
				name: {text:'Nama', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama is required'}},
				district_id: {
					text:'Kelurahan', type: dbtype.varchar(36), null:false, suppresslist: false,
					options:{required:true,invalidMessage:'Kelurahan required', prompt:'-- PILIH --'},
					comp: comp.Combo({
						table: 'districts',
						field_value: 'id', field_display: 'name', field_display_name: 'districts_name',
						api: 'global/region/districts/list',
						title: 'Daftar Kelurahan',
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
		header: 'villages',
		detils: {}
	}
}