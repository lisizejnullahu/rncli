import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

interface DrawerContainerProps {
  navigation: {
    navigate: (route: string) => void;
    closeDrawer: () => void;
  };
}

const DrawerContainer: React.FC<DrawerContainerProps> = ({navigation}) => {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={require('../../assets/icons/home.png')}
          onPress={() => {
            navigation.navigate('Home');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require('../../assets/icons/category.png')}
          onPress={() => {
            navigation.navigate('Categories');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require('../../assets/icons/search.png')}
          onPress={() => {
            navigation.navigate('Search');
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
};

export default DrawerContainer;
