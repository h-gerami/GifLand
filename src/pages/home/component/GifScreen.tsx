import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert, StyleProp, ViewStyle} from 'react-native';
import {Loading, LoadingSize, ReloadButton} from '../../../common';
import {GL_Font, GL_Palette, hp, wp} from '../../../global/Style';
import useGetRandomGif from '../../../hooks/useGetRandomGif';
import GifDetails from './GifDetails';

interface GifScreenType {
  style?: StyleProp<ViewStyle>;
}
const GifScreen = (props: GifScreenType) => {
  const {style} = props;

  const {errText, getRandomGif, loading, randomGif} = useGetRandomGif();

  const [isReloadButton, setIsReloadButton] = useState<boolean>(false);

  useEffect(() => {
    if (errText) {
      Alert.alert('Gif Land', errText, [
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
  }, [errText]);

  const onModalCloseButtonClick = () => {
    setIsReloadButton(true);
  };

  const onTryAgainModalButtonClick = () => {
    setIsReloadButton(false);
    getRandomGif();
  };

  const onGifLoadEnded = () => {
    setTimeout(() => {
      getRandomGif();
    }, 10000);
  };

  const reloadGifHandler = () => {
    setIsReloadButton(false);
    getRandomGif();
  };

  return (
    <View style={[styles.container, style]}>
      {loading && <Loading color={GL_Palette.black} size={LoadingSize.large} />}
      {isReloadButton && (
        <ReloadButton onReloadButtonClickHandler={reloadGifHandler} />
      )}
      {randomGif && (
        <GifDetails gif={randomGif} onGifLoadEnded={onGifLoadEnded} />
      )}
    </View>
  );
};
export default GifScreen;
const styles = StyleSheet.create({
  container: {
    height: hp(56),
    borderWidth: 0.5,
    borderRadius: wp(2),
    borderColor: GL_Palette.gray,
    justifyContent: 'space-between',
  },

  gifDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: wp(2),
  },
  ratingWrapper: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: GL_Palette.gray,
  },
  urlTitleWrapper: {
    flex: 1,
    marginRight: wp(2),
  },
  ratingText: {
    color: GL_Palette.black,
    fontFamily: GL_Font.medium,
    fontSize: 20,
  },
  urlText: {
    color: GL_Palette.black,
    fontFamily: GL_Font.medium,
    fontSize: 16,
    lineHeight: 18,
  },
  titleText: {
    color: GL_Palette.black,
    fontFamily: GL_Font.bold,
    fontSize: 17,
    lineHeight: 20,
  },
});
