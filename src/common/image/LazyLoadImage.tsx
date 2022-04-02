import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {GL_Palette} from '../../global/Style';

interface LazyLoadImageType {
  width: number | string;
  height: number | string;
  imgUri: string;
  onLoadEnd?: () => void;
  style?: StyleProp<ViewStyle>;
}
const LazyLoadImage = (props: LazyLoadImageType) => {
  const {width, style, height, imgUri, onLoadEnd} = props;

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <View style={[styles.container, style]}>
      {loading && (
        <ActivityIndicator
          style={styles.activityStyle}
          size={'small'}
          color={GL_Palette.black}
        />
      )}
      <FastImage
        onLoadEnd={() => {
          setLoading(false);
          onLoadEnd && onLoadEnd();
        }}
        style={{
          display: loading ? 'none' : 'flex',
          width: width,
          height: height,
        }}
        source={{
          uri: imgUri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export {LazyLoadImage};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityStyle: {
    alignSelf: 'center',
  },
});
