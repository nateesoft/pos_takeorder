import React, { useEffect } from "react"
import { Link } from "react-router-dom"
const QRCode = require("qrcode.react")

const URL = window.location

const Welcome = () => {
  useEffect(() => {
    return () => {
    }
  }, [])
  return (
    <div align="center">
      <h1>Welcome Page</h1>
      <QRCode value={`${URL}`} />
      <h2>Scan this QR CODE</h2>
      <h3>URL: <a href={`${URL}`}>{`${URL}`}</a></h3>
      <Link to={`/management_group`} style={{ textDecoration: "none" }}>ADD GROUP</Link>
      <Link to={`/management_product`} style={{ textDecoration: "none" }}>ADD PRODUCT</Link>
    </div>
  )
}

export default Welcome
