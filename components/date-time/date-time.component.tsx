import React from 'react';

export interface IDateTimeProps {
  label: string;
  time: string;
  className?: string;
}

const DateTime: React.FC<IDateTimeProps> = ({
  time,
  label,
  className = '',
}) => {
  const locale = 'en-GB';
  const publishedAtDate = new Date(time);
  const timeTitle = publishedAtDate.toLocaleDateString(locale, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <time aria-label={label} dateTime={time} className={className}>
      {timeTitle}
    </time>
  );
};

export default DateTime;
