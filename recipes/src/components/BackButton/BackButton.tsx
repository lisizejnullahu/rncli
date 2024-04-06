import React from 'react';
import {TouchableHighlight, Image, ImageSourcePropType} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

interface BackButtonProps {
  onPress?: () => void;
  source?: ImageSourcePropType;
  title?: string;
}

const BackButton: React.FC<BackButtonProps> = props => {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
      <Image
        source={props.source ?? require('../../assets/icons/backArrow.png')}
        style={styles.btnIcon}
      />
    </TouchableHighlight>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};

export default BackButton;
