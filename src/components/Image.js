import React from 'react'
import photo from "../assets/photo.jpg";
import styled from "styled-components"

const ImageStyled = styled.img`
  height: 8rem;
  border-radius: 50%;
  margin-top: 1rem;
`

const Image = () => {
  return (
    <ImageStyled src={photo} alt="photo"/>
  )
}

export default Image
