let editor, form, obj, opt;

export function init(ed) {
	editor = ed;
	form = editor.form;
	obj = editor.obj;
	opt = editor.opt;


	obj.chk_pegawai_iswna.checkbox({
		onChange: function (checked) {
			form.setValue(obj.cbo_countries_id, '--NULL--', "NONE");

			if (checked) {
				form.setDisable(obj.cbo_countries_id, false);
			} else {
				form.setDisable(obj.cbo_countries_id, true);
			}
		}
	});
	
}

	
export function form_dataopened(result, options)
{
	const { record } = result;

	if (record.pegawai_iswna) {
		form.setDisable(obj.cbo_countries_id, false);
	} else {
		form.setDisable(obj.cbo_countries_id, true);
	}
}	

export function form_newdata(data, options)
{
	form.setDisable(obj.cbo_countries_id, true);
}