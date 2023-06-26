import img3 from "../assets/img/image 3.png";

import ButtonAdd from "./ButtonAdd";

const Cart = () => {
  return (
    <section className="cart px-5">
      <div className="container mx-auto max-w-6xl bg-white rounded mt-5">

        <div className="item flex flex-wrap justify-between border-b-2">
          <div className="flex">
            <img className="mx-5" src={img3} alt="" width={78} height={78} />
            <div className="item-name flex flex-col">
              <h2 className="text-xs font-bold pt-2 text-[color:var(--dsItemName)]">
                Computador Gamer XT
              </h2>
              <ButtonAdd />
            </div>
          </div>
          <div className="item-price ">
            <span className="px-5 text-[color:var(--dsPriceText)] font-bold text-xs">
              R$ 5000,00
            </span>
          </div>
        </div> 

        <div className="itens-total flex justify-start p-2 px-5">
          <span className="text-[color:var(--dsPriceText)] font-bold text-lg">R$ 15000,00</span>
        </div>
      </div>
    </section>
  );
};

export default Cart;
