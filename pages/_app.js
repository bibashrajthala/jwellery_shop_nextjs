import "../styles/globals.scss";

import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import ContactSection from "../components/shared/ContactSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
