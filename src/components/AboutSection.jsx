import { Code2, Layers3, UsersRound } from 'lucide-react'
import { motion } from 'motion/react'

const strengths = [
  {
    icon: Code2,
    title: '백엔드 · 프론트엔드 개발',
    description:
      'Spring Boot로 REST API를 설계하고 React로 화면을 구현하며, Controller–Service–Repository 구조로 기능을 분리해 개발합니다.',
  },
  {
    icon: Layers3,
    title: '실제 문제를 기능으로',
    description:
      '어머니의 반복 엑셀 업무 자동화, 사진 드라이브 제작 등 주변의 불편함을 직접 찾아 프로젝트로 옮겨온 경험이 있습니다.',
  },
  {
    icon: UsersRound,
    title: '요구사항 파악과 구현',
    description:
      '요구사항이 불명확한 상황에서도 대화로 내용을 정리하고 구현 가능한 단위로 나누어 개발하며 실무에 가까운 경험을 쌓았습니다.',
  },
]

const cardGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <p className="section-kicker">About</p>
        <h2>자기소개</h2>
      </div>
      <motion.div
        className="intro-layout"
        initial="hidden"
        variants={cardGroupVariants}
        viewport={{ once: false, margin: '0px 0px -160px 0px' }}
        whileInView="visible"
      >
        <motion.p variants={cardVariants}>
          Java와 Spring Boot를 중심으로 백엔드 개발을 학습하고, React로
          사용자 화면을 구현하며 풀스택 개발 경험을 쌓아왔습니다. JPA와
          MyBatis를 활용한 데이터베이스 연동, REST API 설계와 CRUD 구현,
          Python을 이용한 데이터 전처리와 업무 자동화까지 다양한 기술을
          직접 프로젝트에 적용해 보았습니다.
        </motion.p>
        <motion.p variants={cardVariants}>
          정해진 수업과 과제에 머무르지 않고 주변에서 필요로 하는 문제를
          직접 찾아 프로젝트로 옮겨왔습니다. 공연 홍보 홈페이지 제작,
          반복 업무 자동화, 사진 드라이브 구현 등 실제 사용자를 염두에 둔
          개발을 경험하며 문제 해결 중심의 사고를 키웠습니다.
        </motion.p>
      </motion.div>

      <motion.div
        className="strength-grid"
        initial="hidden"
        variants={cardGroupVariants}
        viewport={{ once: false, margin: '0px 0px -160px 0px' }}
        whileInView="visible"
      >
        {strengths.map(({ icon: Icon, title, description }) => (
          <motion.article
            className="strength-card"
            key={title}
            variants={cardVariants}
          >
            <div className="icon-box">
              <Icon aria-hidden="true" size={28} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
