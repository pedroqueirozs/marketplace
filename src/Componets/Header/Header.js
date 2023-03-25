import "./header.css";

function Header() {
  return (
    <>
      <div className="container">
        <span className="logo">Qtec</span>
        <input type="text" placeholder="Buscar"></input>
        <div className="navbar">
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <a href="#">Entrar</a>
        </div>
      </div>
    </>
  );
}
export default Header;
