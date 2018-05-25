import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

import WeatherCard from '../molecules/WeatherCard';

const HomePage = ({ items }) => {
  return (
    <Swiper
      showsButtons={false}
      loop={true}
      autoplay={true}
      style={styles.wrapper}
    >
      {items.map((item, i) => {
        return (
          <View
            key={i}
            style={styles.slide}
          >
            <ImageBackground
              source={require('../../assets/images/background.jpg')}
              style={styles.container}
            >
              <WeatherCard
                city={item.city}
                temperature={item.temperature}
                humidity={item.humidity}
                pm10={item.pm10}
                pm25={item.pm25}
                pm100={item.pm100}
              />
            </ImageBackground>
          </View>
        );
      })}
    </Swiper>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
});
