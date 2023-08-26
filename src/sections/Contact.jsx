import { BsGithub, BsLinkedin, BsPinterest, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section
      id="contact"
      className="h-96 bg-zinc-800 w-screen">
      <img src='./img/waveContact.svg' alt='waveContact' />
      <div className="z-10 absolute flex flex-col px-8 gap-2">
        <h1 className="text-xl text-purple-200 font-rubik">About my contact</h1>
        <p className="opacity-80 text-sm font-medium">you can contact me by the following means.</p>
        <div className='z-10 flex items-center'>
          <span className='bg-purple-200 w-2 h-2 rounded-full' />
          <span className='w-3/4 h-0.5 bg-gradient-to-r from-purple-200' />
        </div>
        <div className="flex mt-2 text-purple-200 text-2xl gap-2">
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
            href='https://pin.it/4PsRlv3' target='_blanc'><BsPinterest /></motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            href='https://www.facebook.com/profile.php?id=100085398301902' target='_blanc'
            className='z-10'><BsFacebook /></motion.a>
        </div>
      </div>
      <img className='h-2/3 opacity-70 float-right' src='./img/myContactHero.svg' />
    </section>
  )
}

export default Contact