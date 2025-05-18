import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import SkillContainer from '../SkillContainer/SkillContainer'
import '../Card/Card.css'

const Skills = () => {
  if (!skills.technical.length && !skills.soft.length) return null

  return (
    <>
      <section id='technical-skills' className='section'>
        <h2 className='section__title'>Compétences Techniques</h2>
        <div className='cards-grid'>
          {skills.technical.map((skill) => (
            <SkillContainer key={uniqid()} skill={skill} />
          ))}
        </div>
      </section>

      <section id='soft-skills' className='section'>
        <h2 className='section__title'>Compétences Transverses</h2>
        <div className='cards-grid'>
          {skills.soft.map((skill) => (
            <SkillContainer key={uniqid()} skill={skill} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills
