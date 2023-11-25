import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routing/appRoutes";
import { ThemeProvider } from "@mui/material/styles";
import normalTheme from "./styles/theme/normalTheme";

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={normalTheme}>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
};

export default App;
