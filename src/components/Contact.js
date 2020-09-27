import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <section>
      <div className="text-center">
        <motion.a
          href="mailto:pikaatic@gmail.com"
          target="_blank"
          className="btn inline-block bg-gradient-to-br from-purple-300 to-purple-400 py-4 px-12 rounded-full text-lg text-purple-100 uppercase tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200"
        >
          Contact me
        </motion.a>
        <p className="text-gray-500 text-base mt-4 md:text-lg">
          *Due to increased volume, please title your <br />
          email as descriptive as possible. 🙏
        </p>
      </div>
    </section>
  )
}
