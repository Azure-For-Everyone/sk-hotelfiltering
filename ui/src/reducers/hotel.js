const hotel = (
  state = {
    hotels: [],
    loading: false,
  },
  action
) => {
  switch (action.type) {

    case 'GET_HOTELS':
      return {
        ...state,
        hotels: action.hotels,
        loading: false,
      };

    case 'LOADING_HOTELS':
      return {
        ...state,
        loading: true,
      };
    
    case 'FILTER_HOTELS':
      return {
        ...state,
        hotels: action.hotels,
        loading: false,
      };

    default:
      return state;
  }
};

export default hotel;
