import React, { useState } from "react";
import classNames from "classnames";

const FormTask = () => {
  const [category, setCategory] = useState("Leve");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const lineColor = classNames({
    'bg-green-500': category === 'Leve',
    'bg-yellow-500': category === 'Importante',
    'bg-red-500': category === 'Urgente',
  });
  const placeholderColor = classNames({    'placeholder-white': category === 'Urgente',
  });

  

  return (
    <div>
      <h2>Criar Tarefa</h2>
      <form>
        <input
          type="text"
          placeholder="Título da Tarefa"
          className={`text-white rounded outline-none p-2  py-2 px-3 mb-5 pr-4 bg-slate-800 text-base  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  font-bold `}
        />
        <select  className={`text-white rounded outline-none p-2 font-bold py-2 px-3 mb-5 pr-1 bg-slate-800   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 `} onChange={handleCategoryChange}>
          <option value=""> Selecioe uma categoria</option>
          <option value="Leve">Leve</option>
          <option value="Importante">Importante</option>
          <option value="Urgente">Urgente</option>
        </select>
      </form>
    </div>
  );
}

export default FormTask;
