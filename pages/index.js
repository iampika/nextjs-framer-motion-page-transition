import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const LinkButton = ({ href, text }) => {
  return (
    <Link href={href}>
      <a
        type="button"
        className="border py-3 px-10 text-xl md:text-2xl uppercase rounded shadow-xl hover:shadow transition duration-200 bg-pink-600 text-pink-100"
      >
        {text}
      </a>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main className="h-screen flex flex-col items-center justify-center">
        <div className="w-full md:w-7/12 lg:w-5/12 text-center space-y-4">
          <h1 className="text-2xl md:text-6xl">Lorem Ipsum</h1>
          <p className="px-2 md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Est optio illum consequuntur itaque nisi
            mollitia suscipit assumenda obcaecati nihil sequi.
          </p>
          <LinkButton href="/about" text="About Me" />
        </div>
      </motion.main>
    </>
  )
}
