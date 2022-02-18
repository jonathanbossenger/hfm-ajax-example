<?php
/**
 * Plugin Name:     Hellfish Media AJAX Example Plugin
 * Text Domain:     hfm
 * Domain Path:     /languages
 * Version:         1.0.0
 *
 * @package         hfm_plugin
 */

define( 'HFM_EXAMPLE_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Enqueue JavaScript assets
 */
add_action( 'wp_enqueue_scripts', 'hfm_enqueue_script' );
function hfm_enqueue_script($hook) {
	wp_register_script(
		'hfm-ajax',
		HFM_EXAMPLE_PLUGIN_URL . 'assets/ajax.js',
		array( 'jquery' ),
		time(),
		true
	);
	wp_enqueue_script( 'hfm-ajax' );
	$ajax_nonce = wp_create_nonce( 'hfm_ajax_nonce' );
	wp_localize_script(
		'hfm-ajax',
		'hfm_ajax',
		array(
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'nonce'    => $ajax_nonce,
		)
	);
}

/**
 * AJAX Trigger Form
 */
add_shortcode( 'hfm_ajax_form_shortcode', 'hfm_ajax_form_shortcode' );
function hfm_ajax_form_shortcode() {
	/**
	 * Allow developers to add logic or layout elements before the form
	 */
	do_action('hfm_before_form');

	ob_start();
	?>
	<form class="hfm-answer-form" method="post">
		<?php wp_nonce_field( 'hfm_nonce_action', 'hfm_nonce_field' ); ?>
		<input type="hidden" name="hfm_form" value="submit">
		<div>
			<label for="number">What is 3 + 4</label>
			<input type="text" id="hfm-number" name="hfm_number" placeholder="Enter the value">
		</div>
		<div>
			<input type="button" id="hfm-submit" name="hfm_submit" value="Submit Answer">
		</div>
	</form>
	<?php
	/**
	 * Allow developers to add logic or layout elements after the form
	 */
	do_action('hfm_after_form');
	$form = ob_get_clean();
	return $form;
}

/**
 * Ajax Hook to delete the form submissions
 */
add_action( 'wp_ajax_nopriv_answer_form_submission', 'hfm_answer_form_submission' );
function hfm_answer_form_submission() {
	check_ajax_referer( 'hfm_ajax_nonce' );
	$number = (int) $_POST['number'];
	if (7 === $number) {
		wp_send_json(array('message' => 'Correct! The answer is 7.'));
	} else {
		wp_send_json(array('message' => 'Whoops! Please try again.'));
	}
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_testimonial_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_testimonial_block_block_init' );

