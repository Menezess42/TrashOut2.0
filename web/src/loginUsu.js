import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom';
import api from './api';
import './teste.css'
import {Link} from 'react-router-dom';
import logoPng from './imgs/logo.png'
import logarF from './imgs/logarF.png'
import usuLogo from './imgs/usuLogo.png'
import cadBotao from './imgs/CadastrarF.png'

function LoginUsu() {
    const [usu_login, setLogin] = useState('');
  const [usu_senha, setSenha] = useState('');
  //const usu = localStorage.getItem('usu_login');
  const history = useHistory();

  const { handleSubmit, register, errors } = useForm();

  async function logar(e){
		e.preventDefault();
		const params = {
			usu_login,
			usu_senha
		};
		const response = await api.get('/usuario/login',{
			params
		}).then((resp)=>{
			if(resp.data.data.length==1){
				localStorage.setItem('usu_login',usu_login);
				//localStorage.setItem('nivel',(resp.data.data[0].usu_nivel));
				history.push('/telaUsu');
			}
			else
            alert('Credenciais Invalidas!')
		});
	
  }

  async function usuLogin(e) 
  {
    e.preventDefault();
    const response = await api.post('/usuario/login', { usu_login, usu_senha});

    if (response.data.length !== 0) {
      localStorage.setItem('usu_login', usu_login);
      localStorage.setItem('usu_senha', usu_senha);

      //alert('Logado com sucesso!')
      history.push("/telaUsu");
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
              <h2>LOGIN DE USUARIO</h2>
          </div>
          <div className="cabeca">
              <div className="box">
                  <form className="cadastro" onSubmit={usuLogin}>
                    <div>
                        <h1 className="cadLetra">
                            Login
                        </h1>
                        <input className="cadInput" type="text" placeholder="digite seu Login..."
                         value={usu_login} onChange={e => setLogin(e.target.value)}></input>
                    </div>
                    <div>
                        <h1 className="cadLetra">
                            Senha
                        </h1>
                        <input className="cadInput" type="password" placeholder="digite sua senha..."
                        value={usu_senha} onChange={e => setSenha(e.target.value)}></input>
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
                <img src={usuLogo}></img>
            </div>
          </div>
      </body>
    );
  }
  
  export default LoginUsu;