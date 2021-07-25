import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'


function Clientes() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    function handleNome(event) {
        setNome(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handleEndereco(event) {
        setEndereco(event.target.value);
    }

    function handleNascimento(event) {
        setDataNascimento(event.target.value);
    }


    function handleClick() {
        if (nome === '' || email === '' || endereco === '' || dataNascimento === '') {
            setIsEmpty(true);

        } else {
            const clientes = {
                nome,
                email,
                endereco,
                dataNascimento
            }
            //localStorage.clear();
            localStorage.setItem('Cliente', JSON.stringify(clientes))
            setIsSuccess(true);
        }
    }

    return (
        <div className="container-clientes">
            <div className="header-clientes">
                <h1>Cadastro de Clientes</h1>
                <Link to="/">
                    <p>Home</p>
                </Link>
            </div>

            <div className="divInput">
                <input type="text" id="name" placeholder="Nome" value={nome} onChange={handleNome} />
                <input type="text" id="email" placeholder="Email" value={email} onChange={handleEmail} />
                <input type="text" id="endereço" placeholder="Endereço" value={endereco} onChange={handleEndereco} />
                <input type="text" id="dataNascimento" placeholder="Data de Nascimento" value={dataNascimento} onChange={handleNascimento} />
            </div>



            <div className="divBtn">
                <button type="submit" onClick={handleClick}>CADASTRAR</button>
                {isEmpty ? <p>Todos os campos são obrigatórios.</p> : null}
                {isSuccess ? <span>Cliente cadastrado.</span> : null}
            </div>

            <div className="footer">
                <p>Desenvolvido por Anne Pinho</p>
                <p>Desafio 2 - Hiring Coders</p>
            </div>
        </div>
    )
}


export default Clientes;