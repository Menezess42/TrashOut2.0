import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom';
import api from './api';
import './teste.css'
import {Link} from 'react-router-dom';
import logoPng from './imgs/logo.png'
import logarF from './imgs/logarF.png'
import empLogo from './imgs/Emp.png'


function LoginEmp() {
    const [emp_cnpj, setCnpj] = useState('');
    const [emp_senha, setSenha] = useState('');
    const history = useHistory();


    async function empLogin(e) 
    {
      e.preventDefault();
      const response = await api.post('/empresa/login', { emp_cnpj, emp_senha});
  
      if (response.data.length !== 0) 
      {
        localStorage.setItem('emp_cnpj', emp_cnpj);
        history.push("/telaEmp");
      } 
      else
        alert('Credenciais Invalidas!')
    } 

    return (
        
      <body>
         <div className="cabeca">
              <Link to="/">
                  <img src={logoPng}></img>
              </Link>
              <h2>LOGIN DE EMPRESA</h2>
          </div>
          <div className="cabeca">
            <div className="box">
               <form className="cadastro" onSubmit={empLogin}>
                   <div>
                       <h1 className="cadLetra">
                           CNPJ
                       </h1>
                       <input className="cadInput" type="text" placeholder="CNPJ aqui ..."
                       value={emp_cnpj} onChange={e => setCnpj(e.target.value)}></input>
                   </div>
                   <div>
                       <h1 className="cadLetra">
                           Senha
                       </h1>
                       <input className="cadInput" type="password" placeholder="Senha..."
                       value={emp_senha} onChange={e => setSenha(e.target.value)}></input>
                   </div>
                   <br></br>
                   <div>
                   <button type="submit" className="cadastro">
                            <img src={logarF}></img>
                        </button>
                   </div>
               </form>
            </div>
            <div className="box">
                <img src={empLogo} width="300"></img>
            </div>
          </div>
      </body>
    );
  }
  
  export default LoginEmp;