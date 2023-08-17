const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen">
      <div className="bg-violet-900 flex flex-col items-center justify-end h-1/4 w-screen">
        <div className="text-3xl text-zinc-900 font-rubik">
          <h1>Hi!</h1>
          <h1>My name is</h1>
          <h1 className="text-purple-400">Simón</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#18181B" fill-opacity="1" d="M0,0L26.7,26.7C53.3,53,107,107,160,149.3C213.3,192,267,224,320,224C373.3,224,427,192,480,197.3C533.3,203,587,245,640,250.7C693.3,256,747,224,800,218.7C853.3,213,907,235,960,250.7C1013.3,267,1067,277,1120,245.3C1173.3,213,1227,139,1280,96C1333.3,53,1387,43,1413,37.3L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div>
    </section>
  )
}

export default Hero