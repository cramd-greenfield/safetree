const path = require('path');
const express = require('express');
// do we need morgan???

const distPath = path.resolve(__dirname, '../dist');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));
// app.use(cookieParser()); Do we need?

app.listen(3000, () => {
  console.log(`
    Check it out: http://127.0.0.1:3000
  `);
});

module.exports = {
  app,
};
