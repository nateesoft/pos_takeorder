import produce from "immer"

const { 
  LOAD_PRODUCT_SUB_LIST,
  LOAD_PRODUCT_SUB_LIST_SUCCESS,
  LOAD_PRODUCT_SUB_LIST_FAIL,
  LOAD_PRODUCT_DETAIL,
  LOAD_PRODUCT_DETAIL_SUCCESS,
  LOAD_PRODUCT_DETAIL_FAIL,
  SEARCH_DATA,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAIL,
  LOAD_PRODUCT_LIST,
  LOAD_PRODUCT_LIST_SUCCESS,
  LOAD_PRODUCT_LIST_FAIL,
  LOAD_PRODUCT_LIST_ALL,
  LOAD_PRODUCT_LIST_ALL_SUCCESS,
  LOAD_PRODUCT_LIST_ALL_FAIL,
  LOAD_GROUP_LIST,
  LOAD_GROUP_LIST_SUCCESS,
  LOAD_GROUP_LIST_FAIL,
  GET_PRODUCT_CODE,
  GET_PRODUCT_CODE_SUCCESS,
  GET_PRODUCT_CODE_FAIL,
} = require('../actions/constants')

const initialState = {
  groupId: '',
  code: '',
  product: [],
  productList: [],
  productSubList: [],
  productSearchList: [],
  groupList: [],
  productInfo: {}
}

const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH_DATA:
        draft.search = action.payload.search
        break
      case SEARCH_DATA_SUCCESS:
        draft.productSearchList = action.payload
        break
      case SEARCH_DATA_FAIL:
        break
      case LOAD_PRODUCT_LIST:
        draft.groupId = action.payload.groupId
        break
      case LOAD_PRODUCT_LIST_SUCCESS:
        draft.productList = action.payload
        break
      case LOAD_PRODUCT_LIST_FAIL:
        break
      case LOAD_PRODUCT_LIST_ALL:
        break
      case LOAD_PRODUCT_LIST_ALL_SUCCESS:
        draft.productList = action.payload
        break
      case LOAD_PRODUCT_LIST_ALL_FAIL:
        break
      case LOAD_GROUP_LIST:
        break
      case LOAD_GROUP_LIST_SUCCESS:
        draft.groupList = action.payload
        break
      case LOAD_GROUP_LIST_FAIL:
        break
      case LOAD_PRODUCT_DETAIL:
        draft.code = action.payload.code
        draft.groupId = action.payload.productGroup
        break;
      case LOAD_PRODUCT_DETAIL_SUCCESS:
        draft.product = action.payload
        break;
      case LOAD_PRODUCT_DETAIL_FAIL:
        break;
      case LOAD_PRODUCT_SUB_LIST:
        draft.code = action.payload.code
        break;
      case LOAD_PRODUCT_SUB_LIST_SUCCESS:
        draft.productSubList = action.payload
        break;
      case LOAD_PRODUCT_SUB_LIST_FAIL:
        break;
      case GET_PRODUCT_CODE:
        draft.code = action.payload.code
        break;
      case GET_PRODUCT_CODE_SUCCESS:
        draft.productInfo = action.payload
        break;
      case GET_PRODUCT_CODE_FAIL:
        break;
      default:
        break
    }
  })

export default productReducer
