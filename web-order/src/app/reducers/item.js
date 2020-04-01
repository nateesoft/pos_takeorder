const initialState = {
  menu_code: "",
  menu_name: "",
  price: 0,
  sub_menu_code: [],
  special_text: []
}
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      state.menu_code = action.payload.menu_code
      state.menu_name = action.payload.menu_name
      state.price = action.payload.price
      state.sub_menu_code = action.payload.sub_menu_code
      state.special_text = action.payload.special_text
      return state
    default:
      return state
  }
}

export default itemReducer
