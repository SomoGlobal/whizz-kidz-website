import React, { useContext } from 'react';
import BrandContext from '../../lib/brand-context';
import Container from '../container';

export interface IPageTitleProps {
  text: string;
  color?: string;
}

/** Used in linking pages at the very top, below primary navigation */
const PageTitle: React.FC<IPageTitleProps> = ({ text, color }) => {
  const { bg } = useContext(BrandContext);

  return (
    <header className={`${color || bg} py-5`}>
      <Container>
        <h1 className="text-white text-5xl font-bold tracking-wide">{text}</h1>
      </Container>
    </header>
  );
};

export default PageTitle;
