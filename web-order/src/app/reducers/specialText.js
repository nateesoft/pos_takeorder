const specialTextReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SPECIAL_TEXT":
      return state.concat(action.payload)
    default:
      return state
  }
}

export default specialTextReducer
