import './App.css';
import React from 'react'
import Board from './components/Board';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FC33FF',
    },
    secondary: {
      main: '#3CFF33',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Board />
      </div>
    </ThemeProvider>
  );
}

export default App;
