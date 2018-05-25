import React from 'react';

import HomePage from '../components/pages/HomePage';

class HomeScreen extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const items = [
      {
        city: 'Gdańsk',
        temperature: 30,
        humidity: 50,
        pm10: 2,
        pm25: 5,
        pm100: 41,
      },
      {
        city: 'Łódź',
        temperature: 10,
        humidity: 0,
        pm10: 1,
        pm25: 2,
        pm100: 3,
      },
      {
        city: 'Piła',
        temperature: -20,
        humidity: 15,
        pm10: 100,
        pm25: 100,
        pm100: 100,
      },
    ];

    this.setState({ items });
  }

  componentWillUnmount() {

  }

  render() {
    const { items } = this.state;

    return (
      <HomePage
        items={items}
      />
    );
  }
}

export default HomeScreen;
