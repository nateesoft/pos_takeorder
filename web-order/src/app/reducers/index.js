import { combineReducers } from "redux"
import counterReducer from "./counter"
import tableReducer from "./table"
import itemReducer from "./item"
import loginReducer from './login'

const allReducers = combineReducers({
  counter: counterReducer,
  table: tableReducer,
  item: itemReducer,
  login: loginReducer,
})

export default allReducers
