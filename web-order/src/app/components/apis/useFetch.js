import { useEffect, useState } from "react"

export const useFetch = url => {
  const [state, setState] = useState({ data: [], loading: true })

  useEffect(() => {
    setState(state => ({ data: [], loading: true }))
    fetch(url)
      .then(x => x.json())
      .then(y => {
        if (y.status === "not_found") {
          setState({ data: [], loading: false })
        } else {
          setState({ data: y, loading: false })
        }
      })
  }, [url])

  return state
}
