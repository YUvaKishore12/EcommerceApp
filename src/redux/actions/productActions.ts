// productActions.js
export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';

export const getProductDetails = (
  id: string,
  callback?: (success: boolean) => void,
) => ({
  type: FETCH_PRODUCT_DETAILS,
  payload: {id, callback},
});
