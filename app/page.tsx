"use client"

import { useState } from "react"

import { TabOnFirstItem } from "@/helpers/tab-first-item"
import jumpLine from "@/helpers/jump-line"

export default function Home() {
  const [query, setQuery] = useState("")
  
  function handleSubmit(e: any) {
    e.preventDefault()

    if(query === "") return
    if(!query) return 

    let queryUpdated: string | string[] = TabOnFirstItem(query);
    queryUpdated = jumpLine(queryUpdated);

    const array = queryUpdated;
    setQuery(array);
  }

  function handleSetQuery(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuery(event.target.value)
  }

  return (
    <main className="grid grid-cols-1 place-content-center mx-11 my-4">
      <form className="bg-emerald-50 p-3 rounded-lg drop-shadow-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-items-start align-middle">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="sqlquery">Insert query below</label>
            <span className="bg-emerald-300 px-6 py-2 rounded-lg cursor-pointer">Copy</span>
          </div>
          <textarea
            className="outline-slate-300 p-3"
            cols={10}
            rows={15}
            name="sqlquery" 
            value={query}
            onChange={handleSetQuery}>
          </textarea>
          <button onClick={() => {}} className="mt-5 bg-slate-700 text-base text-white p-2 rounded-lg">Beautiful format</button>
        </div>
      </form>
    </main>
  )
}
