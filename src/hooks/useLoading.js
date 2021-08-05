import { useState } from 'react'

function useLoading() {
  const [liveRequests, setLiveRequests] = useState(0)

  function addRequest() {
    setLiveRequests((liveRequests) => {
      return liveRequests + 1
    })
  }

  function removeRequest() {
    setLiveRequests((liveRequests) => {
      return liveRequests - 1
    })
  }

  function isLoading() {
    return liveRequests > 0
  }

  return [addRequest, removeRequest, isLoading]
}

export default useLoading
