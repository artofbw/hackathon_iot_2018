import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import WeatherCard from '../molecules/WeatherCard';

const HomePage = ({ temperature, humidity, pm10, pm25, pm100 }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.container}
    >
      <WeatherCard
        city="Gdańsk"
        temperature={temperature}
        humidity={humidity}
        pm10={pm10}
        pm25={pm25}
        pm100={pm100}
      />
    </ImageBackground>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
