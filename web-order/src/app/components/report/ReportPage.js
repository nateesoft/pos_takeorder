import React, { useEffect } from "react"

export default function ReportPage() {
  useEffect(() => {
    console.log("ReportPage startup")
    return function() {
      console.log("ReportPage cleanup")
    }
  }, [])

  return (
    <div>
      <div>Report Page</div>
    </div>
  )
}
