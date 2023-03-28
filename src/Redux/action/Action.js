import { apis } from '../../apis/apiServices';

export const getBarDataFromApis = () => {
  return async (dispatch) => {
    dispatch({ type: 'READ_DATA' });
    try {
      const response = await apis.getBarIncomeData();
      dispatch({
        type: 'READ_DATA_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'READ_DATA_FAILURE', payload: error });
    }
  };
};

export const getBarVisitorDataFromApis = () => {
  return async (dispatch) => {
    dispatch({ type: 'READ_DATA_VISITOR' });
    try {
      const response = await apis.getBarVisitorsData();
      dispatch({
        type: 'READ_DATA_VISITOR_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'READ_DATA_VISITOR_FAILURE', payload: error });
    }
  };
};
