import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const navLinkClass = (path) =>
    `px-4 py-2 rounded-xl transition-transform duration-200 hover:-translate-y-0.5 ${
      pathname === path
        ? "bg-white text-indigo-600 font-semibold"
        : "text-white hover:bg-indigo-500"
    }`;

  return (
    <nav className="bg-indigo-600 p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">MoodLog</h1>
        <div className="flex gap-4">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link to="/new" className={navLinkClass("/new")}>
            New Entry
          </Link>
          <Link to="/entries" className={navLinkClass("/entries")}>
            Past Entries
          </Link>
        </div>
      </div>
    </nav>
  );
}
