import React, { useEffect, useState } from 'react';
import cx from 'classnames';

export interface IExpanderProps {
  id: string | number;
  title: string;
}

/**
 * @link https://www.accessibility-developer-guide.com/examples/widgets/accordion/
 * @link https://www.w3.org/TR/wai-aria-practices/#accordion
 */
const Expander: React.FC<IExpanderProps> = ({ id, title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeId, setActiveId] = useState(id);

  useEffect(() => {
    if (!id) {
      setActiveId(Math.round(Math.random() * 100000));
    }
  }, [id]);

  const headingId = `faq-heading-${activeId}`;
  const regionId = `faq-region-${activeId}`;

  return (
    <>
      <h3 id={headingId}>
        <button
          className={cx(
            'w-full px-3 py-4 text-left text-gray-700 hover:bg-gray-100 hover:text-blue-800 hover:underline flex justify-between items-center font-medium text-lg rounded-lg',
            { 'bg-gray-100': expanded }
          )}
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={regionId}
        >
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 58.5 36.3"
            className={cx(
              'fill-current transition-transform origin-center transform duration-300 ease-in-out motion-reduce:transition-none motion-reduce:transform-none w-4',
              {
                'rotate-180': expanded,
              }
            )}
          >
            <path d="M55.4 10.8L33.1 33c-1.8 2-5 2-6.9 0L4.1 10.8c-2.1-2-2.6-4.6-.5-6.6l.8-.8c1.8-1.7 3.8-2.1 5.5-.3 5.4 5.5 10.8 11 16.3 16.5 1.9 1.8 5 1.8 6.9 0L49.6 3.1c1.5-1.7 3.6-1.4 5.3.3l.8.8c2 2 1.5 4.7-.3 6.6z" />
          </svg>
        </button>
      </h3>
      <div
        id={regionId}
        role="region"
        aria-labelledby={headingId}
        className={cx('w-full px-3 py-4 text-left bg-gray-100', {
          hidden: !expanded,
        })}
      >
        {children}
      </div>
    </>
  );
};

export default Expander;
