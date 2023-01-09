import React, { useEffect, useState } from 'react';
import Header from './Heading'
import {Section} from './Heading'
import {WhyChoose,Explore,Prototype,Favorites} from './Section'
import Slider from './Section';
import {Save,LastSec,Footer} from './Reviews'



function App() {
 return (
  <div>
     <Header />
     <Section />
     <WhyChoose />
     <Explore />
     <Prototype />
     <Favorites />
     <Slider />
     <Save />
     <LastSec />
     <Footer/>
  </div>
 )
}

export default App;
 