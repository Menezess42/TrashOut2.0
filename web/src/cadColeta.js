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




function CadColeta() {
    const [col_data, setData] = useState('');
    const [col_rua, setRua] = useState('');
    const [col_numero, setNumero] = useState('');
    const [col_obs, setObs] = useState('');
    const [col_bairro,setBairro] = useState('');
    const [usu_login, setLogin] = useState(localStorage.getItem('usu_login'));
    const [resi_cod, setResi] = useState('');
    const [residuo, setResiduo] = useState([]);
    const [status, setStatus] = useState('');

    async function gravarColeta(e)
    {
        e.preventDefault();
        //if(flag==true)
        //{ 
            const response = await api.post('/gravaColeta',
            {col_data, col_bairro,col_rua, col_numero, col_obs, usu_login, resi_cod})
            //console.log(response.data[0].coleta_rua);
            setBairro('');
            setData('');
            setRua('');
            setNumero('');
            setObs('');
            setResi('');
        //}
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
             <Link to="/telaUsu">
                <img src={logoPng}></img>
             </Link> 
                <h2>SOLICITAR COLETA</h2>
                <Link to="/telaUsu">
                <h2>VOLTAR</h2>
                </Link>
          </div>
        </header>
        <div className="cabeca">
            <div className="box">
                <form className="cadastro" onSubmit={gravarColeta}>
                     <div>
                        <h1 className="cadLetra"> 
                            Bairro
                        </h1>
                        <input name="col_bairro" id="col_bairro"  className="cadInput"
                         type="text" placeholder="Rua" requirequired="required"red value={col_bairro}
                         onChange={e => setBairro(e.target.value)}/>
                    </div>
                    <div>
                        <h1 className="cadLetra"> 
                            Rua
                        </h1>
                        <input name="col_rua" id="col_rua"  className="cadInput"
                         type="text" placeholder="Rua" requirequired="required"red value={col_rua}
                         onChange={e => setRua(e.target.value)}/>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Numero
                        </h1>
                        <input name="col_numero" id="col_numero"  className="cadInput" type="number" placeholder="Numero" 
                        required="required" value={col_numero}
                        onChange={e => setNumero(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Observação
                        </h1>
                        <input name="col_obs" id="col_obs"  className="cadInput" type="text" placeholder="OBS..."
                        required="required" value={col_obs}
                        onChange={e => setObs(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Data de Solicitação
                        </h1>
                        <input name="col_data" id="col_data"  className="cadInput" type="date" placeholder="data..."
                        required="required" value={col_data}
                        onChange={e => setData(e.target.value)}></input>
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
                <img src={usuLogo} width="450"></img>
            </div>

        </div>
    </body>
  );
}

export default CadColeta;
