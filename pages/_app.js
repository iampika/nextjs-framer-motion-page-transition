import { AnimatePresence, motion } from 'framer-motion'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        key={router.route}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
