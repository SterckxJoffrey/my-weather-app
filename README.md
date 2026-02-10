# My Weather App (React + Bootstrap)

Application météo construite avec React et Bootstrap.  
L’utilisateur recherche une ville et l’application affiche la météo actuelle (température, humidité, vent) avec un rendu visuel sur une image de fond.

## Fonctionnalités
- Recherche météo par ville
- Température en degrés Celsius
- Humidité et vitesse du vent
- Affichage des données sur une image (overlay)
- Gestion des erreurs (ville inconnue, problème API)
- Interface responsive avec Bootstrap
- Clé API protégée via variables d’environnement (.env)

## Technologies
- React (Create React App)
- Bootstrap
- OpenWeather API

## Installation

### 1) Cloner le projet
```bash
git clone https://github.com/TON_USER/my-weather-app.git
cd my-weather-app

#### 2) Installer les dépendences 

```bash
npm install

##### 3) Configurer les variables d’environnement

Créer un fichier .env à la racine du projet (ne pas le mettre dans src).

Tu peux partir de .env.example :

```bash
copy .env.example .env

Puis remplir la clé :

env

REACT_APP_OPENWEATHER_API_KEY=YOUR_API_KEY_HERE
REACT_APP_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/weather

Important : après modification du .env, il faut relancer le serveur.

npm start

