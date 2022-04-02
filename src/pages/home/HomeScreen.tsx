import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, BackHandler, Alert} from 'react-native';
import {GL_Font, GL_Palette, wp} from '../../global/Style';
import {SearchBar} from '../../common';
import {GifType} from '../../utils/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GifScreen from './component/GifScreen';
import GifListScreen from './component/GifListScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  GifDetailScreen: {
    gifDetails: GifType;
  };
};
interface HomeScreenType {
  navigation: NativeStackNavigationProp<RootStackParamList, 'GifDetailScreen'>;
}
const HomeScreen = (props: HomeScreenType) => {
  const {navigation} = props;

  const [searchedText, setSearchedText] = useState('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    Alert.alert('Gif Land', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchBar
          isSearchBarFocused={isSearching}
          searchedText={searchedText}
          setIsSearchBarFocused={setIsSearching}
          setSearchedText={t => setSearchedText(t)}
        />
        <View style={styles.stateTextWrapper}>
          <Text style={styles.stateTextWrapperText}>
            {isSearching ? 'Search Results:' : 'Random Selected GIF:'}
          </Text>
        </View>
      </View>

      {isSearching ? (
        <GifListScreen searchedText={searchedText} navigation={navigation} />
      ) : (
        <GifScreen />
      )}
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
  },
  searchWrapper: {
    height: 110,
  },
  stateTextWrapper: {
    marginVertical: wp(5),
  },
  stateTextWrapperText: {
    color: GL_Palette.black,
    fontFamily: GL_Font.medium,
    fontSize: 15,
  },
});
