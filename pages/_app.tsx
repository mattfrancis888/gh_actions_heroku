// import "../../client/styles/globals.css";
import "../styles/globals.css";

import sass from "sass";

// var result = sass.renderSync({
//     file: "main.scss",
// });
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
