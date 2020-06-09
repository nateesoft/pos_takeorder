import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
// import { logger } from "redux-logger"
import App from "./app/containers/App"
import * as serviceWorker from "./serviceWorker"

import allReducers from "./app/reducers"
import rootSaga from "./app/sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, applyMiddleware(sagaMiddleware))
// store.subscribe(() => console.log(store.getState()))
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

if (module.hot) {
  module.hot.accept(App)
}

serviceWorker.register()
