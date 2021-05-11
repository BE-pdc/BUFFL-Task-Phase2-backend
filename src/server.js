require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.DB_PORT;

app.use(express.json());

mongoose.connect(
  process.env.DB_LOCAL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to MongoDB')
);

app.listen(port, () => {
  console.log('listening on port: ' + port);
});
