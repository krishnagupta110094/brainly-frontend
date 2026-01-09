import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  flex flex-col lg:flex-row bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
      {/* LEFT SECTION */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-14">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Build Your <span className="text-indigo-400">Digital Brain</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-slate-300 max-w-xl">
          Brainly helps you save, organize, and share content from YouTube,
          Twitter, blogs, and links — all in one intelligent dashboard.
        </p>

        <div className="mt-10 grid grid-cols-1 px-4 md:grid-cols-2  gap-10 mx-auto max-w-3xl">
          <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl w-56">
            <h3 className="text-xl font-semibold text-indigo-300">📌 Save</h3>
            <p className="text-sm text-slate-300 mt-2">
              Store videos, tweets and links instantly.
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl w-56">
            <h3 className="text-xl font-semibold text-indigo-300">✨ Create</h3>
            <p className="text-sm text-slate-300 mt-2">
              Capture ideas, videos, tweets, and links in one place — instantly
              and effortlessly.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl w-56">
            <h3 className="text-xl font-semibold text-indigo-300">
              🧠 Organize
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Keep everything structured & searchable.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl w-56">
            <h3 className="text-xl font-semibold text-indigo-300">🚀 Share</h3>
            <p className="text-sm text-slate-300 mt-2">
              Share your brain with a single link.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex items-center justify-center  my-10 px-10 lg:py-0">
        <div className="w-[420px] p-8 md:p-10 rounded-3xl bg-white/10 border border-white/10 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Get Started
          </h2>

          <p className="text-center text-sm md:text-base text-slate-300 mb-8">
            Join Brainly and organize your digital life.
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="w-full py-3 md:py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold text-lg"
          >
            Create Free Account
          </button>

          <button
            onClick={() => navigate("/signin")}
            className="w-full py-3 md:py-4 rounded-xl mt-4 border border-indigo-400 text-indigo-300 hover:bg-white/10 transition font-semibold"
          >
            Sign In
          </button>

          <p className="text-xs text-slate-400 text-center mt-6">
            No credit card required · Free forever
          </p>
        </div>
      </div>
    </div>
  );
}
