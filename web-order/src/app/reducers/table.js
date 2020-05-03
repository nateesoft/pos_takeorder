import produce from "immer"

const initialState = {
  empCode: "",
  tableNo: "",
  order: {
    orderNo: "",
    items: []
  },
  billNo: "",
  tableFileList: [],
}
const tableReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'LOAD_TABLE_FILE':
        break
      case 'LOAD_TABLE_FILE_SUCCESS':
        draft.tableFileList = action.payload
        break
      case 'LOAD_TABLE_FILE_FAIL':
        break
      case "CHOOSE_TABLE":
        draft.tableNo = action.payload
        break
      case "CLEAR_TABLE":
        draft.tableNo = ""
        break
      case "CURRENT_ORDER":
        draft.order = action.payload
        break
      case "ADD_ORDER":
        draft.order.items = state.order.items.concat(action.payload)
        break
      case "CLEAR_ORDER":
        draft.order = {
          orderNo: "",
          items: []
        }
        break
      case "NEW_ORDER":
        draft.empCode = action.payload.emp_code
        draft.tableNo = action.payload.table_no
        draft.order = {
          orderNo: action.payload.order_no,
          items: []
        }
        break
      case "NEW_TABLE":
        draft.tableNo = action.payload.table_no
        break
      default:
        break
    }
  })

export default tableReducer
