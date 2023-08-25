import { BsGithub, BsLinkedin, BsPinterest, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section
      id="contact"
      className="h-96 bg-zinc-800 w-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#18181b" d="M0,224L48,197.3C96,171,192,117,288,101.3C384,85,480,107,576,128C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div className="absolute flex flex-col px-8 gap-2">
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
        <motion.img
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1}}
          className='w-36 right-0 top-20 opacity-90 absolute' src='./img/myContactHero.svg' />
      </div>
    </section>
  )
}

export default Contact