import React, { useEffect } from "react"
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
    </div>
  )
}

export default Welcome
