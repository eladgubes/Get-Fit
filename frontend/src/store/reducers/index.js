import { combineReducers } from 'redux';
// import userReducer from './userReducer'
import trainReducer from './trainReducer'


const rootReducer = combineReducers({
  // user: userReducer,
  train: trainReducer,
})

export default rootReducer;