import saveBlock from './save';
import editBlock from './edit';

((wp) => {
  const { __ } = wp.i18n; // The __() function for internationalization
  const { registerBlockType } = wp.blocks;

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
        filter: {
          type: 'boolean',
          default: true,
        },
        posts: {
          type: 'String',
          default: '',
        },
      },
      edit: (props) => {
        // console.log('[edit] Rendering edit view, props:');
        // console.log(props);
        return editBlock(props, wp);
      },
      save: (props) => {
        // console.log('[save] Rendering save view, props:');
        // console.log(props);
        return saveBlock(props, wp);
      },
    },
  );
})(window.wp);
