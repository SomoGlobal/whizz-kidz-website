import Article from '../components/article';
import Decoration from '../components/decoration';
import FullWidthImage from '../components/full-width-image';
import Hero from '../components/hero';
import Mission from '../components/mission';
import Step from '../components/step';
import TextWithImage from '../components/text-with-image';
import TextWithPattern from '../components/text-with-pattern';
import FAQ from '../components/faq';

const pageMap = {
  hero: Hero,
  mission: Mission,
  article: Article,
  decoration: Decoration,
  image_with_text: TextWithImage,
  text_with_pattern: TextWithPattern,
  full_width_image: FullWidthImage,
  question: FAQ,
  step: Step,
};

export default pageMap;
