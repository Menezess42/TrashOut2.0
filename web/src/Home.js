import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from './api';
import logoTO from './imgs/logo.png'
import loginEmpPng from './imgs/EntrarEmpresa.png'
import cadEmpPng from './imgs/Cadastrar Empresa.png'
import loginUsuPng from './imgs/entrarUsuario.png'
import './teste.css'
import cadUsuPng from './imgs/Cadastrar Usuario.png'
import {Link} from 'react-router-dom';
function Home() {
  const history = useHistory();
 // console.log(localStorage.getItem('usu_login'));
  return (
    <body>
        <div className="cabeca">
          <img src={logoTO}></img>
        </div>
        <div className="cabeca">
          <div className="box">
            <div>
              <Link to="/loginEmp">
               <img src={loginEmpPng}></img>
             </Link>
           </div>
           <div>
            <Link to="/cadEmp">
             <img src={cadEmpPng}></img>
            </Link>
          </div>
        </div>
          <div className="box">
            <div>
              <Link to="/loginUsu">
                <img src={loginUsuPng}></img>
              </Link>
            </div>
            <div>
				      <Link  to="/cadUsu">
				        <img src={cadUsuPng}></img>
				      </Link>
			      </div>
          </div>
        </div>
        
    </body>
  );
}

export default Home;
