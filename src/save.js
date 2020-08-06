import { RENDER_POSTS, SELECTED_POSTS } from './functions';

export default function saveBlock(props, wp) {
  const { attributes } = props;
  const { createElement } = wp.element;

  return createElement(
    'div',
    { className: 'postListWrapper' },
    createElement(
      'div',
      { className: 'testClass' },
      attributes.filter === true ? 'Filter panel: yes' : 'Filter panel: no',
    ),
    createElement(
      'div',
      {},
      RENDER_POSTS(SELECTED_POSTS(attributes.posts), createElement),
    ),
  );
}
