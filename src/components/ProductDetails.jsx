import img from "../assets/img/image 3.png";

const ProductDetails = () => {
  return (
    <section className="details px-5">
      <div className="container mx-auto max-w-6xl bg-white mt-5 rounded-md">
        <div className="upper border-b-2 flex justify-center h-[239px]">
          <div className="image w-[220px]">
            <img src={img} alt="imagem-pc" />
          </div>
        </div>
        <div className="bottom min-h-[180px] px-5 pt-2">
          <h1 className="text-[#0CAF1D] font-bold text-xl">R$ 5000,00</h1>
          <span className="font-bold text-xs font-open text-[#636363]">
            Computador Gamer XT
          </span>
          <p className="font-normal text-xs font-open">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="categories py-5 flex flex-col sm:flex-row gap-1">
            <button className="bg-[#636363] rounded-[4px] w-28 h-8 text-center text-white text-xs font-bold mb-1">
              Eletrônicos
            </button>
            <button className="bg-[#636363] rounded-[4px] w-28 h-8 text-center text-white text-xs font-bold mb-1">
              Computadores
            </button>
          </div>
        </div>
      </div>
      <div className="buttons mx-auto max-w-6xl flex flex-col gap-2 pt-5">
        <button className="bg-[#3483FA] text-white px-4 py-2 sm:w-56 font-bold text-base rounded">
          Comprar
        </button>
        <button className="bg-white text-[#3483FA] px-4 py-2 sm:w-56 font-bold text-base rounded border-[1px] border-[#3483FA]">
          Início
        </button>
      </div>
    </section>
  );

  
};

export default ProductDetails;
