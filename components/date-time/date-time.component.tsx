import React from 'react';

export interface IDateTimeProps {
  time: string;
  className?: string;
}

const DateTime: React.FC<IDateTimeProps> = ({ time, className = '' }) => {
  const locale = 'en-GB';
  const publishedAtDate = new Date(time);
  const timeTitle = publishedAtDate.toLocaleDateString(locale, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <time dateTime={time} className={className} pubdate>
      {timeTitle}
    </time>
  );
};

export default DateTime;
