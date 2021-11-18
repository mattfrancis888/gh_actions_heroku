// import "../../client/styles/globals.css";
import "../styles/globals.css";
import "../src/scss/main.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
