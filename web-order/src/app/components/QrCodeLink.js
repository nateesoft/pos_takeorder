import React, { useEffect } from "react"

const QRCode = require("qrcode")

QRCode.toDataURL("I am a pony!", function(err, url) {
  console.log(url)
})

export default function QrCodeLink() {
  useEffect(() => {
    console.log("QrCodeLink startup")
    return function() {
      console.log("QrCodeLink cleanup")
    }
  }, [])
  return (
    <div>
      <div>Qr Code Link</div>
    </div>
  )
}
