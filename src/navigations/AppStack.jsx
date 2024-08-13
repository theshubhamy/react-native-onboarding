import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';
const {Navigator, Screen} = createStackNavigator();

const AppStack = () => {
  return (
    <Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AppStack;
