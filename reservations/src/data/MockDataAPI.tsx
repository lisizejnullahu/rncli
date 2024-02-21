import React from 'react';
import { Text } from 'react-native';
import { recipes, categories, ingredients } from './dataArrays';

// Define the Recipe type based on the structure of your recipes data
interface Recipe {
  recipeId: number;
  title: string;
  categoryId: number;
  ingredients: [number, number][]; // Assuming ingredients are represented as tuples of [ingredientId, quantity]
  // Add other properties as needed
}

// Define the Ingredient type based on the structure of your ingredients data
interface Ingredient {
  ingredientId: number;
  name: string;
  photo_url: string;
  // Add other properties as needed
}

export function getCategoryById(categoryId: number) {
  let category;
  categories.map(data => {
    if (data.id === categoryId) {
      category = data;
    }
  });
  return category;
}

export function getIngredientName(ingredientID: number) {
  let name;
  ingredients.map(data => {
    if (data.ingredientId === ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID: number) {
  let url;
  ingredients.map(data => {
    if (data.ingredientId === ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId: number) {
  let name;
  categories.map(data => {
    if (data.id === categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(categoryId: number) {
  const recipesArray: Recipe[] = [];
  recipes.map(data => {
    if (data.categoryId === categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

export function getRecipesByIngredient(ingredientId: number) {
  const recipesArray: Recipe[] = [];
  recipes.map(data => {
    data.ingredients.map(index => {
      if (index[0] === ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId: number) {
  let count = 0;
  recipes.map(data => {
    if (data.categoryId === categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray: number[][]) {
  const ingredientsArray: Array<[Ingredient, number]> = []; // Specify type as Array<[Ingredient, number]>
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId === index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

export function getRecipesByIngredientName(ingredientName: string) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray: Recipe[] = [];
  ingredients.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map(item => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName: string) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray: Recipe[] = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id);
      recipes.map(item => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName: string) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray: Recipe[] = [];
  recipes.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}
