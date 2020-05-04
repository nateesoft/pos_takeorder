import produce from "immer"

const initialState = {
  groupId: '',
  productList: [],
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
      case 'LOAD_PRODUCT':
        draft.groupId = action.payload.groupId
        break
      case 'LOAD_PRODUCT_SUCCESS':
        draft.productList = action.payload
        break
      case 'LOAD_PRODUCT_FAIL':
        break
      default:
        break
    }
  })

export default productReducer
