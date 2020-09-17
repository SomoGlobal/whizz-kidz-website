import React from 'react';
import Container from '../container';

export interface IPodcastProps {
  file: {
    title: string;
    url: string;
    mimeType: string;
  };
  transcript: {
    url;
  };
}

const Podcast: React.FC<IPodcastProps> = ({ file, transcript }) => {
  return (
    <Container as="section" aria-label="Podcast">
      <figure className="my-10 md:my-20 max-w-4xl mx-auto">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio controls className="w-full">
          <source src={file.url} type={file.mimeType} />
          {transcript && (
            <track
              default
              src={transcript.url}
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          )}
        </audio>
        {file.title && (
          <figcaption className="text-center text-gray-700 mt-2">
            {file.title}
          </figcaption>
        )}
      </figure>
    </Container>
  );
};

export default Podcast;
