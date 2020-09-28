import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'

const ease = [0.43, 0.13, 0.23, 0.96]

const pageVariants = {
  initial: {
    y: '50%',
    opacity: 0,
    transition: { ease, duration: 0.8, delay: 0.8 },
  },
  animate: {
    y: '0%',
    opacity: 1,
    transition: { ease, duration: 0.8 },
  },
  exit: {
    y: '50%',
    opacity: 0,
    transition: { ease, duration: 0.8, delay: 0.8 },
  },
}

const backVariants = {
  initial: {
    right: -100,
    opacity: 0,
    transition: { ease, duration: 0.8 },
  },
  animate: {
    right: 0,
    opacity: 1,
    transition: { ease, duration: 1, delay: 0.8 },
  },
  exit: {
    right: -100,
    opacity: 0,
    transition: { ease, duration: 0.8 },
  },
}

const Awesome = () => {
  return (
    <motion.div variants={pageVariants} className="h-screen">
      <Head>
        <title>My Awesome Project</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="description" content="Slack CLone" />
      </Head>
      <div className="h-screen text-white">
        <motion.div className="h-4/5 bg-pink-500 flex flex-col items-center justify-center text-center">
          <Link href="/">
            <motion.a
              variants={backVariants}
              className="fixed top-0 right-0 m-10 text-xl md:text-4xl cursor-pointer"
            >
              <span>←</span>
              Back
            </motion.a>
          </Link>
          <div className="md:w-2/5 px-2">
            <h1 className="text-3xl mb-2 md:text-6xl font-bold">
              My Awesome Project
            </h1>
            <p className="text-sm md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quibusdam dignissimos consectetur, ea ratione
              assumenda soluta laudantium
            </p>
          </div>
        </motion.div>
        <LoremIpsum />
      </div>
    </motion.div>
  )
}

function LoremIpsum() {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et minus tempora dolores aut id quas est saepe sint odio, rerum eos aperiam, modi vitae tenetur praesentium. Asperiores, expedita maxime.'
  return (
    <div className="py-10 bg-gradient-to-bl from-white to-yellow-50 bg-cover bg-fixed bg-no-repeat bg-100-50">
      <div className="md:w-8/12 mx-auto space-y-8">
        {[
          { bg: 'bg-pink-400' },
          { bg: 'bg-red-400' },
          { bg: 'bg-blue-400' },
          { bg: 'bg-indigo-400' },
          { bg: 'bg-purple-400' },
        ].map(({ bg }, i) => (
          <div
            key={i}
            className={`p-10 text-xl rounded shadow ${bg}`}
          >
            {lorem}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Awesome
