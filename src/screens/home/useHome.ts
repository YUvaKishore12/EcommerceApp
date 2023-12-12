import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions/homeActions';
import {selectGetProductsData} from '../../redux/sagas/HomeSaga';
import {useEffect} from 'react';
import {getProductDetails} from '../../redux/actions/productActions';
import {useNavigation} from '@react-navigation/native';

const useHome = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productsData = useSelector(selectGetProductsData);

  const handleProduct = (id: string) => {
    dispatch(
      getProductDetails(id, success => {
        if (success) {
          console.log(
            'Callback executed after successfully fetching product details',
          );
          navigation.navigate('ProductDetails');
        } else {
          console.log(
            'Callback executed after failing to fetch product details',
          );
        }
      }),
    );
  };
  return {productsData, handleProduct};
};

export default useHome;
