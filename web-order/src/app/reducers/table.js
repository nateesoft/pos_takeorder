import produce from "immer"

const initialState = {
  empCode: "",
  tableNo: "",
  order: {
    orderNo: "",
    items: [],
    sendToPOS: '',
    removeItem: '',
    addNewItem: '',
    updateItem: '',
  },
  orderDetail: {
    code: '',
    tableNo: '',
    orderNo: '',
    menuCode: '',
    menuName: '',
    price: 0,
    qty: 1,
    totalAmount: 0,
    uid: '',
    specialText: [],
    subMenuCode: [],
  },
  orderSubMenu: {
    uid: '',
    subMenuList: [],
    orderSubMenuList: [],
    productCode: '',
    productGroup: '',
  },
  product: {
    orderNo: '',
    menuCode: '',
    expansionItem: [],
  },
  billNo: "",
  tableFileList: [],
}
const tableReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "UPDATE_ORDER_ITEM":
        draft.orderDetail.orderNo = action.payload.orderNo
        draft.orderDetail.code = action.payload.code
        draft.orderDetail.price = action.payload.price
        draft.orderDetail.uid = action.payload.uid
        draft.specialText = action.payload.specialText
        draft.subMenuCode = action.payload.subMenuCode
        break;
      case "UPDATE_ORDER_ITEM_SUCCESS":
        draft.order.updateItem = action.payload.msg
        break;
      case "UPDATE_ORDER_ITEM_FAIL":
        break;
      case 'LOAD_SUB_MENU_INDEX':
        draft.orderSubMenu.uid = action.payload.uid
        break;
      case 'LOAD_SUB_MENU_INDEX_SUCCESS':
        draft.orderSubMenu.subMenuList = action.payload
        break;
      case 'LOAD_SUB_MENU_INDEX_FAIL':
        break;
      case 'LOAD_SUB_MENU_LIST':
        draft.orderSubMenu.productCode = action.payload.code
        break;
      case 'LOAD_SUB_MENU_LIST_SUCCESS':
        draft.orderSubMenu.subMenuList = action.payload
        break;
      case 'LOAD_SUB_MENU_LIST_FAIL':
        break;
      case 'ADD_NEW_ORDER_ITEM':
        draft.orderDetail.tableNo = action.payload.tableNo
        draft.orderDetail.orderNo = action.payload.orderNo
        draft.orderDetail.menuCode = action.payload.menuCode
        draft.orderDetail.menuName = action.payload.menuName
        draft.orderDetail.price = action.payload.price
        draft.orderDetail.qty = action.payload.qty
        draft.orderDetail.totalAmount = action.payload.totalAmount
        break
      case 'ADD_NEW_ORDER_ITEM_SUCCESS':
        draft.order.addNewItem = action.payload.msg
        break
      case 'ADD_NEW_ORDER_ITEM_FAIL':
        break
      case 'REMOVE_ORDER_INDEX':
        draft.order.uid = action.payload.uid
        break
      case 'REMOVE_ORDER_INDEX_SUCCESS':
        draft.order.removeItem = action.payload.msg
        break
      case 'REMOVE_ORDER_INDEX_FAIL':
        break
      case 'SEND_ORDER_TO_POS':
        draft.order.orderNo = action.payload.orderNo
        break
      case 'SEND_ORDER_TO_POS_SUCCESS':
        draft.order.sendToPOS = action.payload.msg
        break
      case 'SEND_ORDER_TO_POS_FAIL':
        break
      case 'LOAD_EXPANSION_PRODUCT':
        draft.product.orderNo = action.payload.orderNo
        draft.product.menuCode = action.payload.menuCode
        break
      case 'LOAD_EXPANSION_PRODUCT_SUCCESS':
        draft.product.expansionItem = action.payload
        break
      case 'LOAD_EXPANSION_PRODUCT_FAIL':
        break
      case 'LOAD_LIST_ORDER_DETAIL':
        draft.order.orderNo = action.payload.orderNo
        break
      case 'LOAD_LIST_ORDER_DETAIL_SUCCESS':
        draft.order.items = action.payload
        break
      case 'LOAD_LIST_ORDER_DETAIL_FAIL':
        break
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
