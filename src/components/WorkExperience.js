import React from 'react'
import styled from "styled-components"
import Divider from "./Divider"
import Title from "./Title";
import Description from "./Description";

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.primary};
`

const WorkExperience = () => {
  return (
    <>
    <h1>Work Experience</h1>
      <Title text="Freelance" />
      <Title text="Buenavista" />
      <Description>
        It consisted in the realization of a web page made in 
        React, Materialize and Firebase ("reactfire") which contains 
        private and public routes and an administrator panel to upload 
        and delete images and modify texts
      </Description>
      <Description>
          <Link 
          href="https://buenavista-b8fa2.web.app/" 
          target="_blank">
            (Go to example)
            </Link>
          <Link 
          href="https://github.com/Lucas-Cifuentes/BuenaVistaWeb" 
          target="_blank"> 
          (GitHub repository)
          </Link>
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
          <Link 
          href="https://oleohidraulicanico-49a68.web.app/" 
          target="_blank">
            (Go to example)
          </Link>
          <Link 
          href="https://github.com/Lucas-Cifuentes/HidraulicaWeb" 
          target="_blank">
            (GitHub repository)
          </Link>
          </Description>
      <Divider large />
    </>
  )
}

export default WorkExperience
