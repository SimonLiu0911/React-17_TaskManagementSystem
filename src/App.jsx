import React, { useState } from "react";
import ProjectList from "screens/project-list";
import LoginScreen from "screens/login";

import { Card, Divider } from "antd";

import "App.css";
import styled from "@emotion/styled";

import {AuthenticatedApp} from "authenticated-app"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 35rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const App = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
	  <>
	  	<AuthenticatedApp></AuthenticatedApp>
	  </>
    // <Container>
    //   <ShadowCard>
    //     {isRegister ? <ProjectList /> : <LoginScreen />}
    //     <Divider />
    //     <a href="#" onClick={() => setIsRegister(!isRegister)}>
    //       切換到{isRegister ? "Login" : "Register"}
    //     </a>
    //   </ShadowCard>
    // </Container>
  );
};

export default App;
