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
        <Button text="Infinity Spin" onPress={() => this.props.navigation.navigate('InfinitySpinAnimated')}/>
      </Wrapper>
    );
  }
}