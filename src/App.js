import React from 'react';
import './app.css';
import {Blog , Features , Footer , Possibility , Header , What} from './Containers';
import {Cta , Brand , Article , Navbar} from './components';

const App = () => {
  return (

    <div className='App'>
        <div className='gradient__bg'>
               <Navbar />
               <Header />
        </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div> 

  )
}

export default App
