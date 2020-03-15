import { combineReducers } from "redux"
import counterReducer from "./counter"
import tableReducer from "./table"

const allReducers = combineReducers({
  counter: counterReducer,
  table: tableReducer
})

export default allReducers
