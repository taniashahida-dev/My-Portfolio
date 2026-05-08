"use client";

const GlowBackground = ({ children }) => {
  return (
    <div className="relative bg-[#0b0f1a] text-white overflow-hidden">

      {/* Glow blobs */}
      <div className="fixed -top-25 left-[-100px] w-[400px] h-[400px] bg-purple-600 opacity-30 blur-[120px] rounded-full"></div>

      <div className="fixed bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-600 opacity-30 blur-[120px] rounded-full"></div>

      {children}
    </div>
  );
};

export default GlowBackground;