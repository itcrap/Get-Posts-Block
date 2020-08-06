import { RENDER_POSTS, SELECTED_POSTS } from './functions';

export default function saveBlock(props, wp) {
  const { attributes } = props;
  const { createElement } = wp.element;

  return createElement(
    'div',
    { className: 'get-posts-block-wrapper' },
    createElement(
      'div',
      { className: 'get-posts-block-filter' },
      attributes.filter === true ? 'Filter panel: yes' : 'Filter panel: no',
    ),
    RENDER_POSTS(
      SELECTED_POSTS(attributes.posts),
      attributes.template,
      createElement,
    ),
  );
}
