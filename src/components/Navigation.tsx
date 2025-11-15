"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { PhoneIcon, WhatsAppIcon, XMarkIcon, Bars3Icon } from "@/components/Icons";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "À Propos", href: "#about" },
    { label: "Avantages", href: "#benefits" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/98 shadow-lg md:bg-white/95 md:backdrop-blur-md"
            : "bg-white/95 md:bg-white/80 md:backdrop-blur-sm"
        }`}
        style={{ willChange: "transform" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("#hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Logo className="h-12 w-32 shrink-0" />
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-semibold text-gray-700 transition-colors hover:text-[#2B9B9E]"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Buttons Desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <motion.a
              href="https://wa.me/212661558899"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-[#1fa855]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </motion.a>
            <motion.a
              href="tel:+212661558899"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-[#2B9B9E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-[#1F7679]"
            >
              <PhoneIcon className="h-5 w-5" />
              Appeler
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2B9B9E]/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-[#2B9B9E]" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[#2B9B9E]" />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl lg:hidden"
              style={{ willChange: "transform" }}
            >
              <div className="flex h-full flex-col p-6">
                {/* Close Button */}
                <div className="mb-8 flex items-center justify-between">
                  <Logo className="h-10 w-24" />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-600" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full rounded-lg px-4 py-3 text-left text-lg font-semibold text-gray-700 transition-colors hover:bg-[#2B9B9E]/10 hover:text-[#2B9B9E]"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Contact Buttons */}
                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <motion.a
                    href="https://wa.me/212661558899"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp
                  </motion.a>
                  <motion.a
                    href="tel:+212661558899"
                    whileTap={{ scale: 0.95 }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2B9B9E] px-6 py-3 font-semibold text-white shadow-lg"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Appeler
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

