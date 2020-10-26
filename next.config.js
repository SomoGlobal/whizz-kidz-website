require('dotenv').config();

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
        source: '/donate',
        destination: 'https://www.committedgiving.uk.net/whizzkidz/public/index.aspx',
        permanent: false,
      },
    ]
  },
};
