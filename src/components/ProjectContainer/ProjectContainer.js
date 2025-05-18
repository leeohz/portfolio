import { useState } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import Modal from '../Modal/Modal'
import '../Card/Card.css'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const renderArticleContent = () => {
    if (!project.article) return null;
    
    return project.article.sections.map((section, index) => (
      <div key={index} className='article-section'>
        <h3>{section.title}</h3>
        {Array.isArray(section.content) ? (
          <ul>
            {section.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{section.content}</p>
        )}
      </div>
    ));
  };

  return (
    <>
      <div className='card' onClick={() => setIsModalOpen(true)}>
        <div className="card__header">
          <h3>{project.name}</h3>
        </div>
        
        <p className='card__description'>{project.description}</p>
        
        {project.stack && (
          <ul className='card__tags'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='card__tag'>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="card__preview">
          <span className="card__preview-text">Cliquez pour plus de détails</span>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="project-modal">
          <h2>{project.name}</h2>
          
          {project.article ? (
            <div className='article-content'>
              {renderArticleContent()}
            </div>
          ) : (
            <>
              {project.longDescription && (
                <div className='project-modal__description'>
                  <h3>À propos du projet</h3>
                  <p>{project.longDescription}</p>
                </div>
              )}

              {project.features && (
                <div className='project-modal__features'>
                  <h3>Fonctionnalités principales</h3>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={uniqid()}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
          
          <div className='project-modal__tech'>
            <h3>Technologies utilisées</h3>
            <ul className='card__tags'>
              {project.stack.map((item) => (
                <li key={uniqid()} className='card__tag'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {(project.sourceCode || project.livePreview) && (
            <div className="project-modal__links">
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  className='btn btn--outline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon /> Code source
                </a>
              )}

              {project.livePreview && (
                <a
                  href={project.livePreview}
                  className='btn btn--outline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LaunchIcon /> Voir le projet
                </a>
              )}
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

export default ProjectContainer
