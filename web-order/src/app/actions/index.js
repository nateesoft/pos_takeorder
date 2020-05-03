export const loadTablefile = () => {
  return {
    type: 'LOAD_TABLE_FILE',
  }
}
export const loadTablefileSuccess = (payload) => {
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

export const checkLogin = (payload) => {
  return {
    type: 'CHECK_LOGIN',
    payload: payload,
  }
}
export const checkLoginSuccess = (payload) => {
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

export const chooseTable = (tableNo) => {
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

export const currentOrder = (payload) => {
  return {
    type: "CURRENT_ORDER",
    payload: payload,
  }
}

export const addOrder = (payload) => {
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

export const newOrder = (payload) => {
  return {
    type: "NEW_ORDER",
    payload: payload,
  }
}

export const addNewItem = (payload) => {
  return {
    type: "NEW_ITEM",
    payload: payload,
  }
}

export const updateItem = (payload) => {
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

export const addNewSpecialText = (payload) => {
  return {
    type: "ADD_SPECIAL_TEXT",
    payload: payload,
  }
}

export const clearSpecialText = (payload) => {
  return {
    type: "DELETE_SPECIAL_TEXT",
    payload: payload,
  }
}

export const addNewSubMenuCode = (payload) => {
  return {
    type: "ADD_SUB_MENU_CODE",
    payload: payload,
  }
}

export const clearNewSubMenuCode = (payload) => {
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
