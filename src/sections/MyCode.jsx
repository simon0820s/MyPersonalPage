import { BsGithub } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
/* eslint-disable react/no-unescaped-entities */
function MyCode() {
  return (
    <section
      id="myCode"
      className="h-screen w-screen">
      <div className="flex flex-col gap-4 items-center p-8">
        <article className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-rubik text-purple-200">About my Code </h1>
          <p className="text-sm text-center opacity-80">I'm a highly organized programmer with a passion for modern technologies. My coding skills reflect not only technical prowess but also a dedication to applying best practices. With experience in crafting AI models and designing web pages, I bring versatility to the table. My commitment to staying updated with the latest trends ensures I remain at the forefront of innovation. By adhering to good programming practices, I create readable, maintainable code that demonstrates attention to detail. In all my projects, whether building AI models or developing websites, I prioritize excellence and optimization, showcasing adaptability and a holistic approach to problem-solving.
          </p>
        </article>
        <div className='flex items-center gap-2'>
          <BsGithub className='text-zinc-300 text-xl' />
          <a href='https://github.com/simon0820s' target='_blank' rel='noreferrer'
            className='flex gap-1 items-center p-1 text-xs font-bold border-2 border-zinc-400 text-zinc-300 rounded-xs'>
            Look at my work<FaArrowRightLong className='text-xs text-zinc-300' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default MyCode