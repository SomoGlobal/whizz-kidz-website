export const GA_TRACKING_ID = 'G-HB435E3JSE'; // 'UA-16130012-5';
export const GTM_ID = 'GTM-5C42HCM';

interface EventHandle {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  const w = window as any;
  if (typeof w !== 'undefined' && w.gtag) {
    w.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventHandle) => {
  const w = window as any;
  if (typeof w !== 'undefined' && w.gtag) {
    w.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
