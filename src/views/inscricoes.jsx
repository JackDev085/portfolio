export default function(){
    return (
        <div id="modalidades" className="
        mx-3
        mt-12 lg
        lg:mx-10
        lg:my-28

        ">
            <h2 className="my-10 mb-6 text-2xl text-center font-bold uppercase lg:text-4xl lg:my-10">Inscrições Abertas!</h2>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-3">
                <div className="card grid mx-auto gap-2 border-1 border-gray-200 py-10 p-3 shadow-1xl rounded-xl ">
                    <h3 className="sm:text-xs font-bold text-gray-900 capitalize lg:text-2xl">Basquete Avançado</h3>
                    <p className="text-x">Treine com professores qualificados e se desafie em uma equipe dinâmica com treinos de tirar o fôlego. Com foco em competições é a melhor escolha entre desempenho e evolução.</p>
                    <div className="info-card my-2">
                        <p className="text-gray-600"><strong className="text-gray-600">Local:</strong> Colégio juvenal de carvalho ( <a className="text-blue-500" href="#locais"> Localização </a> )</p>
                        <p className="text-gray-600"><strong className="text-gray-600">Horário: </strong>19:00 - 21:00</p>
                    </div>
                    <button onClick={()=>window.location.href="https://forms.gle/rXKqcDfGQ2Rwn8gn7"} className="sm:text-xss bg-purple-900 text-purple-100 justify-self-start px-4 py-2 font-medium lg:px-6 lg:py-3 lg:text-xs rounded-xs transition-all
                    cursor-pointer
                    hover:bg-purple-800" >Matricule-se já</button>
                </div>

                <div className="card grid mx-auto gap-2 border-1 border-gray-200 py-10 p-3 shadow-1xl rounded-xl">
                    <h3 className="sm:text-xs font-bold text-gray-900 capitalize lg:text-2xl">Vôlei</h3>
                    <p className="text-x"> Treine com professores qualificados e vivencie a emoção do vôlei em uma equipe dinâmica. Aprimore suas habilidades, participe de jogos desafiadores e evolua em um ambiente acolhedor e competitivo.</p>
                    <div className="info-card my-2">
                        <p className="text-gray-600"><strong className="text-gray-600">Local:</strong> Serpro ( <a className="text-blue-500" href="#locais"> Localização </a> )</p>
                        <p className="text-gray-600"><strong className="text-gray-600">Horário: </strong>18:30 - 19:30</p>
                    </div>
                    <button onClick={()=>window.location.href="https://forms.gle/rXKqcDfGQ2Rwn8gn7"} className="sm:text-xss bg-purple-900 text-purple-100 justify-self-start px-4 py-2 font-medium lg:px-6 lg:py-3 lg:text-xs rounded-xs transition-all
                    cursor-pointer
                    hover:bg-purple-800" >Matricule-se já</button>

                </div>

                <div className="card grid mx-auto gap-2 border-1 border-gray-200 py-10 p-3 shadow-1xl rounded-xl">
                    <h3 className="sm:text-xs font-bold text-gray-900 capitalize lg:text-2xl">Basquete iniciação</h3>
                    <p className="text-x">Ideal para quem está começando, o basquete iniciação ensina fundamentos básicos, trabalho em equipe e promove o desenvolvimento físico de forma divertida.</p>
<div className="info-card my-2">
                        <p className="text-gray-600"><strong className="text-gray-600">Local:</strong> Serpro ( <a className="text-blue-500" href="#locais"> Localização </a> )</p>
                        <p className="text-gray-600"><strong className="text-gray-600">Horário: </strong>19:30 - 21:00</p>
                    </div>
                    <button onClick={()=>window.location.href="https://forms.gle/rXKqcDfGQ2Rwn8gn7"} className="sm:text-xss bg-purple-900 text-purple-100 justify-self-start px-4 py-2 font-medium lg:px-6 lg:py-3 lg:text-xs rounded-xs transition-all
                    cursor-pointer
                    hover:bg-purple-800" >Matricule-se já</button>

                </div>
            </div>
        </div>
    )
}