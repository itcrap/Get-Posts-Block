<?php
/*
 * Plugin Name: Get Posts Block
 * Plugin URI: https://itcrap.ru/develop/get_posts_list_plugin
 * Description: Wordress block for getting posts
 * Version: 1.0
 * Author: Matthew Soul
 * Author URI: https://itcrap.ru
 * License: GPLv2
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the block's assets for the editor.
 *
 * Javascript dependencies:
 * wp-blocks:      The registerBlockType() function to register blocks.
 * wp-element:     The wp.element.createElement() function to create elements.
 * wp-i18n:        The __() function for internationalization.
 *
 * CSS dependencies:
 * wp-edit-blocks: The WordPress core backend block styles.
 *
 * @since 1.0.0
 */

function get_posts_block_register_block() {

	// Register JavasScript File build/index.js
	wp_register_script(
		'get-posts-block',
		plugins_url( 'index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'index.js' )
	);

	// Register editor style build/editor.css
	wp_register_style(
		'get-posts-block-editor-style',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	// Register front end block style build/style.css
	wp_register_style(
		'get-posts-block-frontend-style',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	// Register your block
	register_block_type( 'common/get-posts-block', array(
		'editor_script' => 'get-posts-block',
		'editor_style' => 'get-posts-block-editor-style',
		'style' => 'get-posts-block-frontend-style',
	) );

}

add_action( 'init', 'get_posts_block_register_block' );