import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import {getIngredientName, getAllIngredients} from '../../data/MockDataAPI';

interface IngredientsDetailsScreenProps {
  navigation: any;
  route: any;
}

interface Ingredient {
  ingredientId: number;
  name: string;
  photo_url: string;
}

export default function IngredientsDetailsScreen(
  props: IngredientsDetailsScreenProps,
) {
  const {navigation, route} = props;

  const item = route.params?.ingredients;
  const ingredientsArray = getAllIngredients(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, [navigation, route.params?.title]);

  const onPressIngredient = (ingredient: Ingredient) => {
    let name = getIngredientName(ingredient.ingredientId);
    navigation.navigate('Ingredient', {
      ingredient: ingredient.ingredientId,
      name,
    });
  };

  const renderIngredient = ({item}: {item: Ingredient}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressIngredient(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={renderIngredient}
        keyExtractor={item => `${item.ingredientId}`}
      />
    </View>
  );
}
