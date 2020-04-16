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

export const clearItemAdd = (payload) => {
  return {
    type: "CLEAR_ITEM_ADD",
    payload: payload,
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
