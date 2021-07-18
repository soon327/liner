import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import HomePage from './pages/Home';
import HighlightsPage from './pages/Highlights';
import DetailPage from './pages/Detail';

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
              <Route path="/home" exact component={HomePage} />
              <Route path="/myhighlights/highlights" exact component={HighlightsPage} />
              <Route path="/more" component={HomePage} />
              <Route path="/:types/pages" component={DetailPage} />
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
