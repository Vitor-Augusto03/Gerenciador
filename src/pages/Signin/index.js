import React from "react";
import Input from "../../componenteslogin/Input";
import Button from "../../componenteslogin/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="text-center font-bold text-lg py-36">
      {" "}
      <label>Taks Manager</label>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => [setSenha(setSenha(e.target.value), setError(""))]}
      />
      <label>{error}</label>

    </div>
  );
};
export default Signin;
