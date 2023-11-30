import { BsGithub, BsLinkedin, BsFacebook, BsWhatsapp, BsTwitter } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { WebContext } from '../Context'

function Contact() {

  const context = useContext(WebContext)

  return (
    <section
      id="contact"
      className="bg-zinc-800 w-screen">
      <img src='./img/waveContact.svg' alt='waveContact' />
      <div className="z-10 absolute flex flex-col px-8 gap-2">
        <h1 className="text-xl sm:text-2xl xl:text-3xl magic-text font-rubik">About my contact</h1>
        <p className="opacity-80 text-sm sm:text-base font-medium">You can contact me by the following means.</p>
        <div className='z-10 flex items-center'>
          <span className='magic-bg w-2 h-2 rounded-full' />
          <span className='w-3/4 h-0.5 bg-gradient-to-r magic-gradient-r' />
        </div>
        <div className="flex mt-2 magic-text text-2xl sm:text-3xl gap-2">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            href='https://wa.me/3002540388' target='_blanc'><BsWhatsapp /></motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            href='https://github.com/simon0820s' target='_blanc'><BsGithub /></motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            href='https://www.linkedin.com/in/sim%C3%B3n-arboleda-02b892247/' target='_blanc'> <BsLinkedin /></motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            href='https://www.facebook.com/profile.php?id=100085398301902' target='_blanc'
            className='z-10'><BsFacebook /></motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            href='https://twitter.com/SimnArboleda4' target='_blanc'
            className='z-10'><BsTwitter /></motion.a>
        </div>
      </div>
      <div className='relative h-48 w-48 float-right opacity-60'>
        <img className={`w-full h-full absolute ${context.imgSuffix == 'r' ? '' : 'hidden'}`} src='./img/myContactHero/myContactHero_r.svg' />
        <img className={`w-full h-full absolute ${context.imgSuffix == 'p' ? '' : 'hidden'}`} src='./img/myContactHero/myContactHero_p.svg' />
        <img className={`w-full h-full absolute ${context.imgSuffix == 'b' ? '' : 'hidden'}`} src='./img/myContactHero/myContactHero_b.svg' />
      </div>
    </section>
  )
}

export default Contact