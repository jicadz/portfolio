import "@/styles/globals.css";
import "./nav/Nav.css";
import "./main/Main.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
