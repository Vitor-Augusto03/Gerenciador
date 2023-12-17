import React from "react";
import Input from "../../componenteslogin/Input";
import Button from "../../componenteslogin/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../logo.svg";
import { useEffect, useState } from "react";

const Signin = (name) => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError(<p className="msg-error">Preencha todos os campos</p>);
      return;
    }

    signin(email, senha)
      .then(() => {
        navigate('/home');
      })
      .catch((err) => {
        setError(<p className="msg-error">Falha na autenticação</p>);
      });
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 to-slate-900 h-screen">
      {" "}
      <div className="text-center py-5 shadow-xl">
        <label className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 text-center ">TaskManager</label>
      </div>
      <section
        className="py-56 px-8 text-center flex items-stretch mx-auto"
        style={{ maxWidth: 700 }}
      >
        <div className="bg-blue-900 p-10 rounded-l hidden md:block">
          <img
            src={Logo}
            width={500}
            alt="Logo"
            className=" hover:animate-[spin_4s_linear_infinite] cursor-pointer "
          />
        </div>
        <div className="bg-slate-900  rounded-r px-10 grow flex flex-col justify-center shadow-lg shadow-slate text-slate-50 font-bold pr-16 py-2">
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
            onChange={(e) => [setSenha(e.target.value), setError("")]}/>

          <label>{error}</label>
          <Button text="Entrar" type="submit" onClick={handleLogin} />
          <label>
            Não tem uma conta?
            <strong>
              <Link className="hover:text-sky-400 " to="/signup">&nbsp; Registre-se</Link>
            </strong>
          </label>
        </div>
      </section>
    </div>
  );
};
export default Signin;
