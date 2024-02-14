import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <Layout style={[styles.container, styles.centered]}>
      <Text category="h1" style={styles.heading}>
        Welcome to UI Kitten HomeScreen!
      </Text>
    </Layout>
  );
};

HomeScreen.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#E384FF',
  },
});

export default HomeScreen;
