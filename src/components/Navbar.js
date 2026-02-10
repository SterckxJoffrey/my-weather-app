import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mon Météo App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a> {/* Lien vers la section Services */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#meteo">Météo</a> {/* Lien vers la section Météo */}
            </li>            
          </ul>
          <form className="d-flex align-items-center" id="weather-form">
            <h5 className="text-white mb-0 me-3">Prévisions</h5>
            <input className="form-control me-2" type="search" placeholder="Entez le nom d'une ville" aria-label="Search" id="city-input"/> 
            <button className="btn btn-outline-light" type="submit" onClick={() => window.location.href = '#weather'}>Rechercher</button>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
