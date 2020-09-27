import { motion } from 'framer-motion'

export const MyAvatar = ({ device }) => {
  if (device === 'sm') {
    return (
      <div className="block overflow-hidden w-full h-40 my-8 mx-auto border-solid border-2 rounded-lg text-white bg-avatar bg-no-repeat bg-250px bg-50-34 md:h-56 md:bg-50-24 md:bg-300px xl:hidden" />
    )
  } else if (device === 'lg')
    return (
      <motion.div
        drag
        dragConstraints={{
          top: -20,
          left: -20,
          right: 20,
          bottom: 20,
        }}
        dragTransition={{
          bounceStiffness: 400,
          bounceDamping: 10,
        }}
        className="h-screen bg-avatar bg-no-repeat w-3/12 bg-50-50 xl:float-right fixed right-40 hidden lg:block cursor-move"
      />
    )
  return null
}
