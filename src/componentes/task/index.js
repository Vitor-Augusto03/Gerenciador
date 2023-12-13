import React from "react";
const Task = ({task}) => {
    return (
        <div>
            <div className=" ">
                <p className="">{task.text}</p>
                <a className="">({task.category})</a>
            </div>
            <div className=" space-x-4 just flex">
                <img src="/confirme.png" className="text-white  bg-slate-800 hover:bg-light-white  rounded  font-bold"/>
                <img src="/excluir.png" className="text-white  bg-slate-800 hover:bg-slate-700 rounded w-12  font-bold"/>
            </div>
        </div>
    );
};
export default Task;