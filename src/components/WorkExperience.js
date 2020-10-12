import React from 'react'
import styled from "styled-components"
import Divider from "./Divider"
import Title from "./Title";

// const Title = styled.h2`
//   margin-top: 0;
//   margin-bottom: 0.5rem;
//   color: ${props => props.theme.text};
// `

const Subtitle = styled(Title)`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`

const WorkExperience = () => {
  return (
    <>
    <h1>Work Experience</h1>
      <Title text="Freelance" />
      <Title text="Buenavista" />
      <Description>
        It consisted in the realization of a web application made in 
        React, Materialize and Firebase ("reactfire") which contains 
        private and public routes and an administrator panel to upload 
        and delete images and modify texts
      </Description>
      <Description>
          <a 
          href="https://buenavista-b8fa2.web.app/" 
          target="_blank">
            (Go to example)
            </a>
          <a 
          href="https://github.com/Lucas-Cifuentes/BuenaVistaWeb" 
          target="_blank"> 
          (GitHub repository)
          </a>
      </Description>
      <Title text="Oleohidráulica Nico" />
      <Description>
        Web application for hydraulic oil company
        made in Angular 9 and Firebase ("angularfire") which contains
        private and public routes, administrator panel, a product management 
        system, upload and remove images and videos and google maps with the 
        location
      </Description>
      <Description>
          <a 
          href="https://oleohidraulicanico.com/" 
          target="_blank">
            (Go to example)
          </a>
          <a 
          href="https://github.com/Lucas-Cifuentes/HidraulicaWeb" 
          target="_blank">
            (GitHub repository)
          </a>
          </Description>
      <Divider large />
    </>
  )
}

export default WorkExperience
