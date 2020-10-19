import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "../reducers"

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default (middleware) => {
  let store = createStore(persistedReducer, middleware)
  let persistor = persistStore(store)
  return { store, persistor }
}
