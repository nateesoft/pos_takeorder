import produce from "immer"

const initialState = {
  username: "",
  password: "",
  valid: false,
}
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'CHECK_LOGIN':
        draft.username = action.payload.username
        draft.password = action.payload.password
        break
      case 'CHECK_LOGIN_SUCCESS':
        draft.valid = action.payload
        break
      case 'CHECK_LOGIN_FAIL':
        break
      default:
        break
    }
  })

export default loginReducer
