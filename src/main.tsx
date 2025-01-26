import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import { idlFactory, canisterId } from './declarations/backend';
import { BrowserRouter } from "react-router-dom";
import { Layout } from './components/Layout';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <BrowserRouter>
          <Layout>
            <CssBaseline />
            <App />
          </Layout>
        </BrowserRouter>
      </ActorProvider>
    </AgentProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
