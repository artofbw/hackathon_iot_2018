import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import Spinner from 'react-native-loading-spinner-overlay';

import WeatherCard from '../molecules/WeatherCard';

const HomePage = ({ items, loading, error }) => {
  if (loading) {
    return (
        <ImageBackground
          source={require('../../assets/images/background.jpg')}
          style={styles.container}
        >
          <Spinner visible={loading} textContent={"Ładowanie danych"} textStyle={{color: '#FFF'}} />
        </ImageBackground>
    );
  }

  return (
    <Swiper
      showsButtons={false}
      loop={true}
      autoplay={true}
      style={styles.wrapper}
    >
      {items.payloads.map(item => {
        const { particulateMatter } = item;

        return (
          <View
            key={item.id}
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
                pm10={particulateMatter.pm10}
                pm25={particulateMatter.pm25}
                pm100={particulateMatter.pm100}
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
