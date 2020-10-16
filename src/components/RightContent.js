import React from 'react'
import styled from "styled-components";

import Divider from "./Divider"
import AboutMe from "./AboutMe"
import WorkExperience from "./WorkExperience"
import Education from "./Education";

const RightContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 3rem;
  padding-right: 3rem;
`

const RightContent = () => {
  return (
    <RightContentStyled>
          <h1>Lucas Cifuentes</h1>
          <Divider />
          <AboutMe />
          <WorkExperience />
          <Education />
    </RightContentStyled>
  )
}

export default RightContent
