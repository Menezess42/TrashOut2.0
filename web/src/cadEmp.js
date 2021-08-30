import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom';
import api from './api';
import './teste.css'
import {Link} from 'react-router-dom';
import logoPng from './imgs/logo.png'
import cadBotao from './imgs/CadastrarF.png'
import empLogo from './imgs/Emp.png'



function CadEmp() {

    const [emp_nome, setNome] = useState('');
    const [emp_cnpj, setCnpj] = useState(''); 
    const [emp_login, setLogin] = useState(''); 
    const [emp_senha, setSenha] = useState(''); 
    const [emp_rua, setRua] = useState('');
    const [emp_bairro, setBairro] = useState('');
    const [emp_numero, setNumero] = useState('');
    const [emp_hAbertura, setHabertura] = useState('');
    const [emp_dAbertura, setDabertura] = useState('');
    const [emp_dFechamento, setDfechamento] = useState('');
    const [emp_Hfechamento, setHfechamento] = useState('');

    async function adicionarEmp(e)
    {
        e.preventDefault();
        //if(flag==true)
        //{
            const response = await api.post('/gravaemp',
            {emp_nome,emp_cnpj, emp_senha, emp_rua,emp_bairro, emp_numero, emp_hAbertura, 
            emp_Hfechamento,emp_dAbertura,emp_dFechamento})
            
            setNome('');
            setCnpj('');
            setSenha('');
            setRua('');
            setBairro('');
            setNumero('');
            setHabertura('');
            setDabertura('');
            setDfechamento('');
            setHfechamento('');
        //}
       /* else
        {
            const response = await api.put('/gravausuario',{usu_nome, usu_login, usu_senha, usu_dataNasc})
            setNome('');
            setLogin('');
            setSenha('');
            setData('');
            setFlag(true);
        }*/
        
    }

  return (
    <body>
       <div className="cabeca">
            <Link to="/">
                <img src={logoPng}></img>
            </Link>
            <h2>CADASTRO DE EMPRESA</h2>
        </div>
        <div className="cabeca">
            <div className="box">
                <form className="cadastro" onSubmit={adicionarEmp}>
                    <div>
                        <h1 class="cadLetra">NOME</h1>
                        <input class="cadInput" type="text" placeholder="Digite a CNPJ da sua empresa aqui..."
                        requirequired="required"red value={emp_nome}
                        onChange={e => setNome(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 class="cadLetra">CNPJ</h1>
                        <input class="cadInput" type="text" placeholder="Digite a CNPJ da sua empresa aqui..."
                        requirequired="required"red value={emp_cnpj}
                        onChange={e => setCnpj(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Senha
                        </h1>
                        <input className="cadInput" type="password" placeholder="Senha.."
                        requirequired="required"red value={emp_senha}
                        onChange={e => setSenha(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Rua
                        </h1>
                        <input className="cadInput" type="text" placeholder="Rua..."
                        requirequired="required"red value={emp_rua}
                        onChange={e => setRua(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Numero
                        </h1>
                        <input className="cadInput" type="text" placeholder="Numero..."
                        requirequired="required"red value={emp_numero}
                        onChange={e => setNumero(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Bairro
                        </h1>
                        <input className="cadInput" type="text" placeholder="Bairro..."
                        requirequired="required"red value={emp_bairro}
                        onChange={e => setBairro(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Horario de funcionamento
                        </h1>
                        <input class="cadInputime" type="time" 
                        requirequired="required"red value={emp_hAbertura}
                        onChange={e => setHabertura(e.target.value)}></input>
					    <input class="cadInputime" type="time"
                        requirequired="required"red value={emp_Hfechamento}
                        onChange={e => setHfechamento(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Funcionamento semanal
                        </h1>
                        <input class="cadInputime" type="tedxt" placeholder="ex:Segunda..."
                        requirequired="required"red value={emp_dAbertura}
                        onChange={e => setDabertura(e.target.value)}></input>
					    <input class="cadInputime" type="text" placeholder="ex: Sexta..."
                        requirequired="required"red value={emp_dFechamento}
                        onChange={e => setDfechamento(e.target.value)}></input>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" className="cadastro">
                            <img src={cadBotao}>
                            </img>
                        </button>
                    </div>
                </form>
            </div>
            <div className="box">
                <img src={empLogo}></img>
            </div>
        </div>
    </body>
  );
}

export default CadEmp;
