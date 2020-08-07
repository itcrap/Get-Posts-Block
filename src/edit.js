import { __ } from '@wordpress/i18n';
import { useState, createElement, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import {
  Button,
  CheckboxControl,
  Modal,
  ToggleControl,
  PanelBody,
  PanelRow,
  SelectControl,
} from '@wordpress/components';
import {
  HTTP_CLIENT,
  GET_POSTS,
  SET_POSTS,
  RENDER_POSTS,
  SELECTED_POSTS,
} from './functions';

export default function editBlock(props) {
  const { attributes, setAttributes } = props;
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  /*
   * Onstart function
   */
  const onStart = () => {
    if (!attributes.posts.length) {
      const apiPostsArray = HTTP_CLIENT('/wp-json/wp/v2/posts').map((post) => {
        // console.log(post);
        return {
          id: post.id,
          title: post.title.rendered,
          selected: false,
          excerpt: 'need to found',
          categories: post.categories,
        };
      });
      // console.log(apiPostsArray);
      setAttributes({ posts: SET_POSTS(apiPostsArray) });
    }
  };

  /*
   * Rendering part
   */

  /* Render modal contents */

  const modalContents = () => {
    // console.log('[modalContents] Render modal contents');
    const checkboxControlElement = (post, index) => {
      const getStateChecked = (idx) =>
        GET_POSTS(attributes.posts)[idx].selected;
      const setStateOnChange = (idx) => {
        const postsArray = GET_POSTS(attributes.posts);
        postsArray[idx].selected = !getStateChecked(idx);
        setAttributes({ posts: SET_POSTS(postsArray) });
      };

      return createElement(CheckboxControl, {
        key: post.id,
        label: post.title,
        className: 'get-posts-block-checkboxes',
        checked: getStateChecked(index),
        onChange() {
          setStateOnChange(index);
        },
      });
    };

    const loadPosts = () => {
      const postList = [];
      GET_POSTS(attributes.posts).forEach((post, index) => {
        postList.push(checkboxControlElement(post, index));
      });
      return postList;
    };

    return loadPosts();
  };

  /* Settings panel */

  const controls = [
    createElement(
      Fragment,
      {},
      createElement(
        InspectorControls,
        {},
        createElement(
          PanelBody,
          { title: 'Filter', initialOpen: true },

          createElement(
            PanelRow,
            {},
            createElement(ToggleControl, {
              label: 'Enable filter',
              onChange: (event) => {
                setAttributes({ filter: event });
              },
              checked: attributes.filter,
            }),
          ),
        ),
      ),
    ),
    createElement(
      Fragment,
      {},
      createElement(
        InspectorControls,
        {},
        createElement(
          PanelBody,
          { title: 'Post', initialOpen: true },
          createElement(
            PanelRow,
            {},
            createElement(
              Button,
              {
                label: 'Select post(s) from existing',
                isPrimary: true,
                onClick: () => openModal(),
              },
              `Selected posts (${
                GET_POSTS(SELECTED_POSTS(attributes.posts)).length
              })`,
            ),
            isOpen &&
              createElement(
                Modal,
                {
                  title: 'Select post(s) from existing',
                  onRequestClose: () => closeModal(),
                },
                modalContents(),
              ),
          ),
          /*  */
        ),
      ),
    ),
    createElement(
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
                backgroundImage: `url("/wp-content/plugins/get-posts-block/${attributes.template}.png")`,
              },
            }),
          ),
          createElement(
            PanelRow,
            {},
            createElement(SelectControl, {
              // multiple: true,
              label: __('Select post template'),
              value: attributes.template, // e.g: value = [ 'a', 'c' ]
              onChange: (tpl) => {
                console.log(`Selected: ${tpl}`);
                setAttributes({ template: tpl });
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
    ),
  ];

  /* Editor block */

  const editor = createElement(
    'div',
    {},
    createElement(
      'div',
      {},
      attributes.filter === true ? 'Filter panel: yes' : 'Filter panel: no',
    ),
    createElement(
      'div',
      {},
      RENDER_POSTS(
        SELECTED_POSTS(attributes.posts),
        attributes.template,
        {
          title: true,
          excerpt: true,
          image: true,
        },
        createElement,
      ),
    ),
  );

  /*
   * Initiation part
   */

  onStart();
  return [controls, editor];
}
