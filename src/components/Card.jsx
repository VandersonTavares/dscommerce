import img3 from "../assets/img/image 3.png";

const Card = () => {
  return (
    <div className="item-card">
        <div className="top w-[300px]">
            <img src={img3} alt="img" height={150} width={150}/>
        </div>
        <div className="bot">
            <h1>R$ 5000,00</h1>
            <span>Computador Gamer XT</span>
        </div>
    </div>
  )
}

export default Card