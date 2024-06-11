'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Penempatan",
	autoid: false,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master penempatan
	`,

	persistent: {
		mst_penempatan : {
			primarykeys: ['penempatan_id'],
			comment: 'Daftar Penempatan',
			data: {
				penempatan_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: true, options:{required:true,invalidMessage:'ID is required'}},
				penempatan_nama: {text:'Nama', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Nama is required'}},
				penempatan_telp: {text:'Telp', type: dbtype.varchar(20), null:true, uppercase: false, },
				penempatan_email: {text:'Email', type: dbtype.varchar(255), null:true, uppercase: false, options:{validType:'email'}},
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
						OnSelectedScript: `
form.setValue(obj.cbo_regency_id, "0", "-- PILIH --");
        `,
					}),
				},
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
						staticfilter: `
				criteria.province_id = form.getValue(obj.cbo_province_id);
			`,
					}),
				},
				penempatan_alamat: {text:'Alamat', type: dbtype.varchar(10000), null:false, uppercase: false, suppresslist: true, options:{multiline:true,} },
				penempatan_isdisabled: {text:'isDisable', type: dbtype.boolean, null:false, default:'0'},
			},

			defaultsearch: ['penempatan_id', 'penempatan_nama', 'penempatan_prov', 'penempatan_kota', 'penempatan_telp', 'penempatan_email'],

			uniques: {
				
            }
			
		},

	},

	schema: {
		title: 'Penempatan',
		header: 'mst_penempatan',
		detils: {}
	}
}