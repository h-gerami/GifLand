import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CopyUrlButton, LazyLoadImage} from '../../../common';
import {GL_Font, GL_Palette, hp, wp} from '../../../global/Style';
import {GifType} from '../../../utils/types';
interface GifDetailsType {
  gif: GifType;
  onGifLoadEnded?: () => void;
}
const GifDetails = (props: GifDetailsType) => {
  const {gif, onGifLoadEnded} = props;
  return (
    <React.Fragment>
      <LazyLoadImage
        style={{height: hp(40)}}
        onLoadEnd={onGifLoadEnded}
        height={'100%'}
        imgUri={gif.images.original.url}
        width={'100%'}
      />
      <View style={styles.gifDetail}>
        <View style={styles.urlTitleWrapper}>
          <Text style={styles.urlText}>{gif.bitly_url || 'URL'}</Text>
          <Text style={styles.titleText}>{gif.title || 'Title'}</Text>
        </View>
        <View style={styles.ratingWrapper}>
          <Text style={styles.ratingText}>{gif.rating || 'R'}</Text>
        </View>
      </View>
      <CopyUrlButton link={gif.bitly_url} />
    </React.Fragment>
  );
};
export default GifDetails;
const styles = StyleSheet.create({
  gifDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 1,
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
