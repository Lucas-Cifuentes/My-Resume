import React from 'react'
import styled from "styled-components"


const TitleStyled = styled.h2`
  color: ${props => props.theme.text};
  margin: 0;
`

const Title = ({text}) => <TitleStyled>{text}</TitleStyled>

export default Title
