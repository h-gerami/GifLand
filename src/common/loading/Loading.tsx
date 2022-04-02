import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
export enum LoadingSize {
  large = 'large',
  small = 'small',
}
interface LoadingType {
  color: string;
  size: LoadingSize;
}
const Loading = (props: LoadingType) => {
  return (
    <View style={styles.bigLoadingWrapper}>
      <ActivityIndicator {...props} />
    </View>
  );
};
export {Loading};
const styles = StyleSheet.create({
  bigLoadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
