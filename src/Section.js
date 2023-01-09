import react,{useState} from 'react'
import explore from './img/explore1.jpeg'
import exploreII from './img/explore2.jpeg'
import exploreIII from './img/explore3.jpeg'
import first from './img/firstsection.jpeg'
import exploreHotels from './img/explore6.jpeg'
import last from './img/explore7.jpeg'
import people from './Reviews'
import {BiChevronRight} from 'react-icons/bi'
import {BiChevronLeft} from 'react-icons/bi'
import one from './img/7732608_5235.jpg'
import three from './img/add_missing_place.jpeg'
import four from './img/sit_back_and_relax.png'
import categories from './img/categories_rent_car_icon.png'


const WhyChoose = () => {

    return (
        <>
        <div className='sub-section'>
            <h3 className='why'>Why choose us?</h3>
          <div className='my-section'>
             <div>
                <h3 className='freedom'>Get a stay freedom</h3>
                <p className='search-p'>Search,discover and select cheap hotels and shortlet homes fast and easy</p>
             </div>
             <div className='serenity'>
                <section className='section-one'>
                   <h4>Serenity</h4>
                   <p>We get you a peaceful and disturbance free environment</p>
                   <img src={one} alt='one' className='section-img' />
                 </section>
             </div>
             <div className='security'>
                <section className='section-two'>
                    <h4>Security</h4>
                    <p>We help you stay in an area where security is ensured</p>
                    <img src={categories} alt='two' className='section-img' />
                </section>
             </div>
             <div className='flexibility'>
                <section className='section-three'>
                    <h4>Flexibility</h4>
                    <p>Our services is flexible for the ease of our clients</p>
                    <img src={three} alt='three' className='section-img' />
                </section>
             </div>
             <div className='special-offer'>
                <section className='section-four'>
                    <h4>Special Offers</h4>
                    <p>Get exclusive offers on special destinations regularly</p>
                    <img src={four} alt='four' className='section-img' />
                </section> 
             </div>
             <div>
                <h3 className='last-freedom'>Get a stay freedom</h3>
                <p className='search-last'>Search,discover and select cheap hotels and shortlet homes fast and easy</p>
             </div>
             </div>
        </div>

        </>
    )
}


const Explore = () => {
    return (
        <>
         <div className='explore-div'>
            <h3 className='explore'>Explore Nigeria</h3>
            <p>Popular destinations and property listings</p>
             <div className='search-explore'>
                <input type='text' name='search'id='search' placeholder='Search for a destination'/>
             </div>
             <div className='container'>
             <div>
                <img src={explore} className='img' alt='img'/>
                <h5 className='lagos'>Lagos</h5>
                <p className='prop'>500 properties</p>
             </div>
             <div className='img-2'>
               <img src={exploreII} className='img-ii' alt='img'/>
               <h5 className='kano'>Kano</h5>
               <p className='prop'>200 properties</p>
             </div>
             <div className='img-3'>
                <img src={exploreIII} className='img-iii' alt='img'/>
                <h5 className='akwa'>Akwa ibom</h5>
                <p className='prop'>200 properties</p>
             </div>
             </div>
         </div>
        </>
    )
}

const Prototype = () => {
    return (
        <>
         <div className='protype'>
          <h3 className='explore'>Browse by property type</h3>
          <p>Types of properties available for your satisfaction</p>
          <div className='container'>
          <div>
            <img src={first} alt='img' className='img' />
            <h5 className='lagos'>Hotels</h5>
            <p className='prop'>110 properties</p>
          </div>
          <div>
            <img src={exploreHotels} alt='' className='img' />
            <h5 className='lagos'>Resorts</h5>
            <p className='prop'>500 properties</p>
          </div>
          <div>
           <img src={explore} alt='img' className='img' />
            <h5 className='lagos'>Houses</h5>
             <p className='prop'>200 properties</p>
          </div>
          <div>
            <img src={last} alt='img' className='img' />
            <h5 className='lagos'>Shortlets</h5>
            <p className='prop'>250 properties</p>
          </div>
          </div>
         </div>
        </>
    )
}
const Favorites = () => {
    return (
        <>
          <div className='favor'>
            <h3 className='our'>Our Favorites</h3>
            <p>Destinations we love and their property listings</p>
            <div className='child'>
                <div>
             <h5>Abuja</h5>
            <p>110 properties</p>
            </div>
            <div>
            <h5>Lagos</h5>
            <p>500 properties</p>
            </div>
            <div>
             <h5>Kano</h5>
             <p>200 properties</p>
             </div>
             <div>
             <h5>Akwa Ibom</h5>
             <p>250 properties</p>
             </div>
             <div>
             <h5>Oyo</h5>
             <p>300 properties</p>
             </div>
          </div>
        
          </div>
          
        </>
    )
}
const Slider = () => {

    const [index,setIndex] = useState(0);
    const {id,description,name,img} = people[index];

const checkNumber = (num) => {
    if(num > people.length - 1) {
        return 0;
    } if(num < 0){
        return people.length - 1;
    }
    return num;
}


    function NextTestimonial () {
      setIndex(myIndex => {
        let mainTest = myIndex + 1;

        return checkNumber(mainTest);
        })
    }        
   
    function PrevTestimonial () {
    setIndex(myIndex => {
        let prevTest = myIndex - 1;
        return checkNumber(prevTest);
    } )
        
    }

    return <>
        <div className='explore-div'>
            <h3 className='our'>What our customers think about us</h3>
             <div className='slider-main'>
                <div className='slider'>
                    
                    <h5>{description}</h5>
                    <image src={img} alt='img' className='slider-img'/>
                    <p>{name}</p>
                </div>
                <BiChevronLeft className='slider-btn'  onClick={PrevTestimonial} />
                <BiChevronRight className='slider-btn' onClick={NextTestimonial} />
             </div>
        </div>
    </>
}
export default Slider;
export {WhyChoose,Explore,Prototype,Favorites};