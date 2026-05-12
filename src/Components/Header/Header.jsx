import { Link } from "react-router-dom";
import { Video, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[999] bg-[#fff6e5] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
      <nav className="max-w-[1100px] mx-auto px-8 h-[100px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-[#e76f51]">
          crochet_by<span className="text-[#f4a261]">Loomy</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-[#4e342e] text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-[#f4a261]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tutorials" className="hover:text-[#f4a261]">
              Tutorials
            </Link>
          </li>
          <li>
            <Link to="/patterns" className="hover:text-[#f4a261]">
              Patterns
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="hover:text-[#f4a261]">
              Tasks
            </Link>
          </li>
        </ul>

        {/* Login */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="bg-[#f4a261] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e76f51]"
          >
            Login
          </Link>
        </div>

        {/* Burger Button */}
        <button
          className="md:hidden text-[#4e342e]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#fff6e5] px-8 pb-4 flex flex-col gap-4 text-[#4e342e] text-sm font-medium">
          <Link onClick={() => setOpen(false)} to="/">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/tutorials">
            Tutorials
          </Link>
          <Link onClick={() => setOpen(false)} to="/patterns">
            Patterns
          </Link>
          <Link onClick={() => setOpen(false)} to="/tasks">
            Tasks
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/login"
            className="bg-[#f4a261] text-white px-4 py-2 rounded-lg text-center"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
