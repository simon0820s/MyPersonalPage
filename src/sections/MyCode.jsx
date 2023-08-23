import { BsGithub } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
/* eslint-disable react/no-unescaped-entities */
function MyCode() {
  return (
    <section
      id="myCode"
      className="h-screen w-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3F3F46" fill-opacity="1" d="M0,32L30,42.7C60,53,120,75,180,96C240,117,300,139,360,160C420,181,480,203,540,229.3C600,256,660,288,720,256C780,224,840,128,900,80C960,32,1020,32,1080,53.3C1140,75,1200,117,1260,117.3C1320,117,1380,75,1410,53.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      <div className="flex flex-col gap-4 items-center px-8 bg-zinc-700 rounded-bl-full">
        <article className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-rubik text-purple-200">About my Code </h1>
          <div className='flex items-center w-4/5'>
            <span className='bg-purple-200 w-2 h-2 rounded-full opacity-70'></span>
            <span className='bg-purple-200 w-full h-0.5 opacity-60'></span>
            <span className='bg-purple-200 w-2 h-2 rounded-full opacity-70'></span>
          </div>
          <p className="text-sm text-center opacity-90">I'm a highly organized programmer with a passion for modern technologies. My coding skills reflect not only technical prowess but also a dedication to applying best practices. With experience in crafting AI models and designing web pages, I bring versatility to the table. My commitment to staying updated with the latest trends ensures I remain at the forefront of innovation. By adhering to good programming practices, I create readable, maintainable code that demonstrates attention to detail. In all my projects, whether building AI models or developing websites, I prioritize excellence and optimization, showcasing adaptability and a holistic approach to problem-solving.
          </p>
        </article>
        <div className='flex items-center gap-2'>
          <BsGithub className='text-zinc-300 text-xl' />
          <a href='https://github.com/simon0820s' target='_blank' rel='noreferrer'
            className='flex gap-1 items-center p-1 text-xs font-bold border-2 border-zinc-400 text-zinc-400 rounded-xs'>
            Look at my work<FaArrowRightLong className='text-xs text-zinc-300' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default MyCode