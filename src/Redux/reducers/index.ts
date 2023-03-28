import { combineReducers } from 'redux';
import BarDataReducers from './BarDataReducer';
import VisitorGraphReducers from './VisitorGraphReducer';
// import SelfBlogReducers from './SelfBlogReducers';

const rootReducer = combineReducers({
  incomeData: BarDataReducers,
  visitorData: VisitorGraphReducers,
});

export default rootReducer;
