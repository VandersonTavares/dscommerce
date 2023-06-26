import { useState } from "react";

const ButtonAdd = () => {
  const [valor, setValor] = useState(1);

  function aumentar() {
    setValor((valor) => valor + 1);
  }

  function diminuir() {
    if (valor <= 0) {
      return 0;
    }
    setValor((valor) => valor - 1);
  }

  return (
    <div className="buttonAdd">
      <button onClick={diminuir} className="text-[#3483FA] font-bold mr-1">
        -
      </button>
      <span className="text-[#636363] font-bold">{valor}</span>
      <button onClick={aumentar} className="text-[#3483FA] font-bold ml-1">
        +
      </button>
    </div>
  );
};

export default ButtonAdd;
