import React from 'react'
import photo from "../assets/photo.jpg";
import styled from "styled-components"

const ImageStyled = styled.img`
  width: 8rem;
  border-radius: 50%;
  margin: 1rem auto;
`

const Image = () => <ImageStyled src={photo} alt="photo"/>

export default Image
