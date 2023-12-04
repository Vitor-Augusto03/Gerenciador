import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex" style={{ maxHeight: 900 }}>
      <div
        className={`${
          open ? "w-72" : "w-20"} 
          duration-500 w-72  bg-[#081A51] h-screen relative`}
      >
        Sidebar
      </div>
      <img
        src="public/sair.png"
        className="absolute cursor-pointer rounded-full top-9 left-[279px] border-2  border-[#081A51]"
        onClick={() => setOpen(!open)}
      />
      <div className=" p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};
export default Home;
