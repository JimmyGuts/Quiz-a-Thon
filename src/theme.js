import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { blue, lightGreen, grey, lightBlue } from '@material-ui/core/colors';
import CssBaseline from "@material-ui/core/CssBaseline";


const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#212121',
      // main: '#ffca28',
    },
    secondary: {
      main: '#ffca28',
      // main: '#212121',
    },
    background: {
      paper: '#303030',
    },
    text: {
      primary: "#fafafa",
    }
  },
  overrides : {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            "url(./4129375.jpg)",
          // backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }
      }
    }
  },

});

export default theme;