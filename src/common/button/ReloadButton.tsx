import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {wp, GL_Palette, GL_Font} from '../../global/Style';
interface ReloadButtonType {
  onReloadButtonClickHandler: () => void;
}
const ReloadButton = (props: ReloadButtonType) => {
  const {onReloadButtonClickHandler} = props;

  return (
    <View style={styles.reloadButtonWrapper}>
      <TouchableOpacity
        style={styles.reloadButton}
        onPress={onReloadButtonClickHandler}>
        <Icon name="reload" size={50} color={GL_Palette.black} />
        <Text style={styles.reloadText}>Reload</Text>
      </TouchableOpacity>
    </View>
  );
};
export {ReloadButton};
const styles = StyleSheet.create({
  reloadButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reloadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GL_Palette.white,
    width: 100,
    height: 100,
    borderRadius: wp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reloadText: {
    fontFamily: GL_Font.bold,
    fontSize: 15,
    color: GL_Palette.black,
  },
});
