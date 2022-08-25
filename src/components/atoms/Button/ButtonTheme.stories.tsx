import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ButtonTheme } from './ButtonTheme';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

export const actions = {
  onClick: action('onClick'),
};

storiesOf('ButtonTheme', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <ButtonTheme text="Button Text" />);
