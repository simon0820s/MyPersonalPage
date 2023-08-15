import Nav from './components/Nav'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className='w-screen flex flex-col items-center p-4 bg-zinc-900 text-neutral-100'>
      <Nav />
      <Hero />
    </div>
  )
}

export default App