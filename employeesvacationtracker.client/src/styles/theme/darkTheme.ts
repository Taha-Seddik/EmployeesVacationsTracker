import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Inter Variable", "sans-serif"].join(","),
  },
  components: {},
});

export default darkTheme;
