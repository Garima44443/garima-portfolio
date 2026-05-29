export default function ParticleBackground() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "300px",
          height: "300px",
          background: "cyan",
          borderRadius: "50%",
          filter: "blur(120px)",
          top: "10%",
          left: "10%",
          opacity: 0.3,
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: "fixed",
          width: "300px",
          height: "300px",
          background: "purple",
          borderRadius: "50%",
          filter: "blur(120px)",
          bottom: "10%",
          right: "10%",
          opacity: 0.3,
          zIndex: -1,
        }}
      />
    </>
  );
}