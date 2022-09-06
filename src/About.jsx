import React from 'react'
import web from '../src/images/img1.svg';
import Common from './Common';
const About = () => {
  return (
    <>
     <Common name="Welcome to about page of" imgsrc={web} visit="/contact" btname="Contact Now"/>
    </>
  )
}

export default About

