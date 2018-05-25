import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, ListItem } from 'react-native-elements';
import ParticleBar from '../atoms/ParticleBar';

const WeatherCard = ({ city, temperature, humidity, pm10, pm25, pm100 }) => {
  const pmItems = [
    {
      name: 'PM10',
      value: pm10,
    },
    {
      name: 'PM25',
      value: pm25,
    },
    {
      name: 'PM100',
      value: pm100,
    },
  ];

  return (
    <Card
      title={city}
      image={require('../../assets/images/happy.png')}
      imageProps={{ resizeMode: 'contain' }}
      containerStyle={styles.cardContainer}
    >
      <ParticleBar items={pmItems} />

      <View>
        <ListItem
          title={`${temperature}°`}
          subtitle="Temperatura"
          leftIcon={{ type: 'material-community', name: 'weather-cloudy' }}
        />
        <ListItem
          title={`${humidity}%`}
          subtitle="Wilgotność"
          leftIcon={{ type: 'material-community', name: 'water' }}
        />
      </View>
    </Card>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
  },
  pmContainer: {
    backgroundColor: '#2089dc',
    flexDirection: 'row',
    paddingBottom: 2,
    marginBottom: 10,
    borderRadius: 5,
  },
  pmContainerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pmLabel: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  pmValue: {
    paddingTop: 5,
    color: 'white',
  },
});
