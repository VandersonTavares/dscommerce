import img3 from "../assets/img/image 3.png";

const Cart = () => {
    return (
        <section className="cart">
            <div className="container mx-auto max-w-6xl">
                <div className="card bg-white m-5 rounded">

                    <div className="item-cart flex p-2 border-b-2 ">
                        <div className="image mr-4">
                            <img src={img3} alt="" width={78} height={78} />
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="item-qtd">
                                <h1 className="text-[#636363] font-bold text-base">Computador Gamer XT</h1>
                                <span className="text-blue-500 font-bold text-[20px]">-</span> <span className="font-bold">1</span> <span className="text-blue-500 font-bold text-[20px]">+</span>
                            </div>
                            <div className="item-price">
                                <span className="price text-base">R$ 5000,00</span>
                            </div>
                        </div>
                    </div>

                    <div className="item-cart flex p-2 border-b-2 ">
                        <div className="image mr-4">
                            <img src={img3} alt="" width={78} height={78} />
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="item-qtd">
                                <h1 className="text-[#636363] font-bold text-base">Computador Gamer XT</h1>
                                <span className="text-blue-500 font-bold text-[20px]">-</span> <span className="font-bold">1</span> <span className="text-blue-500 font-bold text-[20px]">+</span>
                            </div>
                            <div className="item-price">
                                <span className="price text-base">R$ 5000,00</span>
                            </div>
                        </div>
                    </div>

                    <div className="itens-total flex justify-end p-2">
                        <span className="price text-lg">R$ 15000,00</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart