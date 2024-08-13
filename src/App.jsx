import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigations/AppStack';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      <StatusBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
});
export default App;
