import React, { useState } from "react";
import classNames from "classnames";

const FormTask = ({addTask}) => {
  const [value, setValue] = useState ("")
  const [category, setCategory] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return
    addTask(value, category);
    setValue("");
    setCategory(""); 

  };

  

  const lineColor = classNames({
    'bg-green-500': category === 'Leve',
    'bg-yellow-500': category === 'Importante',
    'bg-red-500': category === 'Urgente',
  });
 
  

  return (
    <div className="mt-16 ml-3 border-t border-sky-400 fronteira-t-indigo-500 mr-3 py-6">
 <h2 className="font-extrabold text-3xl my-3 text-slate-400">Criar Task:</h2>
  <form onSubmit={handlesubmit} >
    <input
      type="text"
      placeholder="Adicione uma tarefa..."
      value={value}
        onChange={(e) => setValue(e.target.value)}
      className={`text-white w-[32rem]  outline-none border border-sky-700 rounded p-2 py-2 mb-5 bg-slate-800 text-base focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-thin placeholder-purple-50 `}
    />
    <select value={category} onChange={(e) => setCategory(e.target.value)}
      className={`text-purple-50 rounded  outline-none p-2 border border-sky-700  bg-slate-800 focus:outline-none focus:border-sky-500 w-[32rem] flex col focus:ring-1 focus:ring-sky-500 py-2  font-thin`}>
      <option value="">Selecione uma categoria</option>
      <option value="Leve">Leve</option>
      <option value="Importante">Importante</option>
      <option value="Urgente">Urgente</option> 
    </select>
    <button type="submit" className={`p-3 flex justify-  px-16 font-bold rounded bg-sky-800 mt-4 hover:bg-sky-400 duration-500 ` }>CriarTask</button>
    </form>
    
    </div>
  );
}

export default FormTask;
