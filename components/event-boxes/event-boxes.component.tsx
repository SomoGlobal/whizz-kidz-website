import React from 'react';
import cx from 'classnames';
import { format } from 'date-fns';

import Container from '../container';

export interface IEventBoxesProps {
  startDate: string;
  endDate?: string;
  registrationFee?: string;
  minimumTarget?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
}

const Box: React.FC<{
  image: React.ReactChild;
  backgroundColor: string;
  borderColor: string;
  title: React.ReactChild;
  text: React.ReactChild;
}> = ({ image, backgroundColor, borderColor, title, text }) => (
  <div
    className={cx(
      'p-4 border-4 border-solid rounded-lg text-center text-gray-700',
      borderColor
    )}
  >
    <div
      className={cx(
        'w-1/6 h-1/6 md:w-1/4 md:h-1/4 rounded-full mx-auto',
        backgroundColor
      )}
    >
      {image}
    </div>
    <div className="font-bold text-2xl my-2">{title}</div>
    <div className="font-medium text-lg my-2">{text}</div>
  </div>
);

const ExternalLink: React.FC<{ url: string }> = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center hover:underline"
  >
    Google Maps
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="presentation"
      className="fill-current w-5 h-5 ml-1"
    >
      <rect width="24" height="24" opacity="0" />
      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
    </svg>
  </a>
);

const DateSpan: React.FC<any> = ({ startDate, endDate }) => {
  return (
    <div className="flex text-sm">
      <div>
        <div className="uppercase font-bold">Start</div>
        <div>{format(new Date(startDate), 'PPpp')}</div>
      </div>
      {endDate && (
        <div className="ml-2">
          <div className="uppercase font-bold">End</div>
          <div>{format(new Date(endDate), 'PPpp')}</div>
        </div>
      )}
    </div>
  );
};

const EventBoxes: React.FC<IEventBoxesProps> = ({
  startDate,
  endDate,
  location,
  registrationFee,
  minimumTarget,
}) => {
  return (
    <Container
      as="section"
      className="my-10 md:my-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4"
      aria-label="Event Details"
    >
      <Box
        title="Event Date"
        image={<img src="/svg/date-icon.svg" alt="" role="presentation" />}
        text={<DateSpan startDate={startDate} endDate={endDate} />}
        backgroundColor="bg-primary-green"
        borderColor="border-primary-green"
      />
      <Box
        title="Location"
        image={<img src="/svg/location-icon.svg" alt="" role="presentation" />}
        text={
          <ExternalLink
            url={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`}
          />
        }
        backgroundColor="bg-primary-pink"
        borderColor="border-primary-pink"
      />
      <Box
        title="Registration Fee"
        image={<img src="/svg/cost-icon.svg" alt="" role="presentation" />}
        text={registrationFee}
        backgroundColor="bg-primary-blue"
        borderColor="border-primary-blue"
      />
      <Box
        title="Minimum target"
        image={<img src="/svg/goal-icon.svg" alt="" role="presentation" />}
        text={minimumTarget}
        backgroundColor="bg-secondary-blue"
        borderColor="border-secondary-blue"
      />
    </Container>
  );
};

export default EventBoxes;
