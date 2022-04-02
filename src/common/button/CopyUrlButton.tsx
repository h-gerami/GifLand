import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GL_Font, GL_Palette, hp, wp} from '../../global/Style';

interface CopyUrlButtonType {
  link: string;
}
const CopyUrlButton = (props: CopyUrlButtonType) => {
  const {link} = props;
  const copyToClipboard = () => {
    Clipboard.setString(link);
  };
  return (
    <TouchableOpacity onPress={copyToClipboard}>
      <View style={styles.container}>
        <Text style={styles.text}>Copy link</Text>
        <View style={styles.devider} />
        <Icon name="content-copy" size={20} color={GL_Palette.white} />
      </View>
    </TouchableOpacity>
  );
};
export {CopyUrlButton};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(4),
    backgroundColor: GL_Palette.blue,
    borderRadius: wp(2),
  },
  text: {
    fontFamily: GL_Font.medium,
    fontSize: 15,
    color: GL_Palette.white,
  },
  devider: {
    width: 5,
  },
});
