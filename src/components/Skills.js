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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`

const Text = styled.span`
  margin-left: 0.5rem;
  font-size: 1.2rem;
`
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 8rem;
`

const Skills = () => {
  return (
    <>
      <Title>Skills</Title>
      <Divider secondary />
      <Item>
      <Text>JavaScript </Text>
      <Rating>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="far fa-circle"></i>
      </Rating>
      </Item>
      <Item>
      <Text>React </Text>
      <Rating>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="far fa-circle"></i>
      </Rating>
      </Item>
      <Item>
      <Text>React Native</Text>
      <Rating>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
      </Rating>
      </Item>
      <Item>
      <Text>Angular 8+ </Text>
      <Rating>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
      </Rating>
      </Item>
      <Item>
      <Text>Firebase </Text>
      <Rating>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
      </Rating>
      </Item>
      <Item>
      <Text>MongoDB </Text>
      <Rating>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
      </Rating>
      </Item>
      <Item>
      <Text>NodeJs </Text>
      <Rating>
        <i className="fas fa-circle"></i>
        <i className="fas fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
        <i className="far fa-circle"></i>
      </Rating>
      </Item>
    </>
  )
}

export default Skills
