import React, { useEffect } from "react"
const QRCode = require("qrcode.react")

const HOST = process.env.HOST || window.location.hostname

const Welcome = () => {
  useEffect(() => {
    return () => {
    }
  }, [])
  return (
    <div align="center">
      <h1>Welcome Page</h1>
      <QRCode value={`http://${HOST}`} />
      <h2>Scan this QR CODE</h2>
    </div>
  )
}

export default Welcome
