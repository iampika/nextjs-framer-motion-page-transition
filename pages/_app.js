import { AnimatePresence, motion } from 'framer-motion'
import '../styles/tailwind.css'

function Layout({ children }) {
  return <div className="overflow-hidden">{children}</div>
}

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
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
    </Layout>
  )
}

export default MyApp
