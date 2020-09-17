import ImageWithText from '../components/image-with-text';
import Hero from '../components/hero';
import Mission from '../components/mission';
import Article from '../components/article';
import Decoration from '../components/decoration';

const pageMap = {
  hero: Hero,
  mission: Mission,
  article: Article,
  decoration: Decoration,
  image_with_text: ImageWithText,
};

export default pageMap;
