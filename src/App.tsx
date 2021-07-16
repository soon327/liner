import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import HomePage from './pages/Home';
import HighlightsPage from './pages/Highlights';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <CONTAINER>
            <Header />
            <MenuBar />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/myhighlights/highlights" component={HighlightsPage} />
              <Route path="/more" component={HomePage} />
              <Redirect path="*" to="/home" />
            </Switch>
          </CONTAINER>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const CONTAINER = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
