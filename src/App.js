import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import theme from "./styles/global"
import Divider from "./components/Divider"
import Image from "./components/Image"

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 300px;
  background-color: ${props => props.theme.background };
  color: ${props => props.theme.secondary};
`

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 3rem;
  height: 100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Container>
        <LeftContent>
          <Image />
        </LeftContent>
        <RightContent>
          <h1>Lucas Cifuentes</h1>
          <Divider />
        </RightContent>
      </Container>
      </ThemeProvider>
  );
}

export default App;
