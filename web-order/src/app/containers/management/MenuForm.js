import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { SAVE_PRODUCT_ITEMS, GET_PRODUCT_CODE } from '../../actions/constants'

const MenuForm = props => {
  const { data, group, saveProductItems, loadProductCode, productInfo } = props

  const [items, setItems] = useState([])
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [price2, setPrice2] = useState('')
  const [price3, setPrice3] = useState('')
  const [price4, setPrice4] = useState('')
  const [price5, setPrice5] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [imgUrlThumbnail, setImgUrlThumbnail] = useState('')

  const [groupList, setGroupList] = useState([])
  const [groupSel, setGroupSel] = useState('')

  useEffect(() => {
    setItems(data)
    setGroupList(group)
    if (productInfo && productInfo[0]){
      setName(productInfo[0].PDesc)
      setPrice(productInfo[0].PPrice11)
      setPrice2(productInfo[0].PPrice12)
      setPrice3(productInfo[0].PPrice13)
      setPrice4(productInfo[0].PPrice14)
      setPrice5(productInfo[0].PPrice15)
    }
    return () => {}
  }, [data, group, productInfo])

  const saveData = () => {
    if(groupSel !== '') {
      saveProductItems(items, groupSel)
    } else {
      alert('กรุณาระบุกลุ่มสินค้า')
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
        price2: price2,
        price3: price3,
        price4: price4,
        price5: price5,
        img_host: 'http://localhost:4000/images'
      }))
      setCode('')
      setName('')
      setPrice('')
      setPrice2('')
      setPrice3('')
      setPrice4('')
      setPrice5('')
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
    setPrice2(product.price2)
    setPrice3(product.price3)
    setPrice4(product.price4)
    setPrice5(product.price5)
    setImgUrl(product.img_url)
    setImgUrlThumbnail(product.img_url_thumbnail)
    setGroupSel(product.group_code)
    changeGroup(product.group_code)
  }

  const loadProduct = () => {
    if(code!==''){
      loadProductCode(code)
    }else{
      alert('กรุณาเลือกรหัสสินค้าที่ต้องการดึงข้อมูล')
    }
  }

  return (
    <div style={{ padding: 20, background: "white", marginBottom: 10, color: "black" }}>
      <table style={{padding: 5}}>
        <tbody>
          <tr>
            <td align="right">สินค้า:</td>
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
            <td align="right">กลุ่มสินค้า:</td>
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
            <td align="right">ชื่อ:</td>
            <td>
              <input type="text" value={name} onChange={evt => setName(evt.target.value)} />
            </td>
            <td align="right">ราคา:</td>
            <td>
              <input type="text" value={price} onChange={evt => setPrice(evt.target.value)} />
            </td>
          </tr>
          <tr>
            <td align="right">ราคา2:</td>
            <td>
              <input type="text" value={price2} onChange={evt => setPrice2(evt.target.value)} />
            </td>
            <td align="right">ราคา3:</td>
            <td>
              <input type="text" value={price3} onChange={evt => setPrice3(evt.target.value)} />
            </td>
          </tr>
          <tr>
            <td align="right">ราคา4:</td>
            <td>
              <input type="text" value={price4} onChange={evt => setPrice4(evt.target.value)} />
            </td>
            <td align="right">ราคา5:</td>
            <td>
              <input type="text" value={price5} onChange={evt => setPrice5(evt.target.value)} />
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
              <th style={{backgroundColor: '#eee'}} align="right">Price2</th>
              <th style={{backgroundColor: '#eee'}} align="right">Price3</th>
              <th style={{backgroundColor: '#eee'}} align="right">Price4</th>
              <th style={{backgroundColor: '#eee'}} align="right">Price5</th>
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
              <td>{data.price2}</td>
              <td>{data.price3}</td>
              <td>{data.price4}</td>
              <td>{data.price5}</td>
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
