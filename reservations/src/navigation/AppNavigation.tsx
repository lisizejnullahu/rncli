import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeScreen,
  IngredientScreen,
  IngredientsDetailScreen,
  RecipeScreen,
  RecipeListScreen,
  SearchScreen,
  CategoriesScreen,
  DrawerContainer,
} from '../screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="RecipesList" component={RecipeListScreen} />
      <Stack.Screen name="Ingredient" component={IngredientScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="IngredientsDetails"
        component={IngredientsDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
