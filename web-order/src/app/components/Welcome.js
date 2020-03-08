import React, { useEffect } from "react"

export default function Welcome() {
  useEffect(() => {
    console.log("Welcome startup")
    return function() {
      console.log("Welcome cleanup")
    }
  }, [])
  return (
    <div>
      <div>Welcome Page</div>
    </div>
  )
}
