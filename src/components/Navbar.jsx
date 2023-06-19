import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500">
      <div className="container h-12 mx-auto max-w-6xl flex justify-between items-center">
        <h1 className="text-[#636363] font-bold text-xl">DSCommerce</h1>
        <div className="login flex items-center justify-center gap-5 text-[#636363]">
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
