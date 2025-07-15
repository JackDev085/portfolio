export default function ProjetoCard({titulo, img, tags=[], cliente,full_name, descricao, data, role, website}) {
    return(
        <div className="projeto border-1 border-gray-400 rounded-sm">

            <div>
                <img className="w-full border-b-1 border-b-gray-300 rounded-t-sm  bg-gray-900" src={img} alt={"${img} imagem projeto"} />
                
            </div>

            <div className="info-projeto p-2 py-8">
                
                <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-gray-800">
                    {titulo}
                </h2>
                <a target="_blank" href={website} className="block pt-1 mb-5 text-blue-600 underline">{website}</a>


                <p className="pb-5">{descricao}</p>

               { tags.length > 0 && ( <div className="tags flex gap-2 mb-13 flex-wrap">
                    {tags.map((tag,index) => (
                        console.log(tag),
                        <span key={index} className="bg-purple-100 text-gray-800 px-4 py-2 rounded-msm">{tag}</span>
                    ))}
                </div>)}

                    <div className="info-projeto-core grid grid-cols-2 gap-4 my-8">
                        <div className="info-core">
                            <h3 className="font-bold">cliente</h3>
                            <span>{full_name}</span>
                        </div>

                        <div className="info-core">
                            <h3 className="font-bold">Data</h3>
                            <span>{data}</span>
                        </div>

                        <div className="info-core">
                            <h3 className="font-bold">Tipo</h3>
                            <span>{role}</span>
                        </div>


                    </div>
            </div>
        </div>
    )
}
