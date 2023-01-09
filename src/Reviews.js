import react, { useState } from 'react'
import {TbBuildingWarehouse} from 'react-icons/tb'



const people = [

{
 id:1,
 description:'i ve been using bookify for many years to download audio from our library for my wife who is visually impaired.we have saved so much money this way rather than purchasing them,personally the books i buy too are not too and they are topnotch.',
 name:'Emeka John',
 img:'./img/man.jpeg',
},
{
 id:2,
 description:'it has been top notch kudos',
 name:'Clara Nicole',
 img:'/img/lady.jpeg',
},
{
    id:3,
    description:'Their competence is great',
    name:'Maryam Alli',
    img:'/img/maryam.jpeg',
},
{
    id:4,
    description:'Good works',
    name:'The Law',
    img:'/img/law.jpeg',
},
{
    id:5,
    description:'Been really helpful,thanks keep it up',
    name:'Dr James',
    img:'/img/doctor.jpeg',
},
{
    id:6,
    description:'I rate them always nice work from the UI designers,as well as the developers',
    name:'Captain John',
    img:'/img/capttain.jpeg' ,  
},
];

const Save = () => {

    const [email,setEmail] = useState('');
    const [error,SetError] = useState(false);


    const HandleEmail = (e) => {
        let email = e.target.value;
        setEmail(email);
    }
    const Submit = (e) => {
        e.preventDefault();

        if (email) {
            alert('request from backend processing');
        } else {
            SetError(true);
        }

        setEmail('');
    }

    return <>
         <div className='save-div'> 
            <div>
                <h4>Save time,Save money!</h4>
                <p>Sign up and receive the best deals daily</p>
                <div className='subscribe-div'>
                 <input type='email' 
                  placeholder='Enter your email' 
                  className='subscribe-input'
                  value={email} 
                  onChange={HandleEmail}
                  spellCheck='false'/>
                  <button type='submit'
                   name='subscribe'
                   onClick={Submit}
                   className='subscribe'>Subscribe</button>
             </div>
            </div>
            
         </div>
    
    </>
  
}
const LastSec = () => {
        
    return ( <>
       <div className='last-sec'>
        <h3><TbBuildingWarehouse />Beytify</h3>
        <p>We help you find the best of hotels and shortlet homes</p>
         <div className='main'>
            <div className='last-sec-div'>
            <h4>Company</h4>
             <div>
                <p>Career</p>
                <p>About Us</p>
                 <p>Management</p>
                 <p> Properties</p> 
              </div>
              </div>
              <div className='services'> 
              <h4>Our Services</h4>
               <div>
                 <p>Houses</p>
                 <p>Shortlets</p>
                 <p>Hotels</p>
                  <p>Contact Us</p>  
              </div>
              </div> 
         </div>
        </div>
    </>
    )
}

const Footer = () => {

    return (
        <>
          <div className='footer'>
            <p>Copyright 2022.Beytify All rights reserved</p>
            <p>Terms and conditions Privacy Policy</p>
          </div>
        </>
    )
}

export default people;
export {Save,LastSec,Footer};