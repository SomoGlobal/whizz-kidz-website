import { stringify } from 'qs';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import Button from '../button';
import Container from '../container';

export interface IDatoSearchProps {
  apiToken: string;
}

const DatoSearch: React.FC<IDatoSearchProps> = ({ apiToken }) => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});

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
    console.log({ data, meta });
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
            className="flex flex-row items-center max-w-3xl mx-auto mb-5"
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <Field
              id="search"
              name="search"
              className="bg-white border-gray-400 border-solid border-2 rounded-full py-2 px-6 text-2xl text-gray-700 flex-1 md:mr-4 placeholder-gray-600"
              type="search"
              component="input"
              placeholder="e.g. Connor"
            />
            <Button type="submit" size="lg" disabled={submitting || pristine}>
              Search
            </Button>
          </form>
        )}
      />
      <div role="region" aria-live="polite" className="max-w-3xl mx-auto my-10">
        {data.length > 0 && (
          <>
            <h2 className="text-gray-700 font-bold leading-snug text-3xl mb-6">
              Search Results
            </h2>
            <ol>
              {data.map((item) => (
                <li key={item.id} className="mb-6">
                  <a
                    href={item.attributes.url}
                    className="text-2xl font-bold text-indigo-600 hover:underline mb-2"
                  >
                    {item.attributes.title}
                  </a>
                  <p className="mb-1">
                    {item.attributes.highlight.body.map((text, index) => (
                      <span
                        className="text-sm text-gray-700 font-medium"
                        key={`${item.id}${index}`}
                      >
                        ...{text}
                      </span>
                    ))}
                  </p>
                  <p className="text-xs text-gray-700 font-medium">
                    {item.attributes.url}
                  </p>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </Container>
  );
};

export default DatoSearch;
