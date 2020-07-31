import produce from "immer"
const { 
  LOAD_ORDER_SPECIAL,
  LOAD_ORDER_SPECIAL_SUCCESS,
  LOAD_ORDER_SPECIAL_FAIL,
  LOAD_ORDER_DETAIL,
  LOAD_ORDER_DETAIL_SUCCESS,
  LOAD_ORDER_DETAIL_FAIL,
  CLEAR_ITEM_ADD,
  ADD_SPECIAL_TEXT,
  DELETE_SPECIAL_TEXT,
  ADD_SUB_MENU_CODE,
  DELETE_SUB_MENU_CODE,
  EMPTY_SUB_MENU_CODE,
  EMPTY_SPECIAL_TEXT
} = require('../actions/constants')

const initialState = {
  uid: '',
  specialText: [],
  specialList: [],
  subMenuCode: [],
  subMenuList: [],
}

const itemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ORDER_SPECIAL:
        draft.uid = action.payload.uid
        break;
      case LOAD_ORDER_SPECIAL_SUCCESS:
        draft.specialList = action.payload
        break;
      case LOAD_ORDER_SPECIAL_FAIL:
        break;
      case LOAD_ORDER_DETAIL:
        draft.uid = action.payload.uid
        break;
      case LOAD_ORDER_DETAIL_SUCCESS:
        draft.subMenuList = action.payload
        break;
      case LOAD_ORDER_DETAIL_FAIL:
        break;
      case ADD_SPECIAL_TEXT:
        draft.specialText = state.specialText.concat(action.payload)
        break
      case DELETE_SPECIAL_TEXT:
        draft.specialText = state.specialText.filter(
          element => element !== action.payload
        )
        break
      case ADD_SUB_MENU_CODE:
        draft.subMenuCode = state.subMenuCode.concat(action.payload)
        break
      case DELETE_SUB_MENU_CODE:
        draft.subMenuCode = state.subMenuCode.filter(
          element => element !== action.payload
        )
        break
      case EMPTY_SPECIAL_TEXT:
        draft.specialText = []
        break
      case EMPTY_SUB_MENU_CODE:
        draft.subMenuCode = []
        break
      case CLEAR_ITEM_ADD:
        draft.specialText = []
        draft.subMenuCode = []
        break
      default:
        break
    }
  })

export default itemReducer
