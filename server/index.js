const { app } = require('./app.js');
const path = require('path');
require('dotenv').config();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
