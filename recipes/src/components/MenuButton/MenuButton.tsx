import React from 'react';
import {TouchableHighlight, Image, Text, View} from 'react-native';
import styles from './styles';

interface MenuButtonProps {
  onPress: () => void;
  source: number;
  title: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({onPress, source, title}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.btnClickContain}
      underlayColor="rgba(128, 128, 128, 0.1)">
      <View style={styles.btnContainer}>
        <Image source={source} style={styles.btnIcon} />
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default MenuButton;
