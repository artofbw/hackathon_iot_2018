import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, RefreshControl } from 'react-native';
import Swiper from 'react-native-swiper';
import Spinner from 'react-native-loading-spinner-overlay';

import WeatherCard from '../molecules/WeatherCard';
import { WeatherBackground } from '../../config/Images';

const HomePage = ({ items, loading, onRefresh }) => {
  if (loading && (!items || !items.payloads)) {
    return (
        <ImageBackground
          source={WeatherBackground.cloud}
          style={styles.container}
        >
          <Spinner visible={loading} textContent={"Ładowanie danych"} textStyle={{color: '#FFF'}} />
        </ImageBackground>
    );
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1, alignSelf: 'stretch' }}
      contentContainerStyle={{ minHeight: '100%', alignItems: 'stretch' }}
      refreshControl={(
        <RefreshControl
          refreshing={loading}
          onRefresh={onRefresh}
        />
      )}
    >
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
                source={WeatherBackground.cloud}
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
    </ScrollView>
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
