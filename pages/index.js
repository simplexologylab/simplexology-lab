import Head from "next/head";

import Hero from "../components/hero";
import Mission from "../components/mission";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simplexology Lab</title>
        <meta name="description" content="Making Technology Simple" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Simplexology Lab" />
        <meta name="og:site_name" content="Simplexology Lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-mono">
        <Hero />
        <Mission />
        <Services />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
