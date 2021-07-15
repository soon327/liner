import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/Home';
import HighlightsPage from './pages/Highlights';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/highlights" component={HighlightsPage} />
            <Redirect path="*" to="/home" />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
