import React from 'react'
import './Hero.css';


function Hero() {
  return (
    <section className='hero flex' >
      <div className="left-section ">

        <div className="parent-avatar flex ">
          <img src="public\ali2.jpeg" alt="" className="avatar" />
          <div className='icon-verified' />
        </div>

        <h1 className='title' > Software designer, founder, and amateur astronaut. </h1>
        <p className='sub-title' >I'm Mohamed Ahmed A fullstack web devolper. I'm the founder and CEO of Planetria, where we develop technologies that empower regular people to explore space on their own terms </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter "></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation border ">animation</div>
    </section>
  )
}

export default Hero