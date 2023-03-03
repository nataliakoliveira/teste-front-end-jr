import React from 'react';
import CategoriasLoja from './CategoriasLoja';
import './Categorias.css'

const categorias = [
  { texto: 'Tecnologia', icone: 'fa-solid fa-computer fa-4x' },
  { texto: 'Supermercado', icone: 'fa-solid fa-shop fa-4x' },
  { texto: 'Bebidas', icone: 'fa-solid fa-champagne-glasses fa-4x' },
  { texto: 'Ferramentas', icone: 'fa-solid fa-screwdriver-wrench fa-4x' },
  { texto: 'Saúde', icone: 'fa-solid fa-suitcase-medical fa-4x' },
  { texto: 'Esportes e Fitness', icone: 'fa-solid fa-person-running fa-4x' },
  { texto: 'Moda', icone: 'fa-solid fa-shirt fa-4x' },
];

const Loja = () => {
  return (
    <div class='marcas'>
      <div class='conteudo'>
        {categorias.map((categoria) => (
          <CategoriasLoja texto={categoria.texto} icone={categoria.icone} />
        ))}
      </div>
    </div>
  );
};

export default Loja;
