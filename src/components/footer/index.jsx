export default function Footer() {
    return (
        <footer className="mt-20 w-full min-h-20 ext-center bg-gray-900 pt-2">
             <div className="text-gray-300 p-2">
                <h4>Contato</h4>
                <div className="links flex gap-2 mt-2">

                    <div className="relative link">
                        <img className="w-6 " src="/whatsapp.svg" alt="" />
                        <a className="absolute top-0 left-0 right-0 bottom-0" href="https://wa.me/5585996136140?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site.%20Gostaria%20de%20......."></a>
                    </div>

                    <div className="relative link">
                        <img className="w-6 " src="/instagram.svg" alt="" />
                        <a className="absolute top-0 left-0 right-0 bottom-0" href="https://www.instagram.com/bpateam_/"></a>
                    </div>
                </div>
            </div>
            <p className="text-center text-gray-400">2025 | BPA</p>
        </footer>
    );
}