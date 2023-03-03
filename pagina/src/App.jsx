import BannerPrincipal from './components/BannerPrincipal/BannerPrincipal';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Produtos from './components/Relacionados/ProdutosRelacionados';
import Loja from './components/Categorias/Categorias';
import ImagemParceiros from './components/ImagemParceiros/ImagemParceiros';
import RelacionadosBottom from './components/RelacionadosBottom/Relacionados2';
import ImagemProdutos from './components/ImagemProdutos/ImagemProdutos';
import Brands from './components/Brands/Brands';

function App() {
  return (
    <div>
      <Header></Header>
      <BannerPrincipal></BannerPrincipal>
      <Loja />
      <Produtos />
      <ImagemParceiros />
      <RelacionadosBottom />
      <ImagemProdutos />
      <RelacionadosBottom/>
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
