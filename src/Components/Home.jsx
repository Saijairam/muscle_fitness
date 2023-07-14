import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import logo from '../images/push-ups.gif'
const Home = () => {
  return (
    <div className='container'>
      <Navbar/>
      <div className='container home-container'>
       <div className='intro-1 mt-2 pb-2'>
        <p className='container'>
          Muscular endurance refers to the ability of a muscle to sustain repeated contractions against resistance for an extended period of time.<br/> To increase muscular indurance, you should engage in activities that work your muscles more than usual such as squats, push-ups, or jumping jacks.
        </p>
        <img src={logo} className='img-logo img-fluid' alt='..'/>
       </div>
       <div className='intro-2 mt-2 pb-3'>
        <h3 className='text-underline'>Benefits</h3><br/>
        <ol>
          <li>Muscular strength enhances overall health and boosts athletic activity.</li>
          <li>A strong body allows you to perform movements and activities that require power without getting tired.</li> 
          <li>Muscular strength helps you maintain a healthy body weight by burning calories and enhancing your body composition, which is the ratio between fat and muscle.</li>
          <li>Building strength may also boost mood and energy levels while promoting healthy sleep patterns. This may boost confidence, provide a sense of accomplishment, and allow you to add more difficult or strenuous activities to your fitness routine.</li>
          <li>Developing muscular strengths helps to build strong, healthier muscles and bones. This helps to develop good posture and relieve back pain.</li>
        </ol>
       </div>
       <div className='intro-3 mt-2'>
          <p>
            So,if you are unaware how to start schedule, this website will help you to make a good schedule according to your experience for various exercises.
            You can see more info in About page.
          </p>
       </div>
       <Footer/>
    </div>
    </div>
  
  )
}

export default Home