//@flow

import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
  Easing
} from 'react-native';
import styled from 'styled-components/native'
import AnimationTitle from './common/AnimationTitle';
import { reactImg } from '../config';
const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`;

type Props = {
  easing: any,
  title: string
};

export default class EasingAnimation extends Component<Props> {

  constructor() {
    super()
    this.easingAnimationValue = new Animated.Value(0);
  }

  spin() {
    const { easing } = this.props
    this.easingAnimationValue.setValue(0);
    Animated.timing(
      this.easingAnimationValue,
      {
        toValue: 1,
        duration: 2000,
        easing,
      }
    ).start(() => this.spin());
  }

  componentDidMount() {
    this.spin();
  }


  render() {
    const {title} = this.props;
    const spin = this.easingAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Wrapper>
        <AnimationTitle>
          {title}
        </AnimationTitle>
        <Animated.Image
          style={{
            width: 60,
            height: 53,
            transform: [{ rotate: spin }],
          }}
          source={{uri: reactImg}}
          />
      </Wrapper>
    );
  }
}