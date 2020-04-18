import produce from "immer"

const initialState = {
  specialText: [],
  subMenuCode: []
}

const itemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "ADD_SPECIAL_TEXT":
        draft.specialText = state.specialText.concat(action.payload)
        break
      case "DELETE_SPECIAL_TEXT":
        draft.specialText = state.specialText.filter(
          element => element !== action.payload
        )
        break
      case "ADD_SUB_MENU_CODE":
        draft.subMenuCode = state.subMenuCode.concat(action.payload)
        break
      case "DELETE_SUB_MENU_CODE":
        draft.subMenuCode = state.subMenuCode.filter(
          element => element !== action.payload
        )
        break
      case "EMPTY_SPECIAL_TEXT":
        draft.specialText = []
        break
      case "EMPTY_SUB_MENU_CODE":
        draft.subMenuCode = []
        break
      case "CLEAR_ITEM_ADD":
        draft.specialText = []
        draft.subMenuCode = []
        break
      default:
        break
    }
  })

export default itemReducer
