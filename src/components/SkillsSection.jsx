import { motion } from 'motion/react'
import cssIcon from '../assets/svg/CSS3.svg'
import gitIcon from '../assets/svg/Git.svg'
import githubIcon from '../assets/svg/GitHub.svg'
import htmlIcon from '../assets/svg/HTML5.svg'
import javaIcon from '../assets/svg/Java.svg'
import javascriptIcon from '../assets/svg/JavaScript.svg'
import nodeIcon from '../assets/svg/Node.js.svg'
import openApiIcon from '../assets/svg/OpenAPI.svg'
import oracleIcon from '../assets/svg/Oracle.svg'
import postgresIcon from '../assets/svg/PostgresSQL.svg'
import reactIcon from '../assets/svg/React.svg'
import springIcon from '../assets/svg/Spring.svg'
import viteIcon from '../assets/svg/Vite.svg'

const skillIcons = {
  CSS3: cssIcon,
  Git: gitIcon,
  GitHub: githubIcon,
  HTML5: htmlIcon,
  Java: javaIcon,
  JavaScript: javascriptIcon,
  'Node.js': nodeIcon,
  Oracle: oracleIcon,
  PostgreSQL: postgresIcon,
  'REST API': openApiIcon,
  React: reactIcon,
  Spring: springIcon,
  Vite: viteIcon,
}

const skillGroups = [
  {
    title: '프론트엔드',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: '백엔드 및 언어',
    skills: ['Java', 'Spring', 'Node.js', 'REST API'],
  },
  {
    title: 'Database',
    skills: ['Oracle', 'PostgreSQL', 'JPA'],
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

export function SkillsSection() {
  return (
    <section className="section muted-section" id="skills">
      <div className="section-title two-column">
        <div>
          <p className="section-kicker">Skills</p>
          <h2>기술스택 및 도구</h2>
        </div>
        <p>
          현재 활용하고 있거나 프로젝트를 통해 다뤄본 기술입니다. 필요한 기능을
          구현하며 사용 범위를 넓혀가고 있습니다.
        </p>
      </div>

      <motion.div
        className="skill-board"
        initial="hidden"
        variants={cardGroupVariants}
        viewport={{ once: false, margin: '0px 0px -160px 0px' }}
        whileInView="visible"
      >
        {skillGroups.map((group) => (
          <motion.article
            className="skill-group"
            key={group.title}
            variants={cardVariants}
          >
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>
                  <span className="skill-mark">
                    {skillIcons[skill] ? (
                      <img src={skillIcons[skill]} alt="" aria-hidden="true" />
                    ) : (
                      skill.slice(0, 2)
                    )}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
