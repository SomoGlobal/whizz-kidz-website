import Article from '../components/article';
import CTA from '../components/cta';
import Decoration from '../components/decoration';
import FAQ from '../components/faq';
import FullWidthImage from '../components/full-width-image';
import GridGallery from '../components/grid-gallery';
import Hero from '../components/hero';
import Iframe from '../components/iframe';
import JourneyLauncher from '../components/journey-launcher';
import LargeImageHero from '../components/large-image-hero';
import LinkCloudModule from '../components/link-cloud-module';
import Mission from '../components/mission';
import SectionImageLink from '../components/section-image-link';
import SectionLink from '../components/section-link';
import Step from '../components/step';
import TextWithAnimation from '../components/text-with-animation';
import TextWithImage from '../components/text-with-image';
import TextWithPattern from '../components/text-with-pattern';
import ThreeCard from '../components/three-card';
import VideoPlayer from '../components/video-player';
import TopicGrid from '../modules/topic-grid';

const pageMap = {
  hero: Hero,
  mission: Mission,
  article: Article,
  decoration: Decoration,
  text_with_image: TextWithImage,
  text_with_pattern: TextWithPattern,
  text_with_animation: TextWithAnimation,
  full_width_image: FullWidthImage,
  question: FAQ,
  step: Step,
  topic_grid: TopicGrid,
  gallery: GridGallery,
  video: VideoPlayer,
  link_cloud: LinkCloudModule,
  journey_launcher: JourneyLauncher,
  three_card: ThreeCard,
  large_image_hero: LargeImageHero,
  iframe: Iframe,
  section_link: SectionLink,
  section_image_link: SectionImageLink,
  cta: CTA,
};

export default pageMap;
