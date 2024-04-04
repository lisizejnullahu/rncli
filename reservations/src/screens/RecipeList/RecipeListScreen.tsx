import React, {useLayoutEffect} from 'react';
import {FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import {getRecipes, getCategoryName} from '../../data/MockDataAPI';

interface Props {
  navigation: any;
  route: any;
}

const RecipesListScreen: React.FC<Props> = ({navigation, route}) => {
  const item = route?.params?.category;
  const recipesArray = getRecipes(item.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, [navigation, route.params?.title]);

  const onPressRecipe = (recipe: any) => {
    navigation.navigate('Recipe', {item: recipe});
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
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipesArray}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
};

export default RecipesListScreen;
