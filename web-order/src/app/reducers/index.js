import { combineReducers } from "redux"
import counterReducer from "./counter"
import tableReducer from "./table"
import itemReducer from "./item"

const allReducers = combineReducers({
  counter: counterReducer,
  table: tableReducer,
  item: itemReducer,
})

export default allReducers
