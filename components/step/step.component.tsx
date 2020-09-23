import React from 'react';
import cx from 'classnames';
import styles from '../article/article.module.css';
import Container from '../container';

export interface IStepProps {
  number: number;
  header: string;
  body: string;
  link?: any;
}

const colors = [
  'bg-pink-600',
  'bg-blue-600',
  'bg-green-600',
  'bg-yellow-700',
  'bg-indigo-700',
  'bg-purple-600',
  'bg-red-500',
];

const Step: React.FC<IStepProps> = ({ number, header, body, link = '' }) => {
  return (
    <Container
      className="grid grid-cols-12 my-10 md:my-20"
      as="section"
      aria-label={`Step ${number}`}
    >
      <aside
        aria-hidden
        className={cx(
          'col-span-12 md:col-span-3 text-3xl md:text-6xl p-6 md:p-12 text-white md:text-center flex items-center md:justify-center font-bold',
          colors[(number - 1) % colors.length]
        )}
      >
        Step {number}
      </aside>
      <div className="col-span-12 md:col-span-9 p-6 md:p-12 bg-gray-100">
        <h3 className="mb-4 text-2xl font-bold text-gray-700">{header}</h3>
        <div
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {link}
      </div>
    </Container>
  );
};

export default Step;
