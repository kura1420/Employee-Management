let editor, form, obj, opt;

const btn_edit = $('#pnl_edit-btn_edit')

const btn_work = $('#pnl_edit-btn_work')
const btn_unwork = $('#pnl_edit-btn_unwork')

export function init(ed) {
	editor = ed;
	form = editor.form;
	obj = editor.obj;
	opt = editor.opt;



	
}


export function form_newdata(data, options)
{
	btn_edit.linkbutton('enable');
}

export function form_dataopened(result, options)
{
	const { record } = result;

	setButton(record.konpeg_iswork);
}
	
export function do_other_action(args)
{
	switch (args.action) {
		case "request":
			args.use_otp = false;
			args.act_url = `${global.modulefullname}/xction-work`;
			args.act_msg_quest = `Apakah anda yakin, ingin merubah status kontrak pegawai menjadi pekerja?`;
			args.act_msg_result = `Status kontrak pegawai telah diubah menjadi pekerja.`;

			args.param = {
				konpeg_id: args.id,
			}

			args.act_do = (result) => {
				
			}
			break;

		case "unrequest":
			args.use_otp = false;
			args.act_url = `${global.modulefullname}/xction-unwork`;
			args.act_msg_quest = `Apakah anda yakin, ingin merubah status pekerja pegawai menjadi pegawai?`;
			args.act_msg_result = `Status kontrak pekerja telah diubah menjadi pegawai.`;

			args.param = {
				konpeg_id: args.id,
			}

			args.act_do = (result) => {
				
			}
			break;
	
		default:
			break;
	}
}	

export function action_done(result, args)
{
	const { dataresponse } = result;

	form.setValue(obj.chk_konpeg_iswork, dataresponse.konpeg_iswork);
	form.setValue(obj.txt_konpeg_workat, dataresponse.konpeg_workat);
	form.setValue(obj.txt_konpeg_workby, dataresponse.konpeg_workby);

	setButton(dataresponse.konpeg_iswork);

	form.commit();
}

function setButton(konpeg_iswork)
{
	if (konpeg_iswork) {
		btn_edit.linkbutton('disable');

		btn_work.linkbutton('disable');
		btn_unwork.linkbutton('enable');
	} else {
		btn_edit.linkbutton('enable');

		btn_work.linkbutton('enable');
		btn_unwork.linkbutton('disable');
	}
}