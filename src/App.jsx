import Header from './components/header'
import ProjetoCard from './components/ui/CardProjeto'

function App() {

  return (
    <div className='min-h-screen'>
      <Header />
      <div className="">

        <ProjetoCard></ProjetoCard>
        <ProjetoCard></ProjetoCard>
        <ProjetoCard></ProjetoCard>
      </div>
      
    </div>
  )
}

export default App
