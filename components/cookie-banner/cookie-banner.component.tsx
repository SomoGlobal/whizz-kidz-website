import React, { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Cookies from 'js-cookie';

const COOKIE_KEY = 'whizz-kidz-cookie';

const CookieBanner: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (Cookies.get(COOKIE_KEY)) {
      onAccept({ acceptedByScrolling: false });
    }
  }, []);

  const onAccept = ({ acceptedByScrolling }) => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'cookie_consent_given' });
    (window as any).dataLayer.push({ cookie_consent: 'true' });
    console.log('consent_given');
    setIsOpen(false);
  };

  const onDecline = () => {
    // set to not allow facebook pixel and google analytics
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'cookie_consent_declined' });
    (window as any).dataLayer.push({ cookie_consent: 'false' });
    setIsOpen(false);
  };

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: shouldReduceMotion ? 0 : '100%' },
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center"
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
      exit="closed"
      variants={variants}
    >
      <CookieConsent
        location="none"
        buttonText="Accept"
        cookieName={COOKIE_KEY}
        onAccept={onAccept}
        onDecline={onDecline}
        disableStyles
        enableDeclineButton
        containerClasses="bg-white rounded-lg m-3 md:m-6 shadow-2xl flex justify-between items-center flex-col md:flex-row"
        buttonClasses="border-2 border-solid rounded-full font-medium md:inline-block px-4 py-1 text-sm bg-green-700 text-white hover:bg-green-800 border-transparent block w-full md:w-auto"
        buttonWrapperClasses="p-5 w-full md:w-auto tracking-wide text-center"
        declineButtonClasses="mb-3 md:mb-0 mr-0 md:mr-3 border-2 border-solid rounded-full font-medium md:inline-block px-4 py-1 text-sm bg-white text-green-700 hover:bg-gray-200 border-green-700 hover:border-green-800 block w-full md:w-auto"
        declineButtonText="Decline"
        contentClasses="w-full md:w-auto"
        overlayClasses=""
      >
        <div className="flex flex-col rounded-lg md:flex-row">
          <div className="flex items-center justify-start md:justify-center rounded-t-lg md:p-4 bg-secondary-blue md:rounded-t-none md:rounded-l-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 155 83"
              className="h-12 text-primary-yellow flex md:hidden"
            >
              <g className="fill-current">
                <path d="M84.061-17.277c9.266 9.164 14.47 21.39 14.652 34.424a2.896 2.896 0 01-2.327 2.878c-5.274 1.044-9.22 5.529-9.595 10.906a2.893 2.893 0 01-1.208 2.156 2.88 2.88 0 01-2.43.432c-3.94-1.077-8.333-.335-12.051 2.036-3.848 2.452-6.401 6.254-7.003 10.43a2.887 2.887 0 01-3.188 2.46c-.463-.054-.929-.081-1.383-.081-6.597 0-11.963 5.377-11.963 11.987 0 1.025.13 2.044.386 3.029a2.894 2.894 0 01-.594 2.6 2.883 2.883 0 01-2.464 1.008c-12.173-1.124-23.445-6.734-31.739-15.795C4.807 42.073.21 30.233.21 17.85c0-13.183 5.124-25.576 14.427-34.898 9.303-9.321 21.672-14.454 34.829-14.454 13.034 0 25.32 5.051 34.595 14.225zm-65.343 4.319C10.506-4.73 5.982 6.212 5.982 17.85a43.49 43.49 0 0011.426 29.434c6.492 7.093 15.047 11.79 24.39 13.456a17.43 17.43 0 01-.005-.39c0-9.6 7.637-17.446 17.143-17.76 1.375-4.806 4.583-9.056 9.067-11.915 4.14-2.64 8.934-3.791 13.543-3.318 1.467-5.721 5.72-10.387 11.308-12.348-.682-10.67-5.196-20.603-12.848-28.17-8.188-8.098-19.034-12.558-30.54-12.558-11.615 0-22.535 4.532-30.748 12.76z" />
                <path d="M43.833 31.82c0 4.656-3.788 8.444-8.443 8.444-4.656 0-8.443-3.788-8.443-8.443 0-4.656 3.787-8.444 8.443-8.444 4.655 0 8.443 3.788 8.443 8.444zM64.94-2.655c0-3.492 2.526-6.333 5.63-6.333 3.103 0 5.628 2.841 5.628 6.333 0 3.491-2.525 6.332-5.629 6.332-3.103 0-5.628-2.84-5.628-6.332zM41.019-.545c0 4.656-3.788 8.444-8.444 8.444-4.655 0-8.443-3.788-8.443-8.444 0-4.655 3.788-8.443 8.443-8.443 4.656 0 8.444 3.788 8.444 8.443zM57.356 17.7a2.852 2.852 0 01-2.235-2.352 2.842 2.842 0 011.46-2.9 2.837 2.837 0 013.217.396c.87.793 1.162 2.08.71 3.17-.515 1.238-1.843 1.93-3.152 1.686zM57.357 30.358c-1.154-.216-2.063-1.195-2.236-2.347a2.843 2.843 0 011.46-2.899 2.844 2.844 0 013.218.396 2.839 2.839 0 01.71 3.165c-.504 1.221-1.853 1.954-3.152 1.685zM17.644 20.619a2.851 2.851 0 012.236 2.348 2.84 2.84 0 01-1.459 2.897 2.842 2.842 0 01-3.218-.396 2.843 2.843 0 01-.71-3.164c.505-1.22 1.852-1.955 3.15-1.685zM41.487 13.372c.647-.982 1.892-1.456 3.03-1.17a2.842 2.842 0 012.117 2.458 2.841 2.841 0 01-1.6 2.824c-1.065.5-2.364.28-3.198-.555-.935-.936-1.09-2.457-.349-3.557zM35.939 50.17c1.154.221 2.06 1.191 2.235 2.347a2.839 2.839 0 01-1.46 2.899 2.845 2.845 0 01-3.22-.397 2.842 2.842 0 01-.708-3.164c.504-1.22 1.853-1.957 3.153-1.685zM76.198 53.632A6.34 6.34 0 0182.53 47.3a6.34 6.34 0 016.333 6.332 6.34 6.34 0 01-6.333 6.332 6.34 6.34 0 01-6.332-6.332zM146.557 23.378a4.226 4.226 0 014.221-4.222A4.226 4.226 0 01155 23.378a4.226 4.226 0 01-4.222 4.221 4.226 4.226 0 01-4.221-4.221zM65.024 66.68c-1.04-.545-1.636-1.745-1.46-2.903a2.849 2.849 0 012.236-2.352 2.842 2.842 0 012.967 1.317 2.85 2.85 0 01-.238 3.238c-.85 1.043-2.323 1.304-3.505.7zM121.311 24.464c-1.039-.545-1.636-1.744-1.46-2.903a2.849 2.849 0 012.236-2.352 2.842 2.842 0 012.967 1.318 2.85 2.85 0 01-.237 3.238c-.85 1.043-2.324 1.304-3.506.7zM107.24 52.608c-1.04-.545-1.636-1.745-1.46-2.903a2.849 2.849 0 012.235-2.352 2.842 2.842 0 012.967 1.317 2.85 2.85 0 01-.237 3.238c-.85 1.043-2.323 1.304-3.506.7z" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              className="w-8 h-8 text-primary-yellow hidden md:flex"
            >
              <g fill="none" fillRule="evenodd" transform="translate(-30 -30)">
                <g fillRule="nonzero" className="fill-current">
                  <path d="M35.777 35.95A19.94 19.94 0 0149.756 30a1.176 1.176 0 011.168.945 4.865 4.865 0 004.429 3.896 1.175 1.175 0 011.05 1.478c-.436 1.6-.135 3.383.828 4.893.996 1.563 2.54 2.6 4.236 2.844.628.09 1.071.664.998 1.295a4.868 4.868 0 006.065 5.263 1.175 1.175 0 011.465 1.241 19.928 19.928 0 01-6.414 12.889A20.005 20.005 0 0150.041 70a19.93 19.93 0 01-14.171-5.858A19.85 19.85 0 0130 49.998a19.86 19.86 0 015.777-14.048zm1.753 26.534a17.594 17.594 0 0012.511 5.172 17.66 17.66 0 0011.953-4.64 17.603 17.603 0 005.464-9.904 7.08 7.08 0 01-.158.002c-3.898 0-7.085-3.101-7.212-6.962-1.952-.558-3.678-1.86-4.839-3.681-1.072-1.682-1.54-3.628-1.347-5.5a7.228 7.228 0 01-5.015-4.592 17.591 17.591 0 00-11.439 5.217 17.532 17.532 0 00-5.1 12.402c0 4.717 1.84 9.151 5.182 12.486z" />
                  <path d="M55.5 52c1.93 0 3.5 1.57 3.5 3.5S57.43 59 55.5 59 52 57.43 52 55.5s1.57-3.5 3.5-3.5zM41.5 44a2.503 2.503 0 01-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.121 2.5-2.5 2.5zM42.5 53c1.93 0 3.5 1.57 3.5 3.5S44.43 60 42.5 60 39 58.43 39 56.5s1.57-3.5 3.5-3.5zM49.983 47.195c-.086.41-.42.731-.836.794a1.01 1.01 0 01-1.03-.519 1.008 1.008 0 01.14-1.143c.282-.31.74-.413 1.126-.252.44.183.687.655.6 1.12zM36.02 48.805c.078-.41.423-.732.834-.794a1.01 1.01 0 011.03.518c.196.37.14.835-.141 1.145a1.01 1.01 0 01-1.125.251 1.008 1.008 0 01-.598-1.12zM54.98 47.195c-.077.41-.424.733-.834.794a1.01 1.01 0 01-1.03-.519 1.01 1.01 0 01.141-1.143c.28-.312.739-.411 1.125-.252.434.179.694.658.598 1.12zM51.02 62.806c.086-.411.418-.732.834-.795a1.01 1.01 0 011.03.518c.196.369.14.834-.141 1.144a1.01 1.01 0 01-1.125.252 1.009 1.009 0 01-.598-1.12zM48.445 52.834a1.009 1.009 0 01-.416-1.077 1.01 1.01 0 01.873-.752c.416-.04.826.189 1.004.568.178.379.1.84-.197 1.136a1.01 1.01 0 01-1.264.125zM63.02 55.805c.079-.41.423-.732.834-.794.413-.062.834.15 1.03.518.196.37.14.834-.141 1.144a1.01 1.01 0 01-1.124.252 1.008 1.008 0 01-.599-1.12zM64.5 39a2.503 2.503 0 01-2.5-2.5c0-1.378 1.122-2.5 2.5-2.5 1.379 0 2.5 1.122 2.5 2.5S65.879 39 64.5 39zM69.886 43.47a1.01 1.01 0 01-1.031.52 1.012 1.012 0 01-.836-.795c-.082-.41.11-.84.468-1.055.36-.215.826-.18 1.15.085.371.302.464.825.25 1.245z" />
                </g>
              </g>
            </svg>
          </div>
          <div
            className="pb-0 md:pb-5 p-5 font-light text-gray-700 md:text-lg leading-tight"
            role="alert"
          >
            <div>Are you happy with us using cookies?</div>
            <Link href="/cookies">
              <a className="text-blue-600 hover:underline text-base">
                Read our cookie policy.
              </a>
            </Link>
          </div>
        </div>
      </CookieConsent>
    </motion.div>
  );
};

export default CookieBanner;
