import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import theme from "./styles/theme"

import Divider from "./components/Divider"
import Image from "./components/Image"
import Contact from "./components/Contact"
import SocialMedia from "./components/SocialMedia"
import Skills from "./components/Skills"
import Description from "./components/Description"
import WorkExperience from "./components/WorkExperience"
import Education from "./components/Education";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
  width: 300px;
  background-color: ${props => props.theme.background };
  color: ${props => props.theme.secondary};
`

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 3rem;
  background-color: #fafafa;
`

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Container>
        <LeftContent>
          <Image />
          <Contact />
          <SocialMedia />
          <Skills />
        </LeftContent>
        <RightContent>
          <h1>Lucas Cifuentes</h1>
          <Divider />
          <Description />
          <WorkExperience />
          <Education />
        </RightContent>
      </Container>
      </ThemeProvider>
  );
}

export default App;
