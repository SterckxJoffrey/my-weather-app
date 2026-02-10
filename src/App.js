import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Columns from './components/Columns';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Weather from './components/Weather';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Carousel />

        <section id="services">
          <Columns />
        </section>

        <section id="meteo">
          <Weather />
          <hr className="featurette-divider" />
          <Feature />
        </section>

        <hr className="featurette-divider" />
      </main>

      <Footer />
    </div>
  );
};

export default App;
