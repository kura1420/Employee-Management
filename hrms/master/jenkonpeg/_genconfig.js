'use strict'

const dbtype = global.dbtype;
const comp = global.comp;

module.exports = {
	title: "Jenis Kontrak Pegawai",
	autoid: false,
	
	creatorname: "Abdul Syakur",
	creatoremail: "a.syakur14@gmail.com", 
	description: `
		program untuk master jenis kontrak pegawai
	`,

	persistent: {
		mst_jenkonpeg : {
			primarykeys: ['jenkonpeg_id'],
			comment: 'Daftar Jenis Kontrak Pegawai',
			data: {
				jenkonpeg_id: {text:'ID', type: dbtype.varchar(36), null:false, uppercase: true, options:{required:true,invalidMessage:'ID is required'}},
				jenkonpeg_name: {text:'Name', type: dbtype.varchar(255), null:false, uppercase: false, options:{required:true,invalidMessage:'Name is required'}},
				jenkonpeg_descr: {text:'Descr', type: dbtype.varchar(10000), null:true, uppercase: false, suppresslist: true, options:{multiline:true,} },
				jenkonpeg_isdisabled: {text:'isDisable', type: dbtype.boolean, null:false, default:'0'},
				jenkonpeg_ispermanent: {text:'isPermanent', type: dbtype.boolean, null:false, default:'0', options:{labelWidth:300,}},
			},

			defaultsearch: ['jenkonpeg_id', 'jenkonpeg_name'],

			uniques: {
				'jenkonpeg_name' : ['jenkonpeg_name']
            }
			
		},

	},

	schema: {
		title: 'Jenis Kontrak Pegawai',
		header: 'mst_jenkonpeg',
		detils: {}
	}
}