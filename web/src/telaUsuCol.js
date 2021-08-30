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
    const [coleta, setColeta] = useState([]); 

  return (
    <body>
        <header>
          <div className="cabeca"> 
             <Link to="/telaUsu">
                <img src={logoPng}></img>
             </Link> 
                <h2>MINHAS SOLICITAÇÕES DE COLETAS</h2>
                <Link to="/telaUsu">
                <h2>VOLTAR</h2>
                </Link>
          </div>
        </header>
        <div className="cabeca">
            <div className="box">
                <div className="tabelas">
                     <div>
                        <h1 className="cadLetra"> 
                            BAIRRO
                        </h1>
                    </div>
                    
                </div>
            </div>
        </div>
    </body>
  );
}

export default CadUsu;
