import React from "react";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

interface Props {
  onPress: () => void;
}

const MenuImage: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.headerButtonContainer} onPress={onPress}>
      <Image style={styles.headerButtonImage} source={require("../../assets/icons/menu.png") as ImageSourcePropType} />
    </TouchableOpacity>
  );
}

MenuImage.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default MenuImage;
