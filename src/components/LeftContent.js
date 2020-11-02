import React, {useEffect, useState} from 'react'
import styled from "styled-components";

import Image from "./Image"
import Contact from "./Contact"
import SocialMedia from "./SocialMedia"
import Skills from "./Skills"

const LeftContentStyed = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
  width: ${props => props.width < 600 ? "100%" : "18rem" };
  background-color: ${props => props.theme.background };
  color: ${props => props.theme.secondary};
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
`

const LeftContent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // console.log(width);

  useEffect(()=>{
    window.addEventListener("resize", ()=> setWidth(window.innerWidth))
  },[])

  return (
    <>
     <LeftContentStyed width={width} >
          <Image />
          {
            width < 600 && <Title>Lucas Cifuentes</Title>
          }
          <Contact />
          <SocialMedia />
          <Skills />
      </LeftContentStyed>
    </>
  )
}

export default LeftContent
