import produce from "immer"

const initialState = {
  groupId: '',
  code: '',
  product: [],
  productList: [],
  productSubList: [],
  productSearchList: [],
}

const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'SEARCH_DATA':
        draft.search = action.payload.search
        break
      case 'SEARCH_DATA_SUCCESS':
        draft.productSearchList = action.payload
        break
      case 'SEARCH_DATA_FAIL':
        break
      case 'LOAD_PRODUCT_LIST':
        draft.groupId = action.payload.groupId
        break
      case 'LOAD_PRODUCT_LIST_SUCCESS':
        draft.productList = action.payload
        break
      case 'LOAD_PRODUCT_LIST_FAIL':
        break
      case 'LOAD_PRODUCT_DETAIL':
        draft.code = action.payload.code
        draft.groupId = action.payload.productGroup
        break;
      case 'LOAD_PRODUCT_DETAIL_SUCCESS':
        draft.product = action.payload
        break;
      case 'LOAD_PRODUCT_DETAIL_FAIL':
        break;
      case 'LOAD_PRODUCT_SUB_LIST':
        draft.code = action.payload.code
        break;
      case 'LOAD_PRODUCT_SUB_LIST_SUCCESS':
        draft.productSubList = action.payload
        break;
      case 'LOAD_PRODUCT_SUB_LIST_FAIL':
        break;
      default:
        break
    }
  })

export default productReducer
