//@flow
import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

const animatableAnimation = () => (
  <View style={styles.wrapper}>
    <Animatable.View
      style={styles.card}
      animation="lightSpeedOut" iterationCount="infinite" duration={1500} >
      <Text style={styles.cardText}>fadeIn</Text>
    </Animatable.View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00e676',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 250,
    borderWidth: 2,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 20,
    backgroundColor: '#000000'
  },
  cardText: {
    fontWeight: '700',
    fontSize: 32,
    color: '#00e676'
  }
});

export default animatableAnimation;