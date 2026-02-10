import React from 'react';

const Columns = () => {
  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
        <i className="bi bi-cloud-sun-fill" style={{ fontSize: '140px' }}></i>              <h2>Prévisions Météo</h2>
          <p>Planifiez vos vols en toute sécurité avec nos prévisions météo précises ! Obtenez des informations détaillées sur la température, la pluie et le vent pour assurer des conditions idéales.</p>
          <p><a className="btn btn-secondary" href="#feature">Vérifiez les prévisions maintenant ! »</a></p>
        </div>
        <div className="col-lg-4">
        <i className="bi bi-wind" style={{ fontSize: '140px' }}></i>          <h2>Alerte de Vent</h2>
          <p>Ne laissez pas le vent perturber vos vols ! Activez nos alertes en temps réel pour connaître les conditions de vent avant chaque vol. Recevez des notifications instantanées et évitez les risques. </p>
          <p><a className="btn btn-secondary" href="#">Inscrivez-vous aux alertes ! »</a></p>
        </div>
        <div className="col-lg-4">
        <i className="bi bi-cloud-lightning-rain-fill" style={{ fontSize: '140px' }}></i>
        <h2>Conditions Aériennes</h2>
          <p>Garantissez la sécurité de vos drones avec notre analyse des conditions aériennes. Surveillez la visibilité, la pression et les turbulences pour des vols sans danger. </p>
          <p><a className="btn btn-secondary" href="#">Vérifiez les conditions aériennes dès maintenant ! »</a></p>
        </div>
      </div>
    </div>
  );
};

export default Columns;
