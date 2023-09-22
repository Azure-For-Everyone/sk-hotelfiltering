const hotel = (
  state = {
    hotels: [],
  },
  action
) => {
  switch (action.type) {

    case 'GET_HOTELS':
      return {
        ...state,
        hotels: action.hotels,
      };

    default:
      return state;
  }
};

export default hotel;
