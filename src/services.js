import { createElement } from '@wordpress/element';

/* JSON and Array transformations */
export const SET_POSTS = (JSONstr) => JSON.stringify(JSONstr);
export const GET_POSTS = (JSONstr) =>
  JSONstr === '' ? [] : JSON.parse(JSONstr);

/* HTTP client in synchronous mode */
export const HTTP_CLIENT = (url) => {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', url, false); // false for synchronous request
  xmlHttp.send(null);
  if (xmlHttp.responseText) {
    return JSON.parse(xmlHttp.responseText);
  }
  return false;
};

/* Performing API query */
export const QUERY_POST = (postsArray) => {
  if (postsArray.length > 0) {
    const postfix = '&include[]=';
    let fullpostfix = '';
    postsArray.forEach((post) => {
      fullpostfix += postfix + post.id;
    });
    return HTTP_CLIENT(`/wp-json/wp/v2/posts/?${fullpostfix}`);
  }
  return false;
};

/* Render post template */
export const RENDER_TEMPLATE = (post, template, fields) => {
  // console.log(post);

  const postImageStyle = () => {
    return post.jetpack_featured_media_url.length > 0
      ? { backgroundImage: `url("${post.jetpack_featured_media_url}")` }
      : {
          backgroundImage: `url("/wp-content/plugins/get-posts-block/images/no-article-logo.png")`,
        };
  };

  return createElement(
    'div',
    {
      className: 'get-posts-block-card-body',
    },
    createElement(
      'a',
      {
        href: post.link,
      },
      createElement('div', {
        className: 'get-posts-block-post-image',
        style: postImageStyle(),
      }),
    ),
    createElement(
      'div',
      {
        className: 'get-posts-block-content-body',
      },
      createElement(
        'a',
        {
          className: 'get-posts-block-a-container',
          href: post.link,
        },
        createElement(
          'div',
          {
            className: 'get-posts-block-content-container',
          },
          createElement(
            'div',
            {
              className: 'get-posts-block-content-title',
            },
            post.title.rendered,
          ),
          createElement(
            'small',
            {
              className: 'get-posts-block-content-excerpt',
            },
            post.excerpt.rendered.replace(/<[^>]*>?/gm, ''),
          ),
        ),
      ),
    ),
  );
};

/* Render post elements inside block in editor */
export const RENDER_POSTS = (JSONstr, template, fields) => {
  // console.log('[RENDER_POSTS] Rendering posts elements');
  const selectedPostsElements = [];
  if (GET_POSTS(JSONstr).length > 0) {
    QUERY_POST(GET_POSTS(JSONstr)).forEach((post) => {
      selectedPostsElements.push(RENDER_TEMPLATE(post, template, fields));
    });
    return selectedPostsElements;
  }
  return false;
};

export const SELECTED_POSTS = (JSONstr) => {
  const selectedPosts = GET_POSTS(JSONstr).filter(
    (post) => post.selected === true,
  );
  return SET_POSTS(selectedPosts);
};
