var this_page_id;
var this_page_options;

import {fgta4slideselect} from  '../../../../../index.php/asset/fgta/framework/fgta4libs/fgta4slideselect.mjs'
import * as hnd from  './konpeg-edit-hnd.mjs'

const txt_caption = $('#pnl_edit-caption')


const btn_edit = $('#pnl_edit-btn_edit')
const btn_save = $('#pnl_edit-btn_save')
const btn_delete = $('#pnl_edit-btn_delete')
const btn_print = $('#pnl_edit-btn_print');


const btn_work = $('#pnl_edit-btn_work')
const btn_unwork = $('#pnl_edit-btn_unwork')


const fl_konpeg_file_img = $('#pnl_edit-fl_konpeg_file_img');
const fl_konpeg_file_lnk = $('#pnl_edit-fl_konpeg_file_link');				
				

const pnl_form = $('#pnl_edit-form')
const obj = {
	txt_konpeg_id: $('#pnl_edit-txt_konpeg_id'),
	cbo_pegawai_id: $('#pnl_edit-cbo_pegawai_id'),
	cbo_dept_id: $('#pnl_edit-cbo_dept_id'),
	cbo_divisi_id: $('#pnl_edit-cbo_divisi_id'),
	cbo_jabatan_id: $('#pnl_edit-cbo_jabatan_id'),
	cbo_penempatan_id: $('#pnl_edit-cbo_penempatan_id'),
	cbo_jenkonpeg_id: $('#pnl_edit-cbo_jenkonpeg_id'),
	txt_konpeg_periodval: $('#pnl_edit-txt_konpeg_periodval'),
	cbo_period_id: $('#pnl_edit-cbo_period_id'),
	dt_konpeg_dtmulai: $('#pnl_edit-dt_konpeg_dtmulai'),
	dt_konpeg_dtberakhir: $('#pnl_edit-dt_konpeg_dtberakhir'),
	chk_konpeg_isextend: $('#pnl_edit-chk_konpeg_isextend'),
	chk_konpeg_iswork: $('#pnl_edit-chk_konpeg_iswork'),
	fl_konpeg_file: $('#pnl_edit-fl_konpeg_file'),
	txt_konpeg_workat: $('#pnl_edit-txt_konpeg_workat'),
	txt_konpeg_workby: $('#pnl_edit-txt_konpeg_workby'),
	txt_konpeg_catatan: $('#pnl_edit-txt_konpeg_catatan')
}




let form;
let rowdata;

export async function init(opt) {
	this_page_id = opt.id;
	this_page_options = opt;

	txt_caption.template = txt_caption.html();
	var disableedit = false;


	form = new global.fgta4form(pnl_form, {
		primary: obj.txt_konpeg_id,
		autoid: true,
		logview: 'trn_konpeg',
		btn_edit: disableedit==true? $('<a>edit</a>') : btn_edit,
		btn_save: disableedit==true? $('<a>save</a>') : btn_save,
		btn_delete: disableedit==true? $('<a>delete</a>') : btn_delete,		
		objects : obj,
		OnDataSaving: async (data, options) => { await form_datasaving(data, options) },
		OnDataSaveError: async (data, options) => { await form_datasaveerror(data, options) },
		OnDataSaved: async (result, options) => {  await form_datasaved(result, options) },
		OnDataDeleting: async (data, options) => { await form_deleting(data, options) },
		OnDataDeleted: async (result, options) => { await form_deleted(result, options) },
		OnIdSetup : (options) => { form_idsetup(options) },
		OnViewModeChanged : (viewonly) => { form_viewmodechanged(viewonly) },
		OnRecordStatusCreated: () => {
			undefined			
		}		
	});
	form.getHeaderData = () => {
		return getHeaderData();
	}


	btn_print.linkbutton({ onClick: () => { btn_print_click(); } });	
	
	// Generator: Commit Handler not exist
	// Generator: Approval Handler not exist
	btn_work.linkbutton({ onClick: () => { 
		if (typeof hnd.btn_work_click==='function') {
			hnd.btn_work_click(); 
		} else {
			btn_action_click({ action: 'request' }); 
		}
	} });
	btn_unwork.linkbutton({ onClick: () => { 
		if (typeof hnd.btn_unwork_click==='function') {
			hnd.btn_unwork_click(); 
		} else {
			btn_action_click({ action: 'unrequest' }); 
		}
	} });

	// Generator: Object Handler not exist


	obj.fl_konpeg_file.filebox({
		onChange: function(value) {
			var files = obj.fl_konpeg_file.filebox('files');
			var f = files[0];
			var reader = new FileReader();
			reader.onload = (function(loaded) {
				return function(e) {
					if (loaded.type.startsWith('image')) {
						var image = new Image();
						image.src = e.target.result;
						image.onload = function() {
							fl_konpeg_file_img.attr('src', e.target.result);
							fl_konpeg_file_img.show();
							fl_konpeg_file_lnk.hide();
						}
					} else {
						fl_konpeg_file_img.hide();
						fl_konpeg_file_lnk.hide();
					}
				}
			})(f);
			if (f!==undefined) { reader.readAsDataURL(f) }
		}
	})				
				


	obj.cbo_pegawai_id.name = 'pnl_edit-cbo_pegawai_id'		
	new fgta4slideselect(obj.cbo_pegawai_id, {
		title: 'Daftar Pegawai',
		returnpage: this_page_id,
		api: $ui.apis.load_pegawai_id,
		fieldValue: 'pegawai_id',
		fieldDisplay: 'pegawai_nama',
		fields: [
			{mapping: 'pegawai_id', text: 'ID'},
			{mapping: 'pegawai_nama', text: 'Name'},
			{mapping: 'pegawai_email',  text: 'Email'},
			{mapping: 'pegawai_hp',  text: 'Handphone'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_pegawai_id_dataloading === 'function') {
				hnd.cbo_pegawai_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_pegawai_id_dataloaded === 'function') {
				hnd.cbo_pegawai_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_pegawai_id_selected === 'function') {
					hnd.cbo_pegawai_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_dept_id.name = 'pnl_edit-cbo_dept_id'		
	new fgta4slideselect(obj.cbo_dept_id, {
		title: 'Daftar Dept',
		returnpage: this_page_id,
		api: $ui.apis.load_dept_id,
		fieldValue: 'dept_id',
		fieldDisplay: 'dept_name',
		fields: [
			{mapping: 'dept_id', text: 'ID'},
			{mapping: 'dept_name', text: 'Name'}
		],
		OnDataLoading: (criteria, options) => {
			criteria.dept_isdisabled = 0;
			if (typeof hnd.cbo_dept_id_dataloading === 'function') {
				hnd.cbo_dept_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_dept_id_dataloaded === 'function') {
				hnd.cbo_dept_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (record.dept_id !== args.PreviousValue) {
					form.setValue(obj.cbo_divisi_id, "0", "-- PILIH --");
				}
				
				if (typeof hnd.cbo_dept_id_selected === 'function') {
					hnd.cbo_dept_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_divisi_id.name = 'pnl_edit-cbo_divisi_id'		
	new fgta4slideselect(obj.cbo_divisi_id, {
		title: 'Daftar Divisi',
		returnpage: this_page_id,
		api: $ui.apis.load_divisi_id,
		fieldValue: 'divisi_id',
		fieldDisplay: 'divisi_name',
		fields: [
			{mapping: 'divisi_id', text: 'ID'},
			{mapping: 'divisi_name', text: 'Name'}
		],
		OnDataLoading: (criteria, options) => {
			criteria.divisi_isdisabled = 0;
							criteria.dept_id = form.getValue(obj.cbo_dept_id);
			if (typeof hnd.cbo_divisi_id_dataloading === 'function') {
				hnd.cbo_divisi_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_divisi_id_dataloaded === 'function') {
				hnd.cbo_divisi_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_divisi_id_selected === 'function') {
					hnd.cbo_divisi_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_jabatan_id.name = 'pnl_edit-cbo_jabatan_id'		
	new fgta4slideselect(obj.cbo_jabatan_id, {
		title: 'Daftar Jabatan',
		returnpage: this_page_id,
		api: $ui.apis.load_jabatan_id,
		fieldValue: 'jabatan_id',
		fieldDisplay: 'jabatan_nama',
		fields: [
			{mapping: 'jabatan_id', text: 'ID'},
			{mapping: 'jabatan_nama', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			criteria.jabatan_isdisabled = 0;
			if (typeof hnd.cbo_jabatan_id_dataloading === 'function') {
				hnd.cbo_jabatan_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_jabatan_id_dataloaded === 'function') {
				hnd.cbo_jabatan_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_jabatan_id_selected === 'function') {
					hnd.cbo_jabatan_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_penempatan_id.name = 'pnl_edit-cbo_penempatan_id'		
	new fgta4slideselect(obj.cbo_penempatan_id, {
		title: 'Daftar Penempatan',
		returnpage: this_page_id,
		api: $ui.apis.load_penempatan_id,
		fieldValue: 'penempatan_id',
		fieldDisplay: 'penempatan_nama',
		fields: [
			{mapping: 'penempatan_id', text: 'ID'},
			{mapping: 'penempatan_nama', text: 'Nama'},
			{mapping: 'prov_name',  text: 'Provinsi'},
			{mapping: 'regencies_name',  text: 'Kota'},
			{mapping: 'penempatan_alamat',  text: 'Alamat'}
		],
		OnDataLoading: (criteria, options) => {
			criteria.penempatan_isdisabled = 0;
			if (typeof hnd.cbo_penempatan_id_dataloading === 'function') {
				hnd.cbo_penempatan_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_penempatan_id_dataloaded === 'function') {
				hnd.cbo_penempatan_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_penempatan_id_selected === 'function') {
					hnd.cbo_penempatan_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_jenkonpeg_id.name = 'pnl_edit-cbo_jenkonpeg_id'		
	new fgta4slideselect(obj.cbo_jenkonpeg_id, {
		title: 'Daftar Jenis Kontrak',
		returnpage: this_page_id,
		api: $ui.apis.load_jenkonpeg_id,
		fieldValue: 'jenkonpeg_id',
		fieldDisplay: 'jenkonpeg_name',
		fields: [
			{mapping: 'jenkonpeg_id', text: 'ID'},
			{mapping: 'jenkonpeg_name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			criteria.jenkonpeg_isdisabled = 0;
			if (typeof hnd.cbo_jenkonpeg_id_dataloading === 'function') {
				hnd.cbo_jenkonpeg_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_jenkonpeg_id_dataloaded === 'function') {
				hnd.cbo_jenkonpeg_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_jenkonpeg_id_selected === 'function') {
					hnd.cbo_jenkonpeg_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_period_id.name = 'pnl_edit-cbo_period_id'		
	new fgta4slideselect(obj.cbo_period_id, {
		title: 'Daftar Periode',
		returnpage: this_page_id,
		api: $ui.apis.load_period_id,
		fieldValue: 'period_id',
		fieldDisplay: 'period_name',
		fields: [
			{mapping: 'period_id', text: 'ID'},
			{mapping: 'period_name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			criteria.period_isdisabled = 0;
			if (typeof hnd.cbo_period_id_dataloading === 'function') {
				hnd.cbo_period_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_period_id_dataloaded === 'function') {
				hnd.cbo_period_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_period_id_selected === 'function') {
					hnd.cbo_period_id_selected(value, display, record, args);
				}
			}
		},

	})				
				




	document.addEventListener('keydown', (ev)=>{
		if ($ui.getPages().getCurrentPage()==this_page_id) {
			if (ev.code=='KeyS' && ev.ctrlKey==true) {
				if (!form.isInViewMode()) {
					form.btn_save_click();
				}
				ev.stopPropagation()
				ev.preventDefault()
			}
		}
	}, true)
	
	document.addEventListener('OnSizeRecalculated', (ev) => {
		OnSizeRecalculated(ev.detail.width, ev.detail.height)
	})	

	document.addEventListener('OnButtonBack', (ev) => {
		var element = document.activeElement;
		element.blur();
		if ($ui.getPages().getCurrentPage()==this_page_id) {
			ev.detail.cancel = true;
			if (form.isDataChanged()) {
				form.canceledit(()=>{
					$ui.getPages().show('pnl_list', ()=>{
						form.setViewMode()
						$ui.getPages().ITEMS['pnl_list'].handler.scrolllast()
					})
				})
			} else {
				$ui.getPages().show('pnl_list', ()=>{
					form.setViewMode()
					$ui.getPages().ITEMS['pnl_list'].handler.scrolllast()
				})
			}
		
		}
	})

	document.addEventListener('OnButtonHome', (ev) => {
		if ($ui.getPages().getCurrentPage()==this_page_id) {
			if (form.isDataChanged()) {
				ev.detail.cancel = true;
				$ui.ShowMessage('Anda masih dalam mode edit dengan pending data, silakan matikan mode edit untuk kembali ke halaman utama.')
			}
		}
	})

	//button state
	if (typeof hnd.init==='function') {
		hnd.init({
			form: form,
			obj: obj,
			opt: opt,
			btn_action_click: (actionargs) => {
				if (typeof btn_action_click == 'function') {
					btn_action_click(actionargs);
				}
			}
		})
	}

}

export function OnSizeRecalculated(width, height) {
}

export function getForm() {
	return form
}

export function getCurrentRowdata() {
	return rowdata;
}

export function open(data, rowid, viewmode=true, fn_callback) {

	var caption = txt_caption.template;
	caption = caption.replace('{{STATE_BEG}}', '');
	caption = caption.replace('{{STATE_END}}', ' View');
	txt_caption.html(caption);


	rowdata = {
		data: data,
		rowid: rowid
	}

	var pOpt = form.getDefaultPrompt(false)
	var fn_dataopening = async (options) => {
		options.criteria[form.primary.mapping] = data[form.primary.mapping]
	}

	var fn_dataopened = async (result, options) => {
		var record = result.record;
		updatefilebox(record);

		/*

		*/
		for (var objid in obj) {
			let o = obj[objid]
			if (o.isCombo() && !o.isRequired()) {
				var value =  result.record[o.getFieldValueName()];
				if (value==null ) {
					record[o.getFieldValueName()] = pOpt.value;
					record[o.getFieldDisplayName()] = pOpt.text;
				}
			}
		}
  		updaterecordstatus(record)

		/* handle data saat opening data */   
		if (typeof hnd.form_dataopening == 'function') {
			hnd.form_dataopening(result, options);
		}


		form.SuspendEvent(true);
		form
			.fill(record)
			.setValue(obj.cbo_pegawai_id, record.pegawai_id, record.pegawai_nama)
			.setValue(obj.cbo_dept_id, record.dept_id, record.dept_name)
			.setValue(obj.cbo_divisi_id, record.divisi_id, record.divisi_name)
			.setValue(obj.cbo_jabatan_id, record.jabatan_id, record.jabatan_nama)
			.setValue(obj.cbo_penempatan_id, record.penempatan_id, record.penempatan_nama)
			.setValue(obj.cbo_jenkonpeg_id, record.jenkonpeg_id, record.jenkonpeg_name)
			.setValue(obj.cbo_period_id, record.period_id, record.period_name)
			.setViewMode(viewmode)
			.lock(false)
			.rowid = rowid


		/* tambahkan event atau behaviour saat form dibuka
		   apabila ada rutin mengubah form dan tidak mau dijalankan pada saat opening,
		   cek dengan form.isEventSuspended()
		*/   
		if (typeof hnd.form_dataopened == 'function') {
			hnd.form_dataopened(result, options);
		}


		/* commit form */
		form.commit()
		form.SuspendEvent(false); 
		updatebuttonstate(record)


		/* update rowdata */
		for (var nv in rowdata.data) {
			if (record[nv]!=undefined) {
				rowdata.data[nv] = record[nv];
			}
		}

		// tampilkan form untuk data editor
		if (typeof fn_callback==='function') {
			fn_callback(null, rowdata.data);
		}
		
	}

	var fn_dataopenerror = (err) => {
		$ui.ShowMessage('[ERROR]'+err.errormessage);
	}

	form.dataload(fn_dataopening, fn_dataopened, fn_dataopenerror)
	
}


export function createnew() {

	var caption = txt_caption.template;
	caption = caption.replace('{{STATE_BEG}}', 'Create New ');
	caption = caption.replace('{{STATE_END}}', '');
	txt_caption.html(caption);


	form.createnew(async (data, options)=>{
		// console.log(data)
		// console.log(options)
		form.rowid = null

		// set nilai-nilai default untuk form
		data.konpeg_periodval = 0
		data.konpeg_dtmulai = global.now()
		data.konpeg_dtberakhir = global.now()
		data.konpeg_isextend = '0'
		data.konpeg_iswork = '0'

		data.pegawai_id = '0'
		data.pegawai_nama = '-- PILIH --'
		data.dept_id = '0'
		data.dept_name = '-- PILIH --'
		data.divisi_id = '0'
		data.divisi_name = '-- PILIH --'
		data.jabatan_id = '0'
		data.jabatan_nama = '-- PILIH --'
		data.penempatan_id = '0'
		data.penempatan_nama = '-- PILIH --'
		data.jenkonpeg_id = '0'
		data.jenkonpeg_name = '-- PILIH --'
		data.period_id = '0'
		data.period_name = '-- PILIH --'

		if (typeof hnd.form_newdata == 'function') {
			// untuk mengambil nilai ui component,
			// di dalam handler form_newdata, gunakan perintah:
			// options.OnNewData = () => {
			// 		...
			// }		
			hnd.form_newdata(data, options);
		}


		fl_konpeg_file_img.hide();
		fl_konpeg_file_lnk.hide();	
		obj.fl_konpeg_file.filebox('clear');		
				


		options.OnCanceled = () => {
			$ui.getPages().show('pnl_list')
		}



	})
}


export function getHeaderData() {
	var header_data = form.getData();
	if (typeof hnd.form_getHeaderData == 'function') {
		hnd.form_getHeaderData(header_data);
	}
	return header_data;
}

export function detil_open(pnlname) {
	if (form.isDataChanged()) {
		$ui.ShowMessage('Simpan dulu perubahan datanya.')
		return;
	}

	//$ui.getPages().show(pnlname)
	let header_data = getHeaderData();
	if (typeof hnd.form_detil_opening == 'function') {
		hnd.form_detil_opening(pnlname, (cancel)=>{
			if (cancel===true) {
				return;
			}
			$ui.getPages().show(pnlname, () => {
				$ui.getPages().ITEMS[pnlname].handler.OpenDetil(header_data)
			})
		});
	} else {
		$ui.getPages().show(pnlname, () => {
			$ui.getPages().ITEMS[pnlname].handler.OpenDetil(header_data)
		})
	}

	
}


function updatefilebox(record) {
	// apabila ada keperluan untuk menampilkan data dari object storage

		obj.fl_konpeg_file.filebox('clear');			
		if (record.konpeg_file_doc!=undefined) {
			if (record.konpeg_file_doc.type.startsWith('image')) {
				fl_konpeg_file_lnk.hide();
				fl_konpeg_file_img.show();
				fl_konpeg_file_img.attr('src', record.konpeg_file_doc.attachmentdata);
			} else {
				fl_konpeg_file_img.hide();
				fl_konpeg_file_lnk.show();
				fl_konpeg_file_lnk[0].onclick = () => {
					fl_konpeg_file_lnk.attr('download', record.konpeg_file_doc.name);
					fl_konpeg_file_lnk.attr('href', record.konpeg_file_doc.attachmentdata);
				}
			}	
		} else {
			fl_konpeg_file_img.hide();
			fl_konpeg_file_lnk.hide();			
		}				
				

	if (typeof hnd.form_updatefilebox == 'function') {
		hnd.form_updatefilebox(record);
	}
}

function updaterecordstatus(record) {
	// apabila ada keperluan untuk update status record di sini


	if (typeof hnd.form_updaterecordstatus == 'function') {
		hnd.form_updaterecordstatus(record);
	}
}

function updatebuttonstate(record) {
	// apabila ada keperluan untuk update state action button di sini


	if (typeof hnd.form_updatebuttonstate == 'function') {
		hnd.form_updatebuttonstate(record);
	}
}

function updategridstate(record) {
	var updategriddata = {}

	// apabila ada keperluan untuk update state grid list di sini


	if (typeof hnd.form_updategridstate == 'function') {
		hnd.form_updategridstate(updategriddata, record);
	}

	$ui.getPages().ITEMS['pnl_list'].handler.updategrid(updategriddata, form.rowid);

}

function form_viewmodechanged(viewmode) {

	var caption = txt_caption.template;
	if (viewmode) {
		caption = caption.replace('{{STATE_BEG}}', '');
		caption = caption.replace('{{STATE_END}}', ' View');
	} else {
		caption = caption.replace('{{STATE_BEG}}', '');
		caption = caption.replace('{{STATE_END}}', ' Edit');
	}
	txt_caption.html(caption);


	var OnViewModeChangedEvent = new CustomEvent('OnViewModeChanged', {detail: {}})
	$ui.triggerevent(OnViewModeChangedEvent, {
		viewmode: viewmode
	})
}

function form_idsetup(options) {
	var objid = obj.txt_konpeg_id
	switch (options.action) {
		case 'fill' :
			objid.textbox('disable') 
			break;

		case 'createnew' :
			// console.log('new')
			if (form.autoid) {
				objid.textbox('disable') 
				objid.textbox('setText', '[AUTO]') 
			} else {
				objid.textbox('enable') 
			}
			break;
			
		case 'save' :
			objid.textbox('disable') 
			break;	
	}
}


async function form_datasaving(data, options) {
	// cek dulu data yang akan disimpan,
	// apabila belum sesuai dengan yang diharuskan, batalkan penyimpanan
	//    options.cancel = true

	// Modifikasi object data, apabila ingin menambahkan variabel yang akan dikirim ke server
	// options.skipmappingresponse = [];
	options.skipmappingresponse = [];
	for (var objid in obj) {
		var o = obj[objid]
		if (o.isCombo() && !o.isRequired()) {
			var id = o.getFieldValueName()
			options.skipmappingresponse.push(id)
			// console.log(id)
		}
	}

	if (typeof hnd.form_datasaving == 'function') {
		hnd.form_datasaving(data, options);
	}

}

async function form_datasaveerror(err, options) {
	// apabila mau olah error messagenya
	// $ui.ShowMessage(err.errormessage)
	console.error(err)
	if (typeof hnd.form_datasaveerror == 'function') {
		hnd.form_datasaveerror(err, options);
	}
	if (options.supress_error_dialog!=true) {
		$ui.ShowMessage('[ERROR]'+err.message);
	}

}


async function form_datasaved(result, options) {
	// Apabila tidak mau munculkan dialog
	// options.suppressdialog = true

	// Apabila ingin mengganti message Data Tersimpan
	// options.savedmessage = 'Data sudah disimpan cuy!'

	// if (form.isNewData()) {
	// 	console.log('masukan ke grid')
	// 	$ui.getPages().ITEMS['pnl_list'].handler.updategrid(form.getData())
	// } else {
	// 	console.log('update grid')
	// }


	var data = {}
	Object.assign(data, form.getData(), result.dataresponse)
	/*

	*/

	var pOpt = form.getDefaultPrompt(false)
	for (var objid in obj) {
		var o = obj[objid]
		if (o.isCombo() && !o.isRequired()) {
			var value =  result.dataresponse[o.getFieldValueName()];
			var text = result.dataresponse[o.getFieldDisplayName()];
			if (value==null ) {
				value = pOpt.value;
				text = pOpt.text;
			}
			form.setValue(o, value, text);
		}
	}
	form.rowid = $ui.getPages().ITEMS['pnl_list'].handler.updategrid(data, form.rowid)
	var rowdata = {
		data: data,
		rowid: form.rowid
	}

	if (typeof hnd.form_datasaved == 'function') {
		hnd.form_datasaved(result, rowdata, options);
	}
}



async function form_deleting(data, options) {
	if (typeof hnd.form_deleting == 'function') {
		hnd.form_deleting(data, options);
	}
}

async function form_deleted(result, options) {
	$ui.getPages().show('pnl_list')
	$ui.getPages().ITEMS['pnl_list'].handler.removerow(form.rowid)

	if (typeof hnd.form_deleted == 'function') {
		hnd.form_deleted(result, options);
	}
}



function btn_print_click() {

	if (form.isDataChanged() || !form.isInViewMode()) {
		$ui.ShowMessage('Simpan dulu perubahan datanya.');
		return;
	}

	var module = window.global.modulefullname;
	var renderto = 'formtemplate-standard.phtml';
	var format = 'format-01-a4-potrait';

	var args = {
		id: form.getCurrentId(),
		variancename: this_page_options.variancename,
		reportmodule: `${module}/konpeg.xprint?renderto=${renderto}&format=${format}`,
		handled: false
	}

	if (typeof hnd.form_printing == 'function') {
		hnd.form_printing(args);
	}


	if (!args.handled) {
		$ui.getPages().show('pnl_editpreview', ()=>{
			// console.log('Preview Showed');
			$ui.getPages().ITEMS['pnl_editpreview'].handler.PreviewForm({
				id: args.id, 
				variancename: args.variancename,
				reportmodule: args.reportmodule
			});
		});
	}
}	





async function btn_action_click(args) {
	if (form.isDataChanged() || !form.isInViewMode()) {
		$ui.ShowMessage('[WARNING]Simpan dulu perubahan data, dan tidak sedang dalam mode edit.');
		return;
	}


	var docname = 'Kontrak Pegawai'
	var txt_version = obj.txt_konpeg_version;
	var chk_iscommit = obj.chk_konpeg_iscommit;
	
	
	var id = form.getCurrentId();

	Object.assign(args, {
		id: id,
		act_url: null,
		act_msg_quest: null,
		act_msg_result: null,
		act_do: null,
		use_otp: false,
		otp_message: `Berikut adalah code yang harus anda masukkan untuk melakukan ${args.action} ${docname} dengan no id ${id}`,
	});

	switch (args.action) {
			
		
	
		default:
			if (typeof hnd.do_other_action == 'function') {
				hnd.do_other_action(args);
			}
	}

	
	if (args.cancel) { return } // batalkan xtion

	try {
		$ui.mask('wait..');
		var { doAction } = await import('../../../../../index.php/asset/fgta/framework/fgta4libs/fgta4xtion.mjs');
		await doAction(args, (err, result) => {
			if (err) {
				$ui.ShowMessage('[WARNING]' + err.message);	
			} else {
				if (result.dataresponse!=undefined) { updaterecordstatus(result.dataresponse) };
				args.act_do(result);

				if (result.dataresponse!=undefined) {
					updatebuttonstate(result.dataresponse);
					updategridstate(result.dataresponse);
				}

				if (typeof hnd.action_done == 'function') {
					hnd.action_done(result, args);
				}

				if (args.act_msg_result!=='') $ui.ShowMessage('[INFO]' + args.act_msg_result);	
			}
		});
	} catch (err) {
		console.error(err);
		$ui.ShowMessage('[ERROR]' + err.message);
	} finally {
		$ui.unmask();
	}
}	
	
	