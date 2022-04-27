import Head from 'next/head';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Polly</title>
        <link rel="icon" href="/code-foo-logo.svg" />
      </Head>
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
