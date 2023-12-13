import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Task from "../../componentes/task";
import FormTask from "../../componentes/task/formtask";



const Home = ({ User }) => {
  const { signout, user } = useAuth();
  const navigate = useNavigate();


  const username = user.email;

  const [task, setTask] = useState([{
    id: 1,
    text: "criar funcionalidade x no sistema",
    category: "Leve",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Ir pra academia",
    category: "Importante",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Estudar React",
    category: "Urgente",
    isCompleted: false,
  }]);

  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  
  return (

    <body className="bg-[#081A51] h-[400vh">
      <div
        className={`${open ? "w-72" : "w-20"} duration-500  absolute text-white p-5 pt-8 shadow-2xl bg-[#081A51]`}
      >
        <img
          src="/control.png"
          className={`absolute cursor-pointer duration-500 rounded-full top-9 ${open ? "left-[270px]" : "left-[65px]"
            }
          bg-white w-7 border-2  border-[#081A51] ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            className={`cursor-pointer duration-500 w-10 ${open && "rotate-[360deg]"
              }`}
            src="/logo.png"
          />
          <h1
            className={` font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 duration-500 ${!open && "scale-0"
              }`}
          >
            TaskManager
          </h1>

        </div>
        <div>
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center  gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
                <img src={`./assets/${menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left ration-100`}>
                  {menu.title}</span>
              </li>
            ))}
            <div>
              <button className={`my-10 flex py-1 ml-3 font-bold items-center  px-16 bg-sky-800 hover:bg-sky-400 rounded  duration-500  ${!open && "hidden"} `} onClick={() => [signout(), navigate("/")]} >Sair</button>




              {!open && <img className="w-10 my-10 flex items-center  gap-x-4 cursor-pointer p-2 pr-3 hover:bg-light-white rounded-md " onClick={() => [signout(), navigate("/")]} src="/Sair.png" />}

            </div>
          </ul>

        </div>

      </div>
      <div className=" shadow-xl py-2 text-center">
      <a className="font-extrabold  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600  ">TaskManager</a>
      </div>
      <div className="shadow-lg h-screen flex justify-center items-center">
        <div className=" text-center">
          
        </div>
        <div className="mt-2 shadow-2xl shadow-black border-2 border-sky-600 rounded text-white ">
          <div className="">
            {task.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div >
          <FormTask />
        </div>

      </div>

    </body>
  );
};
export default Home;
