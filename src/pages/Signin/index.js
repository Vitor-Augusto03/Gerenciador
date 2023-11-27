import React from "react";
import Input from "../../componenteslogin/Input";
import Button from "../../componenteslogin/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../logo.svg";
import { useEffect, useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="bg-gradient-to-b from-blue-950 to-slate-900">
      {" "}
      <div className="text-center font-bold text-lg py-3 bg-blue-500 w-screen mb-36">
        <label>Taks Manager</label>
      </div>
      <section
        className="py-56 px-8 text-center flex items-stretch mx-auto"
        style={{ maxWidth: 700 }}
      >
        <div className="bg-sky-400 p-10 rounded-l ">
          <img
            src={Logo}
            width={450}
            alt="Logo"
            className=" hover:animate-[spin_4s_linear_infinite] cursor-pointer "
          />
        </div>
        <div className="bg-slate-900  rounded-r px-10 grow flex flex-col justify-center shadow-lg shadow-slate text-slate-50 font-bold">
        <h1 className="text-2xl font-bold duration-500">Acesse a sua conta</h1>
          <p className="pt-10 text-base text-left text-slate-50">Email</p>
          <input
            className="py-1 mb-5 pr-4 bg-slate-800 text-base rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-500 invalid:text-red-600
            focus:invalid:red-pink-500 focus:invalid:ring-red-500"
            type="email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <p className="text-base text-left text-slate-50"> Senha</p>
          <input
            className=" py-1 text-base rounded bg-slate-800  text-slate-50 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:red-pink-500 focus:invalid:ring-red-500"
            type="password"
            value={senha}
            onChange={(e) => [setSenha(setSenha(e.target.value), setError(""))]}
          />
        </div>
      </section>
      <label>{error}</label>
    </div>
  );
};
export default Signin;
