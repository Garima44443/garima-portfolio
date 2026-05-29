import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ParticleBackground from "./components/ParticleBackground";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        position: "relative",
      }}
    >

      <ParticleBackground />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;