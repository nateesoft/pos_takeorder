import React, { useEffect } from "react"
import { Redirect } from "react-router"

export default function ReportPage() {
  useEffect(() => {
    return function() {
    }
  }, [])

  if (!localStorage.getItem("order_no")) {
    return <Redirect push to={`/login`} />
  }

  return (
    <div align="center">
      <h1>Report Page</h1>
    </div>
  )
}
