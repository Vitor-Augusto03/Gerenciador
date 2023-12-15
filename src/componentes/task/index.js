import React from "react";

const Task = ({ task,  removeTask, concluirTask }) => {
  const getBorderColor = () => {
    switch (task.category) {
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
    textDecoration: task.isCompleted ? "line-through" : "",
    color: task.isCompleted ? "gray" : "inherit",
     
  }}
>
  <div className="ml-4 mr-3 font-bold">
    <p>{task.text}</p>
    <a className={`text-sm ${borderColor}`}>
      {task.category}
      {task.isCompleted && (
        <div className=""></div>
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
  
