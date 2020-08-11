const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('setupProxy')

module.exports = function (app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'http://localhost:8001',
      changeOrigin: true,
    })
  );
};
