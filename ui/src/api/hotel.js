import API from './api';

export function doGetHotels(onSuccess, onError) {
  const endpoint = API.get(`hotels`);
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export function doFilterHotels(filter, onSuccess, onError) {
  const endpoint = API.post(`hotels/filter`, filter);
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export function doFilterHotelsWithSemanticSearch(search, onSuccess, onError) {
  const endpoint = API.post(`hotels/filter-with-semantickernel`, search);
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}