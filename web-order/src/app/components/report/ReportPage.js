import React, { useEffect } from "react"
import { Redirect } from "react-router"
import { useSelector } from "react-redux"

export default function ReportPage() {
  const order_no = useSelector(state => state.table.order.orderNo)

  useEffect(() => {
    return function() {}
  }, [])

  if (order_no === "") {
    return <Redirect push to={`/login`} />
  }

  return (
    <div align="center">
      <h1>Report Page</h1>
    </div>
  )
}
