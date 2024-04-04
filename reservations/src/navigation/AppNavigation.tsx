import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  IngredientScreen,
  IngredientsDetailScreen,
  RecipeScreen,
} from '../screens';

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
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="IngredientScreen" component={IngredientScreen} />
        <Stack.Screen
          name="IngredientsDetailScreen"
          component={IngredientsDetailScreen}
        />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
