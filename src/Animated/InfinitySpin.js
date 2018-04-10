//@flow
import React, { Component } from 'react';
import { View, Animated, Image, Easing, StyleSheet} from 'react-native';
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #000000;
`;

type Props = {};
class animatedAnimation extends Component<Props> {
  constructor() {
    super()
    this.animationValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.animationValue.setValue(0);
    Animated.timing(
      this.animationValue,
      {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
      }
    ).start(() => this.spin());
  }
  render() {
    const spin = this.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View style={styles.wrapper}>
        <Animated.Image
          style={{
            width: 200,
            height: 178,
            transform: [{ rotate: spin }],
          }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000',
  }
});

export default animatedAnimation;
