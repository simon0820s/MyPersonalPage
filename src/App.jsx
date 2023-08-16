import Nav from './components/Nav'
import Hero from './sections/Hero'
import MyCode from './sections/MyCode'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className='w-screen flex flex-col items-center p-4 bg-zinc-900 text-neutral-100'>
      <Nav />
      <Hero />
      <MyCode />
      <Contact />
    </div>
  )
}

export default App