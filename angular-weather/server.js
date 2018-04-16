

const express = require('express');
const router = require('./api/routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => res.send('Hello World!'));


const server = app.listen(PORT, () => {
  console.info(`App Listing on ${PORT}`);
});

module.exports = server;
