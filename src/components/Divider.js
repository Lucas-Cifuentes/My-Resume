import React from 'react'
import styled from "styled-components";

const DividerLine = styled.div`
  display: flex;
  border-top: 1px solid ${props => props.theme.primary};
  width: 25%;
`

const Divider = () => <DividerLine />;

export default Divider
