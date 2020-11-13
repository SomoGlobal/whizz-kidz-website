import { getPage } from '../lib/api';
import PolicyPageComponent from '../lib/policy-pages';

export default PolicyPageComponent;

export const getStaticProps = async (context) => {
  const preview = !!context.preview;
  const data = await getPage(preview, 'contact');

  return {
    props: { preview, data },
    revalidate: 60 * 60 * 24, // once every 24 hours
  };
};
