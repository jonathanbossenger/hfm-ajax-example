jQuery(document).ready(function ($) {
	$('#submit_answer').on('click', function (event){
		event.preventDefault();
		var number = $('#hfm-number').val();
		jQuery.post(
			hfm_ajax.ajax_url,
			{
				'_ajax_nonce': hfm_ajax.hfm_ajax_nonce,
				'action': 'answer_form_submission',
				'number': number,
			},
			function( response ){
				alert('Form submitted');
			}
		);
	});
});
