import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import InventarioImg from '../../images/inventario-33.png';


function Home() {

    return (
        <div className="container-home">
            <div className="section1">
                <h1>Olá! <br /> Bem Vindo ao Sistema de Inventário Virtual.</h1>
                <img src={InventarioImg} alt="imagem-inventario" />
            </div>

            <div className="section2">
                <h2>Escolha o que você deseja cadastrar:</h2>
                <Link to="/clientes">
                    <button type="submit">Cadastro de Clientes</button>
                </Link>

                <Link to="/produtos">
                    <button type="submit">Cadastro de Produtos</button>
                </Link>

            </div>
        </div>
    )
}

export default Home;