jQuery(document).ready(function ($) {
	$('#hfm-submit').on('click', function (event){
		event.preventDefault();
		var number_input = $('#hfm-number');
		var number = number_input.val();
		var data = {
			'_ajax_nonce': hfm_ajax.nonce,
			'action': 'answer_form_submission',
			'number': number,
		};
		$.post(
			hfm_ajax.ajax_url,
			data,
			function( response ){
				alert(response.message);
			}
		);
	});
});
