import React from "react"
import { render } from "react-dom"
import { applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import { PersistGate } from "redux-persist/integration/react"
import App from "containers/App"
import * as serviceWorker from "./serviceWorker"

import rootSaga from "./sagas"
import configureStore from "./store"

const sagaMiddleware = createSagaMiddleware()

const { store, persistor } = configureStore(applyMiddleware(sagaMiddleware))
// store.subscribe(() => console.log(store.getState()))
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)

if (module.hot) {
  module.hot.accept(App)
}

serviceWorker.register()
