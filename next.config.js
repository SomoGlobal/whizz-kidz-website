require('dotenv').config();

module.exports = {
  env: {
    CMS_DATOCMS_API_TOKEN: process.env.CMS_DATOCMS_API_TOKEN,
  },
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/charity',
        permanent: true,
      },
    ]
  },
};
