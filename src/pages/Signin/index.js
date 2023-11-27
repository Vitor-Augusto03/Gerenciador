import React from "react";
import Input from "../../componenteslogin/Input";
import Button from "../../componenteslogin/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../logo.svg";
import { useEffect, useState } from "react";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email & senha) {
      setError("Preencha todos os campos");
      return;
    }
    const res = signin (email, senha);

    if (res) {
      setError(res);
      return
    }
    navigate("/home");
  };

  return (
    <body className="bg-gradient-to-b from-blue-950 to-slate-900 h-screen">
      {" "}
      <div className="text-center font-extrabold text-3xl py-3   text-white">
        <label>Taks Manager</label>
      </div>
      <section
        className="py-56 px-8 text-center flex items-stretch mx-auto"
        style={{ maxWidth: 700 }}
      >
        <div className="bg-blue-900 p-10 rounded-l">
          <img
            src={Logo}
            width={500}
            alt="Logo"
            className=" hover:animate-[spin_4s_linear_infinite] cursor-pointer "
          />
        </div>
        <div className="bg-slate-900  rounded-r px-10 grow flex flex-col justify-center shadow-lg shadow-slate text-slate-50 font-bold pr-16">
          <h1 className="text-xl font-bold duration-500">Acesse a sua conta</h1>
          <p className="pt-10 text-base text-left text-slate-50">Email</p>
          <Input
            type="email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <p className="text-base text-left text-slate-50"> Senha</p>
          <Input
            type="password"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
        </div>
      </section>
      <label>{error}</label>
      <Button text="Entrar" onClick={handleLogin} />
      <label>
        Não tem uma conta?
        <strong>
          <Link to="/signup">&nbsp; Registre-se</Link>
        </strong>
      </label>
    </body>
  );
};
export default Signin;
