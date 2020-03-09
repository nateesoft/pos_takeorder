import React, { useEffect } from "react"

export default function Welcome() {
  useEffect(() => {
    console.log("Welcome startup")
    return function() {
      console.log("Welcome cleanup")
    }
  }, [])
  return (
    <div align="center">
      <h1>Welcome Page</h1>
    </div>
  )
}
