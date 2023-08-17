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
    </div>
  )
}

export default App