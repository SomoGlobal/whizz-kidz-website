import React from 'react';

export interface IDateTimeProps {
  label: string;
  time: string;
}

const DateTime: React.FC<IDateTimeProps> = ({ time, label }) => {
  const publishedAtDate = new Date(time);
  const timeTitle = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
    timeStyle: 'long',
  } as any).format(publishedAtDate);
  const timeText = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  } as any).format(publishedAtDate);

  return (
    <time aria-label={label} dateTime={time} title={timeTitle}>
      {timeText}
    </time>
  );
};

export default DateTime;
