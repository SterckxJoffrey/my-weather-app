import React from 'react';

const Feature = () => {
  return (
    <div id="feature" className="featurette container my-5">
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Prévisions Météo.{' '}
            <span className="text-muted">
              Planifiez vos vols en toute sécurité avec nos prévisions météo précises !
            </span>
          </h2>
          <p className="lead">
            Obtenez des informations détaillées sur la température, la pluie et le vent pour assurer des conditions idéales. Vérifiez les prévisions maintenant !
          </p>
        </div>

        <div className="col-md-5">
          <img
            src={process.env.PUBLIC_URL + '/App_meteo-500x350.png'}
            alt="Prévisions Météo"
            className="img-fluid mx-auto"
            width="500"
            height="350"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
