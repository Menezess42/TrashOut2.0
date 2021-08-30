import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom';
import api from './api';
import './teste.css';
import {Link} from 'react-router-dom';
import logoPng from './imgs/logo.png'
import cadBotao from './imgs/CadastrarF.png'
import usuLogo from './imgs/usuLogo.png'




function CadUsu() {

    const [usu_nome, setNome] = useState(''); 
    const [usu_login, setLogin] = useState(''); 
    const [usu_senha, setSenha] = useState(''); 
    const [usu_dataNasc, setData] = useState('');
    const [alterar, setAlterar] = useState(localStorage.getItem('alterar'));
    const [usuario, setUsu] = useState([]);
    const [aux,setAux] = useState(localStorage.getItem('usu_login'));
    const [flag,setFlag] = useState(true);
   // console.log(localStorage.getItem('usu_login'));

   function formatarData(temp)
   {
        if (temp)
        {
            temp = temp.split("T")[0];
            return temp;
        }
    } 

    async function carregaUsu(e)
    {
        if(alterar)
        {
            const response = await api.get('/usuario/'+aux);
            setNome(response.data[0].usu_nome);
            setLogin(response.data[0].usu_login);
            setSenha(response.data[0].usu_senha);
            setData(formatarData(response.data[0].usu_dataNasc));
            setFlag(false);
        }
    }

    async function adicionarUsu(e)
    {
        e.preventDefault();
        console.log(usu_nome);
        console.log(usu_login);
        console.log(usu_senha);
        console.log(usu_dataNasc);
        if(flag==true)
        {
            const response = await api.post('/gravausuario',{usu_nome, usu_login, usu_senha, usu_dataNasc,})
         
            setNome('');
            setLogin('');
            setSenha('');
            setData('');
        }
        else
        {
            const response = await api.put('/gravausuario',{usu_nome, usu_login, usu_senha, usu_dataNasc})
            setNome('');
            setLogin('');
            setSenha('');
            setData('');
            setFlag(true);
        }
        
    }

   useEffect(()=>{carregaUsu();},[]);
  return (
    <body>
        <header>
          <div className="cabeca">
            
            {alterar ? 
             <Link to="/telaUsu">
                <img src={logoPng}></img>
             </Link> 
            :
             <Link to="/">
                <img src={logoPng}></img>
             </Link>
            }
            { alterar ? 
                 <h2>ALTERAR USUARIO</h2> : 
                <h2>CADASTRAR USUARIO</h2>}
                { alterar ?
                <Link to="/telaUsu">
                <h2>VOLTAR</h2>
                </Link> : 
                <h2></h2>}
          </div>
        </header>
        <div className="cabeca">
            <div className="box">
                <form className="cadastro" onSubmit={adicionarUsu}>
                    <div>
                        <h1 className="cadLetra"> 
                            Nome
                        </h1>
                        <input name="usu_nome" id="usu_nome"  className="cadInput"
                         type="text" placeholder="seu nome aqui" requirequired="required"red value={usu_nome}
                         onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Login
                        </h1>
                        <input name="usu_login" id="usu_login"  className="cadInput" type="text" placeholder="digite o nome que usara para entrar" 
                        required="required" value={usu_login}
                        onChange={e => setLogin(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Senha
                        </h1>
                        <input name="usu_senha" id="usu_senha"  className="cadInput" type="password" placeholder="Senha..."
                        required="required" value={usu_senha}
                        onChange={e => setSenha(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Data de Nascimento
                        </h1>
                        <input ame="usu_dataNasc" id="usu_dataNasc"  className="cadInput" type="date"
                        required="required" value={usu_dataNasc}
                        onChange={e => setData(e.target.value)}></input>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" className="cadastro">
                            <img src={cadBotao}></img>
                        </button>
                    </div>
                </form>
            </div>
            <div className="box">
                <img src={usuLogo}></img>
            </div>

        </div>
    </body>
  );
}

export default CadUsu;
