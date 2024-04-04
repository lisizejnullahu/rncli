import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName,
} from '../../data/MockDataAPI';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}

const SearchScreen: React.FC<Props> = ({navigation}) => {
  const [value, setValue] = useState<string>('');
  const [data, setData] = useState<any[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require('../../assets/icons/search.png')}
          />
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
          />
          <Pressable onPress={() => handleSearch('')}>
            <Image
              style={styles.searchIcon}
              source={require('../../assets/icons/close.png')}
            />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value, navigation]);

  useEffect(() => {}, [value]);

  const handleSearch = (text: string) => {
    setValue(text);
    const recipeArray1 = getRecipesByRecipeName(text);
    const recipeArray2 = getRecipesByCategoryName(text);
    const recipeArray3 = getRecipesByIngredientName(text);
    const aux = recipeArray1.concat(recipeArray2);
    const recipeArray = [...new Set(aux)];

    if (text === '') {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

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
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
};

export default SearchScreen;
