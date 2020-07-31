const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //! ทำให้ express ใช้ parameter body ได้

const app = express();

app.use(bodyParser.json()); //! ทำให้ express ใช้ parameter body ได้
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); //! ทำให้ express ใช้ parameter body ได้

app.use(function (req, res, next) {
  //* res.setHeader ก็ได้หรือ res.header ก็ให้ผลลัพธ์เดียวกัน
  const allowOrigins = ['http://localhost:3000', 'https://novm.herokuapp.com'];
  const origin = req.headers.origin;
  allowOrigins.map((event) => {
    if (event.indexOf(origin) !== -1) {
      res.header('Access-Control-Allow-Origin', event); // update to match the domain you will make the request from
    }
  });
  // res.header('Access-Control-Allow-Origin', '*'); // !แบบเดิม

  // res.header(
  //   'Access-Control-Allow-Methods',
  //   'POST, GET, PUT, PATCH, DELETE, OPTIONS'
  // );

  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Access-Token'
  );

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

//* Server static assets
// app.use(express.static(path.resolve(__dirname, './', 'build')));
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './', 'build', 'index.html'));
// });

//

//

// Server static assets
// app.use(express.static(path.resolve(__dirname, '../..', 'build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../..', 'build', 'index.html'));
// });

module.exports = app;
