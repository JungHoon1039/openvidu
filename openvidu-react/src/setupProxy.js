import { createProxyMiddleware } from "http-proxy-middleware";

export default (app) => {
  app.use(
    createProxyMiddleware('/openvidu',{
      target: "https://i10a601.p.ssafy.io:8050",
      changeOrigin: true,
      pathRewrite: {
        '^/openvidu': '' 
      }
    })
  );
};