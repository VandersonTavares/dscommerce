const Login = () => {
    return (
        <section className="login-screen">
            <div className="container mx-auto max-w-6xl flex justify-center">
                <div className="login-card bg-white m-5 rounded text-center p-5 h-[304px] w-full border max-w-[360px]">
                    <h1 className="text-md text-[#636363] font-base">LOGIN</h1>
                    <form className="flex flex-col gap-5 mt-5">
                        <div className="flex flex-col">
                            <input className="h-10 border px-5 focus:outline-none rounded border-red-500" type="text" placeholder="Email" />
                            <div className="text-[#ff3333] text-xs pl-2 text-left">Campo Obrigatório</div>
                        </div>
                        <input className="h-10 border px-5 focus:outline-none rounded mb-5" type="password" name="" id="" placeholder="Senha" />
                        <button className="py-2 w-full bg-[#3483FA] text-white font-bold text-base rounded">Entrar</button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Login