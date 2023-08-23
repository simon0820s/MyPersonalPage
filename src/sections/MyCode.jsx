import { BsGithub } from 'react-icons/bs'
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
        <a href='https://github.com/simon0820s' target='_blank' rel='noreferrer'>
          <BsGithub className='text-zinc-400 text-5xl'/>
        </a>
      </div>
    </section>
  )
}

export default MyCode