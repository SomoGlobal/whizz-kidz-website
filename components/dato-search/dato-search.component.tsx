import { stringify } from 'qs';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import Button from '../button';
import Container from '../container';

export interface IDatoSearchProps {
  apiToken: string;
}

const highlightReplace = (text) => {
  return text
    .replace(
      /\[h\]/g,
      `<mark class="inline-block font-bold tracking-wide text-gray-900 bg-yellow-100 rounded">`
    )
    .replace(/\[\/h\]/g, `</mark>`);
};

const DatoSearch: React.FC<IDatoSearchProps> = ({ apiToken }) => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentQuery, setCurrentQuery] = useState('');
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({ total_count: 0 });

  const search = async (q: string) => {
    const qs = stringify({
      limit,
      offset,
      q,
    });
    const response = await fetch(
      `https://site-api.datocms.com/search-results?=${qs}`,
      {
        headers: new Headers({
          Authorization: `API-Token ${apiToken}`,
          Accept: 'application/json',
        }),
      }
    );

    if (response.status !== 200) {
      return;
    }

    const { data, meta } = await response.json();

    setData(data);
    setMeta(meta);
    setCurrentQuery(q);
  };

  const onSubmit = async (values: any) => {
    await search(values.search);
  };

  return (
    <Container className="my-10 md:my-20">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center max-w-3xl mx-auto mb-5 sm:flex-row"
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <Field
              id="search"
              name="search"
              className="flex-1 w-full px-6 py-2 text-2xl text-gray-700 placeholder-gray-600 bg-white border-2 border-gray-400 border-solid rounded-full sm:mr-4 mb-4 sm:mb-0"
              type="search"
              component="input"
              placeholder="e.g. Connor"
            />
            <Button
              type="submit"
              size="lg"
              disabled={submitting || pristine}
              className="w-full sm:w-auto"
            >
              {submitting ? 'Searching...' : 'Search'}
            </Button>
          </form>
        )}
      />
      {currentQuery && (
        <div
          role="region"
          aria-live="polite"
          className="max-w-3xl mx-auto my-10 text-gray-700"
        >
          <h2 className="mb-6 text-3xl font-bold leading-snug">
            Search Results
            <span className="sr-hidden"> ({meta.total_count})</span>
          </h2>
          <p role="alert" className="mb-4">
            Found {meta.total_count} result for &ldquo;{currentQuery}&rdquo;.
          </p>
          <ol>
            {data.map((item) => (
              <li key={item.id} className="mb-6">
                <a
                  href={item.attributes.url}
                  className="mb-2 text-2xl font-bold text-indigo-600 hover:underline"
                >
                  {item.attributes.title}
                </a>
                <p className="mb-1">
                  {item.attributes.highlight.body.map((text, index) => (
                    <span
                      className="text-lg font-light tracking-wide text-gray-700"
                      key={`${item.id}${index}`}
                      dangerouslySetInnerHTML={{
                        __html: `...${highlightReplace(text)}`,
                      }}
                    />
                  ))}
                </p>
                <p aria-hidden className="text-xs font-normal text-gray-700">
                  {item.attributes.url}
                </p>
              </li>
            ))}
          </ol>
          <div className="py-5 mt-10 text-2xl border-t-2 border-gray-200 border-solid" />
        </div>
      )}
    </Container>
  );
};

export default DatoSearch;
