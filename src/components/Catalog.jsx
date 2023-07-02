import img from "../assets/img/image 3.png";

const Catalog = () => {
  return (
    <section className="catalog bg-white">
      <div className="container mx-auto max-w-6xl border mt-5">

        <div className="flex flex-wrap gap-5 justify-center">

          <div className="card w-full sm:w-[223px]  border rounded-md bg-white ">
            <div className="min-h-[170px] imagem flex items-center justify-center border-b-2">
              <img src={img} alt="" width={150} height={150} />
            </div>
            <div className="min-h-[110px]">
              <h1 className="text-[color:var(--dsPriceText)] font-bold text-xl">
                R$ 5000,00
              </h1>
              <span className="text-[color:var(--dsItemName)] font-bold text-xs">
                Computador Gamer XT
              </span>
            </div>
          </div>

          <div className="card w-full sm:w-[223px]  border rounded-md bg-white ">
            <div className="min-h-[170px] imagem flex items-center justify-center border-b-2">
              <img src={img} alt="" width={150} height={150} />
            </div>
            <div className="min-h-[110px]">
              <h1 className="text-[color:var(--dsPriceText)] font-bold text-xl">
                R$ 5000,00
              </h1>
              <span className="text-[color:var(--dsItemName)] font-bold text-xs">
                Computador Gamer XT
              </span>
            </div>
          </div>

          <div className="card w-full sm:w-[223px]  border rounded-md bg-white ">
            <div className="min-h-[170px] imagem flex items-center justify-center border-b-2">
              <img src={img} alt="" width={150} height={150} />
            </div>
            <div className="min-h-[110px]">
              <h1 className="text-[color:var(--dsPriceText)] font-bold text-xl">
                R$ 5000,00
              </h1>
              <span className="text-[color:var(--dsItemName)] font-bold text-xs">
                Computador Gamer XT
              </span>
            </div>
          </div>

          <div className="card w-full sm:w-[223px]  border rounded-md bg-white ">
            <div className="min-h-[170px] imagem flex items-center justify-center border-b-2">
              <img src={img} alt="" width={150} height={150} />
            </div>
            <div className="min-h-[110px]">
              <h1 className="text-[color:var(--dsPriceText)] font-bold text-xl">
                R$ 5000,00
              </h1>
              <span className="text-[color:var(--dsItemName)] font-bold text-xs">
                Computador Gamer XT
              </span>
            </div>
          </div>

          <div className="card w-full sm:w-[223px]  border rounded-md bg-white ">
            <div className="min-h-[170px] imagem flex items-center justify-center border-b-2">
              <img src={img} alt="" width={150} height={150} />
            </div>
            <div className="min-h-[110px]">
              <h1 className="text-[color:var(--dsPriceText)] font-bold text-xl">
                R$ 5000,00
              </h1>
              <span className="text-[color:var(--dsItemName)] font-bold text-xs">
                Computador Gamer XT
              </span>
            </div>
          </div>
             
        </div>
      </div>
    </section>
  );
};

export default Catalog;
