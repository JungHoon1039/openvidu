import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
    app.use(
        createProxyMiddleware('/openvidu', {
            target: 'https://i10a610.p.ssafy.io:8050',
            changeOrigin: true,
            pathRewrite: {
                '^/openvidu': ''
            }
        })
    );
};