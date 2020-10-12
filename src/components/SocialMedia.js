import React from 'react'
import styled from "styled-components"
import Divider from "./Divider";

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

const SocialMedia = () => {
  return (
    <>
      <Title>Social Media</Title>
      <Divider secondary />
      <Item><i class="fab fa-linkedin"></i> <Text>lucascifuentes</Text></Item>
      <Item><i class="fab fa-github"></i> <Text>Lucas-Cifuentes</Text></Item>
    </>
  )
}

export default SocialMedia
