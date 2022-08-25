import React from 'react';
import { Rect, Svg } from 'react-native-svg';

const AddIcon = props => (
<Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <Rect x="18" y="8.18164" width="1.63636" height="18" rx="0.818182" transform="rotate(90 18 8.18164)" fill={props.fill || '#fff'}/>
  <Rect x="9.81836" y="18" width="1.63636" height="18" rx="0.818182" transform="rotate(180 9.81836 18)" fill={props.fill || '#fff'}/>
</Svg>
);

export default AddIcon;

