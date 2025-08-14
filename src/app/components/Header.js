"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="p-8 pb-4 bg-linear-to-b from-gray-700 to-gray-800">
      <div className="flex justify-between items-center">
        <h1 className="my-8 mb-16 font-bold text-6xl text-white mx-4 italic">
          Nathan's Clubhouse
        </h1>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle hamburger menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            )}
          </svg>
        </button>
      </div>

      <div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-wrap justify-start">
          <div className="bg-linear-to-b from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-900 active:from-gray-900 active:to-gray-800 text-white font-bold m-4 rounded-md select-none">
            <Link 
            href="/"
            className="inline-block p-4 px-16">Home</Link>
          </div>
          <div className="bg-linear-to-b from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-900 active:from-gray-900 active:to-gray-800 text-white font-bold m-4 rounded-md select-none">
            <Link 
            href="/websites"
            className="inline-block p-4 px-16">Websites</Link>
          </div>
          <div className="bg-linear-to-b from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-900 active:from-gray-900 active:to-gray-800 text-white font-bold m-4 rounded-md select-none">
            <Link 
            href="/android"
            className="inline-block p-4 px-16">Android</Link>
          </div>
          <div className="bg-linear-to-b from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-900 active:from-gray-900 active:to-gray-800 text-white font-bold m-4 rounded-md select-none">
            <a 
            href="https://github.com/PapsBurr" 
            target="_blank"
            className="inline-block p-4 px-16">GitHub</a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4">
            <div className="bg-linear-to-b from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-900 active:from-gray-900 active:to-gray-800 text-white font-bold m-4 rounded-md select-none">
              <Link
                href="/"
                className="inline-block p-4 px-16"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </div>
            <div className="bg-linear-to-b from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-900 active:from-gray-900 active:to-gray-800 text-white font-bold m-4 rounded-md select-none">
              <Link
                href="/websites"
                className="inline-block p-4 px-16"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Websites
              </Link>
            </div>
            <div className="bg-linear-to-b from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-900 active:from-gray-900 active:to-gray-800 text-white font-bold m-4 rounded-md select-none">
              <Link
                href="/android"
                className="inline-block p-4 px-16"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Android
              </Link>
            </div>
            <div className="bg-linear-to-b from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-900 active:from-gray-900 active:to-gray-800 text-white font-bold m-4 rounded-md select-none">
              <a
                href="https://github.com/PapsBurr"
                target="_blank"
                className="inline-block p-4 px-16"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </a>
            </div>
          </nav>
        )}

      </div>
    </header>
  );
}
