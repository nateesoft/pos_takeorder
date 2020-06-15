import React, { useState, useEffect } from "react"

const GroupForm = (props) => {
  const { data } = props
  const [items, setItems] = useState([])
  const [group, setGroup] = useState("")

  useEffect(() => {
    setItems(data)
    return () => {}
  }, [data])

  const saveData = () => {}

  const handleAddItems = (group) => {
    if (group !== "") {
      setItems((item) =>
        item.concat({
          name: group,
        })
      )
      setGroup("")
    }
  }
  const handleRemoveItems = (group) => {
    setItems(items.filter((item) => item.name !== group))
    setGroup("")
  }

  return (
    <div style={{ padding: 20, background: "white", marginBottom: 10 }}>
      <label style={{ color: "black" }}>กลุ่มสินค้า: </label>
      <input
        type="text"
        value={group}
        onChange={(evt) => setGroup(evt.target.value)}
      /> :<button onClick={() => handleAddItems(group)}>Add</button> :
      <button onClick={() => saveData()}>Save</button>
      <div style={{height: 400, overflow: 'auto'}}>
        <ul>
            {items &&
            items.map((data, index) => (
                <li key={index} style={{ color: "black", padding: 5 }}>
                <label>{data.name}</label>
                <button onClick={() => handleRemoveItems(data.name)}>
                    remove
                </button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default GroupForm
