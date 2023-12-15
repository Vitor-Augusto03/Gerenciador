

const Search = ({ Search, setsearch }) => {
    return (
      <div className="mt-7 flex items-center justify-center relative py-3">
        <input
          className="rounded  outline-none border-t-0 border-e-0 border-s-0 p-2 border border-b-2 border-sky-700  bg-transparent focus:outline-none focus:border-sky-500 w-[32rem] "
          type="text"
          value={Search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Pesquise sua Tarefa..."
        />
        <img
          src="./lupa.png"
          className="w-8 absolute left-[484px] top-1/2 transform -translate-y-1/2 cursor-pointer"
          alt="Lupa"
        />
      </div>
    );
  };
  
  export default Search;
  