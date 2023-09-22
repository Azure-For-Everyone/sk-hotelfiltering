import {
  doGetHotels,
} from '../api/hotel';

export const getHotels = (onSuccess, onError) => {
  return (dispatch) => {
    doGetHotels(
      (hotels) => {
        dispatch({
          type: 'GET_HOTELS',
          hotels,
        });
        if (onSuccess) {
          onSuccess(hotels);
        }
      },
      () => {
        if (onError) {
          onError();
        }
      }
    );
  };
};