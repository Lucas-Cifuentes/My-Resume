import React from 'react'
import photo from "../assets/photo.jpg";
import styled from "styled-components"

const ImageStyled = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 8rem;
  border-radius: 50%;
`

const Image = () => <ImageStyled src={photo} alt="photo"/>

export default Image
