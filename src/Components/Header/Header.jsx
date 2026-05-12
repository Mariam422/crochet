import { Link } from "react-router-dom";
import { Video } from "lucide-react";

export default function Header() {
  return (
<header className="sticky top-0 z-[999] bg-[#fff6e5] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
  <nav className="max-w-[1100px] mx-auto px-8 h-[100px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-[#e76f51]">
          crochet_by<span className="text-[#f4a261]">Loomy</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-[#4e342e] text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-[#f4a261] transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tutorials" className="hover:text-[#f4a261] transition">
              Tutorials
            </Link>
          </li>
          <li>
            <Link to="/patterns" className="hover:text-[#f4a261] transition">
              Patterns
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="hover:text-[#f4a261] transition">
              Tasks
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="bg-[#f4a261] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e76f51] transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
