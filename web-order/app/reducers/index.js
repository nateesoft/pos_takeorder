import { combineReducers } from "redux"
import tableReducer from "./table"
import itemReducer from "./item"
import loginReducer from './login'
import productReducer from './product'

const allReducers = combineReducers({
  table: tableReducer,
  item: itemReducer,
  login: loginReducer,
  product: productReducer,
})

export default allReducers
