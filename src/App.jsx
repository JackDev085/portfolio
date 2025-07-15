import Header from './components/header'
import Footer from './components/footer'
import ProjetoCard from './components/ui/CardProjeto'

function App() {

  return (
    <>
      <Header />
    <div className='min-h-screen max-w-4xl mx-auto'>
      <div className='max-w-7xl mx-auto px-4 py-8 grid sm:grid-cols-2 gap-2'>
        <ProjetoCard 
        titulo="Ballers085" 
        img="ballers085.png" 
        tags={["basquete","treinos", "plataforma"]} 
        cliente="pessoal" 
        descricao= "Site de treinos em quadra e academia voltado para o basquete." 
        data="17/09/2024" 
        role= "treinos" 
        website="https://ballers085.com.br/" 
        full_name="jackson" >
        </ProjetoCard>

         <ProjetoCard 
        titulo="Site do BPADL" 
        img="bpa.png" 
        tags={["landing page","treinos", "plataforma"]} 
        cliente="Bpa Dl" 
        descricao= "Landing page do time de basquete Bpa DL, com informações sobre o time, modalidades e locais de treino." 
        data="01/7/2025" 
        role= "landing page" 
        website="https://bpace.vercel.app/" 
        full_name="Bpa dl" />

        <ProjetoCard 
        titulo="Memoriza Flashcards" 
        img="memoriza.png" 
        tags={["plataforma","flashcards", "estudos"]} 
        cliente="pessoal" 
        descricao= "Plataforma de estudos com flashcards, onde o usuário pode estudar de forma eficiente e espaçada." 
        data="22/9/2024" 
        role= "estudos" 
        website="https://memoriza.app.br/" 
        full_name="jackson" />

         <ProjetoCard 
        titulo="Backend do rifa bpa3x3" 
        img="rifa.png" 
        tags={["backend","rifa", "fastapi"]} 
        cliente="pessoal" 
        descricao= "Backend da rifa do bpa3x3, onde o usuário pode comprar um número e concorrer a prêmios." 
        data="10/2/2025" 
        role= "backend" 
        website="https://backendrifa.vercel.app/" 
        full_name="bpa3x3" />
      </div>

     

        <Footer />
      </div>
    </>
      
  )
}

export default App
