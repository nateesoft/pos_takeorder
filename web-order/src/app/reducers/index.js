import { combineReducers } from "redux"
import counterReducer from "./counter"
import tableReducer from "./table"
import itemReducer from "./item"
import loginReducer from './login'
import productReducer from './product'

const allReducers = combineReducers({
  counter: counterReducer,
  table: tableReducer,
  item: itemReducer,
  login: loginReducer,
  product: productReducer,
})

export default allReducers
