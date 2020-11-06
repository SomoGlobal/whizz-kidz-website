import { stringify } from 'qs';
import React, { useRef, useState } from 'react';
import { Field, Form } from 'react-final-form';
import ReactPaginate from 'react-paginate';
import { event } from '../../lib/google-analytics';
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
  const limit = 10;
  const resultsRef = useRef();
  const [page, setPage] = useState(0);
  const [isChangingPage, setPageChange] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [meta, setMeta] = useState({ total_count: 0 });
  const pageCount = Math.ceil(meta.total_count / limit);

  const search = async (q: string, pageNumber?: number) => {
    const offset = (pageNumber !== undefined ? pageNumber : page) * limit;
    const qs = stringify({
      limit,
      offset,
      q,
    });
    const response = await fetch(
      `https://site-api.datocms.com/search-results?${qs}`,
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

    const resJson = await response.json();

    setSearchResults(resJson.data);
    setMeta(resJson.meta);
    setCurrentQuery(q);
  };

  const onPageChange = async (formValues) => {
    const { selected } = formValues;
    setPage(selected);

    event({
      action: 'search_page_change',
      category: 'search',
      label: selected,
    });

    try {
      setPageChange(true);
      await search(currentQuery, selected);
    } finally {
      setPageChange(false);
      window.scroll(0, 0);
      document.body.focus();

      const resultsText = document.getElementById('search-results-text');

      if (resultsText) {
        resultsText.focus();
      }
    }
  };

  const onSubmit = async (values: any) => {
    setPage(0);
    await search(values.search);

    event({
      action: 'search_submitted',
      category: 'search',
      label: values.search,
    });
  };

  return (
    <Container className="my-10 md:my-20">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine }) => (
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
              disabled={submitting || pristine || isChangingPage}
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
          <p
            role="alert"
            className="mb-4"
            id="search-results-text"
            tabIndex={-1}
          >
            Found {meta.total_count} result for &ldquo;{currentQuery}&rdquo;.
          </p>
          <ol className={isChangingPage ? 'opacity-25' : ''}>
            {searchResults.map((item) => (
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

          <ReactPaginate
            containerClassName="flex flex-row flex-wrap justify-center w-full tracking-wide text-center font-medium my-10"
            activeClassName=""
            disabledClassName="opacity-50 cursor-not-allowed"
            activeLinkClassName="border-green-600"
            pageClassName="sm:mx-1 flex"
            pageLinkClassName="px-4 py-2 border-2 border-solid rounded-full bg-white text-green-800 hover:bg-gray-100"
            breakClassName="flex"
            breakLinkClassName="px-4 py-2 rounded-full text-green-800 hover:bg-gray-100"
            previousClassName="sm:mr-6 flex flex-1 w-full"
            previousLinkClassName="px-4 py-2 w-full border-2 border-solid rounded-full bg-white text-green-800 hover:bg-gray-100"
            nextClassName="sm:ml-6 flex flex-1 w-full"
            nextLinkClassName="px-4 py-2 w-full border-2 border-solid rounded-full bg-white text-green-800 hover:bg-gray-100"
            initialPage={0}
            disableInitialCallback
            onPageChange={onPageChange}
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
          />
        </div>
      )}
    </Container>
  );
};

export default DatoSearch;
