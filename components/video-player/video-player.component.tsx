import cx from 'classnames';
import React, { useState } from 'react';
import { Image } from 'react-datocms';
import YouTube from 'react-youtube';
import Container from '../container';
import PlayButton from '../play-button';

export interface IVideoPlayerProps {
  coverImage: {
    responsiveImage: any;
  };
  video: {
    provider?: string;
    providerUid?: string;
    thumbnailUrl?: string;
    title?: string;
    url?: string;
    width?: number;
    height?: number;
  };
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ video, coverImage }) => {
  const [isReady, setReady] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [hasStarted, setStarted] = useState(false);
  const [videoElement, setVideo] = useState<any>();

  const onReady = (event: any) => {
    setReady(true);
    setVideo(event.target);
  };

  const onPlay = () => {
    setStarted(true);
    videoElement.playVideo();
    videoElement.hideVideoInfo();

    if (typeof window !== 'undefined') {
      document.getElementById(video.providerUid).focus();
    }
  };

  return (
    <Container
      as="section"
      aria-label="Video Player"
      className="pl-0 pr-0 lg:pl-4 lg:pr-4 grid grid-cols-1 grid-rows-1"
    >
      {!hasStarted && (
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 z-20 flex items-center justify-center">
          {isReady && <PlayButton onClick={onPlay} />}
        </div>
      )}
      <Image
        data={coverImage.responsiveImage}
        className={cx('col-start-1 col-end-2 row-start-1 row-end-2', {
          'z-10': !hasStarted,
          'z-0': hasStarted,
        })}
      />
      {video && video.provider === 'youtube' && (
        <YouTube
          id={video.providerUid}
          containerClassName={cx(
            'col-start-1 col-end-2 row-start-1 row-end-2',
            { 'z-10': isPlaying, 'z-0': !isPlaying }
          )}
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
    </Container>
  );
};

export default VideoPlayer;
