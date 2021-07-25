import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'


function Produtos() {
    const [categoria, setCategoria] = useState('');
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);


    function handleCategoria(event) {
        setCategoria(event.target.value);
    }

    function handleNome(event) {
        setNome(event.target.value);
    }

    function handleMarca(event) {
        setMarca(event.target.value);
    }

    function handleQuantidade(event) {
        setQuantidade(event.target.value);
    }

    function handleClick() {
        if (categoria === '' || nome === '' || marca === '' || quantidade === '') {
            setIsEmpty(true);

        } else {
            const produtos = {
                categoria,
                nome,
                marca,
                quantidade,
            }
            //localStorage.clear();
            localStorage.setItem('Produto', JSON.stringify(produtos));
            setIsSuccess(true);
        }
    }

    return (
        <div className="container-produtos">
            <div className="header-produtos">
                <h1>Cadastro de Produtos</h1>
                <Link to="/">
                    <p>Home</p>
                </Link>
            </div>

            <div className="divInput">
                <input type="text" id="categoria" placeholder="Categoria" value={categoria} onChange={handleCategoria} />
                <input type="text" id="nome" placeholder="Nome" value={nome} onChange={handleNome} />
                <input type="text" id="marca" placeholder="Marca" value={marca} onChange={handleMarca} />
                <input type="number" id="quantidade" placeholder="Quantidade" value={quantidade} onChange={handleQuantidade} />
            </div>

            <div className="divBtn">
                <button type="submit" onClick={handleClick}>CADASTRAR</button>
                {isEmpty ? <p>Todos os campos são obrigatórios.</p> : null}
                {isSuccess ? <span>Produto cadastrado.</span> : null}
            </div>

            <div className="footer">
                <p>Desenvolvido por Anne Pinho</p>
                <p>Desafio 2 - Hiring Coders</p>
            </div>

        </div>
    )
}

export default Produtos;
