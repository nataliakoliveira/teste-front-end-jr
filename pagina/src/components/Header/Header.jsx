import React from "react";
import "./Header.css";

import {BiCheckShield} from 'react-icons/bi';
import {FiTruck} from 'react-icons/fi'
import {BsCreditCard} from 'react-icons/bs';
import Search from "./Search/Search";

const Header = () => {
  return (
    <header>
        <div>
            <div className="linhaIcones">
                <div class="colunaIcone">
                    <BiCheckShield size={25} className="icone"/>
                    Compra <span>100% segura</span>
                </div>
                <div className="colunaIcone">
                   <FiTruck size={25} className="icone"/>
                    <span>Frete grátis</span> acima de R$200
                    </div>
                <div className="colunaIcone">
                    <BsCreditCard size={25} className="icone"/>
                    <span>Parcele</span> suas compras
                    </div>
            </div>
        </div>
        <div>
          <Search></Search>
        </div>
      <div className="linhaCategorias">
                <div class="colunaCategoria">TODAS AS CATEGORIAS</div>
                <div class="colunaCategoria">SUPERMERCADO</div>
                <div class="colunaCategoria">LIVROS</div>
                <div class="colunaCategoria">MODA</div>
                <div class="colunaCategoria">LANÇAMENTOS</div>
                <div class="colunaCategoria"><span>OFERTAS DO DIA</span></div>
                <div class="colunaCategoria">ASSINATURA</div>
            </div>
    </header>
  );
}

export default Header;