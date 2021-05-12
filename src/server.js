require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schemas/schema');
const resolvers = require('./resolvers/resolver');

const app = express();

const port = process.env.DB_PORT;

app.use(express.json());
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

mongoose.connect(
  process.env.DB_LOCAL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to MongoDB')
);

app.listen(port, () => {
  console.log('listening on port: ' + port);
});
