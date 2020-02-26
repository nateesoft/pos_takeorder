import React from "react"

const QRCode = require('qrcode')
 
QRCode.toDataURL('I am a pony!', function (err, url) {
  console.log(url)
})

export default () => (
  <div>
    <div>Qr Code Link</div>
  </div>
)
