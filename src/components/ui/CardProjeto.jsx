export default function ProjetoCard({titulo, img, tags=[], cliente,full_name, descricao, data, role, website}) {
    return(
        <div className="projeto">

            <div>
                <img className="w-full  bg-gray-900" src={img} alt={"${img} imagem projeto"} />
                
            </div>

            <div className="info-projeto p-5 py-13">
                
                <h2 className="text-4xl font-bold pb-5">
                    {titulo}
                </h2>

                <p className="pb-5 text-xl">{descricao}</p>

               { tags.length > 0 && ( <div className="tags flex gap-2 mb-13 flex-wrap">
                    {tags.map((tag,index) => (
                        console.log(tag),
                        <span key={index} className="bg-purple-100 text-gray-800 px-4 py-2 rounded-msm">{tag}</span>
                    ))}
                </div>)}

                    <div className="info-projeto-core flex flex-col gap-4 my-8">
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

                        <div className="info-core">
                            <h3 className="font-bold">Website</h3>
                            <span>{website}</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}