import React from 'react';
import {Svg, Path} from 'react-native-svg';

const DeleteIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
     <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.46154 5.25V4.125C7.46154 3.50368 7.97813 3 8.61538 3H14.3846C15.0219 3 15.5385 3.50368 15.5385 4.125V5.25H19V6.375H4V5.25H7.46154ZM5.15385 7.5H17.8462V19.875C17.8462 20.4963 17.3296 21 16.6923 21H6.30769C5.67044 21 5.15385 20.4963 5.15385 19.875V7.5ZM7.46154 9.75V18.75H8.61538V9.75H7.46154ZM10.9231 9.75V18.75H12.0769V9.75H10.9231ZM14.3846 9.75V18.75H15.5385V9.75H14.3846Z"  fill={props.fill || '#000'} fill-opacity="0.3"/>
  </Svg>
  
);

export default DeleteIcon;

