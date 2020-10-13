import React from 'react'
import styled from "styled-components"

const DescriptionStyled = styled.p`
  color: ${props => props.theme.text};
  font-size: ${props => props.props.size ? props.props.size : null };
  margin: 0.5rem 0;
`

const Description = (props) => {
  return (
    <DescriptionStyled props={props}>
      {props.children}
    </DescriptionStyled>
  )
}

export default Description
