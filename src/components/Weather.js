import React, { useState } from 'react';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_OPENWEATHER_BASE_URL;

async function fetchWeather(city) {
  if (!API_KEY || !BASE_URL) {
    throw new Error('Configuration manquante (.env).');
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric&lang=fr`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Erreur lors de l'appel API");
  }

  return data;
}

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!API_KEY || !BASE_URL) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center">
          <strong>Configuration manquante</strong>
          <br />
          Vérifie le fichier <code>.env</code> à la racine du projet.
        </div>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const value = city.trim();
    if (!value) {
      setErrorMsg('Veuillez entrer un nom de ville.');
      setWeather(null);
      return;
    }

    try {
      setLoading(true);
      setErrorMsg('');

      const data = await fetchWeather(value);

      setWeather({
        city: data.name,
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        description: data.weather?.[0]?.description || '',
        icon: data.weather?.[0]?.icon || '01d',
      });
    } catch (error) {
      setWeather(null);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="weather" className="container my-5">
      <h2 className="text-center fw-bold mb-2">Prévisions météorologiques</h2>
      <p className="text-center text-muted mb-4">
        Entrez le nom d&apos;une ville (ex : Bruxelles, Paris, Casablanca)
      </p>

      <form onSubmit={handleSubmit} className="weather-search row justify-content-center g-2">
        <div className="col-12 col-md-6 col-lg-5">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Nom de la ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-auto">
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100"
            disabled={loading}
          >
            {loading ? 'Chargement...' : 'Rechercher'}
          </button>
        </div>
      </form>

      {errorMsg && (
        <div className="alert alert-danger mt-4 text-center">
          {errorMsg}
        </div>
      )}

      {weather && (
        <div className="weather-hero mt-4 mx-auto">
          <img
            className="weather-hero-img"
            src={process.env.PUBLIC_URL + '/meteoImage.png'}
            alt="Météo"
          />

          <div className="weather-hero-overlay" />

          <div className="weather-hero-content">
            <div className="weather-hero-top">
              <div>
                <div className="weather-hero-city">{weather.city}</div>
                <div className="weather-hero-desc text-capitalize">{weather.description}</div>
              </div>
              <img
                className="weather-hero-icon"
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="Icône météo"
                width="72"
                height="72"
              />
            </div>

            <div className="weather-hero-temp">{weather.temp}°C</div>

            <div className="weather-hero-stats">
              <div className="weather-pill">
                <div className="weather-pill-label">Humidité</div>
                <div className="weather-pill-value">{weather.humidity}%</div>
              </div>

              <div className="weather-pill">
                <div className="weather-pill-label">Vent</div>
                <div className="weather-pill-value">{weather.windSpeed} m/s</div>
              </div>

              <div className="weather-pill">
                <div className="weather-pill-label">Ressenti</div>
                <div className="weather-pill-value">
                  {/* Optionnel : si tu veux, on peut ajouter feels_like */}
                  {weather.temp}°C
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
