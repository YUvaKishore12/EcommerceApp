import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Wishlist from '../screens/wishlist/Wishlist';
import Cart from '../screens/cart/Cart';
import Profile from '../screens/profile/Profile';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import OnBoarding from '../screens/onboarding/OnBoarding';
const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Homescreen" component={Home} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
    </Stack.Navigator>
  );
};
