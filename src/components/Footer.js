import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} — Mon application metéo !</small>
      </div>
    </footer>
  );
}