const initialState = {
  list: [],
};

const BarDataReducers = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case 'READ_DATA_SUCCESS':
      const data = action.payload;

      return {
        data: data,
      };
    default:
      return state;
  }
};

export default BarDataReducers;
