import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Card, Text, Button, Icon, ListItem } from 'react-native-elements';

const HomePage = ({ temperature, humidity, pm10, pm25, pm100 }) => {
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
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.container}
    >
      <Card
        title="Gdańsk"
        image={require('../../assets/images/happy.png')}
        imageProps={{ resizeMode: 'contain' }}
        containerStyle={styles.cardContainer}
      >
        <View style={styles.pmContainer}>
          {pmItems.map((item, i) => {
            return (
              <View key={i} style={styles.pmContainerItem}>
                <Text style={styles.pmLabel}>{item.name}</Text>
                <Text style={styles.pmValue}>{item.value}</Text>
              </View>
            );
          })}
        </View>

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
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
});
