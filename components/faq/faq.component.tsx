import React from 'react';
import {
  Generic,
  GenericCollection,
  JSONLD,
  Question,
} from 'react-structured-data';
import Container from '../container';
import Expander from '../expander';

export interface IFaqProps {
  items: Array<{ id: string | number; question: string; answer: string }>;
}

/**
 * @link https://developers.google.com/search/docs/data-types/faqpage
 */
const Faq: React.FC<IFaqProps> = ({ items }) => {
  return (
    <Container element="section">
      <JSONLD>
        <Generic type="FAQPage" jsonldtype="FAQPage">
          <GenericCollection type="mainEntity">
            {items.map((item) => (
              <Question name={item.question} key={item.id}>
                <Generic
                  type="acceptedAnswer"
                  jsonldtype="Answer"
                  schema={{ text: item.answer }}
                />
              </Question>
            ))}
          </GenericCollection>
        </Generic>
      </JSONLD>
      <div className="my-40 md:mx-16 text-gray-700">
        <h2 className="max-w-3xl mx-auto mb-6 text-4xl font-bold leading-snug">
          Frequently asked questions
        </h2>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg border border-gray-300">
          {items.map((item) => (
            <Expander id={item.id} key={item.id} title={item.question}>
              {item.answer}
            </Expander>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Faq;
