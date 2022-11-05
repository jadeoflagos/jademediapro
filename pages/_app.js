import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

const theme = createTheme({
  palette: {
    primary: {
      main: "#502a7a",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
