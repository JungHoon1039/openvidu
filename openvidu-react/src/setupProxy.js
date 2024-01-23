const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/openvidu',
    createProxyMiddleware({
      target: 'https://i10a601.p.ssafy.io:8050',
      pathRewrite: {
        '^/openvidu': '',
      },
    }),
  );
};