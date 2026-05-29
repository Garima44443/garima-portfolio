import { useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {

  const options = useMemo(() => ({
    background: {
      color: {
        value: "#050816",
      },
    },

    particles: {
      number: {
        value: 60,
      },

      color: {
        value: "#00ffff",
      },

      links: {
        enable: true,
        color: "#00ffff",
      },

      move: {
        enable: true,
        speed: 1,
      },

      opacity: {
        value: 0.5,
      },

      size: {
        value: 3,
      },
    },
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={loadSlim}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}