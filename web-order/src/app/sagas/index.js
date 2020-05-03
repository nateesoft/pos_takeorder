import { takeLatest, all, call, put} from "redux-saga/effects"
import request from '../utils/request'
import { 
  loadTablefileSuccess, 
  loadTablefileFail,
  checkLoginSuccess,
  checkLoginFail
} from '../actions'

function* fetchLogin(action) {
  const { username, password } = action.payload
  const requestURL = `/pos/employ/login`
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    yield put(checkLoginSuccess(response.data))
  } catch(err) {
    yield put(checkLoginFail(err))
  }
}

function* fetchTablefile() {
  const requestURL = `/pos/tablefile`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadTablefileSuccess(response.data))
  } catch(err) {
    yield put(loadTablefileFail(err))
  }
}

function* actionFetchTablefile() {
  yield takeLatest("LOAD_TABLE_FILE", fetchTablefile)
}
function* actionFetchLogin() {
  yield takeLatest("CHECK_LOGIN", fetchLogin)
}

export default function* rootSaga() {
  yield all([
    actionFetchTablefile(),
    actionFetchLogin()
  ])
}
