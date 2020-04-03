const subMenuCodeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SUB_MENU_CODE":
      return state.concat(action.payload)
    default:
      return state
  }
}

export default subMenuCodeReducer
