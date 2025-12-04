import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Usage:
// 1. Copy this file to your Vite + React project (e.g. src/components/Navbar.jsx)
// 2. Ensure Tailwind CSS is configured in your project.
// 3. Install lucide-react if you want icons: `npm i lucide-react`
// 4. Import and use <Navbar /> in your App.

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "home" },
    { name: "ABOUT", href: "about" },
    { name: "COMMITTEES", href: "committees" },
    { name: "LOCATION", href: "location" },
    { name: "AUTHORS", href: "authors" },

    { name: "REGISTRATION", href: "registration" },
    { name: "AWARDS", href: "awards" },
    { name: "ACCOMMODATION", href: "accommodation" },
    { name: "CONTACT US", href: "contact" },
    { name: "GALLERY", href: "gallery" },
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-extrabold text-[#8A1538] text-3xl">
          International Conference on Recent Advancements in Artificial
          Intelligence, Computational Intelligence, and Inclusive Technologies |
          ICRAIC2IT - 2025
        </h1>

        <div className="flex items-center justify-between h-16">
          {/* left: brand */}

          {/* center: desktop nav */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Contact show as primary */}
          </div>

          {/* mobile controls */}
          <div className="flex md:hidden items-center">
            <a
              href="/brochure.pdf"
              download
              className="mr-3 px-3 py-2 text-sm font-medium rounded-md border border-gray-200"
            >
              Brochure
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden mt-2 pb-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-1 px-3 py-2 rounded-md text-base font-semibold bg-indigo-600 text-white text-center"
              >
                CONTACT US
              </a>

              <a
                href="/brochure.pdf"
                download
                className="block mt-2 px-3 py-2 rounded-md text-base font-medium text-center border border-gray-200"
              >
                BROCHURE
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
