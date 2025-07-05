export default function Gerencia(){

    return (
        <div id="gerencia" className="gerencia mx-4 gap-3 lg:mx-10">
            <h2 className="my-10 mb-6 text-2xl text-center font-bold uppercase lg:text-4xl lg:my-10">Conheça nossa gerência</h2>
                <div className=" grid gap-3 mx4 md:grid-cols-3">

                <div className="card-gerencia bg-gray-100 py-4 border-1 border-gray-300 rounded-xs">
                    <img className="rounded-full w-50 border-4 mx-auto border-purple-600" src="/2.png" alt="" />
                    <div className="info-card text-center">
                        <h3 className="font-bold text-xl">Carlos Eduardo </h3>
                        <p className="text-gray-800">Diretor | CEO</p>
                        <span className="text-gray-600 text-xs">Formado em administração de empresas</span>
                    </div>
                </div>

                <div className="card-gerencia bg-gray-100 py-4 border-1 border-gray-300 rounded-xs">
                    <img className="rounded-full w-50 border-4 mx-auto border-purple-600" src="/4.png" alt="" />
                    <div className="info-card text-center">
                        <h3 className="font-bold text-xl">Deah D'Avila</h3>
                        <p className="text-gray-800">Diretor | CEO</p>
                        <span className="text-gray-600 text-xs">Formada em educação física</span>
                    </div>
                </div>

                <div className="card-gerencia bg-gray-100 py-4 border-1 border-gray-300 rounded-xs">
                    <img className="rounded-full w-50 border-4 mx-auto border-purple-600" src="/5.png" alt="" />
                    <div className="info-card text-center">
                        <h3 className="font-bold text-xl">Isabela Lima </h3>
                        <p className="text-gray-800">Diretor | CEO</p>
                        <span className="text-gray-600 text-xs">Formada em educação física</span>
                    </div>
                </div>

            </div>

 
        </div>
    )
}