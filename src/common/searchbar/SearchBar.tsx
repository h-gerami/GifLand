import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GL_Font, GL_Palette, wp} from '../../global/Style';
interface SearchBarType {
  setIsSearchBarFocused: (v: boolean) => void;
  isSearchBarFocused: boolean;
  searchedText: string;
  setSearchedText: (v: string) => void;
}
const SearchBar = (props: SearchBarType) => {
  const {
    isSearchBarFocused,
    searchedText,
    setIsSearchBarFocused,
    setSearchedText,
  } = props;

  const changeTextHandler = (t: string) => {
    setSearchedText(t);
  };

  const onFocusHandler = () => {
    setIsSearchBarFocused(true);
  };

  const onCancelPressHandler = () => {
    setIsSearchBarFocused(false);
    Keyboard.dismiss();
    setSearchedText('');
  };

  const onCloseClickHandler = () => {
    setSearchedText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.iconWrapper}>
          <Icon name="magnify" size={25} color={GL_Palette.black} />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            onChangeText={changeTextHandler}
            value={searchedText}
            placeholderTextColor={GL_Palette.gray}
            placeholder={'Search ...'}
            style={styles.input}
            onFocus={onFocusHandler}
          />
        </View>
        {searchedText !== '' && (
          <View style={styles.closeWrapper}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onCloseClickHandler}>
              <Icon name="close" size={20} color={GL_Palette.black} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {isSearchBarFocused && (
        <View style={styles.cancleWrapper}>
          <TouchableOpacity
            style={styles.cancleButton}
            onPress={onCancelPressHandler}>
            <Text style={styles.cancleText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export {SearchBar};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: GL_Palette.white,
    borderColor: GL_Palette.black,
    borderWidth: 0.5,
    borderRadius: wp(2),
    flex: 4,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp(2),
  },
  closeWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancleWrapper: {
    flex: 1,
  },
  cancleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cancleText: {
    fontFamily: GL_Font.medium,
    fontSize: 15,
    color: GL_Palette.black,
  },
  input: {
    fontFamily: GL_Font.medium,
    fontSize: 15,
    color: GL_Palette.black,
  },
});
