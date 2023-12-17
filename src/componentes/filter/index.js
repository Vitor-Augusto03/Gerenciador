const Filter = ({ filter, setFilter }) => {
    return(
        <div className="mx-3">
            <div>
                <p className="font-extrabold text-slate-400">Status:</p>
            </div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}
            className=" rounded  outline-none border border-sky-700  bg-slate-800 focus:outline-none focus:border-sky-500 w-40 flex text-slate-400 focus:ring-1 focus:ring-sky-500 py-2" >
                <option value="Todas">Todas</option>
                <option value="Andamento">Em Andamento</option>
                <option value="Concluída">Concluídas</option>
                <option value="Incompleta">Incompletas</option>

            </select>
        </div>
    )
};
export default Filter;
