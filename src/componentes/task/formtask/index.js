import React, { useState } from "react";
import classNames from "classnames";
import { Button } from "react-native-web";
const FormTask = () => {
  const [value, setValue] = useState ("")
  const [category, setCategory] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
   
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const lineColor = classNames({
    'bg-green-500': category === 'Leve',
    'bg-yellow-500': category === 'Importante',
    'bg-red-500': category === 'Urgente',
  });
 
  

  return (
    <div className=" ml-3 mr-3 py-20">
 <h2 className="font-extrabold text-3xl my-3">Criar Task:</h2>
  <form >
    <input
      type="text"
      placeholder="Título da Tarefa"
      className={`text-white w-[32rem]  outline-none border border-sky-700 rounded p-2 py-2 mb-5 bg-slate-800 text-base focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-normal placeholder-purple-50 `}
    />
    <select
      className={`text-purple-50 rounded ml-3 outline-none p-2 border border-sky-700 font-bold  bg-slate-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 py-2`}
      onChange={handleCategoryChange}
    >
      <option value="">Selecione uma categoria</option>
      <option value="Leve">Leve</option>
      <option value="Importante">Importante</option>
      <option value="Urgente">Urgente</option> 
    </select>
    <button className="p-2 flex justify-  px-6 font-bold rounded bg-sky-800 hover:bg-sky-400 duration-500">CriarTask</button>
    </form>
    
    </div>
  );
}

export default FormTask;
