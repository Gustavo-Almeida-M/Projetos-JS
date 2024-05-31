import React from "react";
import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Buttons";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {

    const  { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if(!email | !password) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, password);
        if(res) {
            setError(res);
            return;
        }

        navigate("/home");
    }
    return (
        <C.Container>
            <C.Label>Login</C.Label>
                <C.Content>
                    <Input 
                        type="email" 
                        placeholder="Digite seu email"
                        label="Email" 
                        value={email} 
                        onChange={(t) => [setEmail(t.target.value), setError("")]}
                    />
                    <Input 
                        type="password" 
                        placeholder="Digite sua senha"
                        label="Senha" 
                        value={password} 
                        onChange={(t) => [setPassword(t.target.value), setError("")]}
                    />
                    <C.LabelError>{error}</C.LabelError>
                    <Button Text="Logar" onClick={handleLogin}/>
                    <C.LabelSignUp>
                        Não tem conta? 
                        <C.Strong>
                            <Link to="/signup">Cadastre-se</Link>
                        </C.Strong>
                    </C.LabelSignUp>
                </C.Content>
        </C.Container>
    );
}

export default SignIn;