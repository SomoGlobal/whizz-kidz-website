require('dotenv').config();

module.exports = {
  env: {
    DONATE_URL: 'https://www.committedgiving.uk.net/whizzkidz/public/index.aspx',
    CMS_DATOCMS_API_TOKEN: process.env.CMS_DATOCMS_API_TOKEN,
  },
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/charity',
        permanent: true,
      },
      {
        source: '/donate',
        destination: 'https://www.committedgiving.uk.net/whizzkidz/public/index.aspx',
        permanent: false,
      },
    ]
  },
};
