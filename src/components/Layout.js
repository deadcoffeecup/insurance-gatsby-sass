import React from 'react';

import Navbar from './Navbar';
// import '../scss/main.scss';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {children}

      <footer>Stopka</footer>
    </>
  );
}
