import React, { useState } from "react";
import { DateTime } from "luxon";

const Task = ({ task, removeTask, concluirTask }) => {
  const getBorderColor = () => {
    switch (task.categoria) {
      case "Light":
        return "border-b-2 border-green-500 relative ";
      case "Importante":
        return "border-b-2 border-yellow-500 relative ";
      case "Urgente":
        return "border-b-2 border-red-500 relative ";
      default:
        return "";
    }
  };

  const borderColor = getBorderColor();

  return (
    <div
      className={`bg-slate-800 ml-4 mr-4 rounded items-center py-3 mt-4 justify-between flex ${borderColor} `}
      style={{
        textDecoration: task.status === 'Concluída' ? "line-through" : "",
        color: task.status === 'Concluída' ? "gray" : "inherit",
      }}
    >
      <div className="ml-4 mr-3 font-bold">
        <p>{task.nome}</p>
        <a className={`text-sm ${borderColor}`}>
          {task.categoria}
          {task.dataConcluido && (
            <div className="">
              Data de conclusão: {DateTime.fromJSDate(new Date(task.dataConcluido)).toLocaleString()}
            </div>
          )}
          {task.dataExcluida && (
            <div className="">
              Data de exclusão: {DateTime.fromJSDate(new Date(task.dataExcluida)).toLocaleString()}
            </div>
          )}
        </a>
      </div>
      <div className="cursor-pointer space-x-4 mr-3 flex">
        <img
          src="/confirme.png"
          className="text-white hover:bg-slate-700 duration-500 rounded font-bold w-8"
          onClick={() => concluirTask(task.id)}
          alt="Confirme"
        />
        <img
          src="/excluir.png"
          className="text-white duration-500 hover:bg-slate-700 rounded w-8 font-bold"
          onClick={() => removeTask(task.id)}
          alt="Excluir"
        />
      </div>
    </div>
  );
};

export default Task;
