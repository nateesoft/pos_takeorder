import React, { useEffect } from "react"
// const QRCode = require("qrcode.react")

export default function Welcome() {
  useEffect(() => {
    return function() {
    }
  }, [])
  return (
    <div align="center">
      <h1>Welcome Page</h1>
      {/* <QRCode value={Config.ME_HOST} /> */}
      <h2>Scan this QR CODE</h2>
    </div>
  )
}
