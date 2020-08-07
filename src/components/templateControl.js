import { __ } from '@wordpress/i18n';
import { createElement, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';

const render = (props) => {
  return createElement(
    Fragment,
    {},
    createElement(
      InspectorControls,
      {},
      createElement(
        PanelBody,
        { title: 'Template', initialOpen: true },
        createElement(
          PanelRow,
          {},
          createElement('div', {
            className: 'get-posts-block-preview-template',
            style: {
              backgroundImage: `url("/wp-content/plugins/get-posts-block/images/${props.attributes.template}.png")`,
            },
          }),
        ),
        createElement(
          PanelRow,
          {},
          createElement(SelectControl, {
            // multiple: true,
            label: __('Select post template'),
            value: props.attributes.template, // e.g: value = [ 'a', 'c' ]
            onChange: (tpl) => {
              console.log(`Selected: ${tpl}`);
              props.setAttributes({ template: tpl });
            },
            options: [
              { value: 'default', label: 'Template 1' },
              { value: 'theme2', label: 'Template 2' },
              { value: 'theme3', label: 'Template 3' },
            ],
          }),
        ),
      ),
    ),
  );
};

const templateControl = (props) => render(props);

export default templateControl;
