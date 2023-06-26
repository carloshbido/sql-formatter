import React, { useEffect, useState } from 'react'
import  { createPortal } from "react-dom"
import userInfo  from "../scripts/user-info"

function Cookie() {
  const [mounted, setMounted ] = useState(false)

  useEffect(() => {
    setMounted(true)
  
    return () => setMounted(false)
  },[])

  function handleAcceptAll(event: any) {
    event.preventDefault();
    const buttonDescription = event.target.innerHTML

    if(buttonDescription === "Cancel") {
      setMounted(false) 
      return
    }

    if(buttonDescription === "Accept All") {
      setMounted(false)
      userInfo()
      return
    }
  }

  return mounted 
  ? createPortal(
    <div className="fixed h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-400 px-10 bg-opacity-75" >
      <div className="p-10 bg-slate-100 flex flex-col rounded-lg gap-3 text-lg border-solid border-gray-200 border-2">
      <div>
        We use cookies to improve your experience on our site and to show you personalized ads. Select "Accept all" to accept all cookies. We never share your data.
      </div>
      <div className="flex items-center justify-end gap-10" onClick={handleAcceptAll}>
        <button>Cancel</button>
        <button 
          className="bg-emerald-500 text-white py-2 px-4 rounded-lg border-solid border-emerald-500 border-2 duration-300 ease-in-out 
                     hover:bg-white hover:text-emerald-500"
        >  
          Accept All
        </button>
      </div>
    </div>
    </div>
  , document.querySelector("#cookieportal") as HTMLElement)
   : null
}

export default Cookie