import produce from "immer"
const {
  CHECK_LOGIN,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_FAIL,
  CHECK_LOGOUT,
  CHECK_LOGOUT_SUCCESS,
} = require('../actions/constants')

const initialState = {
  username: "",
  password: "",
  status: "",
  message: '',
  errMessage: '',
  auto_logout: 'N'
}
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHECK_LOGIN:
        draft.username = action.payload.username
        draft.password = action.payload.password
        break
      case CHECK_LOGIN_SUCCESS:
        draft.status = action.payload.status
        draft.message = action.payload.msg
        draft.auto_logout = action.payload.autoLogout
        break
      case CHECK_LOGIN_FAIL:
        draft.status = action.payload.status
        draft.message = action.payload.msg
        break
      case CHECK_LOGOUT:
        break
      case CHECK_LOGOUT_SUCCESS:
        draft.username = ""
        draft.password = ""
        draft.status = ""
        draft.message = ''
        draft.errMessage = ''
        break
      default:
        break
    }
  })

export default loginReducer
