import React, { useEffect } from "react"

export default function ReportPage() {
  useEffect(() => {
    console.log("ReportPage startup")
    return function() {
      console.log("ReportPage cleanup")
    }
  }, [])

  return (
    <div align="center">
      <h1>Report Page</h1>
    </div>
  )
}
