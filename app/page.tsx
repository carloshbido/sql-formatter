"use client"

import { useState } from "react"

import { TabOnFirstItem } from "@/helpers/tab-first-item"
import jumpLine from "@/helpers/jump-line"

import Cookie from "@/components/Cookie"

export default function Home() {
  const [query, setQuery] = useState("")
  
  function handleSubmit(event: any) {
    event.preventDefault();

    if(query === "") return
    if(!query) return 

    let queryUpdated: string | string[] = "";

    queryUpdated = TabOnFirstItem(query);
    queryUpdated = jumpLine(queryUpdated);

    const array = queryUpdated;
    setQuery(array);
  }

  function handleSetQuery(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuery(event.target.value);
  }

  function handleCopyClipboard() {
    navigator.clipboard.writeText(query);
  }

  return (
    <main className="grid grid-cols-1 place-content-center mx-11 my-4">
      <form className="bg-emerald-50 p-3 rounded-lg drop-shadow-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-items-start align-middle">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="sqlquery">Insert query below</label>
            <span 
              className="bg-emerald-300 px-6 py-2 rounded-lg cursor-pointer text-xs ease-in-out duration-100
                       hover:text-white hover:bg-emerald-400"
              onClick={() => setQuery("")}
            >
            Clear
            </span>
          </div>
          <textarea
            className="outline-slate-300 p-3 text-xs rounded-lg"
            rows={25}
            name="sqlquery" 
            value={query}
            onChange={handleSetQuery}>
          </textarea>
          <div className="flex justify-end items-center mt-4 gap-3">
            <button 
              onClick={() => {}} 
              className="bg-slate-700 text-white px-6 py-2 rounded-lg hover:bg-opacity-90 ease-in-out duration-100"
            >
              APPLY FORMATTER
            </button>
            <span 
              className="bg-emerald-900 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-opacity-90 ease-in-out duration-100"
              onClick={handleCopyClipboard}
            >
              Copy
            </span>
          </div>
        </div>
      </form>

      <Cookie/>
    </main>
  )
}
