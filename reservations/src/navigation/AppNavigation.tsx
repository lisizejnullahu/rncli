// AppNavigator.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, DetailsScreen} from '../screens';

interface AppNavigatorProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Stack = createStackNavigator();

const AppNavigator: React.FC<AppNavigatorProps> = ({
  toggleDarkMode,
  isDarkMode,
}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={() => (
            <HomeScreen
              toggleDarkMode={toggleDarkMode}
              isDarkMode={isDarkMode}
            />
          )}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
