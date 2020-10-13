import React from 'react'

import Divider from "./Divider";
import Title from "./Title";
import Description from "./Description";


const AboutMe = () => {
  return (
    <>
    <Title text="Frontend Developer" />
    <Description>
      Apasionado por el mundo de la tecnología, en especial la programación. 
      Eh trabajado de forma freelance en varios projectos.
      Nunca paro de aprender y me manejo muy bien en los trabajos en grupo
    </Description>
    <Divider large />
    </>
  )
}

export default AboutMe
