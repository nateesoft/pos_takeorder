export const increment = () => {
  return {
    type: "INCREMENT"
  }
}

export const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

export const reset = () => {
  return {
    type: "RESET"
  }
}

export const chooseTable = tableNo => {
  return {
    type: "CHOOSE_TABLE",
    payload: tableNo
  }
}

export const clearTable = () => {
  return {
    type: "CLEAR_TABLE"
  }
}

export const currentOrder = payload => {
  return {
    type: "CURRENT_ORDER",
    payload: payload
  }
}

export const addOrder = payload => {
  return {
    type: "ADD_ORDER",
    payload: payload
  }
}

export const clearOrder = () => {
  return {
    type: "CLEAR_ORDER"
  }
}

export const newOrder = payload => {
  return {
    type: "NEW_ORDER",
    payload: payload
  }
}
