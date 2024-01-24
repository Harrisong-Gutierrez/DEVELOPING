
import { GlobalStateProvider } from "@/context/ListStateContext";
import "@/styles/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {

  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );;
}
