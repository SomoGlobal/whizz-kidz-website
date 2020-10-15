import Link from 'next/link';
import React, { useContext } from 'react';
import cx from 'classnames';
import { Generic, GenericCollection, JSONLD } from 'react-structured-data';
import Head from 'next/head';
import BrandContext from '../../lib/brand-context';
import Container from '../container';

export interface IBreadcrumbItem {
  label: string;
  linkProps: {
    href: string;
    as?: string;
  };
}

export interface IBreadcrumbsProps {
  isThemed?: boolean;
  items: IBreadcrumbItem[];
}

/**
 * Used to create the ldjson schema item
 * @link https://developers.google.com/search/docs/data-types/breadcrumb#json-ld
 */
const genSchemaItem = (item, index, length) => {
  const output: any = {
    position: index + 1,
    name: item.label,
  };

  if (index !== length - 1) {
    output.item = `https://www.whizz-kidz.org.uk${
      item.linkProps.as || item.linkProps.href
    }`;
  }

  return output;
};

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ isThemed, items = [] }) => {
  const { backgroundColor } = useContext(BrandContext);
  const isLastItem = (index: number) => index === items.length - 1;
  const secondToLastItem = items[items.length - 2];

  return (
    <div
      className={`${isThemed ? backgroundColor : 'bg-white'}`}
      data-datocms-noindex
    >
      <JSONLD>
        <Generic type="BreadcrumbList" jsonldtype="BreadcrumbList">
          <GenericCollection type="itemListElement">
            {items.map((item, index, arr) => (
              <Generic
                key={item.linkProps.href}
                jsonldtype="ListItem"
                schema={genSchemaItem(item, index, arr.length)}
              />
            ))}
          </GenericCollection>
        </Generic>
      </JSONLD>

      <Container as="nav" aria-label="breadcrumbs">
        <Link {...secondToLastItem.linkProps}>
          <a
            className={cx('pr-3 py-4 font-bold flex lg:hidden', {
              'text-gray-100': isThemed,
              'text-gray-700': !isThemed,
            })}
          >
            <svg
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="1.5rem"
              height="1.5rem"
              className="text-gray-500"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {secondToLastItem.label}
          </a>
        </Link>
        <ol className="list-none p-0 my-1 hidden lg:inline-flex w-full">
          {items.map((item, index) => (
            <li
              key={item.linkProps.href}
              className="flex items-center font-bold"
            >
              <Link {...item.linkProps}>
                <a
                  aria-current={isLastItem(index) ? 'page' : false}
                  className={cx(
                    'px-3 py-2',
                    {
                      'hover:underline': !isLastItem(index),
                      'font-normal': isLastItem(index),
                      'pl-0': index === 0,
                    },
                    {
                      'text-gray-100': isThemed,
                      'text-gray-700': !isThemed,
                    }
                  )}
                >
                  {item.label}
                </a>
              </Link>
              {!isLastItem(index) && (
                <svg
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="1.5rem"
                  height="1.5rem"
                  className="text-gray-500"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
