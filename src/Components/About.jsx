import React from 'react'
import Navbar from './Navbar'
import run from '../images/running.gif'
import muscle from '../images/muscle.gif'
import rating from '../images/rating.gif'
import Footer from './Footer'
const About = () => {
  return (
    <div className='container'>
        <Navbar/>
        <div className='about-container'>
            <div className='box'>
                <ol>
                  In this plan, you can search these types:
                  <li>Cardio</li>
                  <li>Olympic Weightlifting</li>
                  <li>Power Lifting</li>
                  <li>Strength etc.</li>
                </ol>
                <img src={run} className='run-logo img-fluid' alt='run'/>
            </div>
            <div className='box'>
                <ol> 
                   You can target these different muscles
                   <li>Biceps</li>
                   <li>Chest</li>
                   <li>Forearms</li>
                   <li>Calves etc.</li>
                </ol>
                <img src={muscle} className='muscle-logo img-fluid' alt='muscle'/>
            </div>
            <div className='box'>
               <ol>
                 According to your experience :
                <li>Beginner</li>
                <li>Intermediate</li>
                <li>Advance</li>
               </ol>
               <img src={rating} className='rate-logo img-fluid' alt='rating'/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About