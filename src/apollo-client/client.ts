import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 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`,
  },
});
export default client;
