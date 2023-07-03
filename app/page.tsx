"use client"

import { useState } from "react"
import { FaCopy, FaCheck } from 'react-icons/fa';

import { TabOnFirstItem } from "@/scripts/tab-first-item";
import jumpLine from "@/scripts/jump-line";

import Cookie from "@/components/Cookie";
import Hero from "@/components/Hero";

export default function Home() {
  const [query, setQuery] = useState("")
  const [copied, setCopied] = useState(false)
  
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
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  }


  return (
  <>
    <Cookie/>
    <div className="bg-slate-50">
      
      <Hero/>

      <main className="flex items-center justify-between max-w-7xl m-auto px-5 xl:px-0">
        <form className="p-3 rounded-lg w-full border border-solid border-gray-200 mb-3" onSubmit={handleSubmit} id="apply">
          <div className="flex flex-col justify-items-start">
          <div className="flex justify-between items-center mb-2">
              <label htmlFor="sqlquery">Insert query below</label>
              <span 
                className="bg-slate-400 px-6 py-2 rounded-lg cursor-pointer text-xs ease-in-out duration-300 text-white
                          hover:bg-emerald-400"
                onClick={() => setQuery("")}
              >
              Clear
              </span>
            </div>
            <textarea
              className="outline-slate-300 p-3 text-xs rounded-lg"
              rows={20}
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
                className="bg-emerald-900 text-white px-6 py-3 rounded-lg cursor-pointer ease-in-out duration-500 hover:bg-opacity-90"
                onClick={handleCopyClipboard}
              >
                {copied ? <FaCheck/> : <FaCopy />}
              </span>
            </div>
          </div>
        </form>

        
      </main>
      <p className="max-w-7xl m-auto text-gray-500 py-4">Development By Carlos Bido</p>
    </div>
  </>
  )
}
