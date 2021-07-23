import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'


function Clientes() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [sexo, setSexo] = useState('masculino');
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

    function handleSexo(event) {
        setSexo(event.target.value);
    }

    function handleClick() {
        if (nome === '' || email === '' || endereco === '' || dataNascimento === '' || sexo === '') {
            setIsEmpty(true);

        } else {
            const clientes = {
                nome,
                email,
                endereco,
                dataNascimento,
                sexo
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

            <div className="divSexo">
                <label >Sexo:</label>
                <label htmlFor="sexoMasculino">Masculino</label>
                <input type="radio" id="sexoMasculino" name="sexo" value="masculino" onChange={handleSexo} />
                <label htmlFor="sexoFeminino">Feminino</label>
                <input type="radio" id="sexoFeminino" name="sexo" value="feminino" onChange={handleSexo} />

            </div>

            <div className="divBtn">
                <button type="submit" onClick={handleClick}>CADASTRAR</button>
                {isEmpty ? <p>Todos os campos são obrigatórios.</p> : null}
                {isSuccess ? <span>Cliente cadastrado.</span> : null}
            </div>

            <div className="footer">
                <Link to="https://github.com/carol-pinho">
                    <p>Desenvolvido por Anne Pinho</p>
                </Link>
                <p>Desafio 2 - Hiring Coders</p>
            </div>
        </div>
    )
}


export default Clientes;