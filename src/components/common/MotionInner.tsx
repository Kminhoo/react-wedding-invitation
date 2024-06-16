import { motion } from 'framer-motion'

interface MotionInnerProps {
  className: string
  children: React.ReactNode
}

const MotionInner = ({ className, children }: MotionInnerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 },
      }}
      //   viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MotionInner
