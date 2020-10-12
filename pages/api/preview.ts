// eslint-disable-next-line consistent-return
export default async (req, res) => {
  res.setPreviewData({});
  res.writeHead(307, { Location: req.query?.slug || `/` });
  res.end();
};
