import React from "react";
const Task = ({task}) => {
    return (
        <div>
            <div className=" ">
                <p className="">{task.text}</p>
                <a className="">({task.category})</a>
            </div>
            <div className=" space-x-4 justify-end  mr-3 flex">
                <img src="/confirme.png" className="text-white  bg-slate-800 hover:bg-light-white  rounded  font-bold w-8"/>
                <img src="/excluir.png" className="text-white  bg-slate-800 hover:bg-slate-700 rounded w-8   font-bold"/>
            </div>
        </div>
    );
};
export default Task;