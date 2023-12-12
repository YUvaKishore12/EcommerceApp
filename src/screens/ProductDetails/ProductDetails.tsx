import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import useProductDetails from './useProductDetails';
import {sizes} from '../../../assets/data/sizes';
const ProductDetails = () => {
  const {data, productLoading} = useProductDetails();
  if (productLoading) {
    return <Text>Loading....s</Text>;
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {data?.map(item => (
          <View key={item.id}>
            <ImageBackground
              source={{uri: item.images[0]}}
              style={styles.image}
            />
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
            <Text style={styles.price}>Details</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>Size</Text>
            <View style={styles.sizeContainer}>
              {sizes.map(size => (
                <TouchableOpacity style={styles.sizeButton} key={size.key}>
                  <Text style={styles.sizeText}>{size.key}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF6EE',
    width: wp('100%'),
    height: hp('100%'),
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 16,
  },
  card: {
    width: wp('45%'),
    height: hp('35%'),
    borderRadius: 20,
    margin: 8,
  },
  image: {
    width: wp('100%'),
    height: hp('55%'),
  },
  text: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    margin: 10,
  },
  price: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    marginTop: 5,
    marginLeft: 10,
  },
  listContainer: {
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  description: {
    fontFamily: 'Montserrat-Medium',
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
  sizeContainer: {
    flexDirection: 'row',
    width: wp('70%'),
    justifyContent: 'space-between',
    height: hp('5%'),
    marginLeft: 10,
    marginTop: 10,
  },
  sizeText: {
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  sizeButton: {
    backgroundColor: 'black',
    width: wp('10%'),
    height: hp('5%'),

    alignItems: 'center',
    borderRadius: 10,
  },
  cartButton: {
    width: wp('90%'),
    backgroundColor: 'black',
    height: hp('8%'),
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  cartText: {color: 'white', fontFamily: 'Montserrat-Medium', fontSize: 20},
});
