import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema.js';
import resolvers from './data/resolvers.js';

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to graphQl');

});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql:true
}));

app.listen(PORT, () => console.log("Server listening on PORT ", PORT));