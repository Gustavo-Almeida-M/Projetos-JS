import React from "react";
import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Buttons";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const SignUp = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] =  useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [error, setError] = useState("");

    const handleSignup = () => {
        if(!email || !emailConf || !password || !passwordConf) {
            setError("Preencha todos os campos");
            return;
        } else if(email !== emailConf) {
            setError("Os emails não são iguais");
            return;
        } else if(password !== passwordConf) {
            setError("As senhas não são iguais");
            return;
        }

        const res = signup(email, password);

        if(res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso");
        navigate("/signin");
    }

    return (
        <C.Container>
            <C.Label>Cadastro de conta</C.Label>
                <C.Content>
                    <Input 
                        type="email" 
                        placeholder="Digite seu email"
                        label="Email" 
                        value={email} 
                        onChange={(t) => [setEmail(t.target.value), setError("")]}
                    />
                    <Input 
                        type="email" 
                        placeholder="Confirme seu email"
                        label="Email" 
                        value={emailConf} 
                        onChange={(t) => [setEmailConf(t.target.value), setError("")]}
                    />
                    <Input 
                        type="password" 
                        placeholder="Digite sua senha"
                        label="Senha" 
                        value={password} 
                        onChange={(t) => [setPassword(t.target.value), setError("")]}
                    />
                    <Input 
                        type="password" 
                        placeholder="Confirme sua senha"
                        label="Senha" 
                        value={passwordConf} 
                        onChange={(t) => [setPasswordConf(t.target.value), setError("")]}
                    />
                    <C.LabelError>{error}</C.LabelError>
                    <Button Text="Cadastrar" onClick={handleSignup}/>
                        <C.LabelSignUp>
                            Já tem conta? 
                            <C.Strong>
                                <Link to="/signin">Logar</Link>
                            </C.Strong>
                        </C.LabelSignUp>
                </C.Content>
        </C.Container>
    );
}

export default SignUp;