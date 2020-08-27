import ImageWithText from '../components/image-with-text';
import LandingHero from '../components/landing-hero';
import Mission from '../components/mission';
import Article from '../components/article';
import Decoration from '../components/decoration';

const pageMap = {
  hero: LandingHero,
  mission: Mission,
  article: Article,
  decoration: Decoration,
  image_with_text: ImageWithText,
};

export default pageMap;
