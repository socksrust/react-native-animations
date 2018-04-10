//@flow

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
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
  title: string
};

export default class EasingAnimation extends Component<Props> {

  constructor() {
    super()
    this.springValue = new Animated.Value(0.3);
  }

  spring() {
    const { easing } = this.props
    this.springValue.setValue(0.3);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
      }
    ).start(() => this.spring());
  }

  componentDidMount() {
    this.spring();
  }


  render() {
    const { title } = this.props;
    return (
      <Wrapper>
        <AnimationTitle>
          {title}
        </AnimationTitle>
        <Animated.Image
          style={{
            width: 60,
            height: 53,
            transform: [{ scale: this.springValue }],
          }}
          source={{uri: reactImg}}
          />
      </Wrapper>
    );
  }
}