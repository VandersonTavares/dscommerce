import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-[color:var(--dsNavbarBg)] px-5">
      <div className="container h-12 mx-auto max-w-6xl flex justify-between items-center">
        <h1 className="text-[color:var(--dsNavbarText)] font-bold text-xl">DSCommerce</h1>
        <div className="login flex items-center justify-center gap-5 text-[color:var(--dsItemName)]">
          <a href="#">
            <BsFillCartFill size={17} title="Ir para o Carrinho"/>
          </a>
          <a href="#" className="font-bold">
            Entrar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
