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

const About = () => {
  return (
    <motion.div variants={pageVariants}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="description" content="Slack CLone" />
      </Head>
      <div className="h-screen bg-pink-500 text-pink-100 flex flex-col items-center justify-center text-center">
        <Link href="/">
          <motion.a
            variants={backVariants}
            className="fixed top-0 right-0 m-10 text-xl md:text-4xl cursor-pointer flex"
          >
            ←Back
          </motion.a>
        </Link>
        <div className="md:w-2/5 px-2">
          <h1 className="text-3xl md:text-6xl font-bold">
            Lorem Ipsum
          </h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Id, mollitia itaque quaerat pariatur laboriosam
            deserunt repellendus vero quam necessitatibus
            nostrum.
          </p>
        </div>
      </div>
      <LoremIpsum />
    </motion.div>
  )
}

function LoremIpsum() {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et minus tempora dolores aut id quas est saepe sint odio, rerum eos aperiam, modi vitae tenetur praesentium. Asperiores, expedita maxime.'
  return (
    <div className="py-10 text-white">
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

export default About
