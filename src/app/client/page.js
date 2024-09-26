"use client";
import React from 'react';
import Image from 'next/image';
import '../../../public/style/logoBarStyle.css'

import SocialBu from '../../../public/images/SocialBu.png';
import ChatFai from '../../../public/images/ChatFai.png';
import LinkMngr from '../../../public/images/LinkMngr.png';
import teacheasy from '../../../public/images/teacheasy.png';
import FPC from '../../../public/images/FPC.png';

const Client = () => {
  return (
<div className='container-fluid LogoMain'>


<Image src={SocialBu} alt='SocialBu' className='img-fluid LogoDe  SocialBu' />


<Image src={ChatFai} alt='ChatFai' className='img-fluid LogoDe set ChatFai' />

  <Image src={LinkMngr} alt='LinkMngr' className='img-fluid LogoDe set LinkMngr' />

<Image src={teacheasy} alt='teacheasy' className='img-fluid LogoDe set te' />

<Image src={FPC} alt='FPC' className='img-fluid LogoDe set FPC' />












</div>

  );}

export default Client;
