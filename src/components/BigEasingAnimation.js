//@flow

import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
  Easing
} from 'react-native';
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`;

type Props = {};

export default class EasingAnimation extends Component<Props> {

  constructor() {
    super()
    this.animationValue = new Animated.Value(0);
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

  componentDidMount() {
    this.spin();
  }


  render() {
    const spin = this.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Wrapper>
        <Animated.Image
          style={{
            width: 200,
            height: 178,
            transform: [{ rotate: spin }],
          }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
          />
      </Wrapper>
    );
  }
}