import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import TabNavigation from '../CaterersApp/src/components/navigations/TabNavigation';
import {Colors} from '../CaterersApp/src/constants';

export const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={Colors.redText}
        translucent={false}
      />
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </>
  );
};
export default App;
