import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';

import DatabaseDemo from './components/DatabaseDemo/DatabaseDemo';
import Home from './components/Home/Home';

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <div style={styles.appContainer}>

          {/* SIDEBAR + BURGER AREA */}
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </FocusLock>
          </div>

          {/* MAIN CONTENT */}
          <div style={styles.main}>
            <div style={styles.header}>
              My Cloud Demo Platform
            </div>

            <div style={styles.content}>
              <Switch>
                <Route path="/db">
                  <DatabaseDemo />
                </Route>

                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>

        </div>
      </Router>
    </ThemeProvider>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    height: "100vh",
    width: "100%",
    background: "#020213",
    color: "white"
  },
  main: {
    flex: 1,
    marginLeft: "60px",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    height: "60px",
    background: "#052d24",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    borderBottom: "1px solid #052d24"
  },
  content: {
    padding: "20px",
    overflowY: "auto",
    flex: 1
  }
};

export default App;