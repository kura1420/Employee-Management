var this_page_id;
var this_page_options;

import {fgta4slideselect} from  '../../../../../index.php/asset/fgta/framework/fgta4libs/fgta4slideselect.mjs'
import * as hnd from  './pegawai-pegawaipnddknoform-hnd.mjs'

const reload_header_modified = true;

const txt_caption = $('#pnl_editpegawaipnddknoform-caption')
const txt_title = $('#pnl_editpegawaipnddknoform-title')
const btn_edit = $('#pnl_editpegawaipnddknoform-btn_edit')
const btn_save = $('#pnl_editpegawaipnddknoform-btn_save')
const btn_delete = $('#pnl_editpegawaipnddknoform-btn_delete')
const btn_prev = $('#pnl_editpegawaipnddknoform-btn_prev')
const btn_next = $('#pnl_editpegawaipnddknoform-btn_next')
const btn_addnew = $('#pnl_editpegawaipnddknoform-btn_addnew')
const chk_autoadd = $('#pnl_editpegawaipnddknoform-autoadd')

const fl_pegawaipnddkno_file_img = $('#pnl_editpegawaipnddknoform-fl_pegawaipnddkno_file_img');
const fl_pegawaipnddkno_file_lnk = $('#pnl_editpegawaipnddknoform-fl_pegawaipnddkno_file_link');				
			

const pnl_form = $('#pnl_editpegawaipnddknoform-form')
const obj = {
	txt_pegawaipnddkno_id: $('#pnl_editpegawaipnddknoform-txt_pegawaipnddkno_id'),
	txt_pegawaipnddkno_tempat: $('#pnl_editpegawaipnddknoform-txt_pegawaipnddkno_tempat'),
	txt_pegawaipnddkno_kegiatan: $('#pnl_editpegawaipnddknoform-txt_pegawaipnddkno_kegiatan'),
	cbo_regency_id: $('#pnl_editpegawaipnddknoform-cbo_regency_id'),
	txt_pegawaipnddkno_tahun: $('#pnl_editpegawaipnddknoform-txt_pegawaipnddkno_tahun'),
	fl_pegawaipnddkno_file: $('#pnl_editpegawaipnddknoform-fl_pegawaipnddkno_file'),
	txt_pegawaipnddkno_descr: $('#pnl_editpegawaipnddknoform-txt_pegawaipnddkno_descr'),
	txt_pegawai_id: $('#pnl_editpegawaipnddknoform-txt_pegawai_id')
}


let form;
let header_data;



export async function init(opt) {
	this_page_id = opt.id
	this_page_options = opt;

	txt_caption.template = txt_caption.html();

	form = new global.fgta4form(pnl_form, {
		primary: obj.txt_pegawaipnddkno_id,
		autoid: true,
		logview: 'mst_pegawaipnddkno',
		btn_edit: btn_edit,
		btn_save: btn_save,
		btn_delete: btn_delete,		
		objects : obj,
		OnDataSaving: async (data, options) => { await form_datasaving(data, options) },
		OnDataSaveError: async (data, options) => { await form_datasaveerror(data, options) },
		OnDataSaved: async (result, options) => {  await form_datasaved(result, options) },
		OnDataDeleting: async (data, options) => { await form_deleting(data, options) },
		OnDataDeleted: async (result, options) => { await form_deleted(result, options) },
		OnIdSetup : (options) => { form_idsetup(options) },
		OnViewModeChanged : (viewonly) => { form_viewmodechanged(viewonly) },
		OnGettingData: (data) => { form_gettingdata(data) },

	});
	form.getHeaderData = () => {
		return header_data;
	}	

	form.AllowAddRecord = true
	form.AllowRemoveRecord = true
	form.AllowEditRecord = true
	form.CreateRecordStatusPage(this_page_id)
	form.CreateLogPage(this_page_id)


	obj.fl_pegawaipnddkno_file.filebox({
		onChange: function(value) {
			var files = obj.fl_pegawaipnddkno_file.filebox('files');
			var f = files[0];
			var reader = new FileReader();
			reader.onload = (function(loaded) {
				return function(e) {
					if (loaded.type.startsWith('image')) {
						var image = new Image();
						image.src = e.target.result;
						image.onload = function() {
							fl_pegawaipnddkno_file_img.attr('src', e.target.result);
							fl_pegawaipnddkno_file_img.show();
							fl_pegawaipnddkno_file_lnk.hide();
						}
					} else {
						fl_pegawaipnddkno_file_img.hide();
						fl_pegawaipnddkno_file_lnk.hide();
					}
				}
			})(f);
			if (f!==undefined) { reader.readAsDataURL(f) }
		}
	})				
			



	obj.cbo_regency_id.name = 'pnl_editpegawaipnddknoform-cbo_regency_id'		
	new fgta4slideselect(obj.cbo_regency_id, {
		title: 'Daftar Kota',
		returnpage: this_page_id,
		api: $ui.apis.load_regency_id,
		fieldValue: 'regency_id',
		fieldDisplay: 'regencies_name',
		fieldValueMap: 'id',
		fieldDisplayMap: 'name',
		fields: [
			{mapping: 'id', text: 'ID'},
			{mapping: 'name', text: 'Name'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd!=='undefined') { 
				if (typeof hnd.cbo_regency_id_dataloading === 'function') {
					hnd.cbo_regency_id_dataloading(criteria, options);
				}
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd!=='undefined') { 
				if (typeof hnd.cbo_regency_id_dataloaded === 'function') {
					hnd.cbo_regency_id_dataloaded(result, options);
				}
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd!=='undefined') {  
					if (typeof hnd.cbo_regency_id_selected === 'function') {
						hnd.cbo_regency_id_selected(value, display, record, args);
					}
				}
			}
		},

	})				
			


	btn_addnew.linkbutton({ onClick: () => { btn_addnew_click() }  })
	btn_prev.linkbutton({ onClick: () => { btn_prev_click() } })
	btn_next.linkbutton({ onClick: () => { btn_next_click() } })

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
	
	document.addEventListener('OnButtonBack', (ev) => {
		var element = document.activeElement;
		element.blur();
		if ($ui.getPages().getCurrentPage()==this_page_id) {
			ev.detail.cancel = true;
			if (form.isDataChanged()) {
				form.canceledit(()=>{
					$ui.getPages().show('pnl_editpegawaipnddknogrid', ()=>{
						form.setViewMode()
						$ui.getPages().ITEMS['pnl_editpegawaipnddknogrid'].handler.scrolllast()
					})					
				})
			} else {
				$ui.getPages().show('pnl_editpegawaipnddknogrid', ()=>{
					form.setViewMode()
					$ui.getPages().ITEMS['pnl_editpegawaipnddknogrid'].handler.scrolllast()
				})
			}
		
		}		
	})

	document.addEventListener('OnButtonHome', (ev) => {
		if ($ui.getPages().getCurrentPage()==this_page_id) {
			ev.detail.cancel = true;
		}
	})

	document.addEventListener('OnSizeRecalculated', (ev) => {
		OnSizeRecalculated(ev.detail.width, ev.detail.height)
	})
	
	
	document.addEventListener('OnViewModeChanged', (ev) => {
		if (ev.detail.viewmode===true) {
			form.lock(true)
			btn_addnew.allow = false
			btn_addnew.linkbutton('disable')
			chk_autoadd.attr("disabled", true);	
			chk_autoadd.prop("checked", false);			
		} else {
			form.lock(false)
			btn_addnew.allow = true
			btn_addnew.linkbutton('enable')
			chk_autoadd.removeAttr("disabled");
			chk_autoadd.prop("checked", false);
		}
	})

	if (typeof hnd.init==='function') {
		hnd.init({
			form: form,
			obj: obj,
			opt: opt
		})
	}

}


export function OnSizeRecalculated(width, height) {
}


export function getForm() {
	return form
}

export function open(data, rowid, hdata) {
	// console.log(header_data)
	header_data = hdata

	var caption = txt_caption.template;
	caption = caption.replace('{{STATE_BEG}}', '');
	caption = caption.replace('{{STATE_END}}', ' View');
	txt_caption.html(caption);

	txt_title.html(header_data.pegawaipnddkno_nama)
	if (typeof hnd!=='undefined') { 
		if (typeof hnd.setupTitle === 'function') {
			hnd.setupTitle(txt_title, header_data, 'open');
		}
	}

	var pOpt = form.getDefaultPrompt(false)
	var fn_dataopening = async (options) => {
		options.api = `${global.modulefullname}/pegawaipnddkno-open`
		options.criteria[form.primary.mapping] = data[form.primary.mapping]
	}

	var fn_dataopened = async (result, options) => {
		var record = result.record;
		updatefilebox(result.record);
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

		/* handle data saat opening data */   
		if (typeof hnd.form_dataopening == 'function') {
			hnd.form_dataopening(result, options);
		}


		form.SuspendEvent(true);
		form
			.fill(record)
			.setValue(obj.cbo_regency_id, record.regency_id, record.regencies_name)
			.setViewMode()
			.rowid = rowid



		// Editable
		if (form.AllowEditRecord!=true) {
			btn_edit.hide();
			btn_save.hide();
			btn_delete.hide();
		}
		

		// tambah baris
		if (form.AllowAddRecord) {
			btn_addnew.show()
		} else {
			btn_addnew.hide()
		}	

		// hapus baris
		if (form.AllowRemoveRecord) {
			btn_delete.show()
		} else {
			btn_delete.hide()
		}

		var prevnode = $(`#${rowid}`).prev()
		if (prevnode.length>0) {
			btn_prev.linkbutton('enable')
		} else {
			btn_prev.linkbutton('disable')
		}

		var nextode = $(`#${rowid}`).next()
		if (nextode.length>0) {
			btn_next.linkbutton('enable')
		} else {
			btn_next.linkbutton('disable')
		}	


		/* tambahkan event atau behaviour saat form dibuka
		   apabila ada rutin mengubah form dan tidak mau dijalankan pada saat opening,
		   cek dengan form.isEventSuspended()
		*/ 
		if (typeof hnd.form_dataopened == 'function') {
			hnd.form_dataopened(result, options);
		}


		form.commit()
		form.SuspendEvent(false);



	}

	var fn_dataopenerror = (err) => {
		$ui.ShowMessage('[ERROR]'+err.errormessage);
	}

	form.dataload(fn_dataopening, fn_dataopened, fn_dataopenerror)	
}

export function createnew(hdata) {
	header_data = hdata

	var caption = txt_caption.template;
	caption = caption.replace('{{STATE_BEG}}', 'Create New ');
	caption = caption.replace('{{STATE_END}}', '');
	txt_caption.html(caption);

	txt_title.html(header_data.pegawaipnddkno_nama)
	if (typeof hnd!=='undefined') { 
		if (typeof hnd.setupTitle === 'function') {
			hnd.setupTitle(txt_title, header_data, 'new');
		}
	}

	form.createnew(async (data, options)=>{
		data.pegawai_id = hdata.pegawai_id
		data.pegawaipnddkno_value = 0

		data.pegawaipnddkno_tahun = 0

		data.regency_id = '0'
		data.regencies_name = '-- PILIH --'

		if (typeof hnd.form_newdata == 'function') {
			hnd.form_newdata(data, options);
		}

		fl_pegawaipnddkno_file_img.hide();
		fl_pegawaipnddkno_file_lnk.hide();	
		obj.fl_pegawaipnddkno_file.filebox('clear');		
			

		form.rowid = null
		options.OnCanceled = () => {
			$ui.getPages().show('pnl_editpegawaipnddknogrid')
		}
	})
}


async function form_datasaving(data, options) {
	options.api = `${global.modulefullname}/pegawaipnddkno-save`

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
	form.rowid = $ui.getPages().ITEMS['pnl_editpegawaipnddknogrid'].handler.updategrid(data, form.rowid)
	var rowdata = {
		data: data,
		rowid: form.rowid
	}

	
	var autoadd = chk_autoadd.prop("checked")
	if (autoadd) {
		setTimeout(()=>{
			btn_addnew_click()
		}, 1000)
	}

	if (reload_header_modified) {
		var currentRowdata =  $ui.getPages().ITEMS['pnl_edit'].handler.getCurrentRowdata();
		if (currentRowdata!=null) {
			$ui.getPages().ITEMS['pnl_edit'].handler.open(currentRowdata.data, currentRowdata.rowid, false, (err, data)=>{
				$ui.getPages().ITEMS['pnl_list'].handler.updategrid(data, currentRowdata.rowid);
			});	
		}
	}

	if (typeof hnd.form_datasaved == 'function') {
		hnd.form_datasaved(result, rowdata, options);
	}

}

async function form_deleting(data, options) {
	options.api = `${global.modulefullname}/pegawaipnddkno-delete`
	if (typeof hnd.form_deleting == 'function') {
		hnd.form_deleting(data);
	}
}

async function form_deleted(result, options) {
	options.suppressdialog = true
	$ui.getPages().show('pnl_editpegawaipnddknogrid', ()=>{
		$ui.getPages().ITEMS['pnl_editpegawaipnddknogrid'].handler.removerow(form.rowid)
	});

	if (reload_header_modified) {
		var currentRowdata =  $ui.getPages().ITEMS['pnl_edit'].handler.getCurrentRowdata();
		if (currentRowdata!=null) {
			$ui.getPages().ITEMS['pnl_edit'].handler.open(currentRowdata.data, currentRowdata.rowid, false, (err, data)=>{
				$ui.getPages().ITEMS['pnl_list'].handler.updategrid(data, currentRowdata.rowid);
			});	
		}

	}

	if (typeof hnd.form_deleted == 'function') {
		hnd.form_deleted(result, options);
	}
	
}

function updatefilebox(record) {
	// apabila ada keperluan untuk menampilkan data dari object storage

	obj.fl_pegawaipnddkno_file.filebox('clear');			
	if (record.pegawaipnddkno_file_doc!=undefined) {
		if (record.pegawaipnddkno_file_doc.type.startsWith('image')) {
			fl_pegawaipnddkno_file_lnk.hide();
			fl_pegawaipnddkno_file_img.show();
			fl_pegawaipnddkno_file_img.attr('src', record.pegawaipnddkno_file_doc.attachmentdata);
		} else {
			fl_pegawaipnddkno_file_img.hide();
			fl_pegawaipnddkno_file_lnk.show();
			fl_pegawaipnddkno_file_lnk[0].onclick = () => {
				fl_pegawaipnddkno_file_lnk.attr('download', record.pegawaipnddkno_file_doc.name);
				fl_pegawaipnddkno_file_lnk.attr('href', record.pegawaipnddkno_file_doc.attachmentdata);
			}
		}	
	} else {
		fl_pegawaipnddkno_file_img.hide();
		fl_pegawaipnddkno_file_lnk.hide();			
	}				
			
}


function form_gettingdata(data) {
	if (hnd!=null) {
		if (typeof hnd.form_gettingdata == 'function') {
			hnd.form_gettingdata(data);
		}
	}
}

function form_viewmodechanged(viewonly) {

	console.log('View Mode changed');
	var caption = txt_caption.template;

	if (viewonly) {
		caption = caption.replace('{{STATE_BEG}}', '');
		caption = caption.replace('{{STATE_END}}', ' View');
		txt_caption.html(caption);

		btn_prev.linkbutton('enable')
		btn_next.linkbutton('enable')
		if (btn_addnew.allow) {
			btn_addnew.linkbutton('enable')
		} else {
			btn_addnew.linkbutton('disable')
		}
	} else {
		var currcaption = txt_caption.html();
		if (currcaption.substring(0,10)!='Create New') {
			caption = caption.replace('{{STATE_BEG}}', '');
			caption = caption.replace('{{STATE_END}}', ' Edit');
			txt_caption.html(caption);
		} 

		btn_prev.linkbutton('disable')
		btn_next.linkbutton('disable')
		btn_addnew.linkbutton('disable')
	}
	


	if (typeof hnd.form_viewmodechanged == 'function') {
		hnd.form_viewmodechanged(viewonly);
	}
}


function form_idsetup(options) {
	var objid = obj.txt_pegawaipnddkno_id
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

function btn_addnew_click() {
	createnew(header_data)
}


function btn_prev_click() {
	var prevode = $(`#${form.rowid}`).prev()
	if (prevode.length==0) {
		return
	} 
	
	var trid = prevode.attr('id')
	var dataid = prevode.attr('dataid')
	var record = $ui.getPages().ITEMS['pnl_editpegawaipnddknogrid'].handler.getGrid().DATA[dataid]

	if (form.isDataChanged()) {
		var datachangemessage = form.getDataChangeMessage();
		$ui.ShowMessage(datachangemessage, {
			"Ya" : () => {
				open(record, trid, header_data);
			},
			"Tidak" : () => {}
		})
	} else {
		open(record, trid, header_data);
	}
}

function btn_next_click() {
	var nextode = $(`#${form.rowid}`).next()
	if (nextode.length==0) {
		return
	} 

	var trid = nextode.attr('id')
	var dataid = nextode.attr('dataid')
	var record = $ui.getPages().ITEMS['pnl_editpegawaipnddknogrid'].handler.getGrid().DATA[dataid]

	if (form.isDataChanged()) {
		var datachangemessage = form.getDataChangeMessage();
		$ui.ShowMessage(datachangemessage, {
			"Ya" : () => {
				open(record, trid, header_data);
			},
			"Tidak" : () => {}
		})
	} else {
		open(record, trid, header_data);
	}
}