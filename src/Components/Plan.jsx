import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import load from '../images/hourglass.gif'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

// import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'
const Plan = () => {
  const [type, settype] = useState();
  const [muscle, setmuscle] = useState();
  const [difficulty, setdifficulty] = useState();
  const [isFetching, setisFetching] = useState(true);
  const [data,setdata] = useState();
  
  const options = {
    method: 'GET',
    url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
    params: {
      type : type,
      muscle : muscle,
      difficulty : difficulty,
    },
    headers: {
        'X-RapidAPI-Key': 'd408d7186amsh4d7a3dc5f8e850cp15347cjsnfd33dd1c8144',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  const download = ()=>{
     window.print();
  }

  const handleClick = async (e) =>{
    e.preventDefault();
    if(type==="-1" && muscle==="-1" && difficulty==="-1"){
      toast("Please select all fields",{
        position : toast.POSITION.TOP_RIGHT
      })
    }
      try {
        const response = await axios.request(options);
        // console.log(response.data);
        setdata(response.data);
        toast('Successful',{
          position : toast.POSITION.TOP_RIGHT,
        })
        setisFetching(false);
      }  catch (error) {
        toast(`${error.message}`,{
          position : toast.POSITION.TOP_RIGHT,
          
        })
      }
  }

  return (
    <div className='container'>
      <Navbar/>
      <div className='plan-container'>
         
         <form className='form'>
            <div className='sub-form'>
               <label className='form-label'>Type</label><br/>
               <select value={type} onChange={e=>settype(e.target.value)}>
                    <option value="-1">Select</option>
                    <option value="cardio">Cardio</option>
                    <option value="olympic_weightlifting">olympic_weightlifting</option>
                    <option value="plyometrics">plyometrics</option>
                    <option value="powerlifting">powerlifting</option>
                    <option value="strength">strength</option>
                    <option value="stretching">stretching</option>
                    <option value="strongman">strongman</option>
               </select>
            </div>
            <div className='sub-form'>
               <label className='form-label'>Muscle</label><br/>
               <select value={muscle} onChange={e=>setmuscle(e.target.value)}>
                    <option value="-1">Select</option>
                    <option value="abdominals">abdominals</option>
                    <option value="abductors">abductors</option>
                    <option value="biceps">biceps</option>
                    <option value="calves">calves</option>
                    <option value="chest">chest</option>
                    <option value="forearms">forearms</option>
                    <option value="glutes">glutes</option>
                    <option value="hamstrings">hamstrings</option>
                    <option value="lower_back">lower_back</option>
                    <option value="middle_back">middle_back</option>
                    <option value="neck">neck</option>
                    <option value="traps">traps</option>
                    <option value="triceps">triceps</option>
               </select>
            </div>
            <div className='sub-form'>
               <label className='form-label'>Difficulty</label><br/>
               <select value={difficulty} onChange={e=>setdifficulty(e.target.value)}>
                    <option value="-1">Select</option>
                    <option value="beginner">beginner</option>
                    <option value="intermediate">intermediate</option>
                    <option value="expert">expert</option>
               </select>
            </div>
            <button type='button' onClick={handleClick} className='btn btn-success'>Submit</button>
         </form>
         <hr/>
         <div className='main-container'>
            {isFetching ? 
            <div className='error-container'>
              <h5>Please select the options for plan</h5>
              <img src={load} className='load-img img-fluid' alt='..'/>
            </div> : 
            <div className='container'>
              {data.length === 0 ? <p>No combination found. Sorry</p> : 
              <div className='container' id='plan-information'>
              <h5 className='text-center'>PLAN</h5>
              {data.map((item,id)=>(
                <div className='container' key={id}>
                  <p><span>Name</span> : {item.name}</p>
                  <p><span>Type</span> : {item.type}</p>
                  <p><span>Muscle</span> : {item.muscle}</p>
                  <p><span>Difficulty</span> : {item.difficulty}</p>
                  <p><span>Equipment</span> : {item.equipment}</p>
                  <p><span>Instructions</span> : {item.instructions}</p>
                  <hr />
                </div>
              ))}
              <button className='btn btn-info' onClick={download}>Download Plan</button>
              </div>}
            </div>}
         </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Plan