import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex" style={{ maxHeight: 900 }}>
      <div
        className={`${open ? "w-72" : "w-20"} 
          duration-500 bg-[#081A51] h-screen relative text-white p-5 pt-8`}
      >
        <img
          src="/control.png"
          className={`absolute cursor-pointer duration-500 rounded-full top-9 ${open ? 'left-[270px]' : 'left-[65px]'}
          bg-white w-7 border-2  border-[#081A51] ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img className="cursor-pointer duration-500 w-10 "
            src="/logo.png"
          />
          <h1 className={`font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 duration-500 ${!open && "scale-0"}`}>TaksManager</h1>
        </div>
      </div>

      <div className=" p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};
export default Home;
