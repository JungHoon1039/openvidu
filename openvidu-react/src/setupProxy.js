const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(createProxyMiddleware('/api', {
        target: 'https://https://i10a601.p.ssafy.io:8050',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
    })
    );
}