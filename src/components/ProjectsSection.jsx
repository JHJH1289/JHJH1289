import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Database,
  KeyRound,
  Rocket,
  UsersRound,
  X,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useLayoutEffect, useRef, useState } from 'react'
import {
  BorderTrail,
  ProjectCardFrame,
} from './ProjectCardFrame'
import cssIcon from '../assets/svg/CSS3.svg'
import cloudflareIcon from '../assets/svg/Cloudflare.svg'
import googleIcon from '../assets/svg/Google.svg'
import htmlIcon from '../assets/svg/HTML5.svg'
import javascriptIcon from '../assets/svg/JavaScript.svg'
import javaIcon from '../assets/svg/Java.svg'
import latexIcon from '../assets/svg/LaTeX.svg'
import oracleIcon from '../assets/svg/Oracle.svg'
import postgresIcon from '../assets/svg/PostgresSQL.svg'
import pythonIcon from '../assets/svg/Python.svg'
import reactIcon from '../assets/svg/React.svg'
import springIcon from '../assets/svg/Spring.svg'
import tailwindIcon from '../assets/svg/Tailwind-CSS.svg'
import viteIcon from '../assets/svg/Vite.svg'

const stackIcons = {
  Cloudflare: cloudflareIcon,
  CSS: cssIcon,
  Google: googleIcon,
  HTML: htmlIcon,
  Java: javaIcon,
  JavaScript: javascriptIcon,
  LaTeX: latexIcon,
  Oracle: oracleIcon,
  PostgreSQL: postgresIcon,
  Python: pythonIcon,
  React: reactIcon,
  Spring: springIcon,
  Tailwind: tailwindIcon,
  Vite: viteIcon,
}

const categoryIcons = {
  Automation: Bot,
  Ollama: BrainCircuit,
  JPA: Database,
  JWT: KeyRound,
  Team: UsersRound,
}

const projectCardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    y: 24,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const projects = [
  {
    period: '2026',
    title: 'jdrive',
    summary: '드라이브 환경에서 필요한 기능을 설계하고 구현한 프로젝트',
    modal: {
      description:
        'Spring Boot 백엔드와 React/Vite 프론트엔드로 구성한 개인 사진 및 파일 갤러리입니다.',
      highlights: [
        '사진 업로드와 썸네일/원본 보기',
        '폴더 관리, 공유 링크, ZIP 다운로드',
        '휴지통, 중복 사진 관리, 태그 편집, 관리자 기능',
      ],
      githubLabel: 'jdrive 저장소 보기',
    },
    stack: ['Java', 'Spring', 'JPA', 'PostgreSQL', 'JWT', 'React', 'Vite', 'Cloudflare'],
    url: 'https://github.com/JHJH1289/jhdrve',
    color: '#5eead4',
  },
  {
    period: '2026',
    title: 'travelog',
    summary: '여행 기록을 중심으로 화면 구성과 사용자 흐름을 구현한 프로젝트',
    modal: {
      description:
        '여행 사진 피드와 여행 경로 계획 기능을 제공하는 웹 서비스입니다.',
      highlights: [
        '여행 게시글, 태그, 댓글, 좋아요, 조회수 기능',
        'Google Maps 기반 장소 검색과 경로 구성',
        'Ollama 기반 AI 태그 추천 및 여행 일정 생성',
      ],
      githubLabel: 'travelog 저장소 보기',
    },
    stack: ['React', 'Vite', 'JavaScript', 'Tailwind', 'Google', 'Spring', 'Oracle', 'Ollama'],
    url: 'https://github.com/JHJH1289/PKNU_2026_toyProject2',
    color: '#7dd3fc',
  },
  {
    period: '2025',
    title: 'Auto_Excel',
    summary: '반복 업무를 줄이기 위해 데이터를 다루고 자동화한 프로젝트',
    modal: {
      description:
        '반복적인 문서 및 데이터 작업을 줄이는 데 초점을 둔 자동화 프로젝트입니다.',
      highlights: [
        '문서 및 데이터 처리 작업 자동화',
        'LaTeX와 HTML 기반 산출물 구성',
        '반복 작업을 줄이는 생산성 중심 흐름',
      ],
      githubLabel: 'Auto_Excel 저장소 보기',
    },
    stack: ['Python'],
    url: 'https://github.com/JHJH1289/Auto_Excel',
    color: '#c4b5fd',
  },
  {
    period: '2023',
    title: 'Union-Project',
    summary: '외부공연 홍보용 프로젝트',
    modal: {
      description: '외부 공연 정보를 소개하고 홍보하기 위한 웹 프로젝트입니다.',
      highlights: [
        '공연 정보 소개와 홍보용 페이지 구성',
        'HTML, CSS, JavaScript 중심의 정적 웹 구현',
        'GitHub Pages 배포 흐름 경험',
      ],
      githubLabel: 'Union-Project 저장소 보기',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Team'],
    url: 'https://github.com/JHJH1289/Union-Project',
    color: '#fcd34d',
  },
]

const PROJECT_SCROLL_SPEED = 1

export function ProjectsSection() {
  const frameRef = useRef(null)
  const pendingScrollDeltaRef = useRef(0)
  const scrollFrameRef = useRef(null)
  const [isProjectFrameVisible, setIsProjectFrameVisible] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectWheel = (event) => {
    const frame = frameRef.current

    if (!frame) return

    const scrollDelta =
      Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX
    const maxScrollLeft = frame.scrollWidth - frame.clientWidth

    if (maxScrollLeft > 0 && scrollDelta !== 0) {
      event.preventDefault()
      event.stopPropagation()
      pendingScrollDeltaRef.current += scrollDelta * PROJECT_SCROLL_SPEED

      if (scrollFrameRef.current !== null) return

      scrollFrameRef.current = requestAnimationFrame(() => {
        const currentFrame = frameRef.current

        if (currentFrame) {
          const currentMaxScrollLeft =
            currentFrame.scrollWidth - currentFrame.clientWidth

          currentFrame.scrollLeft = Math.max(
            0,
            Math.min(
              currentMaxScrollLeft,
              currentFrame.scrollLeft + pendingScrollDeltaRef.current,
            ),
          )
        }

        pendingScrollDeltaRef.current = 0
        scrollFrameRef.current = null
      })
    }
  }

  useLayoutEffect(() => {
    if (!frameRef.current) return

    const syncVisibility = () => {
      const rect = frameRef.current?.getBoundingClientRect()

      if (!rect) return

      setIsProjectFrameVisible(rect.bottom > 0 && rect.top < window.innerHeight)
    }

    syncVisibility()

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProjectFrameVisible(entry.isIntersecting)
      },
      {
        threshold: 0,
      },
    )

    observer.observe(frameRef.current)

    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current)
      }
    }
  }, [])

  return (
    <section className="section" id="projects">
      <div className="section-title two-column">
        <div>
          <p className="section-kicker">Projects</p>
          <h2>프로젝트</h2>
        </div>
      </div>

      <ProjectCardFrame
        frameRef={frameRef}
        isVisible={isProjectFrameVisible}
        onWheel={handleProjectWheel}
      >
        {projects.map((project, index) => (
          <motion.button
            className="project-item"
            key={project.title}
            onClick={() => setSelectedProject(project)}
            style={{ '--project-color': project.color }}
            type="button"
            variants={projectCardVariants}
            whileHover={{ y: -6 }}
          >
            <BorderTrail />
            <div className="project-card-top">
              <p className="project-period">{project.period}</p>
              <span className="project-number">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="stack-row">
                {project.stack.map((stack) => (
                  <span key={stack}>
                    <StackIcon name={stack} />
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-card-bottom">
              <Rocket aria-hidden="true" className="project-icon" size={24} />
              <ArrowUpRight aria-hidden="true" size={22} />
            </div>
          </motion.button>
        ))}
      </ProjectCardFrame>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </section>
  )
}

function StackIcon({ name }) {
  const icon = stackIcons[name]
  const CategoryIcon = categoryIcons[name]

  if (icon) {
    return <img src={icon} alt="" aria-hidden="true" />
  }

  if (CategoryIcon) {
    return <CategoryIcon aria-hidden="true" size={14} strokeWidth={2.4} />
  }

  return null
}

function ProjectModal({
  onClose,
  project,
}) {
  return (
    <div className="project-modal-backdrop" onClick={onClose} role="presentation">
      <motion.div
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="project-modal"
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        style={{ '--project-color': project.color }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          aria-label="프로젝트 상세 닫기"
          className="modal-close"
          onClick={onClose}
          type="button"
        >
          <X aria-hidden="true" size={20} />
        </button>
        <p className="project-period">{project.period}</p>
        <h3 id="project-modal-title">{project.title}</h3>
        <p>{project.modal.description}</p>
        <ul className="modal-highlight-list">
          {project.modal.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="stack-row">
          {project.stack.map((stack) => (
            <span key={stack}>
              <StackIcon name={stack} />
              {stack}
            </span>
          ))}
        </div>
        <a
          className="modal-github-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          {project.modal.githubLabel}
          <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </motion.div>
    </div>
  )
}
