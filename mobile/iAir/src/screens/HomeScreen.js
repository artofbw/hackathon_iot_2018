import React from 'react';

import HomePage from '../components/pages/HomePage';

class HomeScreen extends React.Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <HomePage
        temperature={30}
        humidity={68}
        pm10={2}
        pm25={5}
        pm100={41}
      />
    );
  }
}

export default HomeScreen;
