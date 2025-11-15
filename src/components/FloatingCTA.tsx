"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon, WhatsAppIcon, EmailIcon } from "@/components/Icons";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactOptions = [
    {
      IconComponent: PhoneIcon,
      label: "Appeler",
      href: "tel:+212661558899",
      color: "bg-[#2B9B9E]",
    },
    {
      IconComponent: WhatsAppIcon,
      label: "WhatsApp",
      href: "https://wa.me/212661558899",
      color: "bg-[#25D366]",
      target: "_blank",
    },
    {
      IconComponent: EmailIcon,
      label: "Email",
      href: "mailto:contact@seriance.ma",
      color: "bg-[#3D4A4D]",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3">
          {/* Contact Options */}
          <AnimatePresence>
            {showOptions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col gap-3"
              >
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    target={option.target}
                    rel={option.target ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${option.color} flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-xl`}
                  >
                    <option.IconComponent className="h-5 w-5" />
                    <span className="hidden sm:inline">{option.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowOptions(!showOptions)}
            className={`flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-colors ${
              showOptions
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-[#2B9B9E] hover:bg-[#1F7679]"
            }`}
          >
            <motion.span
              animate={{ rotate: showOptions ? 45 : 0 }}
              className="text-2xl text-white"
            >
              {showOptions ? "×" : "+"}
            </motion.span>
          </motion.button>

          {/* Pulse Ring */}
          {!showOptions && (
            <motion.div
              className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 rounded-full bg-[#2B9B9E]"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
}

