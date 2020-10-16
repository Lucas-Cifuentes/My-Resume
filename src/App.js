import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import theme from "./styles/theme"

import LefContent from "./components/LeftContent"
import RightContent from "./components/RightContent"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fafafa;
`

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Container>
        <LefContent />
        <RightContent />
      </Container>
      </ThemeProvider>
  );
}

export default App;
