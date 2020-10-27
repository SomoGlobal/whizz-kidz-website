import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { motion, useReducedMotion } from 'framer-motion';

const CookieBanner: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center"
      initial={{ y: shouldReduceMotion ? '0' : '100%' }}
      animate={{ y: '0%' }}
    >
      <CookieConsent
        buttonText="Accept"
        cookieName="whizz-kidz-cookie"
        hideOnAccept
        disableStyles
        containerClasses="bg-white rounded-lg m-3 md:m-6 shadow-2xl flex justify-between items-center flex-col md:flex-row"
        buttonClasses="border-2 border-solid rounded-full tracking-wide text-center font-medium md:inline-block px-6 py-2 bg-green-700 text-white hover:bg-green-800 border-transparent block w-full md:w-auto"
        buttonWrapperClasses="p-4 w-full md:w-auto"
        declineButtonClasses=""
        contentClasses="w-full md:w-auto"
        overlayClasses=""
      >
        <div className="flex flex-col rounded-lg md:flex-row">
          <div className="flex items-center justify-center p-2 rounded-t-lg md:p-4 bg-secondary-blue md:rounded-t-none md:rounded-l-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              className="w-8 h-8 text-primary-yellow"
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
            className="pb-0 md:pb-5 p-5 font-light text-gray-700 md:text-2xl"
            role="alert"
          >
            This website uses cookies to enhance the user experience.
          </div>
        </div>
      </CookieConsent>
    </motion.div>
  );
};

export default CookieBanner;
