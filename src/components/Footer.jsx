// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div id="contact">
        <h3>Contacto</h3>
        <p>Email: contacto@kiddossori.com</p>
        <p>Teléfono: +123456789</p>
      </div>
      <div className="social-media">
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
        <a href="#twitter">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
