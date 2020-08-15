import React, { useContext } from 'react';
import BrandContext from '../../lib/brand-context';
import Container from '../container';

export interface IPageTitleProps {
  text: string;
  color?: string;
}

/** Used in linking pages at the very top, below primary navigation */
const PageTitle: React.FC<IPageTitleProps> = ({ text, color }) => {
  const { backgroundColor } = useContext(BrandContext);

  return (
    <section
      className={`${color || backgroundColor} py-5`}
      aria-label="Page Title"
    >
      <Container>
        <h1 className="text-white text-5xl font-bold tracking-wide">{text}</h1>
      </Container>
    </section>
  );
};

export default PageTitle;
