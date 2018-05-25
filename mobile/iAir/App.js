import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { ApolloProvider } from 'react-apollo';

import { client } from './src/utils/Api';

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HomeScreen />
      </ApolloProvider>
    );
  }
}
