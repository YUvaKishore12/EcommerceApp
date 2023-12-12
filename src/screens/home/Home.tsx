import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useHome from './useHome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = () => {
  const {productsData, handleProduct} = useHome();

  const itemsPerRow = 2;

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleProduct(item.id)}
      style={styles.card}
      key={item.id}>
      <View style={{height: hp('25%')}}>
        <Image style={styles.image} source={{uri: item.images[0]}} />
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.description}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <ImageBackground
          style={{width: wp('100%'), height: hp('40%'), marginTop: 20}}
          source={require('../../../assets/banner.jpeg')}
        />
        <FlatList
          data={productsData}
          keyExtractor={item => item.id.toString()}
          numColumns={itemsPerRow}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 16,
  },
  card: {
    width: wp('45%'),
    height: hp('30%'),
    borderRadius: 20,
    margin: 8,
  },
  image: {
    width: wp('45%'),
    height: hp('20%'),
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  description: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  listContainer: {
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
});
