var this_page_id;
var this_page_options;

import {fgta4slideselect} from  '../../../../../index.php/asset/fgta/framework/fgta4libs/fgta4slideselect.mjs'
import * as hnd from  './pegawai-edit-hnd.mjs'

const txt_caption = $('#pnl_edit-caption')


const btn_edit = $('#pnl_edit-btn_edit')
const btn_save = $('#pnl_edit-btn_save')
const btn_delete = $('#pnl_edit-btn_delete')





const fl_pegawai_foto_img = $('#pnl_edit-fl_pegawai_foto_img');
const fl_pegawai_foto_lnk = $('#pnl_edit-fl_pegawai_foto_link');				
				

const pnl_form = $('#pnl_edit-form')
const obj = {
	txt_pegawai_id: $('#pnl_edit-txt_pegawai_id'),
	txt_pegawai_nama: $('#pnl_edit-txt_pegawai_nama'),
	txt_pegawai_email: $('#pnl_edit-txt_pegawai_email'),
	txt_pegawai_hp: $('#pnl_edit-txt_pegawai_hp'),
	fl_pegawai_foto: $('#pnl_edit-fl_pegawai_foto'),
	cbo_card_id: $('#pnl_edit-cbo_card_id'),
	cbo_gender_id: $('#pnl_edit-cbo_gender_id'),
	cbo_bloodtype_id: $('#pnl_edit-cbo_bloodtype_id'),
	cbo_religion_id: $('#pnl_edit-cbo_religion_id'),
	chk_pegawai_iswna: $('#pnl_edit-chk_pegawai_iswna'),
	cbo_countries_id: $('#pnl_edit-cbo_countries_id'),
	cbo_marital_id: $('#pnl_edit-cbo_marital_id'),
	cbo_pnddk_id: $('#pnl_edit-cbo_pnddk_id'),
	cbo_worktype_id: $('#pnl_edit-cbo_worktype_id'),
	cbo_pegawai_tmptlahir: $('#pnl_edit-cbo_pegawai_tmptlahir'),
	dt_pegawai_tgllahir: $('#pnl_edit-dt_pegawai_tgllahir'),
	cbo_province_id: $('#pnl_edit-cbo_province_id'),
	cbo_regency_id: $('#pnl_edit-cbo_regency_id'),
	cbo_district_id: $('#pnl_edit-cbo_district_id'),
	cbo_villages_id: $('#pnl_edit-cbo_villages_id'),
	txt_pegawai_kodepos: $('#pnl_edit-txt_pegawai_kodepos'),
	txt_pegawai_alamat: $('#pnl_edit-txt_pegawai_alamat')
}




let form;
let rowdata;

export async function init(opt) {
	this_page_id = opt.id;
	this_page_options = opt;

	txt_caption.template = txt_caption.html();
	var disableedit = false;


	form = new global.fgta4form(pnl_form, {
		primary: obj.txt_pegawai_id,
		autoid: false,
		logview: 'mst_pegawai',
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

	// Generator: Print Handler not exist
	// Generator: Commit Handler not exist
	// Generator: Approval Handler not exist
	// Generator: Xtion Handler not exist
	// Generator: Object Handler not exist


	obj.fl_pegawai_foto.filebox({
		onChange: function(value) {
			var files = obj.fl_pegawai_foto.filebox('files');
			var f = files[0];
			var reader = new FileReader();
			reader.onload = (function(loaded) {
				return function(e) {
					if (loaded.type.startsWith('image')) {
						var image = new Image();
						image.src = e.target.result;
						image.onload = function() {
							fl_pegawai_foto_img.attr('src', e.target.result);
							fl_pegawai_foto_img.show();
							fl_pegawai_foto_lnk.hide();
						}
					} else {
						fl_pegawai_foto_img.hide();
						fl_pegawai_foto_lnk.hide();
					}
				}
			})(f);
			if (f!==undefined) { reader.readAsDataURL(f) }
		}
	})				
				


	obj.cbo_card_id.name = 'pnl_edit-cbo_card_id'		
	new fgta4slideselect(obj.cbo_card_id, {
		title: 'Daftar Kartu Identitas',
		returnpage: this_page_id,
		api: $ui.apis.load_card_id,
		fieldValue: 'card_id',
		fieldDisplay: 'card_name',
		fields: [
			{mapping: 'card_id', text: 'ID'},
			{mapping: 'card_name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_card_id_dataloading === 'function') {
				hnd.cbo_card_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_card_id_dataloaded === 'function') {
				hnd.cbo_card_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_card_id_selected === 'function') {
					hnd.cbo_card_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_gender_id.name = 'pnl_edit-cbo_gender_id'		
	new fgta4slideselect(obj.cbo_gender_id, {
		title: 'Daftar Jenis Kelamin',
		returnpage: this_page_id,
		api: $ui.apis.load_gender_id,
		fieldValue: 'gender_id',
		fieldDisplay: 'gender_name',
		fields: [
			{mapping: 'gender_id', text: 'ID'},
			{mapping: 'gender_name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_gender_id_dataloading === 'function') {
				hnd.cbo_gender_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_gender_id_dataloaded === 'function') {
				hnd.cbo_gender_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_gender_id_selected === 'function') {
					hnd.cbo_gender_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_bloodtype_id.name = 'pnl_edit-cbo_bloodtype_id'		
	new fgta4slideselect(obj.cbo_bloodtype_id, {
		title: 'Daftar Golongan Darah',
		returnpage: this_page_id,
		api: $ui.apis.load_bloodtype_id,
		fieldValue: 'bloodtype_id',
		fieldDisplay: 'bloodtype_name',
		fields: [
			{mapping: 'bloodtype_id', text: 'ID'},
			{mapping: 'bloodtype_name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_bloodtype_id_dataloading === 'function') {
				hnd.cbo_bloodtype_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_bloodtype_id_dataloaded === 'function') {
				hnd.cbo_bloodtype_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_bloodtype_id_selected === 'function') {
					hnd.cbo_bloodtype_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_religion_id.name = 'pnl_edit-cbo_religion_id'		
	new fgta4slideselect(obj.cbo_religion_id, {
		title: 'Daftar Agama',
		returnpage: this_page_id,
		api: $ui.apis.load_religion_id,
		fieldValue: 'religion_id',
		fieldDisplay: 'religion_name',
		fields: [
			{mapping: 'religion_id', text: 'ID'},
			{mapping: 'religion_name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_religion_id_dataloading === 'function') {
				hnd.cbo_religion_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_religion_id_dataloaded === 'function') {
				hnd.cbo_religion_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_religion_id_selected === 'function') {
					hnd.cbo_religion_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_countries_id.name = 'pnl_edit-cbo_countries_id'		
	new fgta4slideselect(obj.cbo_countries_id, {
		title: 'Daftar Negara',
		returnpage: this_page_id,
		api: $ui.apis.load_countries_id,
		fieldValue: 'countries_id',
		fieldDisplay: 'name',
		fieldValueMap: 'id',
		fields: [
			{mapping: 'id', text: 'ID'},
			{mapping: 'name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_countries_id_dataloading === 'function') {
				hnd.cbo_countries_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_countries_id_dataloaded === 'function') {
				hnd.cbo_countries_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_countries_id_selected === 'function') {
					hnd.cbo_countries_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_marital_id.name = 'pnl_edit-cbo_marital_id'		
	new fgta4slideselect(obj.cbo_marital_id, {
		title: 'Daftar Status Perkawinan',
		returnpage: this_page_id,
		api: $ui.apis.load_marital_id,
		fieldValue: 'marital_id',
		fieldDisplay: 'marital_name',
		fields: [
			{mapping: 'marital_id', text: 'ID'},
			{mapping: 'marital_name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_marital_id_dataloading === 'function') {
				hnd.cbo_marital_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_marital_id_dataloaded === 'function') {
				hnd.cbo_marital_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_marital_id_selected === 'function') {
					hnd.cbo_marital_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_pnddk_id.name = 'pnl_edit-cbo_pnddk_id'		
	new fgta4slideselect(obj.cbo_pnddk_id, {
		title: 'Daftar Pendidikan',
		returnpage: this_page_id,
		api: $ui.apis.load_pnddk_id,
		fieldValue: 'pnddk_id',
		fieldDisplay: 'pnddk_name',
		fields: [
			{mapping: 'pnddk_id', text: 'ID'},
			{mapping: 'pnddk_name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_pnddk_id_dataloading === 'function') {
				hnd.cbo_pnddk_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_pnddk_id_dataloaded === 'function') {
				hnd.cbo_pnddk_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_pnddk_id_selected === 'function') {
					hnd.cbo_pnddk_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_worktype_id.name = 'pnl_edit-cbo_worktype_id'		
	new fgta4slideselect(obj.cbo_worktype_id, {
		title: 'Daftar Pekerjaan',
		returnpage: this_page_id,
		api: $ui.apis.load_worktype_id,
		fieldValue: 'worktype_id',
		fieldDisplay: 'worktype_name',
		fields: [
			{mapping: 'worktype_id', text: 'ID'},
			{mapping: 'worktype_name', text: 'Nama'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_worktype_id_dataloading === 'function') {
				hnd.cbo_worktype_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_worktype_id_dataloaded === 'function') {
				hnd.cbo_worktype_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_worktype_id_selected === 'function') {
					hnd.cbo_worktype_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_pegawai_tmptlahir.name = 'pnl_edit-cbo_pegawai_tmptlahir'		
	new fgta4slideselect(obj.cbo_pegawai_tmptlahir, {
		title: 'Daftar Kota',
		returnpage: this_page_id,
		api: $ui.apis.load_pegawai_tmptlahir,
		fieldValue: 'pegawai_tmptlahir',
		fieldDisplay: 'tmptlahir_name',
		fieldValueMap: 'id',
		fieldDisplayMap: 'name',
		fields: [
			{mapping: 'id', text: 'ID'},
			{mapping: 'name', text: 'Name'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_pegawai_tmptlahir_dataloading === 'function') {
				hnd.cbo_pegawai_tmptlahir_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_pegawai_tmptlahir_dataloaded === 'function') {
				hnd.cbo_pegawai_tmptlahir_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_pegawai_tmptlahir_selected === 'function') {
					hnd.cbo_pegawai_tmptlahir_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_province_id.name = 'pnl_edit-cbo_province_id'		
	new fgta4slideselect(obj.cbo_province_id, {
		title: 'Daftar Provinsi',
		returnpage: this_page_id,
		api: $ui.apis.load_province_id,
		fieldValue: 'province_id',
		fieldDisplay: 'prov_name',
		fieldValueMap: 'id',
		fieldDisplayMap: 'name',
		fields: [
			{mapping: 'id', text: 'ID'},
			{mapping: 'name', text: 'Name'}
		],
		OnDataLoading: (criteria, options) => {
			
			if (typeof hnd.cbo_province_id_dataloading === 'function') {
				hnd.cbo_province_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_province_id_dataloaded === 'function') {
				hnd.cbo_province_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				form.setValue(obj.cbo_hubkel_id, "0", "-- PILIH --");
				form.setValue(obj.cbo_district_id, "0", "-- PILIH --");
				form.setValue(obj.cbo_villages_id, "0", "-- PILIH --");
        	
				if (typeof hnd.cbo_province_id_selected === 'function') {
					hnd.cbo_province_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_regency_id.name = 'pnl_edit-cbo_regency_id'		
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
			criteria.province_id = form.getValue(obj.cbo_province_id);
			if (typeof hnd.cbo_regency_id_dataloading === 'function') {
				hnd.cbo_regency_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_regency_id_dataloaded === 'function') {
				hnd.cbo_regency_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				form.setValue(obj.cbo_district_id, "0", "-- PILIH --");
				form.setValue(obj.cbo_villages_id, "0", "-- PILIH --");
			
				if (typeof hnd.cbo_regency_id_selected === 'function') {
					hnd.cbo_regency_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_district_id.name = 'pnl_edit-cbo_district_id'		
	new fgta4slideselect(obj.cbo_district_id, {
		title: 'Daftar Kelurahan',
		returnpage: this_page_id,
		api: $ui.apis.load_district_id,
		fieldValue: 'district_id',
		fieldDisplay: 'districts_name',
		fieldValueMap: 'id',
		fieldDisplayMap: 'name',
		fields: [
			{mapping: 'id', text: 'ID'},
			{mapping: 'name', text: 'Name'}
		],
		OnDataLoading: (criteria, options) => {
			criteria.regency_id = form.getValue(obj.cbo_regency_id);
			if (typeof hnd.cbo_district_id_dataloading === 'function') {
				hnd.cbo_district_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_district_id_dataloaded === 'function') {
				hnd.cbo_district_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				form.setValue(obj.cbo_villages_id, "0", "-- PILIH --");
			
				if (typeof hnd.cbo_district_id_selected === 'function') {
					hnd.cbo_district_id_selected(value, display, record, args);
				}
			}
		},

	})				
				
	obj.cbo_villages_id.name = 'pnl_edit-cbo_villages_id'		
	new fgta4slideselect(obj.cbo_villages_id, {
		title: 'Daftar Kecamatan',
		returnpage: this_page_id,
		api: $ui.apis.load_villages_id,
		fieldValue: 'villages_id',
		fieldDisplay: 'villagess_name',
		fieldValueMap: 'id',
		fieldDisplayMap: 'name',
		fields: [
			{mapping: 'id', text: 'ID'},
			{mapping: 'name', text: 'Name'}
		],
		OnDataLoading: (criteria, options) => {
			criteria.villages = form.getValue(obj.cbo_villages);
			if (typeof hnd.cbo_villages_id_dataloading === 'function') {
				hnd.cbo_villages_id_dataloading(criteria, options);
			}						
		},					
		OnDataLoaded : (result, options) => {
			
			if (typeof hnd.cbo_villages_id_dataloaded === 'function') {
				hnd.cbo_villages_id_dataloaded(result, options);
			}
		},
		OnSelected: (value, display, record, args) => {
			if (value!=args.PreviousValue ) {
				if (typeof hnd.cbo_villages_id_selected === 'function') {
					hnd.cbo_villages_id_selected(value, display, record, args);
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
		if (result.record.bloodtype_id==null) { result.record.bloodtype_id='--NULL--'; result.record.bloodtype_name='NONE'; }
		if (result.record.religion_id==null) { result.record.religion_id='--NULL--'; result.record.religion_name='NONE'; }
		if (result.record.countries_id==null) { result.record.countries_id='--NULL--'; result.record.name='NONE'; }
		if (result.record.district_id==null) { result.record.district_id='--NULL--'; result.record.districts_name='NONE'; }
		if (result.record.villages_id==null) { result.record.villages_id='--NULL--'; result.record.villagess_name='NONE'; }

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
			.setValue(obj.cbo_card_id, record.card_id, record.card_name)
			.setValue(obj.cbo_gender_id, record.gender_id, record.gender_name)
			.setValue(obj.cbo_bloodtype_id, record.bloodtype_id, record.bloodtype_name)
			.setValue(obj.cbo_religion_id, record.religion_id, record.religion_name)
			.setValue(obj.cbo_countries_id, record.countries_id, record.name)
			.setValue(obj.cbo_marital_id, record.marital_id, record.marital_name)
			.setValue(obj.cbo_pnddk_id, record.pnddk_id, record.pnddk_name)
			.setValue(obj.cbo_worktype_id, record.worktype_id, record.worktype_name)
			.setValue(obj.cbo_pegawai_tmptlahir, record.pegawai_tmptlahir, record.tmptlahir_name)
			.setValue(obj.cbo_province_id, record.province_id, record.prov_name)
			.setValue(obj.cbo_regency_id, record.regency_id, record.regencies_name)
			.setValue(obj.cbo_district_id, record.district_id, record.districts_name)
			.setValue(obj.cbo_villages_id, record.villages_id, record.villagess_name)
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
		data.pegawai_iswna = '0'
		data.pegawai_tgllahir = global.now()
		data.pegawai_kodepos = 0

		data.card_id = '0'
		data.card_name = '-- PILIH --'
		data.gender_id = '0'
		data.gender_name = '-- PILIH --'
		data.bloodtype_id = '--NULL--'
		data.bloodtype_name = 'NONE'
		data.religion_id = '--NULL--'
		data.religion_name = 'NONE'
		data.countries_id = '--NULL--'
		data.name = 'NONE'
		data.marital_id = '0'
		data.marital_name = '-- PILIH --'
		data.pnddk_id = '0'
		data.pnddk_name = '-- PILIH --'
		data.worktype_id = '0'
		data.worktype_name = '-- PILIH --'
		data.pegawai_tmptlahir = '0'
		data.tmptlahir_name = '-- PILIH --'
		data.province_id = '0'
		data.prov_name = '-- PILIH --'
		data.regency_id = '0'
		data.regencies_name = '-- PILIH --'
		data.district_id = '--NULL--'
		data.districts_name = 'NONE'
		data.villages_id = '--NULL--'
		data.villagess_name = 'NONE'

		if (typeof hnd.form_newdata == 'function') {
			// untuk mengambil nilai ui component,
			// di dalam handler form_newdata, gunakan perintah:
			// options.OnNewData = () => {
			// 		...
			// }		
			hnd.form_newdata(data, options);
		}


		fl_pegawai_foto_img.hide();
		fl_pegawai_foto_lnk.hide();	
		obj.fl_pegawai_foto.filebox('clear');		
				


		options.OnCanceled = () => {
			$ui.getPages().show('pnl_list')
		}

		$ui.getPages().ITEMS['pnl_editpegawaialmtgrid'].handler.createnew(data, options)
		$ui.getPages().ITEMS['pnl_editpegawaicardgrid'].handler.createnew(data, options)
		$ui.getPages().ITEMS['pnl_editpegawaiattchgrid'].handler.createnew(data, options)
		$ui.getPages().ITEMS['pnl_editpegawaikelgrid'].handler.createnew(data, options)
		$ui.getPages().ITEMS['pnl_editpegawaipnddkgrid'].handler.createnew(data, options)
		$ui.getPages().ITEMS['pnl_editpegawaikerjagrid'].handler.createnew(data, options)
		$ui.getPages().ITEMS['pnl_editpegawaipnddknogrid'].handler.createnew(data, options)
		$ui.getPages().ITEMS['pnl_editpegawaiorggrid'].handler.createnew(data, options)
		$ui.getPages().ITEMS['pnl_editpegawairefgrid'].handler.createnew(data, options)


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

		obj.fl_pegawai_foto.filebox('clear');			
		if (record.pegawai_foto_doc!=undefined) {
			if (record.pegawai_foto_doc.type.startsWith('image')) {
				fl_pegawai_foto_lnk.hide();
				fl_pegawai_foto_img.show();
				fl_pegawai_foto_img.attr('src', record.pegawai_foto_doc.attachmentdata);
			} else {
				fl_pegawai_foto_img.hide();
				fl_pegawai_foto_lnk.show();
				fl_pegawai_foto_lnk[0].onclick = () => {
					fl_pegawai_foto_lnk.attr('download', record.pegawai_foto_doc.name);
					fl_pegawai_foto_lnk.attr('href', record.pegawai_foto_doc.attachmentdata);
				}
			}	
		} else {
			fl_pegawai_foto_img.hide();
			fl_pegawai_foto_lnk.hide();			
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
	var objid = obj.txt_pegawai_id
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
	// options.skipmappingresponse = ['bloodtype_id', 'religion_id', 'countries_id', 'district_id', 'villages_id', ];
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
	form.setValue(obj.cbo_bloodtype_id, result.dataresponse.bloodtype_name!=='--NULL--' ? result.dataresponse.bloodtype_id : '--NULL--', result.dataresponse.bloodtype_name!=='--NULL--'?result.dataresponse.bloodtype_name:'NONE')
	form.setValue(obj.cbo_religion_id, result.dataresponse.religion_name!=='--NULL--' ? result.dataresponse.religion_id : '--NULL--', result.dataresponse.religion_name!=='--NULL--'?result.dataresponse.religion_name:'NONE')
	form.setValue(obj.cbo_countries_id, result.dataresponse.name!=='--NULL--' ? result.dataresponse.countries_id : '--NULL--', result.dataresponse.name!=='--NULL--'?result.dataresponse.name:'NONE')
	form.setValue(obj.cbo_district_id, result.dataresponse.districts_name!=='--NULL--' ? result.dataresponse.district_id : '--NULL--', result.dataresponse.districts_name!=='--NULL--'?result.dataresponse.districts_name:'NONE')
	form.setValue(obj.cbo_villages_id, result.dataresponse.villagess_name!=='--NULL--' ? result.dataresponse.villages_id : '--NULL--', result.dataresponse.villagess_name!=='--NULL--'?result.dataresponse.villagess_name:'NONE')

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




