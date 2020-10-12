import React from 'react'
import styled from "styled-components";

const DividerLine = styled.div`
  display: flex;
  border-top: 1px solid ${props => props.props.secondary ? props.theme.secondary : props.theme.primary};
  width: ${props => props.props.large ? "95%" : "50%" };
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`

const Divider = (props) => <DividerLine props={props} />;

export default Divider
