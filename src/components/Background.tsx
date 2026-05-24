export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Deep navy core */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, #0B1A2A 0%, #000000 60%)" }} />

      {/* Drifting blue blobs */}
      <div className="absolute -top-1/4 -left-1/4 h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.45),transparent_60%)] blur-3xl animate-[blob-a_28s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-1/4 h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)] blur-3xl animate-[blob-b_34s_ease-in-out_infinite]" />
      <div className="absolute -bottom-1/4 left-1/4 h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(11,26,42,0.9),transparent_60%)] blur-3xl animate-[blob-c_40s_ease-in-out_infinite]" />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.6%22/></svg>')]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]" />
    </div>
  );
}
