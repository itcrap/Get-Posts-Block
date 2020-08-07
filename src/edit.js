import { HTTP_CLIENT, SET_POSTS } from './services';
import filterControl from './components/filterControl';
import postControl from './components/postControl';
import templateControl from './components/templateControl';
import editorControl from './components/editorControl';

export default function editBlock(props) {
  /*
   * Onstart function
   */
  const onStart = () => {
    if (!props.attributes.posts.length) {
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
      props.setAttributes({ posts: SET_POSTS(apiPostsArray) });
    }
  };

  /*
   * Rendering part
   */

  /* Settings panel */
  const controls = [
    filterControl(props),
    postControl(props),
    templateControl(props),
  ];

  /* Editor block */
  const editor = editorControl(props);

  /*
   * Initiation part
   */

  onStart();
  return [controls, editor];
}
