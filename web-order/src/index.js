import React from "react"
import ReactDOM from "react-dom"
import App from "./app/components/App"
import * as serviceWorker from "./serviceWorker"
import { createStore } from "redux"
import allReducers from "./app/reducers"
import { Provider } from "react-redux"

const store = createStore(allReducers)
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
serviceWorker.register()
