import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const ParticleBar = ({ items }) => {
  return (
    <View style={styles.pmContainer}>
      {items.map((item, i) => {
        return (
          <View key={i} style={styles.pmContainerItem}>
            <Text style={styles.pmLabel}>{item.name}</Text>
            <Text style={styles.pmValue}>{item.value}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ParticleBar;

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
