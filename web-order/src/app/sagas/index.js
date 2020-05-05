import { takeLatest, all, call, put} from "redux-saga/effects"
import request from '../utils/request'
import {
  loadTablefileSuccess, 
  loadTablefileFail,
  checkLoginSuccess,
  checkLoginFail,
  loadProductListSuccess,
  loadProductListFail,
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
} from '../actions'

function* fetchSubMenuIndex(action) {
  const { uid } = action.payload
  const requestURL = `/api/menu_list/index/${uid}`
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
    yield put(loadSubMenuIndexFail(err))
  }
}

function* fetchOrderSpecial(action) {
  const { uid } = action.payload
  const requestURL = `/api/orders_detail/special_text/${uid}`
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
    yield put(loadOrderSpecialFail(err))
  }
}

function* fetchProductDetail(action) {
  const { group, code } = action.payload
  const requestURL = `/api/product/${group}/${code}`
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
    yield put(loadProductDetailFail(err))
  }
}

function* fetchSubMenuList(action) {
  const { code } = action.payload
  const requestURL = `/api/menu_list/${code}`
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
    yield put(loadSubMenuListFail(err))
  }
}

function* fetchProductSubList(action) {
  const { code } = action.payload
  const requestURL = `/api/menu_list/${code}`
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
    yield put(loadProductSubListFail(err))
  }
}

function* searchData(action) {
  const { search } = action.payload
  const requestURL = `/api/search/${search}`
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
    yield put(searchDataFail(err))
  }
}

function* addNewOrderItem(action) {
  const { tableNo, orderNo, menuCode, menuName, price, qty, totalAmount } = action.payload
  const requestURL = `/api/orders_detail/create`
  try {
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        index: tableNo + "/" + menuCode,
        order_no: orderNo,
        menu_code: menuCode,
        menu_name: menuName,
        price,
        qty: qty,
        total_amount: totalAmount,
      }),
    })
    yield put(addNewOrderItemSuccess({status: true, msg: 'Success'}))
  } catch(err) {
    yield put(addNewOrderItemFail({status: false, msg: err}))
  }
}

function* removeOrderIndex(action) {
  const { uid } = action.payload
  const requestURL = `/api/orders_detail`
  try {
    yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: uid,
      }),
    })
    yield put(removeOrderIndexSuccess({status: true, msg: 'Success'}))
  } catch(err) {
    yield put(removeOrderIndexFail({status: false, msg: err}))
  }
}

function* sendOrderToPOS(action) {
  const { orderNo } = action.payload
  const requestURL = `/api/orders/move`
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

    yield call(request, `/pos/balance/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        balance: response.data,
      }),
    })
    yield put(sendOrderToPOSSuccess({status: true, msg: 'Success'}))
  } catch(err) {
    yield put(sendOrderToPOSFail({status: false, msg: err}))
  }
}

function* listExpansionProduct(action) {
  const { orderNo, menuCode } = action.payload
  const requestURL = `/api/orders_detail/product?order_no=${orderNo}&menu_code=${menuCode}`
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
    yield put(loadExpansionProductFail(err))
  }
}

function* fetchListOrderDetail(action) {
  const { orderNo } = action.payload
  const requestURL = `/api/orders_detail/sum?order_no=${orderNo}`
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    yield put(loadListOrderDetailSuccess(response.data))
  } catch(err) {
    yield put(loadListOrderDetailFail(err))
  }
}

function* fetchOrderDetail(action) {
  const { uid } = action.payload
  const requestURL = `/api/orders_detail/sub_menu/${uid}`
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
    yield put(loadOrderDetailFail(err))
  }
}

function* fetchProductList(action) {
  const { groupId } = action.payload
  const requestURL = `/api/product/${groupId}`
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
    yield put(loadProductListFail(err))
  }
}

function* fetchLogin(action) {
  const { username, password } = action.payload
  const requestURL = `/pos/employ/login`
  try {
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
    yield put(checkLoginSuccess(response.data))
  } catch(err) {
    yield put(checkLoginFail(err))
  }
}

function* fetchTablefile() {
  const requestURL = `/pos/tablefile`
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
    yield put(loadTablefileFail(err))
  }
}

function* actionFetchTablefile() {
  yield takeLatest("LOAD_TABLE_FILE", fetchTablefile)
}
function* actionFetchLogin() {
  yield takeLatest("CHECK_LOGIN", fetchLogin)
}
function* actionLoadProductList() {
  yield takeLatest("LOAD_PRODUCT_LIST", fetchProductList)
}
function* actionLoadOrderDetail() {
  yield takeLatest("LOAD_ORDER_DETAIL", fetchOrderDetail)
}
function* actionLoadListOrderDetail() {
  yield takeLatest("LOAD_LIST_ORDER_DETAIL", fetchListOrderDetail)
}
function* actionLoadExpansionProduct() {
  yield takeLatest("LOAD_EXPANSION_PRODUCT", listExpansionProduct)
}
function* actionSendOrderToPOS() {
  yield takeLatest("SEND_ORDER_TO_POS", sendOrderToPOS)
}
function* actionRemoveOrderIndex() {
  yield takeLatest("REMOVE_ORDER_INDEX", removeOrderIndex)
}
function* actionAddNewOrderItem() {
  yield takeLatest("ADD_NEW_ITEM", addNewOrderItem)
}
function* actionSearchData() {
  yield takeLatest("SEARCH_DATA", searchData)
}
function* actionFetchSubMenuList() {
  yield takeLatest("LOAD_SUB_MENU_LIST", fetchSubMenuList)
}
function* actionFetchProductDetail() {
  yield takeLatest("LOAD_PRODUCT_DETAIL", fetchProductDetail)
}
function* actionFetchOrderSpecial() {
  yield takeLatest("LOAD_ORDER_SPECIAL", fetchOrderSpecial)
}
function* actionFetchSubMenuIndex() {
  yield takeLatest("LOAD_SUB_MENU_INDEX", fetchSubMenuIndex)
}
function* actionFetchProductSubList() {
  yield takeLatest("LOAD_PRODUCT_SUB_LIST", fetchProductSubList)
}

export default function* rootSaga() {
  yield all([
    actionFetchTablefile(),
    actionFetchLogin(),
    actionLoadProductList(),
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
  ])
}
