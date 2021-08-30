import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import logoTO from './imgs/logo.png'
import loginEmpPng from './imgs/EntrarEmpresa.png'
import cadDenu from './imgs/botaoDenu.png'
import loginUsuPng from './imgs/entrarUsuario.png'
import './teste.css'
import cadUsuPng from './imgs/Cadastrar Usuario.png'
import usuLogo from './imgs/user 1.png'
import alterarImg from './imgs/Alterar.png'
import sair from './imgs/Sair.png'
import denu from './imgs/botaoDenu.png'
import acompDenu from './imgs/Acompanhar Denuncias.png'
import coleta from './imgs/botaoColeta.png'
import acompCol from './imgs/Acompanhar Coletas.png'
import {Link} from 'react-router-dom';


function TelaUsu() {
  const history = useHistory();
  console.log(localStorage.getItem('usu_login'));
  

  function alterar()
  {
    localStorage.setItem('alterar',true);
    history.push('/cadUsu');
  }

  function logout(){
    localStorage.clear();
    history.push('/');
  }

  return (
    <body>
        <header>
          <div className="cabeca">
            <Link onClick={logout}>
                    <img src={logoTO}></img>
            </Link>
          </div>
          <div className="cabeca">
            <div>
              <div className="box2">
                <h1>{localStorage.getItem('usu_login')}</h1>
              </div>
              <div className="box2">
                <img src={usuLogo}></img>
              </div>
            </div>
            <div>
              <div className="box2">
                <Link onClick={alterar}>
                  <img src={alterarImg} width="100"></img>
                </Link>
              </div>
              <div className="box2">
                <Link onClick={logout}>
                  <img src={sair}  width="65"></img>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div class="cabeca">
          <div className="box">
            <div>
              <img src={denu}></img>
            </div>
            <div>
              <img src={acompDenu}></img>
            </div>
          </div>
          <div className="box">
            <div>
              <Link to="/cadColeta">
              <img src={coleta}></img>
              </Link>
            </div>
            <div>
              <img src={acompCol}></img>
            </div>
          </div>
        </div>
    </body>
  );
}

export default TelaUsu;
