import img from "../assets/img/image 3.png";

import DefaultButton from "./DefaultButton";

const ProductDetails = () => {
  return (
    <section className="details px-5">
      <div className="container mx-auto max-w-6xl bg-[color:var(--dsCardBg)] mt-5 rounded-md">
        <div className="upper border-b-2 flex justify-center h-[239px]">
          <div className="image w-[220px]">
            <img src={img} alt="imagem-pc" />
          </div>
        </div>
        <div className="bottom min-h-[180px] px-5 pt-2">
          <h1 className="text-[color:var(--dsPriceText)] font-bold text-xl">R$ 5000,00</h1>
          <span className="font-bold text-xs text-[color:var(--dsItemName)]">
            Computador Gamer XT
          </span>
          <p className="font-normal text-xs text-[color:var(--dsItemDetails)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="categories py-5 flex flex-col sm:flex-row gap-1">
            <button className="bg-[color:var(--dsCategoryBg)] rounded-[4px] w-28 h-8 text-center text-[color:var(--dsCategoryText)] text-xs font-bold mb-1">
              Eletrônicos
            </button>
            <button className="bg-[color:var(--dsCategoryBg)] rounded-[4px] w-28 h-8 text-center text-[color:var(--dsCategoryText)] text-xs font-bold mb-1">
              Computadores
            </button>
          </div>
        </div>
      </div>
      
      <DefaultButton />

    </section>
  );

  
};

export default ProductDetails;
