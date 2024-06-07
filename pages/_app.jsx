import { Analytics } from '@vercel/analytics/react';
import '/styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
