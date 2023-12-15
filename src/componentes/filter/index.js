const Filter = ({ filter, setFilter }) => {
    return(
        <div className="mx-3">
            <div>
                <p className="font-extrabold text-slate-400">Status:</p>
            </div>
            <select value={filter} onchange={(e) => setFilter(e.target.value)} 
            className=" rounded  outline-none border border-sky-700  bg-slate-800 focus:outline-none focus:border-sky-500 w-40 flex text-slate-400 focus:ring-1 focus:ring-sky-500 py-2" >
                <option value="All">Todas</option>
                <option value="Completed"> Concluídas</option>
                <option value="Incompletas">Incompletas</option>

            </select>
        </div>
    )
};
export default Filter;