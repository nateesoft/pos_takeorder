import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { SAVE_GROUP_ITEMS } from '../../actions/constants'

const GroupForm = props => {
  const { data, saveGroupItems } = props
  const [items, setItems] = useState([])
  const [groupCode, setGroupCode] = useState("")
  const [groupName, setGroupName] = useState("")
  const [groupDesc, setGroupDesc] = useState("")

  useEffect(() => {
    setItems(data)
    return () => {}
  }, [data])

  const saveData = () => {
    saveGroupItems(items)
  }

  const SpaceText = () => {
    return <span style={{marginLeft: 5}}></span>
  }

  const handleAddItems = () => {
    if (groupCode !== "") {
      const itemExist = items.filter(item => item.code === groupCode);
      if (itemExist.length > 0) {
        handleRemoveItems(itemExist[0].code);
      }
      setItems(item =>
        item.concat({
          code: groupCode,
          name: groupName,
          description: groupDesc,
        })
      )
      
      setGroupCode("")
      setGroupName("")
      setGroupDesc("")
    }
  }
  const handleRemoveItems = code => {
    setItems(items.filter(item => item.code !== code))
  }
  const handleEditItems = group => {
    setGroupCode(group.code)
    setGroupName(group.name)
    setGroupDesc(group.description)
  }

  return (
    <div style={{ padding: 20, background: "white", marginBottom: 10 }}>
      <table style={{color: "black", padding: 5}}>
        <tbody>
          <tr>
            <td align="right">รหัส:</td>
            <td>
              <input
                type="text"
                value={groupCode}
                onChange={(evt) => setGroupCode(evt.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td align="right">ชื่อ:</td>
            <td>
              <input
                type="text"
                value={groupName}
                onChange={(evt) => setGroupName(evt.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td align="right">รายละเอียด:</td>
            <td>
              <input
                type="text"
                value={groupDesc}
                onChange={(evt) => setGroupDesc(evt.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={() => handleAddItems()}>Add Group</button>
              <SpaceText />
              <button style={{background: "green", color: "white"}} onClick={() => saveData()}>Save Group Database</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{height: 350, overflow: 'auto', padding: 10, border: "1px solid #eee"}}>
        <table width="100%" style={{color: "black"}}>
          <thead>
            <tr>
              <th style={{backgroundColor: '#eee'}}>No</th>
              <th style={{backgroundColor: '#eee'}}>Code</th>
              <th style={{backgroundColor: '#eee'}} align="left">Name</th>
              <th style={{backgroundColor: '#eee'}} align="left">Description</th>
              <th style={{backgroundColor: '#eee'}}></th>
            </tr>
          </thead>
          <tbody>
            {items && items.map((data, index) => (
              <tr key={index}>
                <td align="center">{index+1}</td>
                <td align="center">{data.code}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td align="center">
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
                <td colSpan={5}>ไม่พบข้อมูลกลุ่มสินค้า</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    saveGroupItems: (items) => dispatch({
      type: SAVE_GROUP_ITEMS,
      payload: {
        items: items,
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm)
