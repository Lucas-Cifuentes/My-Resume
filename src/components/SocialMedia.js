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

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.secondary};
`

const SocialMedia = () => {
  return (
    <>
      <Title>Social Media</Title>
      <Divider secondary />
      <Item><i className="fab fa-linkedin"></i> <Link href="https://www.linkedin.com/in/lucascifuentes/" target="_blank" ><Text>@lucascifuentes</Text></Link></Item>
      <Item><i className="fab fa-github"></i> <Link href="https://github.com/Lucas-Cifuentes" target="_blank" > <Text>Lucas-Cifuentes</Text></Link></Item>
    </>
  )
}

export default SocialMedia
