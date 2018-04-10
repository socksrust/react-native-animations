//@flow
import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';

const Wrapper = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #00e676;
  flex: 1;
`;

type Props = {
  navigation: Object
};

export default class Home extends Component<Props> {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Wrapper>
        <Button text="Animated" onPress={() => this.props.navigation.navigate('Animated')}/>
        <Button text="Animatable" onPress={() => this.props.navigation.navigate('Animatable')}/>
        <Button text="Lottie" onPress={() => this.props.navigation.navigate('Lottie')}/>
      </Wrapper>
    );
  }
}