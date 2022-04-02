import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  LazyLoadImage,
  Loading,
  LoadingSize,
  ReloadButton,
} from '../../../common';
import {wp, GL_Palette, GL_Font} from '../../../global/Style';
import useGetSearchedGifs from '../../../hooks/useGetSearchedGifs';
import {GifType} from '../../../utils/types';
type RootStackParamList = {
  HomeScreen: undefined;
  GifDetailScreen: {
    gifDetails: GifType;
  };
};
interface GifListScreenType {
  navigation: NativeStackNavigationProp<RootStackParamList, 'GifDetailScreen'>;
  searchedText: string;
}
const GifListScreen = (props: GifListScreenType) => {
  const {navigation, searchedText} = props;

  const {
    searchedGifs,
    searchedGifLoading,
    setSearchedGifs,
    searchErrText,
    getSearchedResults,
  } = useGetSearchedGifs();

  const [isReloadButton, setIsReloadButton] = useState<boolean>(false);

  useEffect(() => {
    if (searchErrText) {
      Alert.alert('Gif Land', searchErrText, [
        {
          text: 'Close',
          onPress: onModalCloseButtonClick,
          style: 'cancel',
        },
        {
          text: 'Try Again',
          onPress: onTryAgainModalButtonClick,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchErrText]);

  useEffect(() => {
    if (searchedText.length >= 2) {
      getSearchedResults(searchedText);
    }
    if (searchedText === '') {
      setSearchedGifs([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedText]);

  const onModalCloseButtonClick = () => {
    setIsReloadButton(true);
  };

  const onTryAgainModalButtonClick = () => {
    setIsReloadButton(false);
    getSearchedResults(searchedText);
  };

  const reloadGifHandler = () => {
    setIsReloadButton(false);
    getSearchedResults(searchedText);
  };

  return (
    <View style={styles.container}>
      {searchedGifLoading && (
        <Loading color={GL_Palette.black} size={LoadingSize.large} />
      )}
      {isReloadButton && (
        <ReloadButton onReloadButtonClickHandler={reloadGifHandler} />
      )}
      {!searchedGifLoading && !isReloadButton && (
        <FlatList
          ListHeaderComponent={() =>
            searchedGifs.length === 0 && searchedText.length >= 2 ? (
              <Text style={styles.notFound}>🥺 No Gif Found!</Text>
            ) : null
          }
          data={searchedGifs}
          numColumns={3}
          // getItemLayout={(_, index) => ({
          //   length: Height of each individual row,
          //   offset: The distance (in pixels) of the current row from the top of the FlatList,
          //   index: The current row index
          // })}
          keyExtractor={item => item.id.toString()}
          columnWrapperStyle={styles.listColumnWrapperStyle}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('GifDetailScreen', {
                    gifDetails: item,
                  })
                }>
                <View style={styles.lazyImgItem}>
                  <LazyLoadImage
                    style={styles.lazyItemStyle}
                    height={'100%'}
                    imgUri={item.images.original.url}
                    width={'100%'}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};
export default GifListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lazyImgItem: {
    height: wp(22),
    width: wp(27),
    borderWidth: 0.5,
    borderRadius: wp(2),
    padding: wp(1),
    borderColor: GL_Palette.gray,
    backgroundColor: GL_Palette.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lazyItemStyle: {
    height: '100%',
    width: '100%',
  },
  notFound: {
    color: GL_Palette.black,
    fontFamily: GL_Font.medium,
    fontSize: wp(4),
  },
  listColumnWrapperStyle: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: wp(4),
  },
});
