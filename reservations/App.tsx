import React, {useState} from 'react';
import {Appearance, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigation';
import theme from './theme.json';

function App(): JSX.Element {
  const colorScheme = Appearance.getColorScheme();

  const [isDarkMode, setIsDarkMode] = useState<boolean>(colorScheme === 'dark');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? theme['color-primary-800'] : '#F7F9FC',
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <ApplicationProvider
          mapping={{...mapping, ...theme}}
          theme={isDarkMode ? darkTheme : lightTheme}>
          <AppNavigator
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
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
