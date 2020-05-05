export const updateOrderItem = payload => {
  return {
    type: 'UPDATE_ORDER_ITEM',
    payload: payload,
  }
}
export const updateOrderItemSuccess = payload => {
  return {
    type: 'UPDATE_ORDER_ITEM_SUCCESS',
    payload: payload,
  }
}
export const updateOrderItemFail = () => {
  return {
    type: 'UPDATE_ORDER_ITEM_FAIL',
  }
}
export const loadProductSubList = payload => {
  return {
    type: 'LOAD_PRODUCT_SUB_LIST',
    payload: payload,
  }
}
export const loadProductSubListSuccess = payload => {
  return {
    type: 'LOAD_PRODUCT_SUB_LIST_SUCCESS',
    payload: payload,
  }
}
export const loadProductSubListFail = () => {
  return {
    type: 'LOAD_PRODUCT_SUB_LIST_FAIL',
  }
}
export const loadSubMenuIndex = payload => {
  return {
    type: 'LOAD_SUB_MENU_INDEX',
    payload: payload,
  }
}
export const loadSubMenuIndexSuccess = payload => {
  return {
    type: 'LOAD_SUB_MENU_INDEX_SUCCESS',
    payload: payload,
  }
}
export const loadSubMenuIndexFail = () => {
  return {
    type: 'LOAD_SUB_MENU_INDEX_FAIL',
  }
}
export const loadOrderSpecial = payload => {
  return {
    type: 'LOAD_ORDER_SPECIAL',
    payload: payload,
  }
}
export const loadOrderSpecialSuccess = payload => {
  return {
    type: 'LOAD_ORDER_SPECIAL_SUCCESS',
    payload: payload,
  }
}
export const loadOrderSpecialFail = () => {
  return {
    type: 'LOAD_ORDER_SPECIAL_FAIL',
  }
}
export const loadProductDetail = payload => {
  return {
    type: 'LOAD_PRODUCT_DETAIL',
    payload: payload,
  }
}
export const loadProductDetailSuccess = payload => {
  return {
    type: 'LOAD_PRODUCT_DETAIL_SUCCESS',
    payload: payload,
  }
}
export const loadProductDetailFail = () => {
  return {
    type: 'LOAD_PRODUCT_DETAIL_FAIL',
  }
}
export const loadSubMenuList = payload => {
  return {
    type: 'LOAD_SUB_MENU_LIST',
    payload: payload,
  }
}
export const loadSubMenuListSuccess = payload => {
  return {
    type: 'LOAD_SUB_MENU_LIST_SUCCESS',
    payload: payload,
  }
}
export const loadSubMenuListFail = () => {
  return {
    type: 'LOAD_SUB_MENU_LIST_FAIL',
  }
}
export const searchData = payload => {
  return {
    type: 'SEARCH_DATA',
    payload: payload,
  }
}
export const searchDataSuccess = payload => {
  return {
    type: 'SEARCH_DATA_SUCCESS',
    payload: payload,
  }
}
export const searchDataFail = () => {
  return {
    type: 'SEARCH_DATA_FAIL',
  }
}
export const addNewOrderItem = payload => {
  return {
    type: 'ADD_NEW_ORDER_ITEM',
    payload: payload,
  }
}
export const addNewOrderItemSuccess = payload => {
  return {
    type: 'ADD_NEW_ORDER_ITEM_SUCCESS',
    payload: payload,
  }
}
export const addNewOrderItemFail = () => {
  return {
    type: 'ADD_NEW_ORDER_ITEM_FAIL',
  }
}
export const removeOrderIndex = payload => {
  return {
    type: 'REMOVE_ORDER_INDEX',
    payload: payload,
  }
}
export const removeOrderIndexSuccess = payload => {
  return {
    type: 'REMOVE_ORDER_INDEX_SUCCESS',
    payload: payload,
  }
}
export const removeOrderIndexFail = () => {
  return {
    type: 'REMOVE_ORDER_INDEX_FAIL',
  }
}
export const sendOrderToPOS = payload => {
  return {
    type: 'SEND_ORDER_TO_POS',
    payload: payload,
  }
}
export const sendOrderToPOSSuccess = payload => {
  return {
    type: 'SEND_ORDER_TO_POS_SUCCESS',
    payload: payload,
  }
}
export const sendOrderToPOSFail = () => {
  return {
    type: 'SEND_ORDER_TO_POS_FAIL',
  }
}
export const loadExpansionProduct = payload => {
  return {
    type: 'LOAD_EXPANSION_PRODUCT',
    payload: payload,
  }
}
export const loadExpansionProductSuccess = payload => {
  return {
    type: 'LOAD_EXPANSION_PRODUCT_SUCCESS',
    payload: payload,
  }
}
export const loadExpansionProductFail = () => {
  return {
    type: 'LOAD_EXPANSION_PRODUCT_FAIL',
  }
}
export const loadListOrderDetail = payload => {
  return {
    type: 'LOAD_LIST_ORDER_DETAIL',
    payload: payload,
  }
}
export const loadListOrderDetailSuccess = payload => {
  return {
    type: 'LOAD_LIST_ORDER_DETAIL_SUCCESS',
    payload: payload,
  }
}
export const loadListOrderDetailFail = () => {
  return {
    type: 'LOAD_LIST_ORDER_DETAIL_FAIL',
  }
}
export const loadOrderDetail = payload => {
  return {
    type: 'LOAD_ORDER_DETAIL',
    payload: payload,
  }
}
export const loadOrderDetailSuccess = payload => {
  return {
    type: 'LOAD_ORDER_DETAIL_SUCCESS',
    payload: payload,
  }
}
export const loadOrderDetailFail = () => {
  return {
    type: 'LOAD_ORDER_DETAIL_FAIL',
  }
}
export const loadProductList = payload => {
  return {
    type: 'LOAD_PRODUCT_LIST',
    payload: payload,
  }
}
export const loadProductListSuccess = payload => {
  return {
    type: 'LOAD_PRODUCT_LIST_SUCCESS',
    payload: payload,
  }
}
export const loadProductListFail = () => {
  return {
    type: 'LOAD_PRODUCT_LIST_FAIL',
  }
}

export const loadTablefile = () => {
  return {
    type: 'LOAD_TABLE_FILE',
  }
}
export const loadTablefileSuccess = payload => {
  return {
    type: 'LOAD_TABLE_FILE_SUCCESS',
    payload: payload,
  }
}
export const loadTablefileFail = () => {
  return {
    type: 'LOAD_TABLE_FILE_FAIL',
  }
}

export const checkLogin = payload => {
  return {
    type: 'CHECK_LOGIN',
    payload: payload,
  }
}
export const checkLoginSuccess = payload => {
  return {
    type: 'CHECK_LOGIN_SUCCESS',
    payload: payload,
  }
}
export const checkLoginFail = () => {
  return {
    type: 'CHECK_LOGIN_FAIL',
  }
}

export const increment = () => {
  return {
    type: "INCREMENT",
  }
}

export const decrement = () => {
  return {
    type: "DECREMENT",
  }
}

export const reset = () => {
  return {
    type: "RESET",
  }
}

export const chooseTable = tableNo => {
  return {
    type: "CHOOSE_TABLE",
    payload: tableNo,
  }
}

export const clearTable = () => {
  return {
    type: "CLEAR_TABLE",
  }
}

export const currentOrder = payload => {
  return {
    type: "CURRENT_ORDER",
    payload: payload,
  }
}

export const addOrder = payload => {
  return {
    type: "ADD_ORDER",
    payload: payload,
  }
}

export const clearOrder = () => {
  return {
    type: "CLEAR_ORDER",
  }
}

export const newOrder = payload => {
  return {
    type: "NEW_ORDER",
    payload: payload,
  }
}

export const addNewItem = payload => {
  return {
    type: "NEW_ITEM",
    payload: payload,
  }
}

export const updateItem = payload => {
  return {
    type: "UPDATE_ITEM",
    payload: payload,
  }
}

export const clearItemAdd = () => {
  return {
    type: "CLEAR_ITEM_ADD",
  }
}

export const addNewSpecialText = payload => {
  return {
    type: "ADD_SPECIAL_TEXT",
    payload: payload,
  }
}

export const clearSpecialText = payload => {
  return {
    type: "DELETE_SPECIAL_TEXT",
    payload: payload,
  }
}

export const addNewSubMenuCode = payload => {
  return {
    type: "ADD_SUB_MENU_CODE",
    payload: payload,
  }
}

export const clearNewSubMenuCode = payload => {
  return {
    type: "DELETE_SUB_MENU_CODE",
    payload: payload,
  }
}

export const emptySubMenuCode = () => {
  return {
    type: "EMPTY_SUB_MENU_CODE",
  }
}

export const emptySpecialText = () => {
  return {
    type: "EMPTY_SPECIAL_TEXT",
  }
}
