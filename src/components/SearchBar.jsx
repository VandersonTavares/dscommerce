const SearchBar = () => {
  return (
    <div className="my-5">
        <form className="search-bar flex h-10 text-[#636363] border rounded">
            <button className="border border-r-0 bg-[#EDEDED] w-10 h-10 rounded-l-md" type="submit">🔎︎</button>
            <input className="border border-r-0 border-l-0 w-[calc(100%-80px)] focus:outline-none px-2 placeholder:text-[#d9d9d9]" type="text" placeholder="Nome do Produto" />
            <button className="border border-l-0 bg-[#EDEDED] w-10 h-10 rounded-r-md" type="reset">X</button>
        </form>
    </div>
  )
}

export default SearchBar