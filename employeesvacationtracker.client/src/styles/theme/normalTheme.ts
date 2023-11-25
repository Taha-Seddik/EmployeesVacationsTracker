import { createTheme } from "@mui/material/styles";

const normalTheme = createTheme({
  palette: {
    text: {},
  },
  typography: {
    fontFamily: ["Inter Variable", "sans-serif"].join(","),
  },
  components: {},
});

export default normalTheme;
