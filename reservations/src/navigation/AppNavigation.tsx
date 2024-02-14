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
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => (
            <HomeScreen
              {...props}
              toggleDarkMode={toggleDarkMode}
              isDarkMode={isDarkMode}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
