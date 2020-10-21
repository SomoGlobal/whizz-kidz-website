import { getPage } from '../lib/api';
import PolicyPageComponent from '../lib/policy-pages';

export default PolicyPageComponent;

export const getStaticProps = async (context) => {
  const preview = !!context.preview;
  const data = await getPage(preview, 'accessibility');

  return {
    props: { preview, data },
  };
};
