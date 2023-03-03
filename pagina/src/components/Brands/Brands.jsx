import "./Brands.css";
import simbolo from "./imgs/simbolo.png";
import V from "./imgs/V.png";
import T from "./imgs/T.png";
import E from "./imgs/E.png";
import X from "./imgs/X.png";

export default function BrowseBrands() {
  const brands = [1, 2, 3, 4, 5]; // array of five items

  return (
    <nav className="nav-brands">
      <header className="brand-title">
        <h1 className="title">Navegue por marcas</h1>
      </header>
      <section className="brand-items">
        {brands.map((brand) => (
          <article className="brand-circle" key={brand}>
            <img src={simbolo} alt="VTEX Logo" />
            <img src={V} alt="V" />
            <img src={T} alt="T" />
            <img src={E} alt="E" />
            <img src={X} alt="X" />
          </article>
        ))}
      </section>
    </nav>
  );
}
