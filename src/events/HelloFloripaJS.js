//@flow
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class App extends Component<*> {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.bigTitle}>Floripa</Text>
        <Image style={{width: 200, height: 178}}
          source={{
            uri: 'https://cdn-images-1.medium.com/max/800/0*UzaG_alYU6vQ8MIt.jpg'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  bigTitle: {
    fontSize: 50,
    fontWeight: '700',
  }
})

export default App;