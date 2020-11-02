import React from 'react'
import photo from "../assets/photo.jpg";
import styled from "styled-components"

const ImageStyled = styled.img`
  width: 8rem;
  border-radius: 50%;
  margin: 1rem auto;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
`

const Image = () => <ImageStyled src={photo} alt="photo"/>

export default Image
