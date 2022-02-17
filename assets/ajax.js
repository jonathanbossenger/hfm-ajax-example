jQuery(document).ready(function ($) {
	$('#hfm-submit').on('click', function (event){
		event.preventDefault();
		var number_input = $('#hfm-number');
		var number = number_input.val();
		jQuery.post(
			hfm_ajax.ajax_url,
			{
				'_ajax_nonce': hfm_ajax.hfm_ajax_nonce,
				'action': 'answer_form',
				'number': number,
			},
			function( response ){
				console.log(response.message);
			}
		);
	});
});
