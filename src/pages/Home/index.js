import React from "react";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Buttons";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {

    const { signout, user} = useAuth();
    const navigate = useNavigate();

    const [nomeProduto, setNomeProduto] = useState();
    const [quantidade, setQuantidade] = useState();
    const [valor, setValor] = useState();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const produtosNoLocalStorage = JSON.parse(localStorage.getItem("user_product")) || [];
        setProdutos(produtosNoLocalStorage);
    }, []);

    const adicionarProduto = () => {
        if (!nomeProduto || !quantidade || !valor) {
            alert("Preencha todos os campos");
            return;
        }

        const novoProduto = {
            nome: nomeProduto,
            quantidade: quantidade,
            valor: valor,
        };

        setProdutos([...produtos, novoProduto]);

        const produtosNoLocalStorage = JSON.parse(localStorage.getItem("user_product")) || [];
        localStorage.setItem("user_product", JSON.stringify([...produtosNoLocalStorage, novoProduto]));

        setNomeProduto("");
        setQuantidade("");
        setValor("");
    };

    const removerProduto = (index) => {
        const novaLista = produtos.filter((_, i) => i !== index);
        setProdutos(novaLista);
        localStorage.setItem("user_product", JSON.stringify(novaLista));
    };
      
    
    if(!user) {
        alert("Você não está logado!");
        navigate("/signin");
        return null;
    };


    return (
        <C.Container id="container">
            <C.Title>Home</C.Title>
            <C.Content>
                <Input 
                    type="text" 
                    placeholder="Digite o nome do produto"
                    label="Produto" 
                    value={nomeProduto} 
                    onChange={(t) => setNomeProduto(t.target.value)}
                />
                <Input 
                    type="number" 
                    placeholder="Digite a quantidade"
                    label="quantidade" 
                    value={quantidade} 
                    onChange={(t) => setQuantidade(t.target.value)}
                />
                <Input 
                    type="number" 
                    placeholder="Digite o valor por unidade"
                    label="quantidade" 
                    value={valor} 
                    onChange={(t) => setValor(t.target.value)}
                />
                <Button Text="Adicionar" onClick={adicionarProduto}>
                    Adicionar
                </Button>

                <Button Text="Sair" onClick={() => [signout(), navigate("/signin")]}>
                    Sair
                </Button>

                <ul>
                    {produtos.map((produto, index) => (
                        <C.Div>
                        <div key={index} className="produto">
                        {produto.nome} - Quantidade: {produto.quantidade} - Valor: {produto.valor}$
                        <Button Text="Remover"onClick={() => removerProduto(index)}></Button>
                        </div>
                        </C.Div>
                    ))}
                </ul>
            </C.Content>
        </C.Container>
    );
}

export default Home;