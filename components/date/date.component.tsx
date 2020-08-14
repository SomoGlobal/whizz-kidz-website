import React from 'react';
import { format, parseISO } from 'date-fns';

export interface IDateProps {
  /** ISO Date String */
  dateString: string;
}

/**
 * Component used convert an ISO date string to a semantic time date element
 */
const Date: React.FC<IDateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default Date;
