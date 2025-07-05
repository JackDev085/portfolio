export default function Locais(){
    return (
        <div id="locais">
            <h2 className="my-10 text-2xl text-center font-bold uppercase lg:text-4xl ">Locais de treino</h2>
            <div className="locais mx-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:mx-10">
                <div className="local">
                    <div className="local-img">
                        <img
                        className="w-1/1" src="/local1.png" alt="" />
                    </div>
                    <div className="card img-info p-2 pb-8 grid mx-auto gap-1 border-1 border-gray-200 shadow-1xl">
                        <h3 className="font-bold">Juvenal de carvalho</h3>
                        <p className="text-gray-600 ">Av. João Pessoa, 4279 - Damas, Fortaleza - CE, 60425-813</p>
                        <div className="button-maps">
                               <button className="border-1 border-purple-400 bg-purple-300 py-3 px-4 w-full text-purple-900 rounded-xs font-semibold text-md transition-all
                    cursor-pointer
                    hover:bg-purple-800 hover:text-purple-300" onClick={()=>{
                                window.location.href="https://maps.app.goo.gl/pj5tcGY8G9FCiiu28"
                            }}>

                                
                                Ver no maps
                            </button>
                               
                            
                        </div>
                    </div>

                    
                </div>

                <div className="local">
                    <div className="local-img">
                        <img
                        className="w-1/1" src="/local2.png" alt="" />
                    </div>
                    <div className="card img-info pb-8 p-2 grid mx-auto gap-1 border-1 border-gray-200 shadow-1xl">
                        <h3 className="font-bold">Serpro</h3>
                        <p className="text-gray-600 ">Av. Pontes Vieira, 832 - São João do Tauape, Fortaleza - CE, 60130-240</p>
                        <div className="maps-button">
                           
                                <button className="border-1 border-purple-400 bg-purple-300 py-3 px-4 w-full text-purple-900 rounded-xs font-semibold text-md transition-all
                    cursor-pointer
                    hover:bg-purple-800 hover:text-purple-300" onClick={()=>{

                                window.location.href=" https://maps.app.goo.gl/pEPUEEv1hbxeppuX8"
                            }}>

                                
                                Ver no maps
                            </button>
                         
                            
                        </div>
                    </div>

                    
                </div>

                
            
            </div>
        </div>
    )
}