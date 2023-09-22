import {
  doGetHotels,
  doFilterHotels,
  doFilterHotelsWithSemanticSearch,
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

export const filterHotels = (filter, onSuccess, onError) => {
  return (dispatch) => {
    doFilterHotels(
      filter,
      (hotels) => {
        dispatch({
          type: 'FILTER_HOTELS',
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

export const filterHotelsWithSemanticSearch = (search, onSuccess, onError) => {
  return (dispatch) => {
    doFilterHotelsWithSemanticSearch(
      search,
      (hotels) => {
        dispatch({
          type: 'FILTER_HOTELS',
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
}