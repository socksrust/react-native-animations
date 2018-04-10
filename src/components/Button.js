//@flow
import React, { Component } from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50;
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
  border-top-left-radius: 20;
  border-top-right-radius: 20;
  margin-top: 20;
  background-color: #000;
  shadow-color: #fff,
  shadow-offset: { width: 0, height: 0 };
  shadow-opacity: 0.2;
  shadow-radius: 20;
`;

const ButtonText = styled.Text`
  color: #00e676;
  font-size: 32px;
  font-weight: 700;
`

const Button = (props: Object) => (
  <Wrapper onPress={() => props.onPress()}>
    <ButtonText>{props.text || props.children}</ButtonText>
  </Wrapper>
);

export default Button;
