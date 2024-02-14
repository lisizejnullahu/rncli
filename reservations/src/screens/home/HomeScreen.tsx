// HomeScreen.tsx

import React from 'react';
import {Layout, Text, Button, useTheme} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

interface HomeScreenProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  toggleDarkMode,
  isDarkMode,
}) => {
  const theme = useTheme();

  return (
    <Layout
      style={[
        styles.container,
        styles.centered,
        {backgroundColor: theme['background-basic-color-1']},
      ]}>
      <Text category="h1" style={[{color: theme['text-basic-color']}]}>
        Welcome to Schedar!
      </Text>
      <Button onPress={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
    </Layout>
  );
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
