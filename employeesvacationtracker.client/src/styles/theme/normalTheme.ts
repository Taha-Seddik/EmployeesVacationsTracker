import { createTheme } from '@mui/material/styles';

const normalTheme = createTheme({
  palette: {
    text: {},
  },
  typography: {
    fontFamily: ['Inter Variable', 'sans-serif'].join(','),
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 35,
        },
      },
    },
  },
});

export default normalTheme;
