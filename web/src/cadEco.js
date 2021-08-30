import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom';
import api from './api';
import './teste.css';
import {Link} from 'react-router-dom';
import logoPng from './imgs/logo.png'
import cadBotao from './imgs/CadastrarF.png'
import usuLogo from './imgs/reciclagem.png'




function CadUsu() {

    const [eco_nome, setNome] = useState(''); 
    const [eco_rua, setRua] = useState(''); 
    const [eco_bairro, setBairro] = useState(''); 
    const [eco_numero, setNumero] = useState('');
    const [eco_cep, setCep] = useState('');
    const [emp_cnpj, setCnpj] = useState(localStorage.getItem('emp_cnpj'));
    const [resi_cod, setResi] = useState('');
    const [alterar, setAlterar] = useState(localStorage.getItem('alterar'));
    const [residuo, setResiduo] = useState([]);
    const [aux,setAux] = useState(localStorage.getItem('usu_login'));
    const [flag,setFlag] = useState(true);
    const [addResi,setAdd] = useState(false);

    const [resi_tipo,setTipo] = useState('');
    const [resi_descri,setDescri] = useState('');
   // console.log(localStorage.getItem('usu_login'));


   /* async function carregarEco(e)
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
    }*/
    async function adicionarResi(e)
    {
        //e.preventDefault();
        const response = await api.post('/gravarResi', {resi_tipo, resi_descri})
        setTipo('');
        setDescri('');
        setAdd(false);
    }

    async function adicionarEco(e)
    {
        e.preventDefault();
            const response = await api.post('/gravarEco',{eco_nome, eco_rua, eco_bairro, eco_numero, eco_cep,emp_cnpj, resi_cod})
            console.log(eco_nome)
            console.log(eco_rua)
            console.log(eco_bairro)
            console.log(eco_numero)
            console.log(eco_cep)
            console.log(emp_cnpj)
            console.log(resi_cod)
            setNome('');
            setRua('');
            setBairro('');
            setNumero('');
            setCep('');
            setCnpj('');
            setResi('');        
        /*else
        {
            const response = await api.put('/gravarEco',{usu_nome, usu_login, usu_senha, usu_dataNasc})
            setNome('');
            setLogin('');
            setSenha('');
            setData('');
            setFlag(true);
        }*/
        
    }

    async function novoResi()
    {
        if(addResi==false)
            setAdd(true);
        else
            if(addResi==true)
            setAdd(false);
    }

    async function carregaResiduos()
    {
        const response = await api.get('/residuos');
        setResiduo(response.data);
    }

   useEffect(()=>{carregaResiduos();},[]);
  return (
    <body>
        <header>
          <div className="cabeca"> 
             <Link to="/telaEmp">
                <img src={logoPng}></img>
             </Link> 
                <h2>CADASTRAR ECOPONTOS</h2>
                <Link to="/telaEmp">
                <h2>VOLTAR</h2>
                </Link>
          </div>
        </header>
        <div className="cabeca">
            <div className="box">
                <form className="cadastro" onSubmit={adicionarEco}>
                    <div>
                        <h1 className="cadLetra"> 
                            Nome do Ecoponto
                        </h1>
                        <input name="usu_nome" id="eco_nome"  className="cadInput"
                         type="text" placeholder="seu nome aqui" requirequired="required"red value={eco_nome}
                         onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Rua
                        </h1>
                        <input name="eco_rua" id="eco_rua"  className="cadInput" type="text" placeholder="Rua.." 
                        required="required" value={eco_rua}
                        onChange={e => setRua(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Bairro
                        </h1>
                        <input name="eco_bairro" id="eco_bairro"  className="cadInput" type="text" placeholder="Bairro..."
                        required="required" value={eco_bairro}
                        onChange={e => setBairro(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                           Numero
                        </h1>
                        <input ame="eco_numero" id="eco_numero"  className="cadInput" type="number"
                        required="required" value={eco_numero}
                        onChange={e => setNumero(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                           CEP
                        </h1>
                        <input ame="eco_cep" id="eco_cep"  className="cadInput" type="text"
                        required="required" value={eco_cep}
                        onChange={e => setCep(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                           Residuo
                        </h1>
                        <select name="residuo" id="residuo" key="residuo" onChange={e => setResi(e.target.value)}>
                            {residuo.map( resi => (
                                <option value={resi.resi_cod} className="cadInput">{resi.resi_cod}-{resi.resi_tipo}</option>
                            ))}
                        </select>
                        <button type="submit" className="cadastro" onClick={novoResi}>
                           <h1>+</h1>
                        </button>
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
                    { addResi ?
                        <form className="cadastro" onSubmit={adicionarResi}>
                            <button type="submit" className="cadastro" onClick={novoResi}>
                            <h1>-</h1>
                             </button>
                            <div>
                                <h1 className="cadLetra"> 
                                   Tipo Residuo
                                </h1>
                                <input name="resi_tipo" id="resi_tipo"  className="cadInput"
                                type="text" placeholder="Tipo residuo" requirequired="required"red value={resi_tipo}
                                onChange={e => setTipo(e.target.value)}/>
                            </div>
                            <div>
                                <h1 className="cadLetra"> 
                                   Descrição do Residuo
                                </h1>
                                <input name="resi_descri" id="resi_descri"  className="cadInput"
                                type="text" placeholder="seu nome aqui" requirequired="required"red value={resi_descri}
                                onChange={e => setDescri(e.target.value)}/>
                            </div>
                            <button type="submit" className="cadastro">
                            <img src={cadBotao}></img>
                            </button>
                        </form>
                    :
                    <img src={usuLogo} width="450"></img>
                    }
            </div>
        </div>
    </body>
  );
}

export default CadUsu;
