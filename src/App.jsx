import React from 'react';
import Navbar from './Components/Navigation/Navbar';
import { Hero } from './Components/Hero/Hero';
import { About } from './Components/About/About';
import { Mywork } from './Components/MyWork/Mywork';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;