import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { ShowSideBarProvider } from "./hooks/showSidebar";
import { AuthProvider } from "./hooks/useAuth";
import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer autoClose={5000}/>
      <BrowserRouter>
        <AuthProvider>
          <ShowSideBarProvider>
            <Router />
          </ShowSideBarProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
