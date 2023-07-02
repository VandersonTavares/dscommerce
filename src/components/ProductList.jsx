import img3 from "../assets/img/image 3.png";

import pen1 from "../assets/img/pen-1.svg";
import trash1 from "../assets/img/trash-1.svg";

import SearchBar from "./SearchBar";

const ProductList = () => {
  return (
    <section className="product-list mx-5">
      <div className="container mx-auto max-w-6xl">
        <div className="top flex flex-col justify-center gap-5 mt-5">
          <h1 className="text-center text-[color:var(--dsHeaderTitle)] text-base font-bold">
            Cadastro de Produtos
          </h1>
          <button className="bg-[color:var(--dsSecondaryButtonBg)] text-[color:var(--dsSecondaryButtonText)] px-4 py-2 sm:w-56 font-bold text-base rounded">
            Novo
          </button>
        </div>
        <SearchBar />

        <table className="w-full border-spacing-0 border-collapse">
          <thead className="bg-white h-14">
            <th>ID</th>
            <th></th>
            <th>Preço</th>
            <th className="text-left text-sm font-bold text-[color:var(--dsHeaderTitle)]">
              Nome
            </th>
            <th></th>
            <th></th>
          </thead>
          <tbody className="bg-white text-center">
            <tr className="border-t-2">
              <td>341</td>
              <td className="flex justify-center">
                <img className="w-16 h-16" src={img3} alt="computer" />
              </td>
              <td>R$ 5000,00</td>
              <td className="text-xs text-left font-normal text-[color:var(--dsItemName)]">
                Computador Gamer XT Plus Ultra
              </td>
              <td>
                <img
                  className="w-5 h-5 cursor-pointer m-1"
                  src={pen1}
                  alt="editar"
                />
              </td>
              <td>
                <img
                  className="w-5 h-5 cursor-pointer m-1"
                  src={trash1}
                  alt="excluir"
                />
              </td>
            </tr>

            <tr className="border-t-2">
              <td>341</td>
              <td className="flex justify-center">
                <img className="w-16 h-16" src={img3} alt="computer" />
              </td>
              <td>R$ 5000,00</td>
              <td className="text-xs text-left font-normal text-[color:var(--dsItemName)]">
                Computador Gamer XT Plus Ultra
              </td>
              <td>
                <img
                  className="w-5 h-5 cursor-pointer m-1"
                  src={pen1}
                  alt="editar"
                />
              </td>
              <td>
                <img
                  className="w-5 h-5 cursor-pointer m-1"
                  src={trash1}
                  alt="excluir"
                />
              </td>
            </tr>

            <tr className="border-t-2">
              <td>341</td>
              <td className="flex justify-center">
                <img className="w-16 h-16" src={img3} alt="computer" />
              </td>
              <td>R$ 5000,00</td>
              <td className="text-xs text-left font-normal text-[color:var(--dsItemName)]">
                Computador Gamer XT Plus Ultra
              </td>
              <td>
                <img
                  className="w-5 h-5 cursor-pointer m-1"
                  src={pen1}
                  alt="editar"
                />
              </td>
              <td>
                <img
                  className="w-5 h-5 cursor-pointer m-1"
                  src={trash1}
                  alt="excluir"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col mt-5">
          <button className="bg-[color:var(--dsSecondaryButtonBg)] text-[color:var(--dsSecondaryButtonText)] px-4 py-2 sm:w-56 font-bold text-base rounded">
            Carregar Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
