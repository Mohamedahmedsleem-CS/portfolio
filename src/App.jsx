import { useState } from 'react'
import Contact from './components/4-contact/Contact'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Footer from './components/5-footer/Footer'


function App() {

  return (
    <div className='container' >
      <h1>بسم الله الرحمن الرحيم</h1>
      <Header/>
      <Hero/>
      <div className='divider' />
      <Main/>
      <div className='divider' />
      <Contact/>
      <div className='divider' />
      <Footer/>
    </div>
  )
}

export default App
