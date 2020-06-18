import React, { useState, useEffect } from "react"

const MenuForm = (props) => {
  const { data, group } = props
  const [items, setItems] = useState([])

  const [product, setProduct] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [imgUrlThumbnail, setImgUrlThumbnail] = useState('')

  const [groupList, setGroupList] = useState([])
  const [groupSel, setGroupSel] = useState('')

  useEffect(() => {
    setItems(data)
    setGroupList(group)
    return () => {}
  }, [data, group])

  const saveData = () => {}

  const handleAddItems = (product) => {
    if (product !== "") {
      setItems((item) => item.concat({
        name: product,
        group_code: groupSel,
        img_url: imgUrl,
        img_url_thumbnail: imgUrlThumbnail
      }))
      setProduct('')
      setImgUrl('')
      setImgUrlThumbnail('')
    }
  }
  const handleRemoveItems = (product) => {
    setItems(items.filter((item) => item.code !== product))
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
                value={product}
                onChange={(evt) => setProduct(evt.target.value)}
              />
            </td>
            <td>
              <button>Load Product</button>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>ชื่อ:</td>
            <td>
              <input type="text" value={imgUrl} onChange={evt => setImgUrl(evt.target.value)} />
            </td>
            <td>ราคา:</td>
            <td>
              <input type="text" value={imgUrlThumbnail} onChange={evt => setImgUrlThumbnail(evt.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Path(Big):</td>
            <td>
              <input type="text" value={imgUrl} onChange={evt => setImgUrl(evt.target.value)} />
            </td>
            <td>Path(Small):</td>
            <td>
              <input type="text" value={imgUrlThumbnail} onChange={evt => setImgUrlThumbnail(evt.target.value)} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={() => handleAddItems(product, imgUrl, imgUrlThumbnail)}>Add</button>
              <button onClick={() => saveData()}>Save</button>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div style={{height: 320, overflow: 'auto', padding: 10, border: "1px solid #eee"}}>
        <table>
          <tbody style={{color: "black"}}>
          {items && items.map((data, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.group_code}</td>
              <td>{data.img_url}</td>
              <td>{data.img_url_thumbnail}</td>
              <td>
                <button onClick={() => handleRemoveItems(data.code)}>
                  remove
                </button>
              </td>
            </tr>
          ))}
          {items.length===0 && (
              <tr>
                <td colSpan={6}>ไม่พบข้อมูลสินค้า</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MenuForm
