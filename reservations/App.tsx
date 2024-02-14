import React, {useState} from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigation';
import theme from './theme.json'; // Import your theme.json file

function App(): React.ReactNode {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Set to true for default dark mode

  const backgroundStyle = {
    backgroundColor: isDarkMode ? theme['color-danger-1000'] : '#F7F9FC',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <ApplicationProvider
          mapping={{...mapping, ...theme}} // Merge theme with UI Kitten mapping
          theme={isDarkMode ? darkTheme : lightTheme}>
          <AppNavigator />
        </ApplicationProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
