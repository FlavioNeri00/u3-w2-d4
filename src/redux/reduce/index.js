const initialState = {
  company: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_YOUR_FAVOURITES":
      return {
        ...state,
        company: {
          ...state.company,
          content: [...state.company.content, action.payload],
        },
      };

    case "CANCEL_FROM_YOUR_FAVOURITES":
      return {
        ...state,
        company: {
          ...state.company,
          content: state.company.content.filter((_, index) => index !== action.payload),
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
