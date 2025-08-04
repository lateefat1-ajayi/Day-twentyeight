import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-white px-4 py-12 text-center">
  <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-2">MoodLog</h1>
  <p className="text-gray-600 mb-8 text-lg md:text-xl">
    Reflect on your day, track your emotions, and write your thoughts.
  </p>

  <div className="flex justify-center items-center w-full max-w-xs">
    <Link
      to="/new"
      className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:-translate-y-0.5 transition-transform duration-200 text-sm sm:text-base"
    >
      Get started
    </Link>
   
  </div>
</div>

  );
}
