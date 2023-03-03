import React from "react";
import ProductCarousel from "./AllProducts";
import './ProdutosRelacionados.css';

const ProdutosRelacionados = () => {
  return (
    <section className='container-produtos'>
      <div className='titulo-produtos'> 
        <h1 className='titulo'>Produtos Relacionados</h1>
        <nav className="categorias">
          <div className="categoria">CELULAR</div>
          <div className="categoria">ACESSÓRIOS</div>
          <div className="categoria">TABLETS</div>
          <div className="categoria">NOTEBOOKS</div>
          <div className="categoria">TVS</div>
          <div className="categoria">VER TODOS</div>
        </nav>
      </div> 
      <div className='container-produtos2'>
        <ProductCarousel/>
      </div>
    </section>
  )
}

export default ProdutosRelacionados;
