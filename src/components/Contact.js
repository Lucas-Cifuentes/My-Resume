import React from 'react'
import styled from "styled-components"
import Divider from "./Divider"

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
  i{
    font-size: 1.2rem;
  }
`

const Text = styled.span`
  margin-left: 0.5rem;
`

const Contact = () => {
  return (
    <>
      <Title>Contact</Title>
      <Divider secondary />
      <Item>
      <i className="fas fa-mobile-alt"></i> <Text>+54 2236017890</Text>
      </Item>
      <Item>
      <i className="fas fa-envelope"></i> <Text>lucasdcifuentes@gmail.com</Text>
      </Item>
      <Item>
      <i className="fas fa-map-marker-alt"></i> <Text>Mar del Plata, Argentina</Text>
      </Item>
    </>
  )
}

export default Contact
