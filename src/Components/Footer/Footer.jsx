import { Instagram } from "lucide-react";

export default function Footer() {
  return (
<footer className="bg-[#faedcd] py-10 px-8 text-center text-[#7a5c50] shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-3 text-center">

        {/* Logo */}
        <div className="text-lg font-bold text-[#e76f51]">
          crochet_by<span className="text-[#f4a261]">Loomy</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#7a5c50]">
          © 2026 crochet_byLoomy. All rights reserved.
        </p>

        {/* Social */}
        <div>
          <a
            href="https://www.instagram.com/crochet_byloooomy?igsh=MW1idjE3c2QyNjdncw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f4a261] hover:text-[#e76f51] transition"
          >
            <Instagram size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}