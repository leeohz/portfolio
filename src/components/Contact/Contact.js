import './Contact.css'
import { useState } from 'react'

const Contact = () => {
  const [from, setFrom] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:leopold.rolland@hotmail.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De : ${from}\n\n${message}`)}`
    window.location.href = mailto
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <form className='contact-form' onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1em',minWidth:300,maxWidth:400}}>
        <input
          type='email'
          placeholder='Votre adresse email'
          value={from}
          onChange={e => setFrom(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Sujet'
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder='Votre message'
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={6}
          required
        />
        <button type='submit' className='btn btn--outline'>Envoyer</button>
      </form>
    </section>
  )
}

export default Contact
