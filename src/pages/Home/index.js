import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-native-web";
import useAuth from "../../hooks/useAuth";

const Home = ({ User }) => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [task, setTask] = useState([{
    id: 1,
    text: "criar funcionalidade x no sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Ir pra academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Estudar React",
    category: "Estudos",
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

    <body className="h-48 ">

      <div className="flex">

        <div

          className={`${open ? "w-72" : "w-20"} 
          duration-500 bg-[#081A51] h-screen absolute text-white p-5 pt-8 shadow-2xl`}
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
              
              <button className={`my-10 flex px-9 py-1 px-24 font-bold  px-2 bg-sky-800 hover:bg-sky-400 rounded duration-r-500 ${!open && "hidden"}`} onClick={() => [signout(), navigate("/")]} >Sair</button>
           
              {!open && <img className="w-10 my-10 flex items-center  gap-x-4 cursor-pointer p-2 pr-3 hover:bg-light-white rounded-md "  onClick={() => [signout(), navigate("/")]} src="/Sair.png" />}
            </ul>
            
          </div>

        </div>

        <div className="text-center  w-screen bg-[#081A51] py-10 shadow-lg h-screen pl-20">
          <span className="text-white">Olá, {User} </span>
          <div className="shadow-lg">
            <label className=" font-extrabold  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 text-center">
              TaskManager
            </label>
          </div>
          <div className="h-[32rem] mx-auto pb-20 w-4 mt-20 shadow-2xl shadow-black border-2 border-sky-600 rounded text-white p-72"
          
          >
            <div className="flex justify-center  ">
              {task.map((task) => (
                <div>
                  <p>{task.text}</p>
                  <a>({task.category})</a>
                  <button className="text-white py-2 bg-green-800 hover:bg-green-500 rounded w-20 font-bold ">Concluir</button>
                  <button className="text-white py-2 bg-red-900 hover:bg-red-600 rounded w-20 font-bold">X</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default Home;
