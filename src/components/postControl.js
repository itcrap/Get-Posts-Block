import apiFetch from '@wordpress/api-fetch';
import { useState, createElement, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import {
  Button,
  CheckboxControl,
  Modal,
  PanelBody,
  PanelRow,
} from '@wordpress/components';
import { COUNT_POSTS_SELECTED, GET_POSTS, SET_POSTS } from '../services';

const renewPosts = (props) => {
  console.log('[renewPosts] initiated');
  if (!props.attributes.posts.length) {
    console.log('[renewPosts] posts in props not found');
    let apiPostsArray = [];
    apiFetch({ path: '/wp/v2/posts/?_embed&' }).then((posts) => {
      apiPostsArray = posts.map((post) => {
        // console.log(post);

        const mediaUrl = post.featured_media
          ? post._embedded['wp:featuredmedia']
              .filter(
                (feauteredImage) => post.featured_media === feauteredImage.id,
              )
              .map((media) => media.media_details.sizes.thumbnail.source_url)
          : '';

        return {
          id: post.id,
          title: post.title.rendered,
          link: post.link,
          selected: false,
          excerpt: post.excerpt.rendered,
          categories: post.categories,
          mediaUrl,
        };
      });
      console.log('[renewPosts] Set full list of posts to property posts:');
      console.log(apiPostsArray);
      props.setAttributes({ posts: SET_POSTS(apiPostsArray) });
    });
  }
  return true;
};

const checkboxControlElement = (props, post, index) => {
  const getStateChecked = (idx) =>
    GET_POSTS(props.attributes.posts)[idx].selected;
  const setStateOnChange = (idx) => {
    const postsArray = GET_POSTS(props.attributes.posts);
    postsArray[idx].selected = !getStateChecked(idx);
    props.setAttributes({ posts: SET_POSTS(postsArray) });
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

const modalBody = (props) => {
  // console.log('[modalContents] Render modal contents');
  renewPosts(props);
  const postList = [];
  GET_POSTS(props.attributes.posts).forEach((post, index) => {
    postList.push(checkboxControlElement(props, post, index));
  });
  return postList;
};

const render = (props) => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return createElement(
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
            `Selected posts (${COUNT_POSTS_SELECTED(props.attributes.posts)})`,
          ),
          isOpen &&
            createElement(
              Modal,
              {
                title: 'Select post(s) from existing',
                onRequestClose: () => closeModal(),
              },
              modalBody(props),
            ),
        ),
      ),
    ),
  );
};

const postControl = (props) => render(props);

export default postControl;
