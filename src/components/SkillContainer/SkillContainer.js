import { useState } from 'react'
import uniqid from 'uniqid'
import Modal from '../Modal/Modal'
import '../Card/Card.css'
import './SkillContainer.css'

const SkillContainer = ({ skill }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className='card' onClick={() => setIsModalOpen(true)}>
        <div className="card__header">
          <h3>{skill.name}</h3>
        </div>
        
        <p className='card__description'>{skill.description}</p>
        
        {skill.stack && (
          <ul className='card__tags'>
            {skill.stack.map((tag) => (
              <li key={uniqid()} className='card__tag'>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="card__preview">
          <span className="card__preview-text">Cliquez pour plus de détails</span>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="skill-modal">
          <h2>{skill.name}</h2>
          
          <div className='skill-modal__overview'>
            <p>{skill.description}</p>
          </div>

          {skill.article && skill.article.sections && (
            <div className='skill-modal__article'>
              {skill.article.sections.map((section) => (
                <div key={uniqid()} className='skill-modal__section'>
                  <h3>{section.title}</h3>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          )}

          {skill.stack && (
            <div className='skill-modal__stack'>
              <h3>Technologies et compétences</h3>
              <ul className='card__tags'>
                {skill.stack.map((tech) => (
                  <li key={uniqid()} className='card__tag'>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

export default SkillContainer 