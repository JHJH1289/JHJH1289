import {
  ArrowUpRight,
  GitBranch,
  Sparkles,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import './App.css'

function App() {
  const heroRef = useRef(null)
  const [isHeaderCompact, setIsHeaderCompact] = useState(false)
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroExitY = useTransform(heroScrollProgress, [0.35, 1], [0, -120])
  const heroExitOpacity = useTransform(heroScrollProgress, [0.35, 0.9], [1, 0])
  const heroExitBlur = useTransform(
    heroScrollProgress,
    [0.35, 1],
    ['blur(0px)', 'blur(6px)'],
  )

  useEffect(() => {
    const updateHeaderState = () => {
      const aboutTop = document.getElementById('about')?.getBoundingClientRect().top

      setIsHeaderCompact(typeof aboutTop === 'number' && aboutTop < 140)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })
    window.addEventListener('resize', updateHeaderState)

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
      window.removeEventListener('resize', updateHeaderState)
    }
  }, [])

  return (
    <main>
      <header className={`site-header${isHeaderCompact ? ' compact' : ''}`}>
        <a className="logo" href="#home">
          JHJH1289
        </a>
        <nav aria-label="Portfolio navigation">
          <a href="#skills">기술스택</a>
          <a href="#projects">프로젝트</a>
        </nav>
      </header>

      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial="hidden"
            style={{
              filter: heroExitBlur,
              opacity: heroExitOpacity,
              y: heroExitY,
            }}
            transition={{ staggerChildren: 0.18 }}
            viewport={{ once: false, margin: '0px 0px -200px 0px' }}
            whileInView="visible"
          >
            <motion.p className="section-kicker" variants={heroTextVariants}>
              Portfolio
            </motion.p>
            <motion.h1 variants={heroTextVariants}>
              안녕하세요,
              <br />
              개발자
              <br />
              정재훈 입니다.
            </motion.h1>
            <motion.p className="hero-text" variants={heroTextVariants}>
              Java · Spring Boot · React를 중심으로 백엔드와 프론트엔드를
              함께 경험했습니다. 주변의 문제를 직접 찾아 기능으로 만들고,
              사용자가 필요로 하는 것을 구현하는 개발자를 지향합니다.
            </motion.p>
            <motion.div className="hero-actions" variants={heroTextVariants}>
              <a className="solid-link" href="#projects">
                프로젝트 보기
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a
                className="ghost-link"
                href="https://github.com/JHJH1289"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch aria-hidden="true" size={18} />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            aria-label="Profile highlight"
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96, y: 60, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: 'easeInOut', delay: 0.25 }}
          >
            <img
              src="https://github.com/JHJH1289.png?size=480"
              alt="JHJH1289 GitHub profile"
            />
            <div className="visual-note">
              <Sparkles aria-hidden="true" size={20} />
              <span>Build, learn, improve</span>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />

      <footer className="footer">
        <p>감사합니다. 더 궁금한 점은 GitHub에서 확인해주세요.</p>
        <a href="https://github.com/JHJH1289" target="_blank" rel="noreferrer">
          @JHJH1289
        </a>
      </footer>
    </main>
  )
}

const heroTextVariants = {
  hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.42, 0, 0.58, 1] },
  },
}

export default App
