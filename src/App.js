import Main from './Components/Main';
import { ThemeProvider } from "@mui/material/styles";
import theme from '../src/Components/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
