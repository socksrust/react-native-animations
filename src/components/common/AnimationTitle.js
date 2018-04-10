//@flow

import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'

const Title = styled.Text`
  color: #000000;
  font-weight: 900;
  font-size: 32px;
`;

const AnimationTitle = (props: Object) => (
  <Title>
    {props.children}
  </Title>
)

export default AnimationTitle;