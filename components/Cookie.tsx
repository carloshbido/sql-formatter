import React, { useEffect, useState } from 'react'
import  { createPortal } from "react-dom"

function Cookie() {
  const [mounted, setMounted ] = useState(false)

  useEffect(() => {
    setMounted(true)
  
    return () => setMounted(false)
  },[])

  function handleAcceptAll() {
    setMounted(false)
    console.log(navigator.language, navigator.platform, navigator.cookieEnabled)
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => console.log(position.coords.latitude, position.coords.longitude))
    }
  }

  return mounted 
  ? createPortal(
    <div className="p-10 bg-slate-100 flex flex-col rounded-lg gap-3 text-lg border-solid border-gray-200 border-2">
      <div>
        We use cookies to improve your experience on our site and to show you personalized ads. Select "Accept all" to accept all cookies. We never share your data.
      </div>
      <div className="flex items-center justify-end gap-4">
        <button>Cancel</button>
        <button 
          className="bg-white text-emerald-500 py-2 px-4 rounded-lg border-solid border-emerald-500 border-2 duration-300 ease-in-out 
                     hover:bg-emerald-500 hover:text-white"
          onClick={handleAcceptAll}
        >  
          Accept All
        </button>
      </div>
    </div>
  , document.querySelector("#cookieportal") as HTMLElement)
   : null
}

export default Cookie