import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/home/HomeScreen';
import GifDetailScreen from '../pages/gif-detail/GifDetailScreen';
import {GL_Font, GL_Palette} from '../global/Style';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Gif Land',
            headerTitleStyle: {
              fontFamily: GL_Font.bold,
              fontSize: 17,
              color: GL_Palette.black,
            },
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="GifDetailScreen"
          component={GifDetailScreen}
          options={({route}: any) => ({
            title: route.params.gifDetails.title || 'Gif Details',
            headerBackTitleVisible: false,
            headerTitleStyle: {
              fontFamily: GL_Font.bold,
              fontSize: 15,
              color: GL_Palette.black,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
