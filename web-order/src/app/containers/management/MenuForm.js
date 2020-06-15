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
    <div style={{ padding: 20, background: "white", marginBottom: 10 }}>
      <div>
        <label style={{ color: "black" }}>กลุ่มสินค้า: </label>
        <select value={groupSel} onChange={evt=>changeGroup(evt.target.value)}>
          <option value="">เลือกกลุ่มสินค้า</option>
          {groupList && groupList.map((data, index)=> (
            <option key={index} value={data.code}>{data.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label style={{ color: "black" }}>สินค้า: </label>
        <input
          type="text"
          value={product}
          onChange={(evt) => setProduct(evt.target.value)}
        />
      </div>
      <div>
        <label style={{ color: "black" }}>Path(Big): </label>
        <input type="text" value={imgUrl} onChange={evt => setImgUrl(evt.target.value)} />
        <label style={{ color: "black" }}>Path(Small): </label>
        <input type="text" value={imgUrlThumbnail} onChange={evt => setImgUrlThumbnail(evt.target.value)} />
      </div>
      <div>
        <button onClick={() => handleAddItems(product, imgUrl, imgUrlThumbnail)}>Add</button> :
        <button onClick={() => saveData()}>Save</button>
      </div>
      <div style={{height: 500, overflow: 'auto'}}>
        <ul>
          {items &&
            items.map((data, index) => (
              <li key={index} style={{ color: "black", padding: 5 }}>
                {data.name} : {data.group_code} : {data.img_url} : {data.img_url_thumbnail} :
                <button onClick={() => handleRemoveItems(data.code)}>
                  remove
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default MenuForm
