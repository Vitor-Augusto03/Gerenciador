import { useState } from "react";

const Home = ({User}) => {
  const [open, setOpen] = useState(false);

  return (
    <body className=" h-screen">
      <div className="flex" style={{ maxHeight: 900 }}>
        <div
          className={`${open ? "w-72" : "w-20"} 
          duration-500 bg-[#081A51] h-screen absolute text-white p-5 pt-8 shadow-2xl`}
        >
          <img
            src="/control.png"
            className={`absolute cursor-pointer duration-500 rounded-full top-9 ${open ? 'left-[270px]' : 'left-[65px]'}
          bg-white w-7 border-2  border-[#081A51] ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img className={`cursor-pointer duration-500 w-10 ${open && "rotate-[360deg]"}`}
              src="/logo.png"
            />
            <h1 className={` font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 duration-500 ${!open && "scale-0"}`} >TaskManager</h1>
          </div>
        </div>


        <div className="text-center  w-screen bg-[#081A51] py-10 shadow-lg h-screen pl-20">
          <span className="text-white">Olá, {User} </span>
          <div className="shadow-lg">
          <label className=" font-extrabold  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 text-center">TaskManager</label>
          </div>
          <section
            className="mx-auto mt-20 shadow-2xl shadow-black border-2 border-sky-600 rounded text-white"
            style={{ maxWidth: 800 }}
          >
            ola         
          </section>
        </div>
        
        <div>
          
        </div>
      </div>
    </body>
  );
};
export default Home;
