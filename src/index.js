import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import saveBlock from './save';
import editBlock from './edit';

registerBlockType(
  'common/get-posts-block', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block
  {
    title: __('Get Posts Block'), // Block title. __() function allows for internationalization
    description: __('Block for getting posts values'), // Block description
    icon: 'admin-page', // Block icon from Dashicons. https://developer.wordpress.org/resource/dashicons/
    category: 'common', // Block category. Group blocks together based on common traits E.g. common, formatting, layout widgets, embed
    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'p',
        default: 'Default text',
      },
      fields: {
        type: 'string',
        default: '',
      },
      filter: {
        type: 'boolean',
        default: true,
      },
      posts: {
        type: 'string',
        default: '',
      },
      template: {
        type: 'string',
        default: 'default',
      },
    },
    edit: (props) => {
      // console.log('[edit] Rendering edit view, props:');
      // console.log(props);
      return editBlock(props);
    },
    save: (props) => {
      // console.log('[save] Rendering save view, props:');
      // console.log(props);
      return saveBlock(props);
    },
  },
);
