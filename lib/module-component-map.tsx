import Article from '../components/article';
import Decoration from '../components/decoration';
import FAQ from '../components/faq';
import FullWidthImage from '../components/full-width-image';
import GridGallery from '../components/grid-gallery';
import Hero from '../components/hero';
import JourneyLauncher from '../components/journey-launcher';
import LinkCloudModule from '../components/link-cloud-module';
import Mission from '../components/mission';
import Step from '../components/step';
import TextWithImage from '../components/text-with-image';
import TextWithPattern from '../components/text-with-pattern';
import VideoPlayer from '../components/video-player';
import TopicGrid from '../modules/topic-grid';

const pageMap = {
  hero: Hero,
  mission: Mission,
  article: Article,
  decoration: Decoration,
  text_with_image: TextWithImage,
  text_with_pattern: TextWithPattern,
  full_width_image: FullWidthImage,
  question: FAQ,
  step: Step,
  topic_grid: TopicGrid,
  gallery: GridGallery,
  video: VideoPlayer,
  link_cloud: LinkCloudModule,
  journey_launcher: JourneyLauncher,
};

export default pageMap;
