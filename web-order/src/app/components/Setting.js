import React, { useEffect } from "react"

export default function Setting() {
  useEffect(() => {
    console.log("Setting startup")
    return function() {
      console.log("Setting cleanup")
    }
  }, [])
  return (
    <div align="center">
      <h1>Setting Page</h1>
    </div>
  )
}
