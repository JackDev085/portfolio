export default function ProjetoCard(){
    return(
        <div className="projeto">

            <div>
                <img className="w-full" src="/example.png" alt="" />
                
            </div>

            <div className="info-projeto p-5 py-13">
                
                <h2 className="text-3xl font-bold pb-5">
                    Project name here
                </h2>

                <p className="pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum enim modi quidem unde nihil dolore.</p>

                <div className="tags flex gap-2 mb-13">
                    <span className="bg-gray-300 px-2 py-1 rounded-msm">tag one</span>
                    <span className="bg-gray-300 px-2 py-1 rounded-msm">tag one</span>
                    <span className="bg-gray-300 px-2 py-1 rounded-msm">tag one</span>
                </div>

                    <div className="info-projeto-core grid grid-cols-2 gap-4 my-8">
                        <div className="info-core">
                            <h3 className="font-bold">Cliente</h3>
                            <span>full name</span>
                        </div>

                        <div className="info-core">
                            <h3 className="font-bold">Date</h3>
                            <span>march 2023</span>
                        </div>

                        <div className="info-core">
                            <h3 className="font-bold">Role</h3>
                            <span>role name</span>
                        </div>

                        <div className="info-core">
                            <h3 className="font-bold">Website</h3>
                            <span>www.site.com</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}