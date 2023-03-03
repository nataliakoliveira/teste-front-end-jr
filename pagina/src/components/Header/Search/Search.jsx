import React from "react";
import './Search.css';
import simbolo from './imgs/simbolo.png'
import V from './imgs/V.png'
import T from './imgs/T.png'
import E from './imgs/E.png'
import X from './imgs/X.png'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Search = () =>{
    return(
        <div>
            <div className="header-linhaNav">
                <div class="header-mid__logo-container">
                    
                <img src={simbolo} alt="Logo VTEX"/>
                    <img src={V} alt="V" />
                    <img src={T} alt="T" />
                    <img src={E} alt="E" />
                    <img src={X} alt="X" />
                </div>
                <div className="header-mid__search-container">
                   
                    <input type="text" class="header-form-control" placeholder="O que você está buscando?" />
                    </div>
                <div className="header-colunaIcons">
                    <div class='header-mid__icons-container:last-child'>
                        <AiOutlineCodeSandbox size={42} />
                        <AiOutlineHeart size={42} />
                        <BiUserCircle size={42} />
                        <AiOutlineShoppingCart size={42} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;