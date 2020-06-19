import { takeLatest, all, call, put } from "redux-saga/effects"
import request from '../utils/request'
import {
  loadTablefileSuccess, 
  loadTablefileFail,
  updateTablefileSuccess, 
  updateTablefileFail,
  checkLoginSuccess,
  checkLoginFail,
  checkLogoutSuccess,
  loadProductListSuccess,
  loadProductListFail,
  loadProductListAllSuccess,
  loadProductListAllFail,
  loadGroupListSuccess,
  loadGroupListFail,
  loadOrderDetailSuccess,
  loadOrderDetailFail,
  loadListOrderDetailSuccess,
  loadListOrderDetailFail,
  loadCheckOrderListSuccess,
  loadCheckOrderListFail,
  loadExpansionProductSuccess,
  loadExpansionProductFail,
  sendOrderToPOSSuccess,
  sendOrderToPOSFail,
  removeOrderIndexSuccess,
  removeOrderIndexFail,
  addNewOrderItemSuccess,
  addNewOrderItemFail,
  searchDataSuccess,
  searchDataFail,
  loadSubMenuListSuccess,
  loadSubMenuListFail,
  loadProductDetailSuccess,
  loadProductDetailFail,
  loadOrderSpecialSuccess,
  loadOrderSpecialFail,
  loadSubMenuIndexSuccess,
  loadSubMenuIndexFail,
  loadProductSubListSuccess,
  loadProductSubListFail,
  updateOrderItemSuccess,
  updateOrderItemFail,
  addNewOrderSuccess,
  addNewOrderFail,
  loadStepMenuListSuccess,
  loadStepMenuListFail,
  selectTableActiveSuccess,
  selectTableActiveFail,
  updateOrderTableSuccess,
  updateOrderTableFail,
  updatePosChangeTableSuccess,
  updatePosChangeTableFail,
  addGroupItemsSuccess,
  addGroupItemsFail,
  addProductItemsSuccess,
  addProductItemsFail,
  getProductCodeSuccess,
  getProductCodeFail,
} from '../actions'
import { SEARCH_TABLE_FILE, SAVE_GROUP_ITEMS, SAVE_PRODUCT_ITEMS } from "../actions/constants"

const { 
  ADD_NEW_ORDER,
  UPDATE_ORDER_ITEM,
  LOAD_PRODUCT_SUB_LIST,
  LOAD_SUB_MENU_INDEX,
  LOAD_ORDER_SPECIAL,
  LOAD_PRODUCT_DETAIL,
  LOAD_SUB_MENU_LIST,
  LOAD_STEP_MENU_LIST,
  SEARCH_DATA,
  ADD_NEW_ORDER_ITEM,
  REMOVE_ORDER_INDEX,
  SEND_ORDER_TO_POS,
  LOAD_EXPANSION_PRODUCT,
  LOAD_LIST_ORDER_DETAIL,
  LOAD_ORDER_DETAIL,
  LOAD_PRODUCT_LIST,
  LOAD_PRODUCT_LIST_ALL,
  LOAD_GROUP_LIST,
  LOAD_TABLE_FILE,
  UPDATE_TABLE_FILE,
  CHECK_LOGIN,
  CHECK_LOGOUT,
  LOAD_CHECK_ORDER_LIST,
  SELECT_TABLE_ACTIVE,
  UPDATE_ORDER_TABLE,
  UPDATE_POS_CHANGE_TABLE,
  GET_PRODUCT_CODE,
} = require('../actions/constants')

const uuid = require("react-native-uuid")
const HOST = process.env.HOST || window.location.hostname
const POS_API = `http://${HOST}:5000`
const TAKEORDER_API = `http://${HOST}:4000`

function* addNewOrder(action) {
  const { 
    code, name, price, tableNo, orderNo, empCode, specialText, subMenuCode, r_etd
  } = action.payload
  const cust_count = 0
  const item_count = 0
  const total_amount = 0

  const urlCheckOrder = `${TAKEORDER_API}/api/orders?order_no=${orderNo}`
  try {
    const response = yield call(request, urlCheckOrder, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    if (response.data.length === 0) {
      const urlAddOrder = `${TAKEORDER_API}/api/orders/create`
      yield call(request, urlAddOrder, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_no: orderNo,
          table_code: tableNo,
          emp_code: empCode,
          cust_count,
          item_count,
          total_amount
        })
      })
    }

    const urlUpdateOrder = `${TAKEORDER_API}/api/orders_detail/create`
    yield call(request, urlUpdateOrder, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: uuid.v4(),
        index: tableNo + "_" + code,
        order_no: orderNo,
        menu_code: code,
        menu_name: name,
        price,
        qty: 1,
        total_amount: price,
        special_text: specialText,
        sub_menu_code: subMenuCode,
        r_etd: r_etd
      })
    })
    yield put(addNewOrderSuccess(response.data))
  } catch(err) {
    yield put(addNewOrderFail({ status: "Error", msg: err }))
  }
}

function* updateOrderItem(action) {
  const { 
    orderNo, code, price, uid, specialText, subMenuCode 
  } = action.payload
  const requestURL = `${TAKEORDER_API}/api/orders_detail/${uid}/update`
  try {
    yield call(request, requestURL, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_no: orderNo,
        menu_code: code,
        price,
        uid,
        qty: 1,
        special_text: specialText,
        sub_menu_code: subMenuCode,
      }),
    })
    yield put(updateOrderItemSuccess({status: true, msg: 'Success'}))
  } catch(err) {
    yield put(updateOrderItemFail({status: false, msg: err}))
  }
}

function* fetchSubMenuIndex(action) {
  const { uid } = action.payload
  const requestURL = `${TAKEORDER_API}/api/menu_list/index/${uid}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadSubMenuIndexSuccess(response.data))
  } catch(err) {
    yield put(loadSubMenuIndexFail({ status: "Error", msg: err }))
  }
}

function* fetchOrderSpecial(action) {
  const { uid } = action.payload
  const requestURL = `${TAKEORDER_API}/api/orders_detail/special_text/${uid}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadOrderSpecialSuccess(response.data))
  } catch(err) {
    yield put(loadOrderSpecialFail({ status: "Error", msg: err }))
  }
}

function* fetchProductDetail(action) {
  const { group, code } = action.payload
  const requestURL = `${TAKEORDER_API}/api/product/${group}/${code}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadProductDetailSuccess(response.data))
  } catch(err) {
    yield put(loadProductDetailFail({ status: "Error", msg: err }))
  }
}

function* fetchSubMenuList(action) {
  const { code } = action.payload
  const requestURL = `${TAKEORDER_API}/api/menu_list/${code}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadSubMenuListSuccess(response.data))
  } catch(err) {
    yield put(loadSubMenuListFail({ status: "Error", msg: err }))
  }
}

function* fetchCheckOrderList(action) {
  const { table_no } = action.payload
  const requestURL = `${POS_API}/pos/balance/table/${table_no}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadCheckOrderListSuccess(response.data))
  } catch(err) {
    yield put(loadCheckOrderListFail({ status: "Error", msg: err }))
  }
}

function* searchTableFile(action) {
  const { table_code } = action.payload
  const requestURL = `${POS_API}/pos/tablefile/search`
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        table_code,
      }),
    })
    yield put(loadTablefileSuccess(response.data))
  } catch(err) {
    yield put(loadTablefileFail({ status: "Error", msg: err }))
  }
}

function* selectTableActive(action) {
  const table_code = action.payload
  const requestURL = `${POS_API}/pos/tablefile/get/${table_code}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(selectTableActiveSuccess(response.data))
  } catch(err) {
    yield put(selectTableActiveFail({ status: "Error", msg: err }))
  }
}

function* fetchStepMenuList(action) {
  const { code, type } = action.payload
  const requestURL = `${TAKEORDER_API}/api/step_menu_list/${code}/${type}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadStepMenuListSuccess(response.data))
  } catch(err) {
    yield put(loadStepMenuListFail({ status: "Error", msg: err }))
  }
}

function* fetchProductSubList(action) {
  const { code } = action.payload
  const requestURL = `${TAKEORDER_API}/api/menu_list/${code}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadProductSubListSuccess(response.data))
  } catch(err) {
    yield put(loadProductSubListFail({ status: "Error", msg: err }))
  }
}

function* searchData(action) {
  const { search } = action.payload
  const requestURL = `${TAKEORDER_API}/api/search/${search}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(searchDataSuccess(response.data))
  } catch(err) {
    yield put(searchDataFail({ status: "Error", msg: err }))
  }
}

function* addNewOrderItem(action) {
  const { tableNo, orderNo, menuCode, menuName, price, qty, totalAmount, specialText, subMenuCode } = action.payload
  const requestURL = `${TAKEORDER_API}/api/orders_detail/create`
  try {
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: uuid.v4(),
        index: tableNo + "_" + menuCode,
        order_no: orderNo,
        menu_code: menuCode,
        menu_name: menuName,
        price,
        qty: qty,
        total_amount: totalAmount,
        special_text: specialText,
        sub_menu_code: subMenuCode
      }),
    })
    yield put(addNewOrderItemSuccess({status: true, msg: 'Success'}))
  } catch(err) {
    yield put(addNewOrderItemFail({status: false, msg: err}))
  }
}

function* removeOrderIndex(action) {
  const { uid, order_no } = action.payload
  const requestURL = `${TAKEORDER_API}/api/orders_detail`
  try {
    yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: uid,
        order_no: order_no,
      }),
    })
    yield put(removeOrderIndexSuccess({status: true, msg: 'Success'}))
  } catch(err) {
    yield put(removeOrderIndexFail({status: false, msg: err}))
  }
}

function* sendOrderToPOS(action) {
  const { orderNo, etd, macno } = action.payload
  const requestURL = `${TAKEORDER_API}/api/orders/move`
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_no: orderNo,
      }),
    })
    yield call(request, `${TAKEORDER_API}/api/orders/move_update`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_no: orderNo,
      }),
    })

    for(let i = 0; i < response.data.length; i += 1) {
      const data = response.data[i]

      const newIndex = yield call(request, `${POS_API}/pos/balance/getIndex`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          table_no: data.table_code,
        }),
      })

      data.index = newIndex.data
      data.r_etd = etd
      data.macno = macno
      yield call(request, `${POS_API}/pos/balance/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          balance: data,
        }),
      })

      yield call(request, `${POS_API}/pos/tablefile/updateTotal`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          table_code: data.table_code,
        }),
      })
    }
    yield put(sendOrderToPOSSuccess({status: true, msg: 'Success'}))
  } catch(err) {
    yield put(sendOrderToPOSFail({status: false, msg: err}))
  }
}

function* listExpansionProduct(action) {
  const { orderNo, menuCode } = action.payload
  const requestURL = `${TAKEORDER_API}/api/orders_detail/product?order_no=${orderNo}&menu_code=${menuCode}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadExpansionProductSuccess(response.data))
  } catch(err) {
    yield put(loadExpansionProductFail({ status: "Error", msg: err }))
  }
}

function* fetchListOrderDetail(action) {
  const { orderNo } = action.payload
  const requestURL = `${TAKEORDER_API}/api/orders_detail/sum?order_no=${orderNo}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const responseOrder = yield call(request, `${TAKEORDER_API}/api/orders?order_no=${orderNo}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadListOrderDetailSuccess({
      item: response.data,
      total: responseOrder.data[0].total_amount
    }))
  } catch(err) {
    yield put(loadListOrderDetailFail({ status: "Error", msg: err }))
  }
}

function* fetchOrderDetail(action) {
  const { uid } = action.payload
  const requestURL = `${TAKEORDER_API}/api/orders_detail/sub_menu/${uid}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadOrderDetailSuccess(response.data))
  } catch(err) {
    yield put(loadOrderDetailFail({ status: "Error", msg: err }))
  }
}

function* fetchProductList(action) {
  const { groupId } = action.payload
  const requestURL = `${TAKEORDER_API}/api/product/${groupId}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadProductListSuccess(response.data))
  } catch(err) {
    yield put(loadProductListFail({ status: "Error", msg: err }))
  }
}
function* fetchProductListAll() {
  const requestURL = `${TAKEORDER_API}/api/product`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadProductListAllSuccess(response.data))
  } catch(err) {
    yield put(loadProductListAllFail({ status: "Error", msg: err }))
  }
}

function* fetchGroupList() {
  const requestURL = `${TAKEORDER_API}/api/group`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadGroupListSuccess(response.data))
  } catch(err) {
    yield put(loadGroupListFail({ status: "Error", msg: err }))
  }
}

function* fetchLogin(action) {
  const { username, password } = action.payload
  try {
    const responseConfig = yield call(request, `${TAKEORDER_API}/api/config`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const responseCheckMacno = yield call(request, `${POS_API}/pos/poshwsetup/macno`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    if (responseCheckMacno.status === 'Not_Found') {
      yield put(checkLoginSuccess({ status: responseCheckMacno.status, msg: responseCheckMacno.msg }))
    } else {
      const response = yield call(request, `${POS_API}/pos/employ/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      })
      yield put(checkLoginSuccess({ 
        status: response.status, 
        msg: response.msg, 
        macno: responseCheckMacno.data,
        autoLogout: responseConfig.data.auto_logout
      }))
    }
  } catch(err) {
    yield put(checkLoginFail({ status: "Error", msg: err }))
  }
}
function* fetchLogout(action) {
  const table_code = action.payload
  try {
    const response = yield call(request, `${POS_API}/pos/tablefile/logout`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        table_code,
      }),
    })
    yield put(updateTablefileSuccess(response.data))
    yield put(checkLogoutSuccess({ status: 'Success', msg: 'Logout Success' }))
  } catch(err) {
    yield put(updateTablefileFail({ status: "Error", msg: err }))
  }
}

function* fetchTablefile(action) {
  const { type } = action.payload
  let requestURL = `${POS_API}/pos/tablefile/all`
  if (type === 'empty') {
    requestURL = `${POS_API}/pos/tablefile`
  }
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadTablefileSuccess(response.data))
  } catch(err) {
    yield put(loadTablefileFail({ status: "Error", msg: err }))
  }
}
function* updateTablefile(action) {
  const { table_code, cust_count, macno, emp_code } = action.payload
  const requestURL = `${POS_API}/pos/tablefile`
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        table_code,
        cust_count,
        macno,
        emp_code,
      }),
    })
    yield put(updateTablefileSuccess(response.data))
  } catch(err) {
    yield put(updateTablefileFail({ status: "Error", msg: err }))
  }
}

function* updateOrderTable(action) {
  const { order_no, table_code } = action.payload
  const requestURL = `${TAKEORDER_API}/api/orders/${order_no}`
  try {
    const response = yield call(request, requestURL, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_no,
        table_code,
      }),
    })
    yield put(updatePosChangeTableSuccess(response.data))
  } catch(err) {
    yield put(updatePosChangeTableFail({ status: "Error", msg: err }))
  }
}

function* updatePosChangeTable(action) {
  const { table_code } = action.payload
  const requestURL = `${POS_API}/pos/tablefile/change`
  try {
    const response = yield call(request, requestURL, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        table_code,
      }),
    })
    yield put(updateOrderTableSuccess(response.data))
  } catch(err) {
    yield put(updateOrderTableFail({ status: "Error", msg: err }))
  }
}

function* addGroupItems(action) {
  const { items } = action.payload
  const requestURL = `${TAKEORDER_API}/api/group`
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        groupList: items
      }),
    })
    yield put(addGroupItemsSuccess(response.data))
  } catch(err) {
    yield put(addGroupItemsFail({ status: "Error", msg: err }))
  }
}

function* addProductItems(action) {
  const { items, group } = action.payload
  const requestURL = `${TAKEORDER_API}/api/product`
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productList: items,
        group
      }),
    })
    yield put(addProductItemsSuccess(response.data))
  } catch(err) {
    yield put(addProductItemsFail({ status: "Error", msg: err }))
  }
}

function* getProductCode(action) {
  const { code } = action.payload
  const requestURL = `${POS_API}/pos/product/${code}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(getProductCodeSuccess(response.data))
  } catch(err) {
    yield put(getProductCodeFail({ status: "Error", msg: err }))
  }
}

function* actionFetchTablefile() {
  yield takeLatest(LOAD_TABLE_FILE, fetchTablefile)
}
function* actionUpdateTablefile() {
  yield takeLatest(UPDATE_TABLE_FILE, updateTablefile)
}
function* actionFetchLogin() {
  yield takeLatest(CHECK_LOGIN, fetchLogin)
}
function* actionFetchLogout() {
  yield takeLatest(CHECK_LOGOUT, fetchLogout)
}
function* actionLoadProductList() {
  yield takeLatest(LOAD_PRODUCT_LIST, fetchProductList)
}
function* actionLoadProductListAll() {
  yield takeLatest(LOAD_PRODUCT_LIST_ALL, fetchProductListAll)
}
function* actionLoadGroupList() {
  yield takeLatest(LOAD_GROUP_LIST, fetchGroupList)
}
function* actionLoadOrderDetail() {
  yield takeLatest(LOAD_ORDER_DETAIL, fetchOrderDetail)
}
function* actionLoadListOrderDetail() {
  yield takeLatest(LOAD_LIST_ORDER_DETAIL, fetchListOrderDetail)
}
function* actionLoadExpansionProduct() {
  yield takeLatest(LOAD_EXPANSION_PRODUCT, listExpansionProduct)
}
function* actionSendOrderToPOS() {
  yield takeLatest(SEND_ORDER_TO_POS, sendOrderToPOS)
}
function* actionRemoveOrderIndex() {
  yield takeLatest(REMOVE_ORDER_INDEX, removeOrderIndex)
}
function* actionAddNewOrderItem() {
  yield takeLatest(ADD_NEW_ORDER_ITEM, addNewOrderItem)
}
function* actionSearchData() {
  yield takeLatest(SEARCH_DATA, searchData)
}
function* actionFetchSubMenuList() {
  yield takeLatest(LOAD_SUB_MENU_LIST, fetchSubMenuList)
}
function* actionFetchStepMenuList() {
  yield takeLatest(LOAD_STEP_MENU_LIST, fetchStepMenuList)
}
function* actionFetchProductDetail() {
  yield takeLatest(LOAD_PRODUCT_DETAIL, fetchProductDetail)
}
function* actionFetchOrderSpecial() {
  yield takeLatest(LOAD_ORDER_SPECIAL, fetchOrderSpecial)
}
function* actionFetchSubMenuIndex() {
  yield takeLatest(LOAD_SUB_MENU_INDEX, fetchSubMenuIndex)
}
function* actionFetchProductSubList() {
  yield takeLatest(LOAD_PRODUCT_SUB_LIST, fetchProductSubList)
}
function* actionUpdateOrderItem() {
  yield takeLatest(UPDATE_ORDER_ITEM, updateOrderItem)
}
function* actionAddNewOrder() {
  yield takeLatest(ADD_NEW_ORDER, addNewOrder)
}
function* actionFetchCheckOrderList() {
  yield takeLatest(LOAD_CHECK_ORDER_LIST, fetchCheckOrderList)
}
function* actionSearchTableFile() {
  yield takeLatest(SEARCH_TABLE_FILE, searchTableFile)
}
function* actionSelectTable() {
  yield takeLatest(SELECT_TABLE_ACTIVE, selectTableActive)
}
function* actionUpdateOrderTable() {
  yield takeLatest(UPDATE_ORDER_TABLE, updateOrderTable)
}
function* actionPosChangeTable() {
  yield takeLatest(UPDATE_POS_CHANGE_TABLE, updatePosChangeTable)
}
function* actionSaveGroupItems() {
  yield takeLatest(SAVE_GROUP_ITEMS, addGroupItems)
}
function* actionSaveProductItems() {
  yield takeLatest(SAVE_PRODUCT_ITEMS, addProductItems)
}
function* actionGetProductCode() {
  yield takeLatest(GET_PRODUCT_CODE, getProductCode)
}

export default function* rootSaga() {
  yield all([
    actionFetchCheckOrderList(),
    actionFetchTablefile(),
    actionUpdateTablefile(),
    actionFetchLogin(),
    actionFetchLogout(),
    actionLoadProductList(),
    actionLoadProductListAll(),
    actionLoadGroupList(),
    actionLoadOrderDetail(),
    actionLoadListOrderDetail(),
    actionLoadExpansionProduct(),
    actionSendOrderToPOS(),
    actionRemoveOrderIndex(),
    actionAddNewOrderItem(),
    actionSearchData(),
    actionFetchSubMenuList(),
    actionFetchStepMenuList(),
    actionFetchProductDetail(),
    actionFetchOrderSpecial(),
    actionFetchSubMenuIndex(),
    actionFetchProductSubList(),
    actionUpdateOrderItem(),
    actionAddNewOrder(),
    actionSearchTableFile(),
    actionSelectTable(),
    actionUpdateOrderTable(),
    actionPosChangeTable(),
    actionSaveGroupItems(),
    actionSaveProductItems(),
    actionGetProductCode(),
  ])
}
