import React from 'react';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
import './Sass/App.scss';  // Sass not working have to fix this issue!

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default App
