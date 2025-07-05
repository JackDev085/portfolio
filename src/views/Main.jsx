export default function Main() {
    
    return (
        <>
            <main
                className="
                main
                my-20
                mx-5 
                md:my-20
                md:mx-10
                lg:my-28
                lg:mx-20
                min-h-fit
                "
            >
                <div className="
                container-hero
                grid
                md:grid-cols-2
                md:gap-10
                lg:gap-10
                items-center
                md:my-0
                md:mx-auto
                ">

                <div className="hero-text
                grid 
                items-center 
                justify-center">
                    <h1
                        className="
                        mb-4
                        text-5xl
                        md:text-5xl
                        lg:mb-6
                        lg:text-8xl
                        font-bold
                        text-gray-900
                        "
                        >
                        Treine com o BPA DL
                    </h1>
                    <p
                        className="
                        text-1xl
                        mb-5
                        text-gray-800
                        font-normal
                        "
                        >
                        Bem-vindo ao BPA DL, onde a paixão pelo esporte encontra a excelência no ensino. Oferecemos uma variedade de modalidades para todos os níveis, com profissionais qualificados e uma estrutura moderna. 
                    </p>
                    <button onClick={()=>
                    
                    window.location.href="#modalidades"} className="
                    mb-15
                    bg-purple-900
                    text-gray-50
                    px-6 py-3 
                    font-semibold 
                    text-1xl 
                    justify-self-start

                    transition-all
                    cursor-pointer
                    hover:bg-purple-800
                    
                    md:mb-0
                    ">
                        Saber mais
                    </button>
                </div>
                <div className="
                hero-img
                ">
                    <img src ="hero.png"
                        alt="Banner BPA DL"
                    />
                    <div className="text-center my-6 mt-2">
                    <span className="text-center ">Campeão 2024 | 2025 Liga cearense série B</span>
                </div>
                </div>
                
            </div>
            </main>
        </>
    );
}
