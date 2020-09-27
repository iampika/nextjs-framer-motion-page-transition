import Head from 'next/head'
import { MyAvatar } from '../components/MyAvatar'
import { Main } from '../components/Main'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Home() {
  return (
    <motion.div variants={variants} className="overflow-hidden">
      <Head>
        <title>Mahendra Choudhary</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Mahendra Choudhary Portfolio"
        />
      </Head>
      <Main>
        <MyAvatar device="sm" />
        <Hero className="mb-8 lg:mb-10" />
        <Projects />
        <Contact />
      </Main>
      <MyAvatar device="lg" />
    </motion.div>
  )
}
