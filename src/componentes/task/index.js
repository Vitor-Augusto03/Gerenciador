import React from "react";
const Task = ({task}) => {
    return (
        <div>
            <div className=" ">
                <p className="">{task.text}</p>
                <a className="  ">({task.category})</a>
            </div>
            <div className=" space-x-4 flex">
                <button className="text-white py-2 bg-green-800 hover:bg-green-500  px-4 rounded  font-bold">Concluir</button>
                <button className="text-white py-2 bg-red-900 hover:bg-red-600 rounded  px-9 font-bold">X</button>
            </div>
        </div>
    );
};
export default Task;