import {fgta4grid} from  '../../../../../index.php/asset/fgta/framework/fgta4libs/fgta4grid.mjs'
import {fgta4form} from  '../../../../../index.php/asset/fgta/framework/fgta4libs/fgta4form.mjs'
import * as fgta4pages from '../../../../../index.php/asset/fgta/framework/fgta4libs/fgta4pages.mjs'
import * as fgta4pageslider from '../../../../../index.php/asset/fgta/framework/fgta4libs/fgta4pageslider.mjs'
import * as settings from './pegawai.settings.mjs'
import * as apis from './pegawai.apis.mjs'
import * as pList from './pegawai-list.mjs'
import * as pEdit from './pegawai-edit.mjs'
import * as pEditPegawaialmtgrid from './pegawai-pegawaialmtgrid.mjs'
import * as pEditPegawaialmtform from './pegawai-pegawaialmtform.mjs'
import * as pEditPegawaicardgrid from './pegawai-pegawaicardgrid.mjs'
import * as pEditPegawaicardform from './pegawai-pegawaicardform.mjs'
import * as pEditPegawaiattchgrid from './pegawai-pegawaiattchgrid.mjs'
import * as pEditPegawaiattchform from './pegawai-pegawaiattchform.mjs'
import * as pEditPegawaikelgrid from './pegawai-pegawaikelgrid.mjs'
import * as pEditPegawaikelform from './pegawai-pegawaikelform.mjs'
import * as pEditPegawaipnddkgrid from './pegawai-pegawaipnddkgrid.mjs'
import * as pEditPegawaipnddkform from './pegawai-pegawaipnddkform.mjs'
import * as pEditPegawaikerjagrid from './pegawai-pegawaikerjagrid.mjs'
import * as pEditPegawaikerjaform from './pegawai-pegawaikerjaform.mjs'
import * as pEditPegawaipnddknogrid from './pegawai-pegawaipnddknogrid.mjs'
import * as pEditPegawaipnddknoform from './pegawai-pegawaipnddknoform.mjs'
import * as pEditPegawaiorggrid from './pegawai-pegawaiorggrid.mjs'
import * as pEditPegawaiorgform from './pegawai-pegawaiorgform.mjs'
import * as pEditPegawairefgrid from './pegawai-pegawairefgrid.mjs'
import * as pEditPegawairefform from './pegawai-pegawairefform.mjs'



const pnl_list = $('#pnl_list')
const pnl_edit = $('#pnl_edit')
const pnl_editpegawaialmtgrid = $('#pnl_editpegawaialmtgrid')
const pnl_editpegawaialmtform = $('#pnl_editpegawaialmtform')
const pnl_editpegawaicardgrid = $('#pnl_editpegawaicardgrid')
const pnl_editpegawaicardform = $('#pnl_editpegawaicardform')
const pnl_editpegawaiattchgrid = $('#pnl_editpegawaiattchgrid')
const pnl_editpegawaiattchform = $('#pnl_editpegawaiattchform')
const pnl_editpegawaikelgrid = $('#pnl_editpegawaikelgrid')
const pnl_editpegawaikelform = $('#pnl_editpegawaikelform')
const pnl_editpegawaipnddkgrid = $('#pnl_editpegawaipnddkgrid')
const pnl_editpegawaipnddkform = $('#pnl_editpegawaipnddkform')
const pnl_editpegawaikerjagrid = $('#pnl_editpegawaikerjagrid')
const pnl_editpegawaikerjaform = $('#pnl_editpegawaikerjaform')
const pnl_editpegawaipnddknogrid = $('#pnl_editpegawaipnddknogrid')
const pnl_editpegawaipnddknoform = $('#pnl_editpegawaipnddknoform')
const pnl_editpegawaiorggrid = $('#pnl_editpegawaiorggrid')
const pnl_editpegawaiorgform = $('#pnl_editpegawaiorgform')
const pnl_editpegawairefgrid = $('#pnl_editpegawairefgrid')
const pnl_editpegawairefform = $('#pnl_editpegawairefform')



var pages = fgta4pages;
var slider = fgta4pageslider;


export const SIZE = {width:0, height:0}


export async function init(opt) {
	// $ui.grd_list = new fgta4grid()
	// $ui.grd_edit = new fgta4grid()

	global.fgta4grid = fgta4grid
	global.fgta4form = fgta4form



	$ui.apis = apis
	document.getElementsByTagName("body")[0].style.margin = '5px 5px 5px 5px'

	opt.variancedata = global.setup.variancedata;
	settings.setup(opt);

	pages
		.setSlider(slider)
		.initPages([
			{panel: pnl_list, handler: pList},
			{panel: pnl_edit, handler: pEdit},
			{panel: pnl_editpegawaialmtgrid, handler: pEditPegawaialmtgrid},
			{panel: pnl_editpegawaialmtform, handler: pEditPegawaialmtform},
			{panel: pnl_editpegawaicardgrid, handler: pEditPegawaicardgrid},
			{panel: pnl_editpegawaicardform, handler: pEditPegawaicardform},
			{panel: pnl_editpegawaiattchgrid, handler: pEditPegawaiattchgrid},
			{panel: pnl_editpegawaiattchform, handler: pEditPegawaiattchform},
			{panel: pnl_editpegawaikelgrid, handler: pEditPegawaikelgrid},
			{panel: pnl_editpegawaikelform, handler: pEditPegawaikelform},
			{panel: pnl_editpegawaipnddkgrid, handler: pEditPegawaipnddkgrid},
			{panel: pnl_editpegawaipnddkform, handler: pEditPegawaipnddkform},
			{panel: pnl_editpegawaikerjagrid, handler: pEditPegawaikerjagrid},
			{panel: pnl_editpegawaikerjaform, handler: pEditPegawaikerjaform},
			{panel: pnl_editpegawaipnddknogrid, handler: pEditPegawaipnddknogrid},
			{panel: pnl_editpegawaipnddknoform, handler: pEditPegawaipnddknoform},
			{panel: pnl_editpegawaiorggrid, handler: pEditPegawaiorggrid},
			{panel: pnl_editpegawaiorgform, handler: pEditPegawaiorgform},
			{panel: pnl_editpegawairefgrid, handler: pEditPegawairefgrid},
			{panel: pnl_editpegawairefform, handler: pEditPegawairefform}			
		], opt)

	$ui.setPages(pages)


	document.addEventListener('OnButtonHome', (ev) => {
		if (ev.detail.cancel) {
			return
		}

		ev.detail.cancel = true;
		ExitModule();
	})
	
	document.addEventListener('OnSizeRecalculated', (ev) => {
		OnSizeRecalculated(ev.detail.width, ev.detail.height)
	})	



	await PreloadData()

}


export function OnSizeRecalculated(width, height) {
	SIZE.width = width
	SIZE.height = height
}

export async function ExitModule() {
	$ui.home();
}



async function PreloadData() {
	
}