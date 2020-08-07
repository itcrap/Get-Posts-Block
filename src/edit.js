import apiFetch from '@wordpress/api-fetch';
import { SET_POSTS } from './services';
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
      let apiPostsArray = [];
      apiFetch({ path: '/wp/v2/posts/?_embed&' }).then((posts) => {
        apiPostsArray = posts.map((post) => {
          console.log(post);

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
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        console.log(apiPostsArray);
        props.setAttributes({ posts: SET_POSTS(apiPostsArray) });
      });
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
