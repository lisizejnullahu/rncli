import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import {
  getIngredientUrl,
  getRecipesByIngredient,
  getCategoryName,
} from '../../data/MockDataAPI';

interface IngredientScreenProps {
  navigation: any;
  route: any;
}

export default function IngredientScreen(props: IngredientScreenProps) {
  const {navigation, route} = props;

  const ingredientId = route.params?.ingredient;
  const ingredientUrl = getIngredientUrl(ingredientId);
  const ingredientName = route.params?.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, [navigation, route.params?.name]);

  const onPressRecipe = (item: any) => {
    navigation.navigate('Recipe', {item});
  };

  const renderRecipes = ({item}: {item: any}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          borderBottomWidth: 0.4,
          marginBottom: 10,
          borderBottomColor: 'grey',
        }}>
        <Image
          style={styles.photoIngredient}
          source={{uri: '' + ingredientUrl}}
        />
      </View>
      <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={getRecipesByIngredient(ingredientId)}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    </ScrollView>
  );
}
