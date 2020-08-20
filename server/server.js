const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const path = require('path')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static('./public'))




app.use(
  '/api/nav',
  createProxyMiddleware({
     target: 'http://127.0.0.1:4001',
     changeOrigin: true
  })
);

app.use(
    '/api/display',
    createProxyMiddleware({
       target: 'http://127.0.0.1:4002',
       changeOrigin: true
    })
  );

app.use(
  '/api/reviews',
  createProxyMiddleware({
     target: 'http://127.0.0.1:4003',
     changeOrigin: true
  })
);

app.use(
  '/api/listings',
  createProxyMiddleware({
     target: 'http://127.0.0.1:4004',
     changeOrigin: true
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})