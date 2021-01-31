import Routes from './routes'
import { createMuiTheme, ThemeProvider  } from "@material-ui/core/styles";
import {  green, red } from '@material-ui/core/colors';




   

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#23461a',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}><Routes></Routes></ThemeProvider>
  )
}

export default App;
