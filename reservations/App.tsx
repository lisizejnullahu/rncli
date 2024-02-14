import React, {useState} from 'react';
import {Appearance, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigation';
import theme from './theme.json'; // Import your theme.json file

function App(): React.ReactNode {
  // Get the current color scheme (light or dark)
  const colorScheme = Appearance.getColorScheme();
  // Set the initial state for dark mode based on the color scheme
  const [isDarkMode, setIsDarkMode] = useState<boolean>(colorScheme === 'dark');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? theme['color-primary-800'] : '#F7F9FC',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <ApplicationProvider
          mapping={{...mapping, ...theme}}
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
