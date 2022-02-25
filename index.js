const express = require("express");
const request = require("request");
const cors = require("cors");
const fetch = require('node-fetch');

const app = express();
const PORT = 8080;
// const host = 'https://dantayoga.com';
const host = 'https://10.25.63.186:8080'
const token = ` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ildpa2EgU2FsaW0iLCJwaG9uZSI6Iis2MjgxODA5MDk1NDQ3Iiwicm9sZSI6Ik1FTUJFUiIsImV4cCI6MTY0NjA1ODYwNH0.3NL8PhwRvXNvGVkK9JTRfYqGB--EEhMwuW697TmeHAY`

const whitelist = ['localhost', '127\\.0\\.0\\.1', '\\.dantayoga\\.com'];
const corsOptions = {
  origin: (origin, callback) => {
    console.log(origin, 'origin')
    if (new RegExp(whitelist.join('|')).test(origin) || origin === undefined) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/danta-service", function(req, res) {
  // req.headers.host = host.replace('https://', '');
  console.log(req.url, "================")
  req.headers.origin = host;
  const url = `${host}/danta-service${req.url}`;
  // console.log(url, '====url====')

  req
    .pipe(
      request(
        {
          url,
          qs: req.query,
          method: req.method,
          rejectUnauthorized: false,
          headers: {
            ...req.headers
          }
        },
        function(error, response, body) {
          if (error) {
            console.error("Refused connection");
            throw error;
          }
        }
      )
    )
    .pipe(res);
});



app.listen(PORT, () => console.log(`Server running at localhost:${PORT}`));