import Article from '../components/article';
import Decoration from '../components/decoration';
import Hero from '../components/hero';
import Mission from '../components/mission';
import TextWithImage from '../components/text-with-image';
import TextWithPattern from '../components/text-with-pattern';

const pageMap = {
  hero: Hero,
  mission: Mission,
  article: Article,
  decoration: Decoration,
  image_with_text: TextWithImage,
  text_with_pattern: TextWithPattern,
};

export default pageMap;
