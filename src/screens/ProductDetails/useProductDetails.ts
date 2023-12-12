import {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  selectGetProductDetails,
  selectProductsLoading,
} from '../../redux/sagas/ProductSaga';

const useProductDetails = () => {
  const productsData = useSelector(selectGetProductDetails);
  const productLoading = useSelector(selectProductsLoading);
  console.log('data in the file is Product', productsData);
  console.log(productLoading);
  const [data, setData] = useState([productsData]);
  console.log(data, 'data is', productsData.category);
  return {data, productLoading};
};
export default useProductDetails;
