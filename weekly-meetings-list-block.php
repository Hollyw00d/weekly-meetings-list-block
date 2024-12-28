<?php
/**
 * Plugin Name:       Weekly Meetings List Block
 * Description:       Add a block to show a table of on-going weekly meetings. Some examples could be for a book club, support group, meditation group, or another type of religious studies group.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            MJ
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       weekly-meetings-list-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function weekly_meetings_list_block_init() {
	wp_register_script(
			'weekly-meetings-list-editor',
			plugins_url() . '/weekly-meetings-list-block/build/weekly-meetings-list/index.js',
			array(
					'wp-blocks',
					'wp-dom-ready',
					'wp-element',
					'wp-i18n',
     'wp-editor'
			)
	);
	
	register_block_type( __DIR__ . '/build/weekly-meetings-list',
		array(
					'editor_script' => 'weekly-meetings-list-editor',
			)
	);

	register_block_type( __DIR__ . '/build/weekly-meetings-list-child');
}
add_action( 'init', 'weekly_meetings_list_block_init' );