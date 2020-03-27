const initialState = {
  empCode: "",
  tableNo: "",
  order: {
    orderNo: "",
    items: []
  },
  billNo: ""
}
const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_TABLE":
      state.tableNo = action.payload
      return state
    case "CLEAR_TABLE":
      state.tableNo = ""
      return state
    case "CURRENT_ORDER":
      state.order = action.payload
      return state
    case "ADD_ORDER":
      state.order.items.concat(action.payload)
      return state
    case "CLEAR_ORDER":
      state.order = {
        orderNo: "",
        items: []
      }
      return state
    case "NEW_ORDER":
      state.empCode = action.payload.emp_code
      state.tableNo = action.payload.table_no
      state.order = {
        orderNo: action.payload.order_no,
        items: []
      }
      return state
    case "NEW_TABLE":
      state.tableNo = action.payload.table_no
      return state
    default:
      return state
  }
}

export default tableReducer
