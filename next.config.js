require('dotenv').config();

const ARCHIVE_URL = 'http://whizz-kidz-archive.s3-website.eu-west-2.amazonaws.com/whizzkidz/www.whizz-kidz.org.uk';

module.exports = {
  env: {
    DONATE_URL: 'https://www.committedgiving.uk.net/whizzkidz/public/index.aspx',
    CMS_DATOCMS_API_TOKEN: process.env.CMS_DATOCMS_API_TOKEN,
    DISQUS_SHORTNAME: process.env.DISQUS_SHORTNAME,
  },
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/charity',
        permanent: true,
      },
      {
        source: '/get-our-help/equipment',
        destination: '/families/equipment',
        permanent: true,
      },
      {
        source: '/get-our-help/equipment/review-your-wheelchair-service',
        destination: '/equipment',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people',
        destination: '/families/equipment',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/ambassador-clubs',
        destination: '/families/equipment',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/camps',
        destination: '/families/equipment',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/clubs-test',
        destination: '/families/equipment',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/e-learning-modules',
        destination: '/kidz',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/join-our-research-group',
        destination: '/kidz',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/kidz-board',
        destination: '/discover/topic/kidz-board',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/kidz-unlimited-awards',
        destination: '/families',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/online-safety',
        destination: '/families',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/this-year-i-will',
        destination: '/discover',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/wheelchair-skills-training',
        destination: '/families/equipment',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/work-placements',
        destination: '/discover/topic/work-placements',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/young-peoples-campaigns',
        destination: '/kidz',
        permanent: true,
      },
      {
        source: '/get-our-help/young-people/young-peoples-zone',
        destination: '/kidz/young-peoples-services',
        permanent: true,
      },
      {
        source: '/donate',
        destination: 'https://www.committedgiving.uk.net/whizzkidz/public/index.aspx',
        permanent: false,
      },
      {
        source: '/meet-the-kidz/:slug*',
        destination: '/discover',
        permanent: true,
      },

      // blog
      {
        source: '/blog/view/:post',
        destination: '/discover/post/:post',
        permanent: true,
      },
      {
        source: '/blog/tag/:tag',
        destination: '/discover/topic/:tag',
        permanent: true,
      },
      {
        source: '/blog/:year(\\d{1,})/:month(\\d{1,})',
        destination: '/discover',
        permanent: true,
      },
      {
        source: '/blog/author/:author',
        destination: '/discover',
        permanent: true,
      },
      {
        source: '/blog/category/:category',
        destination: '/discover/:category',
        permanent: true,
      },

      // support us
      {
        source: '/support-us/get-your-company-involved',
        destination: `/supporters/corporate-partners`,
        permanent: true,
      },
      {
        source: '/support-us/corporate-partnerships-at-whizz-kidz',
        destination: `/supporters/corporate-partners`,
        permanent: true,
      },
      {
        source: '/support-us/leave-a-legacy',
        destination: `/supporters/fundraise/other-ways-to-donate`,
        permanent: true,
      },
      {
        source: '/support-us/events-challenges',
        destination: `/supporters/events`,
        permanent: true,
      },
      {
        source: '/support-us/events-challenges/:slug*',
        destination: `/supporters/events`,
        permanent: true,
      },

      // fallbacks
      {
        source: '/healthcare-professionals/:path*',
        destination: `${ARCHIVE_URL}/healthcare-professionals/:path*.html`,
        permanent: false,
      },
      {
        source: '/about-us/:path*',
        destination: `${ARCHIVE_URL}/about-us/:path*.html`,
        permanent: false,
      },
      {
        source: '/support-us/:path*',
        destination: `${ARCHIVE_URL}/support-us/:path*.html`,
        permanent: false,
      },
      {
        source: '/get-our-help/young-people/:path*',
        destination: `${ARCHIVE_URL}/get-our-help/young-people/:path*.html`,
        permanent: true,
      },
    ];
  },
};
