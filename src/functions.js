/* Array to JSON transformations */
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

/* Render post elements inside block in editor */
export const RENDER_POSTS = (JSONstr, template, createElement) => {
  // console.log('[RENDER_POSTS] Rendering posts elements');
  const selectedPostsElements = [];
  if (GET_POSTS(JSONstr).length > 0) {
    QUERY_POST(GET_POSTS(JSONstr)).forEach((post) => {
      selectedPostsElements.push(
        createElement(
          'li',
          {},
          createElement(
            'a',
            { href: post.link },
            // createElement('div', {}, post.title.rendered),
            post.title.rendered,
          ),
        ),
      );
    });
    return createElement('ul', {}, selectedPostsElements);
  }
  return false;
};

export const SELECTED_POSTS = (JSONstr) => {
  const selectedPosts = GET_POSTS(JSONstr).filter(
    (post) => post.selected === true,
  );
  return SET_POSTS(selectedPosts);
};
