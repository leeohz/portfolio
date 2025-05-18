import React from 'react';
import './Timeline.css';

const Timeline = () => {
  // Ajout de la variable CSS pour la couleur primaire en RGB
  React.useEffect(() => {
    const root = document.documentElement;
    const primaryColor = getComputedStyle(root).getPropertyValue('--clr-primary').trim();
    
    // Convertir la couleur en RGB
    const tempDiv = document.createElement('div');
    tempDiv.style.color = primaryColor;
    document.body.appendChild(tempDiv);
    const rgbColor = window.getComputedStyle(tempDiv).color;
    document.body.removeChild(tempDiv);
    
    // Extraire les valeurs RGB
    const rgb = rgbColor.match(/\d+/g);
    if (rgb) {
      root.style.setProperty('--clr-primary-rgb', rgb.join(','));
    }
  }, []);

  return (
    <div className="timeline-section" id="timeline">
      <h2 className="section__title">Parcours</h2>
      <div className="timeline">
        <div className="timeline-row">
          <div className="timeline-container experience">
            <h3>Expérience</h3>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Sept. 2023 - Présent</h4>
                <p className="company">CybelAngel</p>
                <p className="position">Technical Support</p>
                <p className="description">Investigation pipeline & support N2</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Fév. - Sept. 2023</h4>
                <p className="company">CybelAngel</p>
                <p className="position">Support Technique</p>
                <p className="description">Support & résolution de tickets</p>
              </div>
            </div>
          </div>

          <div className="timeline-container education">
            <h3>Formation</h3>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2019 - 2025</h4>
                <p className="institution">IN'TECH INFO</p>
                <p className="title">Expert en Architecture SI</p>
                <p className="subtitle">RNCP niv. 7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-container experience early-experience">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Nov. - Déc. 2018</h4>
                <p className="company">CNRS</p>
                <p className="position">Stage</p>
                <p className="description">Programmation robot Pepper</p>
              </div>
            </div>
          </div>
          <div className="timeline-container empty"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 