function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 max-w-7xl m-auto px-5 md:px-0 md:py-36">
      <div className="text-6xl pb-4">
          <span className="text-emerald-700 font-bold">sql</span> 
          <span className="font-bold">Formatter</span> 
      </div>
      <p className="text-center text-xl">
        <p>A quick way to format your code.</p>
        <p>This platform is <strong>open-source</strong>. Fell free to help us improving this tool.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-5 md:flex-row">
          <a href="https://github.com/carloshbido/sql-formatter" target="_blank" className="border-solid border-emerald-800 border p-4 inline-block text-emerald-800 ease-in-out duration-300 rounded-xl hover:text-emerald-500 hover:border-emerald-500">
            Click here and access GitHub
          </a>
          <a href="#apply" className="border-solid border-emerald-800 border p-4 inline-block text-white bg-emerald-800 ease-in-out duration-300 rounded-xl hover:border-emerald-500 hover:bg-emerald-500">
            Start formatting 
          </a>
        </div>
      </p>
    </section>
  )
}

export default Hero