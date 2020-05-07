import produce from "immer"

const initialState = {
  username: "",
  password: "",
  status: "",
  message: '',
  errMessage: '',
}
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'CHECK_LOGIN':
        draft.username = action.payload.username
        draft.password = action.payload.password
        break
      case 'CHECK_LOGIN_SUCCESS':
        draft.status = action.payload.status
        draft.message = action.payload.msg
        break
      case 'CHECK_LOGIN_FAIL':
        draft.status = action.payload.status
        draft.errMessage = action.payload.msg
        break
      default:
        break
    }
  })

export default loginReducer
