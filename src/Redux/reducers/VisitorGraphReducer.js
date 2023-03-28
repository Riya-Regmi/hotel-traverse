const initialState = {
  list: [],
};

const VisitorGraphReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'READ_DATA_VISITOR_SUCCESS':
      const data = action.payload;

      return {
        data: data,
      };
    default:
      return state;
  }
};

export default VisitorGraphReducers;
