import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import '../Card/Card.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section'>
      <h2 className='section__title'>Réalisations</h2>
      <div className='cards-grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
