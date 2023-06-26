const DefaultButton = () => {
  return (
    <div className="buttons mx-auto max-w-6xl flex flex-col gap-2 pt-5">
        <button className="bg-[color:var(--dsDefaultButtonBg)] text-[color:var(--dsDefaultButtonText)] px-4 py-2 sm:w-56 font-bold text-base rounded">
          Comprar
        </button>
        {/* <button className="bg-[color:var(--dsSecondaryButtonBg)] text-[color:var(--dsSecondaryButtonText)] px-4 py-2 sm:w-56 font-bold text-base rounded border-[1px] border-[#3483FA]">
          Início
        </button> */}
      </div>
  )
}

export default DefaultButton