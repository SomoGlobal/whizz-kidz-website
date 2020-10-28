import React from 'react';
import Container from '../container';

export interface ICardListProps {
  heading?: string;
}

const CardList: React.FC<ICardListProps> = ({ heading, children }) => {
  return (
    <Container as="section" className="my-10 md:my-20">
      {heading && (
        <h2 className="text-gray-700 font-bold leading-snug text-3xl mb-6">
          {heading}
        </h2>
      )}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </ul>
    </Container>
  );
};

export default CardList;
