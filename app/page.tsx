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

    console.log(queryUpdated);
    const array = queryUpdated;
    setQuery(array);
  }

  function handleSetQuery(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuery(event.target.value)
  }

  return (
    <main className="grid grid-cols-1 place-content-center m-4">
      <form className="bg-red-100 p-3" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-items-start align-middle">
          <label htmlFor="sqlquery" className="mb-2">Query</label>
          <textarea
            className="outline-slate-300"
            cols={10}
            rows={10}
            name="sqlquery" 
            value={query}
            onChange={handleSetQuery}>
          </textarea>
          <button onClick={() => {}} className="mt-5 bg-slate-700 text-base text-white p-2">Beautiful format</button>
        </div>
      </form>
    </main>
  )
}
