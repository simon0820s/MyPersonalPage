import Nav from './components/Nav'
import Hero from './sections/Hero'
import MyCode from './sections/MyCode'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className='w-screen flex flex-col items-center bg-zinc-900 text-neutral-100'>
      <Nav />
      <Hero />
      <MyCode />
      <Contact />
      <img className='fixed bottom-0 h-14 left-0 ml-4 opacity-80' src="./img/moonHero3.svg" alt="moonHero" />
    </div>
  )
}

export default App