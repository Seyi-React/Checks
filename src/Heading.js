import react, { useState } from 'react'
import {RxTextAlignJustify} from 'react-icons/rx'
import {TbBuildingWarehouse} from 'react-icons/tb'
import {ImCross} from 'react-icons/im'


const Header = () => {


   const [show,setShow] = useState(true);



   return (
      <>
         <div className='header-section'>
             <h2 className='heading'><TbBuildingWarehouse />Beytify</h2>
              <button className='nav' onClick={()=> setShow(!show)}>{show? <ImCross />:<RxTextAlignJustify />}</button>
               {show &&( <div className='nav-links'>
               <ul>
                   <li>
                     home
                     </li>
                    <li>
                     about us
                     </li>
                   <li>
                     services
                     </li>
                    <li>
                     contacts
                     </li>
                    </ul>
                    </div> )  } 
                     <div className='btn-div'>
                      <button className='create'>Create account</button>
                      <button className='log-in'>Log in</button>
                      </div>
         </div> 
      </>
   )
}
const Section = () => {

   return (
      <>
       <div className='section'>
         <h1>Find your next stay!</h1>
          <p>We help you find the best of hotels and shortlet homes</p>
       </div>
       <div className='input-div'>
         <label className='location'>Location:</label>
         <input id='locate' name='locate' type='text' placeholder='where are you going' />
         <label className='check-in'>Check-in: </label>
         <input  type='date'required id='date' className='input'/>
         <label className='resident'>Resident:</label>
        <select>
         <option id='a-room'>1 Adult - 1 room</option>
         <option id='couples'>Room for Couples</option>
         <option id='family'>Room for Extended family</option>
        </select>
        <button className='search'>Search</button>
       </div>
      </>
   )
}
export default Header;
export {Section};