import { combineReducers } from "redux"
import counterReducer from "./counter"
import tableReducer from "./table"
import specialTextReducer from "./specialText"
import subMenuCodeReducer from "./subMenuCode"

const allReducers = combineReducers({
  counter: counterReducer,
  table: tableReducer,
  specialText: specialTextReducer,
  subMenuCode: subMenuCodeReducer,
})

export default allReducers
