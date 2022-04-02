import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {hp, wp} from '../../global/Style';
import {GifType} from '../../utils/types';
import GifDetails from '../home/component/GifDetails';

interface GifDetailScreenType {
  route: RouteProp<{
    params: {
      gifDetails: GifType;
    };
  }>;
}
const GifDetailScreen = (props: GifDetailScreenType) => {
  const {route} = props;

  const {gifDetails} = route.params;

  return (
    <View style={styles.container}>
      <GifDetails gif={gifDetails} />
    </View>
  );
};
export default GifDetailScreen;
const styles = StyleSheet.create({
  container: {
    padding: wp(5),
    height: hp(60),
    justifyContent: 'space-between',
  },
});
