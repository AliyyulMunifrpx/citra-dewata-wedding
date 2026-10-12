"use client";

import { useState } from "react";
import Link from "next/link";
import { information } from "../data/information.js";
import Image from "next/image.js";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menu1 = { name: "Weddings", href: "#weddings" };
  const menu2 = { name: "Packages", href: "#packages" };
  const menu3 = { name: "Vendors", href: "#vendors" };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-primary font-sans font-extralight text-white px-4 lg:px-16 py-4">
      <div className="w-full flex items-center justify-between">
        {/* === LOGO (SISI KIRI) === */}
        <div className="flex items-center font-bold text-xl">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/logo.webp"
              alt={information.name}
              width={600}
              height={600}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* === TAMPILAN DESKTOP: MENU (SISI KANAN) === */}
        <nav className="hidden md:flex items-center gap-16 xl:gap-32">
          <Link
            href={menu1.href}
            className="hover:text-second transition-colors"
          >
            {menu1.name}
          </Link>
          <Link
            href={menu2.href}
            className="hover:text-second transition-colors"
          >
            {menu2.name}
          </Link>
          <Link
            href={menu3.href}
            className="hover:text-second transition-colors"
          >
            {menu3.name}
          </Link>
        </nav>

        {/* === TAMPILAN MOBILE: BURGER BUTTON (SISI KANAN) === */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="focus:outline-none cursor-pointer"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* === MENU MOBILE FULL SCREEN OVERLAY === */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-primary z-50 md:hidden flex flex-col p-4 justify-between overflow-y-auto">
          {/* Header Mobile Fullscreen (Logo & Tombol Close) */}
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo.webp"
                alt={information.name}
                width={600}
                height={600}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="focus:outline-none cursor-pointer"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Daftar Navigasi Mobile (3 Menu Utama) */}
          <nav className="flex flex-col gap-8 my-auto pt-8 pb-8 text-center">
            <Link
              href={menu1.href}
              onClick={() => setIsMobileOpen(false)}
              className="hover:text-second text-2xl transition-colors"
            >
              {menu1.name}
            </Link>
            <Link
              href={menu2.href}
              onClick={() => setIsMobileOpen(false)}
              className="hover:text-second text-2xl transition-colors"
            >
              {menu2.name}
            </Link>
            <Link
              href={menu3.href}
              onClick={() => setIsMobileOpen(false)}
              className="hover:text-second text-2xl transition-colors"
            >
              {menu3.name}
            </Link>
          </nav>

          {/* Spacer Bawah */}
          <div className="h-4"></div>
        </div>
      )}
    </header>
  );
}
