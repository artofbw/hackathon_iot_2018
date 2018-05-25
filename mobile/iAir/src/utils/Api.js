import ApolloClient from 'apollo-boost';

const client = new ApolloClient({ uri: 'http://10.93.10.144:8000/graphql' });

export {
  client,
};
