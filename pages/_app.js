import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/Layout';
// const rootElement = document.getElementById("root");

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp
