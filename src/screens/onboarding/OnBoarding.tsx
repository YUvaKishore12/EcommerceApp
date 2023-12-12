import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/banner.jpeg')}
          style={styles.image}
        />

        {/* <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: wp('100%'),
    height: hp('70%'),
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 50,

    backgroundColor: 'red',
  },
  image: {
    width: wp('100%'),
    height: hp('60%'),
  },
  buttonText: {
    color: 'white',
    position: 'absolute',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonContainer: {
    zIndex: 2,
    width: wp('90%'),
    height: hp('10%'),
    bottom: 200,
    alignItems: 'center',
    margin: 20,
    justifyContent: 'center',
    backgroundColor: '#49108B',
    borderRadius: 30,
  },
});
