import React, { useEffect, useState } from 'react'
import  { createPortal } from "react-dom"

function Cookie() {
  const [mounted, setMounted ] = useState(false)

  useEffect(() => {
    setMounted(true)
  
    return () => setMounted(false)
  },[])

  return mounted 
  ? createPortal(
    <div className="p-10 bg-slate-300 flex flex-col rounded-lg gap-3 ">
      <div>
        We use cookies to improve your experience on our site and to show you personalized ads. Select "Accept all" to accept all cookies. Warning, use never share your data.
      </div>
      <div className="flex items-center justify-end gap-4">
        <button>Cancel</button>
        <button 
          className="bg-slate-50 text-emerald-800 py-2 px-4 rounded-lg"
          onClick={() => setMounted(false)}
        >  
          Accept All
        </button>
      </div>
    </div>
  , document.querySelector("#cookieportal") as HTMLElement)
   : null
}

export default Cookie