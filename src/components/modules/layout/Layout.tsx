import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Head from "components/common/head";
import GlobalStyles from "GlobalStyles";
import Header from "components/modules/header";
import { Container } from "components/common/globals/layout";

const Wrapper = styled.div``;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");
  function toggleTheme(mode: string) {
    if (mode === "light") setTheme("light");
    else setTheme("dark");
  }
  function navClick(name: string) {
    console.log(name);
  }

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Head />
      <GlobalStyles />

      <Wrapper>
        <Header onNavClick={navClick} onThemeToggle={toggleTheme} />
        <Container>{children}</Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
