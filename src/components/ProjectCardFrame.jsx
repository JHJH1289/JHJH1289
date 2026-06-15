import { motion } from 'motion/react'

const projectListVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export function ProjectCardFrame({
  children,
  frameRef,
  isVisible,
  onWheel,
}) {
  return (
    <div className="project-scroll-container">
      <div className="project-sticky-wrapper">
        <div className="project-frame" onWheel={onWheel} ref={frameRef}>
          <BorderTrail variant="frame" />
          <motion.div
            animate={isVisible ? 'show' : 'hidden'}
            className="project-list"
            initial="hidden"
            variants={projectListVariants}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function BorderTrail({ variant = 'card' }) {
  return <span className={`border-trail border-trail-${variant}`} aria-hidden="true" />
}
