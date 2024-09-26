"use client";
import React from 'react';
import '../../../public/style/footerStyle.css'
import Image from 'next/image';

import Logobb from '../../../public/images/logoFooter.png'
import facebook from '../../../public/images/facebook.png'
import instagram from '../../../public/images/instagram.png'
import twitter from '../../../public/images/twitter.png'


const footer = () => {
  return (
<div className="container-fluid mt-5 mb-5">
<div className='row'>

<div className='col-lg-1 col-md-12 col-12'></div>
<div className='col-lg-3 col-md-12 col-12'>
<div className='mainLogo'>
<Image src={Logobb} alt='Logobb' className='Logobb' />

<div className='textF'>
<li className='pF'>
BytiBits focuses on value-based upscaling, ensuring clients' 
success from learning to implementation.

</li>

</div>
</div>

</div>
<ul className='col-lg-2 col-md-6 col-12  Set'>

<li className=' heads'>Quick Links</li> <br />
<li className='p p2'>Home</li>
<li className='p p2'>About</li>
<li className='p p2'>Portfolio</li>
<li className='p p2'>Career</li>
<li className='p p2'>Servies</li>



</ul>
<ul className='col-lg-2 col-md-6 col-6  Set'>

<li className='heads'> Head Office</li><br />

<li className='p loc'>337G- Rehmanpure</li>
<li className='p loc'> Lahore 54000,</li>
<li className='p loc'> Pakistan </li>
<li className='p loc'> Phone Number </li>
<li className='p loc'> 0322-4846656 </li>
<li className='p loc'> Email </li>
<li className='p loc'> bilaltariq6@gmail.com</li>


</ul>
<ul className='col-lg-2 col-md-12 col-12  Set'>
<li className='heads'>Our Socials</li><br />
<div className='SocDiv'>
<Image src={facebook} className='socialL' alt='facebook' />
<Image src={instagram} className='socialL' alt='instagram' />
<Image src={twitter} className='socialL' alt='twitter' />

</div>


</ul>
<div className='col-lg-2 col-md-2 col-12'></div>




</div>









</div>

  
  );
};
export default footer;
