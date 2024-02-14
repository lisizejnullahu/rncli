import React, {useState} from 'react';
import {Layout, Text, Button, useTheme} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const HomeScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const theme = useTheme();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Layout
      style={[
        styles.container,
        styles.centered,
        {backgroundColor: isDarkMode ? theme['color-primary-800'] : '#F7F9FC'},
      ]}>
      <Text category="h1" style={[{color: '#E384FF'}]}>
        Welcome to Schedar!
      </Text>
      <Button onPress={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
    </Layout>
  );
};
  
HomeScreen.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
