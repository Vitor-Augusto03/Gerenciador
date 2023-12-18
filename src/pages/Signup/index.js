import React, { useState } from "react";
import Input from "../../componenteslogin/Input"
import Button from "../../componenteslogin/Button";
import { Link, redirect, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"


const Signup = () =>{
    const [nome, setName] = useState('');
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { signup } = useAuth();



    const handleSignup  =() => {
        if (!email | !emailConf | !senha) {
         setError (<p className="msg-error">Preencha todos os campos</p>);

            return;
        } else if (email !== emailConf) {
            setError(<p className="msg-error">Os e-mails não são iguais</p>);

            return;
        }

        signup(nome, email, senha)
          .then(() => {
            alert("Usuário cadastro com sucesso!");
            navigate("/");
          })
          .catch((err) => {
            setError(<p className="msg-error">Erro ao cadastrar usuário</p>);
          });
    };


     return (
        <div className="text-white  bg-gradient-to-b from-blue-950 to-slate-900 h-screen w-screen">
          {" "}
         <div className="text-center py-5 shadow-xl">
            <label className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600  ">TaskManager</label>
          </div>
          <section
            className="py-28 px-8 text-center flex items-stretch mx-auto"
            style={{ maxWidth: 400}}
          >
            <div className="bg-slate-900  rounded px-10 grow flex flex-col justify-center shadow-lg shadow-slate  font-bold  items-center ">
              <h1 className="text-2xl my-10">Crie sua conta</h1>
              <Input
                type="name"
                value={nome}
                onChange={(e) => [setName(e.target.value)]}
                placeholder="Insira seu nome"
              />

              <Input
                type="email"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                placeholder="Insira seu Email"
              />
              <Input
                type="email"
                value={emailConf}
                onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                placeholder="Confirme seu Email"
                />

              <Input
                type="password"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
                placeholder="Insira sua Senha"
              />

              <label>{error}</label>
              <Button   text="Inscreva-se" onClick={handleSignup}/>
              <label className="mb-5">
                Já tem  uma conta?
                <strong>
                  <Link className="hover:text-sky-400 " to="/signin">&nbsp;Entre</Link>
                </strong>
              </label>
            </div>
          </section>
        </div>)
};
export default Signup;
