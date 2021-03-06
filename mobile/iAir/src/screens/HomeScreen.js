import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import HomePage from '../components/pages/HomePage';

const GET_PAYLOADS = gql`
  query {
    payloads {
      id, city, humidity, temperature, particulateMatter {
        id, pm10, pm25, pm100
      }
    }
  }
`;

class HomeScreen extends React.Component {
  render() {
    return (
      <Query
        query={GET_PAYLOADS}
        pollInterval={1000 * 10}
      >
        {({ loading, error, data, refetch }) => {
          return (
            <HomePage
              items={data}
              loading={loading}
              onRefresh={refetch}
            />
          );
        }}
      </Query>
    );
  }
}

export default HomeScreen;
