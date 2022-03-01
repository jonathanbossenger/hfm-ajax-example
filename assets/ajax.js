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
		$.ajax({
			type: "POST",
			url: hfm_ajax.ajax_url,
			data: data,
			success: function(response){
				alert(response.message);
			},
			error: function(XMLHttpRequest, status, error){
				alert("Oh dear, an error occurred!");
			}
		});
	});
});
