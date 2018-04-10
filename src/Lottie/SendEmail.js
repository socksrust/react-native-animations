//@flow

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native'
import Button from '../components/Button'
import Animation from 'lottie-react-native';
import mailSent from './assets/mailsent.json';

const Wrapper = styled.View`
  background-color: #FFE300;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #FFE300;
  font-weight: 700;
  font-size: 24px;
`;

class lottieAnimation extends Component<*> {
  render() {
    return (
      <Wrapper>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 180,
              height: 480,
            }}
            source={mailSent}
            infinite={true}
          />
        </View>
        <Button onPress={() => this.animation.play()}>
          <ButtonText>Animate</ButtonText>
        </Button>
      </Wrapper>
    );
  }
}

export default lottieAnimation;