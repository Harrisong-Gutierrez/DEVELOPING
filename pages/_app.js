import { TabProvider } from "@/context/TabContext";
import "@/styles/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";



export default function App({ Component, pageProps }) {

  return (
    <TabProvider>
      <Component {...pageProps} />
    </TabProvider>
  );;
}
