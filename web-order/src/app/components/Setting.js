import React, { useEffect } from "react"

export default function Setting() {
  useEffect(() => {
    console.log("Setting startup")
    return function() {
      console.log("Setting cleanup")
    }
  }, [])
  return (
    <div>
      <div>Setting Page</div>
    </div>
  )
}
