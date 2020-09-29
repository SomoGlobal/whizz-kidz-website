import cx from 'classnames';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Image } from 'react-datocms';
import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';
import Container from '../container';
import PlayButton from '../play-button';

export interface IVideoPlayerProps {
  coverImage: {
    responsiveImage: any;
  };
  video: {
    provider?: string;
    providerUid?: string;
  };
  hasPattern?: boolean;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  video,
  coverImage,
  hasPattern,
}) => {
  const [isReady, setReady] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [hasStarted, setStarted] = useState(false);
  const [videoElement, setVideo] = useState<any>();

  const onReady = (obj: any) => {
    setReady(true);

    if (video.provider === 'youtube') {
      setVideo(obj.target);
    } else if (video.provider === 'vimeo') {
      setVideo(obj);
    }
  };

  const onPlay = () => {
    if (video.provider === 'youtube') {
      videoElement.playVideo();
      videoElement.hideVideoInfo();
    } else if (video.provider === 'vimeo') {
      videoElement.play();
    }

    if (typeof window !== 'undefined') {
      document.getElementById(video.providerUid).focus();
    }

    setStarted(true);
  };

  return (
    <Container
      as="section"
      aria-label="Video Player"
      className={cx(
        'grid max-w-3xl grid-cols-1 grid-rows-1 pl-0 pr-0 lg:pl-4 lg:pr-4',
        {
          'py-4 bg-cover': hasPattern,
        }
      )}
      style={{
        backgroundImage:
          hasPattern && !isPlaying
            ? `url("/svg/hero/supporters-hero.svg")`
            : '',
      }}
    >
      {!hasStarted && (
        <motion.div
          className="z-20 flex items-center justify-center col-start-1 col-end-2 row-start-1 row-end-2"
          exit={{
            opacity: 0,
            scale: 0,
          }}
        >
          {isReady && <PlayButton onClick={onPlay} />}
        </motion.div>
      )}
      <Image
        data={coverImage.responsiveImage}
        className={cx('col-start-1 col-end-2 row-start-1 row-end-2', {
          'z-10': !hasStarted,
          'z-0': hasStarted,
        })}
      />
      {video && (
        <motion.div
          aria-hidden={!hasStarted}
          animate={{
            opacity: hasStarted ? 1 : 0,
            transition: { duration: 0.8 },
          }}
          className={cx('col-start-1 col-end-2 row-start-1 row-end-2', {
            'z-10': isPlaying,
            'z-0': !isPlaying,
          })}
        >
          {video.provider === 'youtube' && (
            <YouTube
              containerClassName="w-full h-full"
              id={video.providerUid}
              onReady={onReady}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              videoId={video.providerUid}
              opts={{
                height: '100%',
                width: '100%',
                playerVars: {
                  color: 'white',
                  modestbranding: 1,
                  autoplay: 0,
                  showinfo: 0,
                  rel: 0,
                  controls: 1,
                },
              }}
            />
          )}
          {video.provider === 'vimeo' && (
            <Vimeo
              className="w-full h-full"
              color="white"
              showPortrait={false}
              showTitle={false}
              video={video.providerUid}
              id={video.providerUid}
              responsive
              style={{
                width: '100%',
                height: '100%',
              }}
              showByline={false}
              onReady={onReady}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
          )}
        </motion.div>
      )}
    </Container>
  );
};

export default VideoPlayer;
