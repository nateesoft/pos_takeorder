import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { SAVE_PRODUCT_ITEMS, GET_PRODUCT_CODE } from '../../actions/constants'
const TextUtil = require('../../utils/TextUtil')

const MenuForm = props => {
  const { data, group, saveProductItems, loadProductCode, productInfo } = props

  const [items, setItems] = useState([])
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [imgUrlThumbnail, setImgUrlThumbnail] = useState('')

  const [groupList, setGroupList] = useState([])
  const [groupSel, setGroupSel] = useState('')

  useEffect(() => {
    setItems(data)
    setGroupList(group)
    if (productInfo && productInfo[0]){
      setName(TextUtil.convAscii2Unicode(productInfo[0].PDesc))
      setPrice(productInfo[0].PPrice11)
    }
    return () => {}
  }, [data, group, productInfo])

  const saveData = () => {
    if(groupSel !== '' && items.length > 0) {
      saveProductItems(items, groupSel)
    }
  }

  const SpaceText = () => {
    return <span style={{marginLeft: 5}}></span>
  }

  const handleAddItems = () => {
    if (code !== "") {
      const itemExist = items.filter(item => item.code === code);
      if (itemExist.length > 0) {
        handleRemoveItems(itemExist[0].code);
      }
      setItems(item => item.concat({
        code: code,
        name: name,
        group_code: groupSel,
        img_url: imgUrl,
        img_url_thumbnail: imgUrlThumbnail,
        price: price,
      }))
      setCode('')
      setName('')
      setPrice('')
      setImgUrl('')
      setImgUrlThumbnail('')
    }
  }
  const handleRemoveItems = (product) => {
    setItems(items.filter(item => item.code !== product))
  }

  const changeGroup = code => {
    if (code === '') {
      setGroupSel(code)
      setItems(data)
    } else {
      setGroupSel(code)
      setItems(data.filter(item => item.group_code === code))
    }
  }

  const handleEditItems = product => {
    setCode(product.code)
    setName(product.name)
    setPrice(product.price)
    setImgUrl(product.img_url)
    setImgUrlThumbnail(product.img_url_thumbnail)
    setGroupSel(product.group_code)
    changeGroup(product.group_code)
  }

  const loadProduct = () => {
    loadProductCode(code)
  }

  return (
    <div style={{ padding: 20, background: "white", marginBottom: 10, color: "black" }}>
      <table style={{padding: 5}}>
        <tbody>
          <tr>
            <td>กลุ่มสินค้า:</td>
            <td>
              <select value={groupSel} onChange={evt=>changeGroup(evt.target.value)}>
                <option value="">เลือกกลุ่มสินค้า</option>
                {groupList && groupList.map((data, index)=> (
                  <option key={index} value={data.code}>{data.name}</option>
                ))}
              </select>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>สินค้า:</td>
            <td>
              <input
                type="text"
                value={code}
                onChange={(evt) => setCode(evt.target.value)}
              />
            </td>
            <td colSpan={2}>
              <button onClick={()=>loadProduct()}>Load Product From POS</button>
            </td>
          </tr>
          <tr>
            <td>ชื่อ:</td>
            <td>
              <input type="text" value={name} onChange={evt => setName(evt.target.value)} />
            </td>
            <td>ราคา:</td>
            <td>
              <input type="text" value={price} onChange={evt => setPrice(evt.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Path (Full):</td>
            <td>
              <input type="text" value={imgUrl} onChange={evt => setImgUrl(evt.target.value)} />
            </td>
            <td>Path (Thumbnail):</td>
            <td>
              <input type="text" value={imgUrlThumbnail} onChange={evt => setImgUrlThumbnail(evt.target.value)} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={() => handleAddItems()}>Add</button>
            </td>
            <td colSpan={2}>
              <button style={{background: "green", color: "white"}} onClick={() => saveData()}>Save Data Database</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{height: 320, overflow: 'auto', padding: 10, border: "1px solid #eee"}}>
        <table>
          <thead>
            <tr>
              <th style={{backgroundColor: '#eee'}} align="center">No</th>
              <th style={{backgroundColor: '#eee'}} align="center">Code</th>
              <th style={{backgroundColor: '#eee'}} align="left">Name</th>
              <th style={{backgroundColor: '#eee'}} align="right">Price</th>
              <th style={{backgroundColor: '#eee'}} align="center">Group</th>
              <th style={{backgroundColor: '#eee'}} align="left">url</th>
              <th style={{backgroundColor: '#eee'}} align="left">url_thumbnail</th>
              <th style={{backgroundColor: '#eee'}}></th>
            </tr>
          </thead>
          <tbody style={{color: "black"}}>
          {items && items.map((data, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{data.code}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.group_code}</td>
              <td>{data.img_url}</td>
              <td>{data.img_url_thumbnail}</td>
              <td>
                <button onClick={() => handleEditItems(data)}>
                  edit
                </button>
                <SpaceText />
                <button onClick={() => handleRemoveItems(data.code)}>
                  remove
                </button>
              </td>
            </tr>
          ))}
          {items.length===0 && (
              <tr>
                <td colSpan={8}>ไม่พบข้อมูลสินค้า</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    productInfo: state.product.productInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveProductItems: (items, group) => dispatch({
      type: SAVE_PRODUCT_ITEMS,
      payload: {
        items,
        group,
      }
    }),
    loadProductCode: code => dispatch({
      type: GET_PRODUCT_CODE,
      payload: {
        code
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuForm)
