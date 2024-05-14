const { app } = require('./app.js');
require('dotenv').config();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`
    Server is running on port ${PORT}
    Check it out: http://127.0.0.1:${PORT}
  `);
});
