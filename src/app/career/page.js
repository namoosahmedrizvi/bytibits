
"use client"
import React from 'react';

import '../../../public/style/CraeerStyle.css'; // Ensure this path is correct
import Image from 'next/image';

import Rectangle from '../../../public/images/Rectangle33.png';
import WorkWithUsImg from '../../../public/images/WorkWithUsimg.png';
import WorkWithUsImg2 from '../../../public/images/WorkWithUsimg2.png';
import WorkWithUsImg3 from '../../../public/images/WorkWithUsimg3.png';
import WorkWithUsImg4 from '../../../public/images/WorkWithUsimg4.png';
import WorkWithUsImg5 from '../../../public/images/WorkWithUsimg5.png';
import WorkWithUsImg1a from '../../../public/images/WorkWithUsimg1a.png';
import WorkWithUsImg2a from '../../../public/images/WorkWithUsimg2a.png';
import WorkWithUsImg3a from '../../../public/images/WorkWithUsimg3a.png';
import WorkWithUsImg4a from '../../../public/images/WorkWithUsimg4a.png';
import WorkWithUsImg5a from '../../../public/images/WorkWithUsimg5a.png';
import WebDevelopment from '../../../public/images/Web Development.png';

import Vector7 from '../../../public/images/Vector7.png';
import Group33 from '../../../public/images/Group33.png';

const Career = () => {
  return (
    <div className='container-fluid WorkWithUsCf'>
      <div className='WorkWithUsMb'>
<div className='row row1'>
<div className='col-lg-3 col-12'></div>

<div className='col-lg-6 col-12'>
            <Image src={Rectangle} alt='Rectangle' className='RectangleCar' />
            <h1 className='HeadingCareer'>
              Working With us
            </h1>
          </div>
          <div className='col-lg-3 col-12'></div>


</div>

<div className='row row2'>

<div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12'>
<div className='image-hover-container ImgCon1'>



              
<div className='ImgDiv1'>
                <Image src={WorkWithUsImg} alt='WorkWithUsImg' className='WorkWithUsImg WorkWithUsImg1' />
              </div>
          
              <div className='ImgDiv2'>
                <Image src={WorkWithUsImg1a} alt='WorkWithUsImg' className='WorkWithUsImga WorkWithUsImg1a' />
                <div className='contentText'>
                  <h5 className='headings'>Backend Developer </h5><span className='tech'><Image src={WebDevelopment} alt='WebDevelopment' className='WebDevelopment' /> Tech & Develop</span>
               
                  <p className='descrip'>Join us if you are an expert in crafting
                     powerful server-side solutions for our client's experiences.</p>
                </div> 
              </div> 

            

  
</div>




</div>

<div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12'>
            <Image src={Vector7} className='Vector7' alt='Vector7'/>
            <div className='image-hover-container ImgCon2'>
              
              <div className='ImgDiv1'>
                <Image src={WorkWithUsImg2} alt='WorkWithUsImg' className=' WorkWithUsImg WorkWithUsImg2' />
              </div>
              
               <div className='ImgDiv2'>
                
                <Image src={WorkWithUsImg2a} alt='WorkWithUsImg' className='WorkWithUsImga WorkWithUsImg2a' />
                <div className='contentText'>
                  <h5 className='headings reset'>Full Stack Developer</h5><span className='tech'><Image src={WebDevelopment} alt='WebDevelopment' className='WebDevelopment' /> Tech & Develop</span>
               
                  <p className='descrip'>Versatile Full Stack Developer creating 
                     digital experiences are encouraged to apply.</p>
                </div> 
              </div> 
            </div>

            
          </div>
          




<div className=' col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12'>
<Image src={Group33} alt='Group33' className='Group33' />
            <div className='image-hover-container ImgCon3'>
            
              <div className='ImgDiv1'>
              
                <Image src={WorkWithUsImg3} alt='WorkWithUsImg' className='WorkWithUsImg WorkWithUsImg3' />
                
              </div>
              
               <div className='ImgDiv2 '>
                <Image src={WorkWithUsImg3a} alt='WorkWithUsImg' className='WorkWithUsImga WorkWithUsImg3a' />
                <div className='contentText'>
                  <h5 className='headings reset'>Front-End Developer</h5> <span className='tech'><Image src={WebDevelopment} alt='WebDevelopment' className='WebDevelopment' /> Tech & Develop</span>
               
                  <p className='descrip'>Join our team of digital innovators,
                    shaping dynamic and responsive web designs to
                     elevate user experiences.</p>
                </div> 
              </div> 

            </div>
            
          </div>
          
          
        

<div className=' col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12'>
            <div className='image-hover-container ImgCon4'>
             
              <div className='ImgDiv1'>
                <Image src={WorkWithUsImg4} alt='WorkWithUsImg' className='WorkWithUsImg WorkWithUsImg4' />
              </div>
              
             <div className='ImgDiv2'>
                <Image src={WorkWithUsImg4a} alt='WorkWithUsImg' className='WorkWithUsImga WorkWithUsImg4a' />
              <div className='contentText conT'>
                  <h5 className='headings'>Business Development Assoc</h5><span className='tech'><Image src={WebDevelopment} alt='WebDevelopment' className='WebDevelopment' /> Sales & Market</span>
               
                  <p className='descrip'>Join our team of digital innovators,
                    shaping dynamic and responsive web designs to elevate user experiences.</p>
                </div> 
              </div> 

            </div>




          </div>

  <div className=' col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12'>
            <div className='image-hover-container Imgcon5'>
              
              <div className='ImgDiv1'>
                <Image src={WorkWithUsImg5} alt='WorkWithUsImg' className='WorkWithUsImg WorkWithUsImg5' />
              </div>

              <div className='ImgDiv2 ImgDiv5a'>
                
              <Image src={WorkWithUsImg5a} alt='WorkWithUsImg' className='WorkWithUsImga WorkWithUsImg5a' />


               
              <div className='contentText conT'>
                <h5 className='headings'>Lead Generation Executive </h5>
                 <span className='tech'><Image src={WebDevelopment} alt='WebDevelopment' className='WebDevelopment' /> Sales & Market</span>
                  <p className='descrip'>Fuel our success by driving strategic
                     lead generation efforts. Join the BytiBits team for
                      your growth and excellence.</p>
                </div> 


</div>
             
               
              
            </div>
            </div>





</div>


</div>




      </div>
   
    
  );
}

export default Career;




