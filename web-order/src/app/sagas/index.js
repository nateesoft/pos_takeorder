import { takeLatest, all, call, put} from "redux-saga/effects"
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
  loadGroupListSuccess,
  loadGroupListFail,
  loadOrderDetailSuccess,
  loadOrderDetailFail,
  loadListOrderDetailSuccess,
  loadListOrderDetailFail,
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
} from '../actions'

const { 
  ADD_NEW_ORDER,
  UPDATE_ORDER_ITEM,
  LOAD_PRODUCT_SUB_LIST,
  LOAD_SUB_MENU_INDEX,
  LOAD_ORDER_SPECIAL,
  LOAD_PRODUCT_DETAIL,
  LOAD_SUB_MENU_LIST,
  SEARCH_DATA,
  ADD_NEW_ORDER_ITEM,
  REMOVE_ORDER_INDEX,
  SEND_ORDER_TO_POS,
  LOAD_EXPANSION_PRODUCT,
  LOAD_LIST_ORDER_DETAIL,
  LOAD_ORDER_DETAIL,
  LOAD_PRODUCT_LIST,
  LOAD_GROUP_LIST,
  LOAD_TABLE_FILE,
  UPDATE_TABLE_FILE,
  CHECK_LOGIN,
  CHECK_LOGOUT,
} = require('../actions/constants')


const uuid = require("react-native-uuid")
const HOST = process.env.HOST || window.location.hostname
const POS_API = `http://${HOST}:5000`
const TAKEORDER_API = `http://${HOST}:4000`

function* addNewOrder(action) {
  const { 
    code, name, price, tableNo, orderNo, empCode, specialText, subMenuCode 
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
        sub_menu_code: subMenuCode
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
  const { orderNo } = action.payload
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
  const requestURL = `${POS_API}/pos/employ/login`
  try {
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
      const response = yield call(request, requestURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      yield put(checkLoginSuccess({ status: response.status, msg: response.msg }))
    }
  } catch(err) {
    yield put(checkLoginFail({ status: "Error", msg: err }))
  }
}
function* fetchLogout(action) {
    yield put(checkLogoutSuccess({ status: 'Success', msg: 'Logout Success' }))
}

function* fetchTablefile() {
  const requestURL = `${POS_API}/pos/tablefile`
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
  const { table_code, cust_count } = action.payload
  const requestURL = `${POS_API}/pos/tablefile`
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        table_code: table_code,
        cust_count: cust_count,
      }),
    })
    yield put(updateTablefileSuccess(response.data))
  } catch(err) {
    yield put(updateTablefileFail({ status: "Error", msg: err }))
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

export default function* rootSaga() {
  yield all([
    actionFetchTablefile(),
    actionUpdateTablefile(),
    actionFetchLogin(),
    actionFetchLogout(),
    actionLoadProductList(),
    actionLoadGroupList(),
    actionLoadOrderDetail(),
    actionLoadListOrderDetail(),
    actionLoadExpansionProduct(),
    actionSendOrderToPOS(),
    actionRemoveOrderIndex(),
    actionAddNewOrderItem(),
    actionSearchData(),
    actionFetchSubMenuList(),
    actionFetchProductDetail(),
    actionFetchOrderSpecial(),
    actionFetchSubMenuIndex(),
    actionFetchProductSubList(),
    actionUpdateOrderItem(),
    actionAddNewOrder(),
  ])
}
