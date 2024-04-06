import React from 'react';
import {Text} from 'react-native';
import {recipes, categories, ingredients} from './dataArrays';

interface Recipe {
  recipeId: number;
  title: string;
  categoryId: number;
  ingredients: [number, number][];
}

interface Ingredient {
  ingredientId: number;
  name: string;
  photo_url: string;
}

interface Category {
  id: number;
  name: string;
}

export function getCategoryById(categoryId: number): Category | undefined {
  return categories.find(category => category.id === categoryId);
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

export function getCategoryName(categoryId: number): string {
  let name = '';
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

export function getAllIngredients(idArray: number[][]): Ingredient[] {
  const ingredientsArray: Ingredient[] = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId === index[0]) {
        ingredientsArray.push(data);
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
