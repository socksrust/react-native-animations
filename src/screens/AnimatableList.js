//@flow
import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';

const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00e676',
    flex: 1,
  }
})``;

type Props = {
  navigation: Object
};
export default class LottieList extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <Button text="FadeIn" onPress={() => this.props.navigation.navigate('FadeInAnimatable')}/>
        <Button text="FadeInDown" onPress={() => this.props.navigation.navigate('FadeInDownAnimatable')}/>
        <Button text="ZoomIn" onPress={() => this.props.navigation.navigate('ZoomInAnimatable')}/>
        <Button text="ZoomOut" onPress={() => this.props.navigation.navigate('ZoomOutAnimatable')}/>
        <Button text="LightSpeedIn" onPress={() => this.props.navigation.navigate('LightSpeedInAnimatable')}/>
        <Button text="LightSpeedOut" onPress={() => this.props.navigation.navigate('LightSpeedOutAnimatable')}/>
      </Wrapper>
    );
  }
}