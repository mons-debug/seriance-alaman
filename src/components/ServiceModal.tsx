"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckmarkIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

interface ServiceDetail {
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  process?: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-lg backdrop-blur-sm hover:bg-white hover:text-[#0F5132]"
              >
                <span className="text-2xl">×</span>
              </motion.button>

              {/* Header Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-extrabold text-white"
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-2 text-lg text-white/90"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>

              {/* Content */}
              <div className="max-h-[60vh] overflow-y-auto p-8">
                {/* Full Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="mb-4 text-2xl font-bold text-[#0F5132]">
                    Description Complète
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {service.fullDescription}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="mb-4 text-2xl font-bold text-[#0F5132]">
                    Nos Prestations
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckmarkIcon className="mt-1 h-5 w-5 shrink-0 text-[#25D366]" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="mb-4 text-2xl font-bold text-[#0F5132]">
                    Avantages
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="glass rounded-xl p-4"
                      >
                        <p className="font-medium text-gray-800">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Process (if available) */}
                {service.process && service.process.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-8"
                  >
                    <h3 className="mb-4 text-2xl font-bold text-[#0F5132]">
                      Notre Processus
                    </h3>
                    <div className="space-y-4">
                      {service.process.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F5132] text-sm font-bold text-white">
                            {index + 1}
                          </div>
                          <p className="flex-1 pt-1 text-gray-700">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-4 border-t border-gray-200 pt-6"
                >
                  <motion.a
                    href="tel:+212661558899"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0F5132] px-6 py-3 font-semibold text-white shadow-lg hover:bg-[#0c3f27]"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Appelez-nous
                  </motion.a>
                  <motion.a
                    href="https://wa.me/212661558899"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg hover:bg-[#1c9f4a]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

