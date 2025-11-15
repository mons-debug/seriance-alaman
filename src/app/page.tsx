"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import FloatingCTA from "@/components/FloatingCTA";
import ServiceModal from "@/components/ServiceModal";
import FadeIn from "@/components/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/StaggerChildren";
import ScaleOnView from "@/components/ScaleOnView";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  CleaningIcon,
  VirusIcon,
  SecurityIcon,
  PeopleIcon,
  GardenIcon,
  CustomServiceIcon,
  PhoneIcon,
  WhatsAppIcon,
  EmailIcon,
  CheckmarkIcon,
  LightningIcon,
  LocationIcon,
  AwardIcon,
  BriefcaseIcon,
  StarIcon,
} from "@/components/Icons";

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      IconComponent: CleaningIcon,
      title: "Nettoyage Professionnel",
      description:
        "Nettoyage des bureaux, administrations et locaux après travaux avec équipement moderne",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      fullDescription: "Seriance Alaman offre des services de nettoyage professionnel de haute qualité pour tous types d'espaces commerciaux et administratifs. Notre équipe expérimentée utilise des équipements modernes et des produits écologiques pour garantir un environnement propre et sain.",
      features: [
        "Nettoyage quotidien des bureaux et espaces communs",
        "Nettoyage après travaux et rénovations",
        "Entretien des sols (moquette, carrelage, parquet)",
        "Nettoyage des vitres et façades",
        "Désinfection des sanitaires",
        "Gestion des déchets et recyclage"
      ],
      benefits: [
        "Personnel qualifié et formé",
        "Produits écologiques certifiés",
        "Intervention flexible selon vos horaires",
        "Équipement professionnel de dernière génération"
      ],
      process: [
        "Évaluation gratuite de vos besoins",
        "Établissement d'un plan de nettoyage personnalisé",
        "Intervention de notre équipe qualifiée",
        "Contrôle qualité systématique"
      ]
    },
    {
      IconComponent: VirusIcon,
      title: "Désinfection & Virus",
      description:
        "Lutte contre les virus et désinfection complète de vos espaces",
      image: "/disinfection.jpg",
      fullDescription: "Dans le contexte actuel, la désinfection professionnelle est essentielle. Nous utilisons des techniques et produits certifiés pour éliminer virus, bactéries et agents pathogènes, assurant la sécurité de vos employés et clients.",
      features: [
        "Désinfection complète des surfaces et points de contact",
        "Traitement antiviral et antibactérien",
        "Pulvérisation et nébulisation professionnelle",
        "Désinfection des systèmes de ventilation",
        "Protocoles sanitaires conformes aux normes",
        "Certificat de désinfection fourni"
      ],
      benefits: [
        "Protection maximale contre virus et bactéries",
        "Produits homologués et sans danger",
        "Intervention rapide en cas d'urgence",
        "Respect des normes sanitaires internationales"
      ],
      process: [
        "Audit sanitaire de vos locaux",
        "Protocole de désinfection adapté",
        "Application des traitements certifiés",
        "Certification et suivi post-intervention"
      ]
    },
    {
      IconComponent: SecurityIcon,
      title: "Gardiennage",
      description: "Service de gardiennage de jour et de nuit, sécurité assurée 24/7",
      image: "/gardiennage.jpg",
      fullDescription: "Protégez vos biens et installations avec notre service de gardiennage professionnel. Nos agents qualifiés assurent une surveillance continue de vos locaux, 24 heures sur 24, 7 jours sur 7.",
      features: [
        "Surveillance 24h/24 et 7j/7",
        "Rondes de sécurité programmées",
        "Contrôle d'accès et gestion des visiteurs",
        "Intervention en cas d'incident",
        "Surveillance vidéo et alarmes",
        "Rapports d'activité détaillés"
      ],
      benefits: [
        "Agents formés et expérimentés",
        "Réactivité immédiate en cas d'alerte",
        "Dissuasion des intrusions et vols",
        "Présence rassurante pour vos équipes"
      ],
      process: [
        "Analyse de vos besoins en sécurité",
        "Planification des rondes et horaires",
        "Déploiement de nos agents qualifiés",
        "Suivi et reporting régulier"
      ]
    },
    {
      IconComponent: PeopleIcon,
      title: "Personnel Administratif",
      description:
        "Secrétariat, accueil, support administratif et ouvriers de maintenance",
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80",
      fullDescription: "Renforcez votre équipe avec notre personnel qualifié. Nous mettons à votre disposition des professionnels compétents pour répondre à tous vos besoins en ressources humaines temporaires ou permanentes.",
      features: [
        "Secrétaires et assistants administratifs",
        "Personnel d'accueil et réception",
        "Agents de support technique",
        "Ouvriers de maintenance générale",
        "Personnel de ménage spécialisé",
        "Support informatique de base"
      ],
      benefits: [
        "Personnel qualifié et sélectionné",
        "Flexibilité selon vos besoins",
        "Formation continue de nos équipes",
        "Remplacement immédiat en cas d'absence"
      ],
      process: [
        "Définition précise de vos besoins",
        "Sélection du profil adapté",
        "Mise à disposition du personnel",
        "Suivi de performance et ajustements"
      ]
    },
    {
      IconComponent: GardenIcon,
      title: "Jardinage",
      description:
        "Entretien d'espaces verts et services de jardinage professionnels",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      fullDescription: "Embellissez et entretenez vos espaces verts avec notre équipe de jardiniers professionnels. Nous créons et maintenons des jardins attrayants qui valorisent votre propriété toute l'année.",
      features: [
        "Entretien régulier des pelouses et plantations",
        "Taille des arbres et arbustes",
        "Désherbage et traitement phytosanitaire",
        "Installation de systèmes d'arrosage",
        "Création de massifs et aménagements paysagers",
        "Ramassage des feuilles et déchets verts"
      ],
      benefits: [
        "Jardiniers expérimentés et passionnés",
        "Respect de l'environnement",
        "Matériel professionnel performant",
        "Conseils personnalisés pour vos espaces verts"
      ],
      process: [
        "Visite et diagnostic de vos espaces verts",
        "Proposition d'un plan d'entretien",
        "Interventions programmées régulières",
        "Ajustements selon les saisons"
      ]
    },
    {
      IconComponent: CustomServiceIcon,
      title: "Services Sur Mesure",
      description:
        "Solutions personnalisées adaptées à vos besoins spécifiques",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      fullDescription: "Chaque entreprise est unique. C'est pourquoi nous proposons des solutions sur mesure qui s'adaptent parfaitement à vos besoins spécifiques. Contactez-nous pour discuter de votre projet.",
      features: [
        "Analyse approfondie de vos besoins",
        "Solutions personnalisées et flexibles",
        "Combinaison de plusieurs services",
        "Gestion de projets complexes",
        "Adaptation aux contraintes spécifiques",
        "Suivi et optimisation continue"
      ],
      benefits: [
        "Approche 100% personnalisée",
        "Interlocuteur dédié à votre projet",
        "Réactivité et adaptabilité",
        "Tarification sur mesure"
      ],
      process: [
        "Rencontre et compréhension de vos besoins",
        "Élaboration d'une solution personnalisée",
        "Mise en œuvre progressive",
        "Optimisation et ajustements continus"
      ]
    },
  ];

  const benefits = [
    {
      IconComponent: LightningIcon,
      title: "Disponibilité 24/7",
      description: "Intervention rapide tous les jours de la semaine",
    },
    {
      IconComponent: LocationIcon,
      title: "Couverture Nationale",
      description: "Présents dans toutes les villes du Maroc",
    },
    {
      IconComponent: AwardIcon,
      title: "Professionnalisme",
      description: "Équipe qualifiée et matériel de qualité",
    },
    {
      IconComponent: BriefcaseIcon,
      title: "Expérience Prouvée",
      description: "Des années d'expertise à votre service",
    },
  ];

  const stats = [
    { value: 10, suffix: "+", label: "Ans d'expérience" },
    { value: 50, suffix: "+", label: "Villes couvertes" },
    { value: 500, suffix: "+", label: "Clients satisfaits" },
    { value: 5, suffix: "", label: "Services professionnels" },
  ];

  const testimonials = [
    {
      name: "Ahmed Bennani",
      role: "Directeur, Entreprise XYZ",
      content:
        "Service impeccable ! L'équipe est professionnelle et toujours à l'heure. Nos bureaux n'ont jamais été aussi propres.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Fatima Zahra",
      role: "Responsable RH, ABC Corp",
      content:
        "Nous faisons confiance à Seriance Alaman depuis 3 ans. Leur service de gardiennage est excellent et très fiable.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    {
      name: "Mohammed Alami",
      role: "Gérant, Restaurant Le Palais",
      content:
        "La désinfection professionnelle nous a permis de maintenir un environnement sûr pour nos clients. Hautement recommandé !",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=33",
    },
  ];

  return (
    <>
      <Navigation />
      <FloatingCTA />
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService !== null ? services[selectedService] : null}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#F5F9F9] to-white">
        {/* Hero Section */}
        <section id="hero" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16 md:pt-20">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2B9B9E]/5 via-transparent to-[#D5A60D]/5" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F5132' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
            <div className="grid items-center gap-6 md:gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-3 inline-block rounded-full bg-[#2B9B9E]/10 px-3 py-1.5 text-xs font-semibold text-[#2B9B9E] sm:px-4 sm:py-2 sm:text-sm"
                >
                  ✨ Services Professionnels au Maroc
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-[#2B9B9E] sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl"
                >
                  Propreté, Gardiennage & Services de Qualité
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base md:mb-8 md:text-lg lg:text-xl"
                >
                  Interventions dans toutes les villes du Maroc. Disponible tous
                  les jours de la semaine.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4"
                >
                  <motion.a
                    href="tel:+212661558899"
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#2B9B9E] px-5 py-3 text-sm font-semibold text-white shadow-lg sm:px-8 sm:py-4 sm:text-lg"
                  >
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    Appeler
                  </motion.a>
                  <motion.a
                    href="https://wa.me/212661558899"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-[#25D366] bg-white px-5 py-3 text-sm font-semibold text-[#25D366] shadow-lg sm:px-8 sm:py-4 sm:text-lg"
                  >
                    <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    WhatsApp
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:gap-6 sm:text-sm md:mt-8"
                >
                  <div className="flex items-center gap-1.5">
                    <CheckmarkIcon className="h-4 w-4 text-[#2B9B9E] sm:h-5 sm:w-5" />
                    <span className="text-gray-600">24/7</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckmarkIcon className="h-4 w-4 text-[#2B9B9E] sm:h-5 sm:w-5" />
                    <span className="text-gray-600">Devis Gratuit</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckmarkIcon className="h-4 w-4 text-[#2B9B9E] sm:h-5 sm:w-5" />
                    <span className="text-gray-600">Certifié</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Logo with floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative py-12 sm:py-16">
                  {/* Main Logo Circle */}
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="glass rounded-full p-6 shadow-2xl sm:p-8 md:p-12"
                  >
                    <Logo className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-64 lg:w-64" />
                  </motion.div>
                  
                  {/* Floating badge - 10+ Years - Top Left */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -left-2 top-4 rounded-xl bg-white px-3 py-2 shadow-xl sm:-left-6 sm:top-16 sm:rounded-2xl sm:px-6 sm:py-4"
                  >
                    <div className="text-xl font-bold text-[#2B9B9E] sm:text-3xl">10+</div>
                    <div className="text-[10px] font-medium text-gray-600 sm:text-xs">Années</div>
                  </motion.div>
                  
                  {/* Floating badge - 500+ Clients - Bottom Right */}
                  <motion.div
                    animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="absolute -right-2 bottom-4 rounded-xl bg-gradient-to-br from-[#8BC34A] to-[#689F38] px-3 py-2 text-white shadow-xl sm:-right-6 sm:bottom-16 sm:rounded-2xl sm:px-6 sm:py-4"
                  >
                    <div className="text-xl font-bold sm:text-3xl">500+</div>
                    <div className="text-[10px] font-medium sm:text-xs">Clients</div>
                  </motion.div>

                  {/* Floating Service Icons */}
                  {/* Cleaning Icon - Top Left */}
                  <motion.div
                    animate={{ x: [0, -8, 0], y: [0, -5, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                    className="absolute -left-10 top-6 rounded-full bg-gradient-to-br from-[#2B9B9E] to-[#1F7679] p-2.5 shadow-xl sm:-left-16 sm:top-12 sm:p-4"
                  >
                    <CleaningIcon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                  </motion.div>

                  {/* Security/Guard Icon - Top Right */}
                  <motion.div
                    animate={{ x: [0, 8, 0], y: [0, -5, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.4 }}
                    className="absolute -right-10 top-6 rounded-full bg-gradient-to-br from-[#3D4A4D] to-[#2B4D4F] p-2.5 shadow-xl sm:-right-16 sm:top-12 sm:p-4"
                  >
                    <SecurityIcon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                  </motion.div>

                  {/* Garden Icon - Bottom Right */}
                  <motion.div
                    animate={{ x: [0, 8, 0], y: [0, 5, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: 0.6 }}
                    className="absolute -right-10 bottom-6 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#689F38] p-2.5 shadow-xl sm:-right-16 sm:bottom-12 sm:p-4"
                  >
                    <GardenIcon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                  </motion.div>

                  {/* Tools/Maintenance Icon - Bottom Left */}
                  <motion.div
                    animate={{ x: [0, -8, 0], y: [0, 5, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }}
                    className="absolute -left-10 bottom-6 rounded-full bg-gradient-to-br from-[#FDD835] to-[#F9A825] p-2.5 shadow-xl sm:-left-16 sm:bottom-12 sm:p-4"
                  >
                    <CustomServiceIcon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2B9B9E]/10 blur-3xl sm:h-80 sm:w-80"
                  />
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-[#2B9B9E]"
              >
                <span className="text-sm font-medium">Découvrir nos services</span>
                <motion.svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative overflow-hidden bg-white py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-8 text-center md:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="mx-auto mb-3 inline-block rounded-full bg-[#2B9B9E]/10 px-3 py-1.5 text-xs font-semibold text-[#2B9B9E] sm:mb-4 sm:px-4 sm:py-2 sm:text-sm"
              >
                Ce que nous offrons
              </motion.div>
              <h2 className="mb-3 text-2xl font-extrabold text-[#2B9B9E] sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
                Nos Services Professionnels
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
                Une gamme complète de services adaptés à tous vos besoins
              </p>
            </FadeIn>

            {/* Mobile Swiper */}
            <div className="md:hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1.1}
                centeredSlides={false}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="!pb-12"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-lg"
                    >
                      {/* Service Image */}
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#2B9B9E] shadow-lg backdrop-blur-sm">
                          <service.IconComponent className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="mb-2 text-lg font-bold text-[#2B9B9E]">
                          {service.title}
                        </h3>
                        <p className="mb-3 text-sm text-gray-600">{service.description}</p>
                        <button
                          onClick={() => setSelectedService(index)}
                          className="flex items-center gap-2 text-sm font-semibold text-[#8BC34A]"
                        >
                          En savoir plus
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <StaggerChildren className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                    className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-lg"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 10 }}
                        className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm text-[#2B9B9E]"
                      >
                        <service.IconComponent className="w-8 h-8" />
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-bold text-[#2B9B9E]">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-gray-600">{service.description}</p>
                      <motion.button
                        onClick={() => setSelectedService(index)}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-sm font-semibold text-[#8BC34A] transition-colors hover:text-[#946F00]"
                      >
                        En savoir plus
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>

                    {/* Hover overlay effect */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2B9B9E]/0 to-[#D5A60D]/0"
                      whileHover={{ background: "linear-gradient(135deg, rgba(15,81,50,0.05) 0%, rgba(213,166,13,0.05) 100%)" }}
                    />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeIn delay={0.4} className="mt-12 text-center">
              <motion.a
                href="tel:+212661558899"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#2B9B9E] px-8 py-4 font-semibold text-white shadow-xl hover:bg-[#1F7679]"
              >
                Demander un devis gratuit
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </FadeIn>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative overflow-hidden bg-gradient-to-br from-[#F5F9F9] to-white py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-6 sm:gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
              <FadeIn>
                <div className="relative">
                  {/* Professional Team Image */}
                  <div className="relative h-[350px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                      alt="Équipe professionnelle Seriance Alaman"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B9B9E]/80 via-transparent to-transparent" />
                    
                    {/* Overlay badges */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8">
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="glass rounded-lg md:rounded-xl p-2 sm:p-3 text-center backdrop-blur-md"
                        >
                          <div className="mb-1 flex justify-center">
                            <AwardIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#8BC34A]" />
                          </div>
                          <div className="text-[10px] sm:text-xs font-bold text-white">Excellence</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="glass rounded-lg md:rounded-xl p-2 sm:p-3 text-center backdrop-blur-md"
                        >
                          <div className="mb-1 flex justify-center">
                            <CheckmarkIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#25D366]" />
                          </div>
                          <div className="text-[10px] sm:text-xs font-bold text-white">Qualité</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="glass rounded-lg md:rounded-xl p-2 sm:p-3 text-center backdrop-blur-md"
                        >
                          <div className="mb-1 flex justify-center">
                            <BriefcaseIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                          </div>
                          <div className="text-[10px] sm:text-xs font-bold text-white">Pro</div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating satisfaction badge */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ y: { duration: 3, repeat: Infinity } }}
                    className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4 md:-right-6 md:-top-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#2B9B9E] to-[#3DB5B8] p-3 sm:p-4 md:p-6 lg:p-8 text-white shadow-2xl"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold">100%</div>
                    <div className="text-[10px] sm:text-xs md:text-sm font-medium">Satisfaction</div>
                  </motion.div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div>
                  <div className="mb-2 sm:mb-3 md:mb-4 inline-block rounded-full bg-[#2B9B9E]/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-[#2B9B9E]">
                    Notre Histoire
                  </div>
                  <h2 className="mb-3 sm:mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2B9B9E]">
                    À Propos de Seriance Alaman
                  </h2>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                    <p>
                      <strong className="text-[#2B9B9E]">Seriance Alaman</strong>{" "}
                      est votre partenaire de confiance pour tous vos besoins en
                      services professionnels au Maroc.
                    </p>
                    <p>
                      Avec plus de <strong>10 ans d&apos;expérience</strong>, nous
                      offrons des solutions de nettoyage, gardiennage, et prestations
                      de services adaptées aux entreprises, administrations et
                      particuliers.
                    </p>
                    <p>
                      Notre mission est de fournir des services de{" "}
                      <strong>qualité supérieure</strong> avec une équipe
                      professionnelle et un matériel moderne, tout en garantissant
                      votre satisfaction à chaque intervention.
          </p>
        </div>
                  <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {[
                      { label: "Certifié", sublabel: "Professionnel", color: "bg-[#2B9B9E]" },
                      { label: "Équipé", sublabel: "Matériel Moderne", color: "bg-[#8BC34A]" },
                      { label: "Disponible", sublabel: "24h/24 - 7j/7", color: "bg-[#2E6B57]" },
                    ].map((badge, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className={`${badge.color} rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 text-center text-white shadow-lg`}
                      >
                        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">{badge.label}</div>
                        <div className="text-[9px] sm:text-[10px] md:text-xs">{badge.sublabel}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="benefits" className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-8 text-center md:mb-16">
              <div className="mx-auto mb-3 inline-block rounded-full bg-[#2B9B9E]/10 px-3 py-1.5 text-xs font-semibold text-[#2B9B9E] sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
                Nos Avantages
              </div>
              <h2 className="mb-3 text-2xl font-extrabold text-[#2B9B9E] sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
                Pourquoi Nous Choisir ?
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
                Les raisons qui font de nous votre meilleur choix
              </p>
            </FadeIn>

            {/* Mobile: 2-column Grid */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileTap={{ scale: 0.98 }}
                  className="group rounded-xl bg-gradient-to-br from-[#F5F9F9] to-white p-4 text-center shadow-lg"
                >
                  <motion.div
                    className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#2B9B9E] to-[#3DB5B8] text-white shadow-xl"
                  >
                    <benefit.IconComponent className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mb-2 text-sm font-bold text-[#2B9B9E]">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Grid */}
            <StaggerChildren className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <ScaleOnView delay={index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -8 }}
                      className="group text-center"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2B9B9E] to-[#3DB5B8] text-white shadow-xl"
                      >
                        <benefit.IconComponent className="h-12 w-12" />
                      </motion.div>
                      <h3 className="mb-3 text-xl font-bold text-[#2B9B9E]">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </motion.div>
                  </ScaleOnView>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2B9B9E] to-[#3DB5B8] py-12 md:py-24 text-white">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-6 text-center md:mb-16">
              <h2 className="mb-2 text-2xl font-extrabold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
                Nos Chiffres Clés
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
                La preuve de notre excellence et engagement envers nos clients
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <ScaleOnView key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6 md:rounded-2xl md:p-8"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                      whileHover={{ opacity: 0.5 }}
                    />
                    <div className="relative">
                      <div className="mb-1 text-3xl font-extrabold sm:text-4xl md:mb-2 md:text-5xl lg:text-6xl">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs font-medium text-white/90 sm:text-sm md:text-base lg:text-lg">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                </ScaleOnView>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-b from-white to-[#F5F9F9] py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-8 text-center md:mb-16">
              <div className="mx-auto mb-3 inline-block rounded-full bg-[#2B9B9E]/10 px-3 py-1.5 text-xs font-semibold text-[#2B9B9E] sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
                Témoignages
              </div>
              <h2 className="mb-3 text-2xl font-extrabold text-[#2B9B9E] sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
                Ce Que Disent Nos Clients
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
                La satisfaction de nos clients est notre priorité
              </p>
            </FadeIn>

            {/* Mobile Swiper */}
            <div className="md:hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="!pb-12"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="glass relative rounded-2xl p-6 shadow-lg">
                      <div className="mb-3 flex gap-1 text-[#8BC34A]">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-5 w-5" />
                        ))}
                      </div>
                      <p className="mb-4 text-sm italic text-gray-700">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#2B9B9E]">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <StaggerChildren className="hidden gap-8 md:grid md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                    className="glass relative h-full rounded-2xl p-8 shadow-lg"
                  >
                    {/* Stars */}
                    <div className="mb-4 flex gap-1 text-[#8BC34A]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <StarIcon className="w-6 h-6" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="mb-6 text-gray-700 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-[#2B9B9E]">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Quote decoration */}
                    <div className="absolute right-8 top-8 text-6xl text-[#2B9B9E]/10">
                      &ldquo;
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-b from-[#F5F9F9] to-white py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <FadeIn>
              <div className="mx-auto mb-4 inline-block rounded-full bg-[#2B9B9E]/10 px-4 py-2 text-sm font-semibold text-[#2B9B9E]">
                Contactez-nous
              </div>
              <h2 className="mb-6 text-4xl font-extrabold text-[#2B9B9E] lg:text-5xl">
                Prêt à Commencer ?
              </h2>
              <p className="mb-12 text-xl text-gray-700">
                Contactez-nous dès maintenant pour un devis gratuit et personnalisé
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mb-12 grid gap-6 sm:grid-cols-3">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass group relative overflow-hidden rounded-2xl p-8 shadow-lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#2B9B9E]/5 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="mb-4 text-[#2B9B9E]"
                    >
                      <PhoneIcon className="w-16 h-16 mx-auto" />
                    </motion.div>
                    <div className="mb-2 text-sm font-semibold text-gray-600">
                      Appelez-nous
                    </div>
                    <a
                      href="tel:+212661558899"
                      className="text-2xl font-bold text-[#2B9B9E] hover:underline"
                    >
                      06 61 55 88 99
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass group relative overflow-hidden rounded-2xl p-8 shadow-lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#8BC34A]/5 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      className="mb-4 text-[#8BC34A]"
                    >
                      <EmailIcon className="w-16 h-16 mx-auto" />
                    </motion.div>
                    <div className="mb-2 text-sm font-semibold text-gray-600">
                      Envoyez un email
                    </div>
                    <a
                      href="mailto:contact@seriance.ma"
                      className="text-xl sm:text-2xl font-bold text-[#2B9B9E] hover:underline break-all"
                    >
                      contact@seriance.ma
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass group relative overflow-hidden rounded-2xl p-8 shadow-lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#3D4A4D]/5 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="mb-4 text-[#3D4A4D]"
                    >
                      <LocationIcon className="w-16 h-16 mx-auto" />
                    </motion.div>
                    <div className="mb-2 text-sm font-semibold text-gray-600">
                      Notre Adresse
                    </div>
                    <a
                      href="https://maps.google.com/?q=AROUS+AL+BAHR+RTE+CAP+SPARTEL+ACHAKAR+TANGER"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base md:text-lg font-bold text-[#2B9B9E] hover:underline break-words"
                    >
                      AROUS AL BAHR RTE CAP SPARTEL ACHAKAR TANGER
                    </a>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="tel:+212661558899"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(15, 81, 50, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-full bg-[#2B9B9E] px-10 py-5 text-lg font-semibold text-white shadow-xl"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#3DB5B8] to-[#0F5132]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                  />
                  <span className="relative flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5" />
                    Appeler Maintenant
                  </span>
                </motion.a>
                <motion.a
                  href="https://wa.me/212661558899"
            target="_blank"
            rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 211, 102, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#25D366] px-10 py-5 text-lg font-semibold text-white shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp
                  </span>
                </motion.a>
                <motion.a
                  href="mailto:contact@seriance.ma"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(213, 166, 13, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-[#8BC34A] px-10 py-5 text-lg font-semibold text-white shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    <EmailIcon className="w-5 h-5" />
                    Email
                  </span>
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-[#2B9B9E] to-[#3DB5B8] py-8 md:py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Mobile: Compact Layout */}
            <div className="mb-6 md:hidden">
              <div className="mb-4 text-center">
                <div className="mb-3 inline-flex items-center gap-2">
                  <Logo className="h-10 w-10" />
                  <div className="text-left">
                    <div className="text-lg font-bold">SERIANCE Alaman</div>
                    <div className="text-xs text-[#8BC34A]">Services Professionnels</div>
                  </div>
                </div>
              </div>

              {/* Contact Info - Mobile */}
              <div className="mb-4 space-y-2 text-center text-sm text-white/80">
                <div className="flex items-center justify-center gap-2">
                  <PhoneIcon className="h-4 w-4" />
                  <a href="tel:+212661558899" className="hover:text-white">06 61 55 88 99</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <EmailIcon className="h-4 w-4" />
                  <a href="mailto:contact@seriance.ma" className="hover:text-white">contact@seriance.ma</a>
                </div>
                <div className="flex items-center justify-center gap-2 px-4">
                  <LocationIcon className="h-4 w-4 flex-shrink-0" />
                  <a 
                    href="https://maps.google.com/?q=AROUS+AL+BAHR+RTE+CAP+SPARTEL+ACHAKAR+TANGER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white text-xs"
                  >
                    AROUS AL BAHR RTE CAP SPARTEL ACHAKAR TANGER
                  </a>
                </div>
              </div>

              {/* Social Icons - Mobile */}
              <div className="mb-4 flex justify-center gap-3">
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/212661558899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="tel:+212661558899"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
                >
                  <PhoneIcon className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="mailto:contact@seriance.ma"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
                >
                  <EmailIcon className="h-5 w-5" />
                </motion.a>
              </div>

              {/* Copyright - Mobile */}
              <p className="text-center text-xs text-white/60">
                © {new Date().getFullYear()} Seriance Alaman. Tous droits réservés.
              </p>
            </div>

            {/* Desktop: Full Layout */}
            <div className="hidden md:block">
              <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Logo className="h-12 w-12" />
                    <div>
                      <div className="text-xl font-bold">SERIANCE Alaman</div>
                      <div className="text-sm text-[#8BC34A]">Services Professionnels</div>
                    </div>
                  </div>
                  <p className="text-white/80">
                    Votre partenaire de confiance pour tous vos services
                    professionnels au Maroc depuis plus de 10 ans.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-bold">Services</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="hover:text-white transition-colors cursor-pointer">Nettoyage Professionnel</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Désinfection & Virus</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Gardiennage 24/7</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Personnel Administratif</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Jardinage</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-bold">Navigation</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="hover:text-white transition-colors cursor-pointer">Accueil</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Services</li>
                    <li className="hover:text-white transition-colors cursor-pointer">À Propos</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Témoignages</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-bold">Contact</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center gap-2">
                      <PhoneIcon className="w-5 h-5" />
                      <a href="tel:+212661558899" className="hover:text-white transition-colors">
                        06 61 55 88 99
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <EmailIcon className="w-5 h-5" />
                      <a href="mailto:contact@seriance.ma" className="hover:text-white transition-colors">
                        contact@seriance.ma
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <LocationIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <a 
                        href="https://maps.google.com/?q=AROUS+AL+BAHR+RTE+CAP+SPARTEL+ACHAKAR+TANGER"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        AROUS AL BAHR RTE CAP SPARTEL ACHAKAR TANGER
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>🕐</span>
                      <span>Disponible 7j/7 - 24h/24</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <p className="text-center text-sm text-white/60">
                    © {new Date().getFullYear()} Seriance Alaman. Tous droits réservés.
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href="https://wa.me/212661558899"
            target="_blank"
            rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      href="tel:+212661558899"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    >
                      <PhoneIcon className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href="mailto:contact@seriance.ma"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    >
                      <EmailIcon className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </footer>
    </div>
    </>
  );
}
