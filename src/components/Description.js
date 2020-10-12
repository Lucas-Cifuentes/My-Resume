import React from 'react'
import styled from "styled-components"

import Divider from "./Divider";
import Title from "./Title";

const DescriptionStyled = styled.p`
  color: ${props => props.theme.text};
`

const Description = () => {
  return (
    <>
    <Title text="Frontend Developer" />
    <DescriptionStyled>
      Apasionado por el mundo de la tecnología, en especial la programación. 
      Eh trabajado de forma freelance en varios projectos.
      Nunca paro de aprender y me manejo muy bien en los trabajos en grupo
    </DescriptionStyled>
    <Divider large />
    </>
  )
}

export default Description
