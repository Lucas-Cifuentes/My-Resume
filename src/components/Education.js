import React from 'react'
import styled from "styled-components"
import Divider from "./Divider";
import Title from "./Title"

const DescriptionStyled = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
`

const Education = () => {
  return (
    <>
    <h1>Education</h1>
    <Title text="Title" />
    <DescriptionStyled>
      Computer Technician (2012-2018), EEST N°3 (Mar del Plata, Argentina)
    </DescriptionStyled>
    <Divider />
    </>
  )
}

export default Education
