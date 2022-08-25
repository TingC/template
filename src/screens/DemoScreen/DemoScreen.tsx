import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import TodoHeader from '../../components/templates/HeaderTemplate/TodoHeader';
import { styles } from './DemoScreen.style';
import TodoList from './TodoList';

export type DemoScreenProps = {};

const DemoScreen: React.FC<DemoScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoHeader />
      <TodoList />
    </SafeAreaView>
  );
};

export default DemoScreen;
