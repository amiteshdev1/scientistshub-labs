"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "@/Components/ThemeSwitcher";
import { useTheme } from "next-themes";
import { buildUrl } from '../lib/urlUtils';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { projects } from '../projects/data/projects';

// ==========================================
// 1. Icon Registry
// ==========================================
const ICONS = {
  settings: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  chart: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  code: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  design: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  mobile: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  cloud: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
  rocket: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
};

// ==========================================
// 2. Data Configuration
// ==========================================
const NAV_DATA = {
  services: [


    {
      title: "Software Services",
      path: "/software",
      iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      description: "Streamline your customer relationships and boost sales efficiency.",
      subItems: [
        // { name: "Real Estate CRM", path: "/software/real-estate-crm", icon: ICONS.settings },
        // { name: "Hospital CRM", path: "/software/hospital-crm", icon: ICONS.cloud },
        { name: "Custom Software", path: "/software/custom-software", icon: ICONS.cloud },
        // { name: "Real Estate CRM", path: "/crm-services/real-estate-crm", icon: ICONS.settings },
        // { name: "Hospital CRM", path: "/crm-services/hospital-crm", icon: ICONS.cloud },
      ]
    },
   
    {
      title: "Development",
      path: "/development",
      iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      description: "Robust, scalable, and secure web solutions tailored to your needs.",
      subItems: [
        { name: "Web Development", path: "/development/web-development", icon: ICONS.code },
        // { name: "E-commerce Solutions", path: "/development/e-commerce-solutions", icon: ICONS.chart },
        { name: "Custom Web Solution", path: "/development/custom-web-solution", icon: ICONS.settings },
        { name: "API & System Integration", path: "/development/api-system-integration", icon: ICONS.cloud },
        { name: "App Development", path: "/development/app-development", icon: ICONS.mobile },
        { name: "iOS App Development", path: "/development/ios-app-development", icon: ICONS.mobile },
        { name: "Android App Development", path: "/development/android-app-development", icon: ICONS.mobile },
        { name: "App UI/UX Design", path: "/development/apps-ui-ux-design", icon: ICONS.design },
        { name: "App Maintenance", path: "/development/app-maintenance", icon: ICONS.settings }
      ]
    },
     {
      title: "Digital Marketing",
      path: "/digital-marketing",
      iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      description: "Drive traffic, engagement, and conversions with data-driven strategies.",
      subItems: [
        { name: "SEO (Search Engine Opt)", path: "/digital-marketing/search-engine-optimization", icon: ICONS.chart },
        { name: "PPC Advertising", path: "/digital-marketing/pay-per-click", icon: ICONS.rocket },
        { name: "Social Media Optimization", path: "/digital-marketing/social-media-optimization", icon: ICONS.mobile },
        { name: "Email Marketing", path: "/digital-marketing/email-marketing", icon: ICONS.settings },
        { name: "Local SEO Services", path: "/digital-marketing/local-seo-services", icon: ICONS.design },
        { name: "Content Marketing", path: "/digital-marketing/content-marketing", icon: ICONS.design },
      ]
    },
    // {
    //   title: "Web Design",
    //   path: "/web-design",
    //   iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    //   description: "Crafting stunning, user-centric experiences that captivate audiences.",
    //   subItems: [
    //     { name: "UI/UX Design", path: "/web-design/ui-ux-design", icon: ICONS.design },
    //     { name: "Responsive Web Design", path: "/web-design/responsive-web-design", icon: ICONS.mobile },
    //     { name: "Landing Page Design", path: "/web-design/landing-page-design", icon: ICONS.rocket },
    //     { name: "Mobile-First Design", path: "/web-design/mobile-first-design", icon: ICONS.mobile }
    //   ]
    // },
    // {
    //   title: "Graphics Design",
    //   path: "/graphics-design",
    //   iconPath: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    //   description: "Visual storytelling that defines your brand identity.",
    //   subItems: [
    //     { name: "Logo & Branding Identity", path: "/graphics-design/logo-branding", icon: ICONS.design },
    //     // { name: "Marketing Materials", path: "/marketing-design", icon: ICONS.chart },
    //     { name: "Infographics Design", path: "/graphics-design/infographics-design", icon: ICONS.chart },
    //     { name: "Motion Graphics", path: "/graphics-design/motion-graphics", icon: ICONS.rocket }
    //   ]
    // },
    // {
    //   title: "App Development",
    //   path: "/app-development",
    //   iconPath: "M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z",
    //   description: "Innovative mobile applications for iOS and Android platforms.",
    //   subItems: [
    //     { name: "iOS App Development", path: "/app-development/ios-app-development", icon: ICONS.mobile },
    //     { name: "Android App Development", path: "/app-development/android-app-development", icon: ICONS.mobile },
    //     { name: "App UI/UX Design", path: "/app-development/apps-ui-ux-design", icon: ICONS.design },
    //     { name: "App Maintenance", path: "/app-development/app-maintenance", icon: ICONS.settings }
    //   ]
    // }
    //     { name: "App Maintenance", path: "/app-development/app-maintenance", icon: ICONS.settings }
    //   ]
    // }
  ],
  products: [
    {
      title: "LifeOS+",
      path: "/products/lifeosplus",
      status: "In Progress",
      iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", // Clock/Time icon for productivity
      description: "A comprehensive productivity ecosystem that helps you organize your entire life.",
      subItems: [
        { name: "Task Management", path: "", icon: ICONS.settings },
        { name: "Goal Tracking", path: "", icon: ICONS.chart },
        { name: "Habit Builder", path: "", icon: ICONS.code },
        { name: "Smart Reminders", path: "", icon: ICONS.mobile },
        { name: "Analytics Dashboard", path: "", icon: ICONS.chart },
      ]
    },

  ]
};

// ==========================================
// 3. Graphic Component (CSS Illustrations)
// ==========================================
interface ServiceIllustrationProps {
  type: string;
}

const ServiceIllustration = ({ type }: ServiceIllustrationProps) => {
  if (type.includes("CRM")) {
    return (
      <div className="relative w-full h-full bg-blue-50 dark:bg-[#1a1a2e] flex items-center justify-center p-6">
        {/* Abstract Network/CRM Graph */}
        <svg className="w-32 h-32 text-[#2d65bc] dark:text-[#4a90e2] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M10 8l-3 8" />
          <path d="M14 8l3 8" />
          <path d="M8 18h8" />
        </svg>
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-bounce animation-delay-200"></div>
      </div>
    );
  }

  if (type.includes("Digital Marketing")) {
    return (
      <div className="relative w-full h-full bg-green-50 dark:bg-[#1a2e1a] flex items-center justify-center p-6">
        <svg className="w-32 h-32 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 20h18L21 4M3 20l6-8 4 4 6-10" />
        </svg>
        <div className="absolute bottom-10 left-10 w-6 h-16 bg-green-200 dark:bg-green-800/50 rounded-t-lg"></div>
        <div className="absolute bottom-10 left-20 w-6 h-24 bg-green-300 dark:bg-green-700/50 rounded-t-lg"></div>
        <div className="absolute bottom-10 left-30 w-6 h-32 bg-green-400 dark:bg-green-600/50 rounded-t-lg"></div>
      </div>
    );
  }

  if (type.includes("Development")) {
    return (
      <div className="relative w-full h-full bg-gray-100 dark:bg-[#202020] flex items-center justify-center p-6">
        <div className="w-40 h-28 bg-white dark:bg-[#333] rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 p-2 flex flex-col">
          <div className="flex space-x-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="space-y-1">
            <div className="h-1 w-3/4 bg-gray-200 dark:bg-gray-500 rounded"></div>
            <div className="h-1 w-1/2 bg-gray-200 dark:bg-gray-500 rounded"></div>
            <div className="h-1 w-5/6 bg-blue-100 dark:bg-blue-900 rounded"></div>
          </div>
        </div>
        <svg className="absolute -right-2 -bottom-2 w-16 h-16 text-blue-500 opacity-20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" /></svg>
      </div>
    );
  }

  if (type.includes("Design") || type.includes("Graphics")) {
    return (
      <div className="relative w-full h-full bg-purple-50 dark:bg-[#2a1a2e] flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute top-10 left-10 w-12 h-12 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-sm animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-sm animate-pulse animation-delay-1000"></div>
        <svg className="w-32 h-32 text-purple-600 dark:text-purple-400 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-indigo-50 dark:bg-[#1a1a2e] flex items-center justify-center p-6">
      <div className="w-24 h-40 border-4 border-gray-800 dark:border-gray-400 rounded-2xl flex flex-col justify-between p-1 bg-white dark:bg-[#333]">
        <div className="h-1 w-8 bg-gray-200 self-center rounded mt-1"></div>
        <div className="grid grid-cols-3 gap-1 p-2">
          <div className="w-4 h-4 rounded bg-blue-400"></div>
          <div className="w-4 h-4 rounded bg-red-400"></div>
          <div className="w-4 h-4 rounded bg-green-400"></div>
          <div className="w-4 h-4 rounded bg-yellow-400"></div>
        </div>
        <div className="h-1 w-8 bg-gray-300 self-center rounded mb-1"></div>
      </div>
    </div>
  );
};

export default function Navbar() {
  // const { theme } = useTheme();
  // const isDarkMode = theme === 'dark';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState(NAV_DATA.services[0]);
  const [hoveredProduct, setHoveredProduct] = useState(NAV_DATA.products[0]);
  const [hoveredProject, setHoveredProject] = useState(projects[0]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [mobileActiveService, setMobileActiveService] = useState<number | null>(null);
  const [mobileActiveProduct, setMobileActiveProduct] = useState<number | null>(null);
  const [mobileActiveProject, setMobileActiveProject] = useState<number | null>(null);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const scrollPositionRef = useRef(0);

  // ==========================================
  // Event Handlers
  // ==========================================

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => setIsMenuAnimating(true), 10);
      setIsServicesOpen(false);
      setIsProductsOpen(false);
      setIsProjectsOpen(false);
      setMobileActiveService(null);
      setMobileActiveProduct(null);
      setMobileActiveProject(null);
    } else {
      setIsMenuAnimating(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  const handleMobileServiceClick = (index: number) => {
    if (mobileActiveService === index) {
      setMobileActiveService(null);
    } else {
      setMobileActiveService(index);
    }
  };

  const handleMobileProductClick = (index: number) => {
    if (mobileActiveProduct === index) {
      setMobileActiveProduct(null);
    } else {
      setMobileActiveProduct(index);
    }
  };

  const handleMobileProjectClick = (index: number) => {
    if (mobileActiveProject === index) {
      setMobileActiveProject(null);
    } else {
      setMobileActiveProject(index);
    }
  };

  const handleDropdownEnter = (name: string) => setActiveDropdown(name);
  const handleDropdownLeave = () => setActiveDropdown(null);
  const handleServiceHover = (service: typeof NAV_DATA.services[0]) => setHoveredService(service);
  const handleProductHover = (product: typeof NAV_DATA.products[0]) => setHoveredProduct(product);
  const handleProjectHover = (project: typeof projects[0]) => setHoveredProject(project);

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    setIsMenuAnimating(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (isMenuOpen && isMenuAnimating) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollPositionRef.current);
      };
    }
  }, [isMenuOpen, isMenuAnimating]);

  return (
    // Main Header: Supports Dark Mode
    <>
    <nav className="fixed w-full top-0 left-0 right-0 z-50 shadow-sm border-b transition-colors duration-300 bg-[var(--bg-primary)] border-[var(--border-primary)] backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* ===== Mobile Menu Toggle (Left Side) ===== */}
          {/* ... */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 lg:hidden focus:outline-none transition-colors text-[var(--text-primary)] hover:text-[var(--text-secondary)] mr-4"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* ===== Logo ===== */}
          <div className="flex-shrink-0">
            <Link href={buildUrl('/')} onClick={closeAllMenus}>
              <div className="flex items-center gap-2">
                <div className="relative h-[45px] w-[45px] flex items-center justify-center">
                  <Image
                    src="/scientistshub-labs-logo.png"
                    alt="ScientistsHub Labs Logo"
                    fill
                    className="object-contain drop-shadow-md rounded-xl"
                    priority
                  />
                </div>
                <span className="font-bold text-xl tracking-tight hidden sm:block text-[var(--text-primary)]">ScientistsHub Labs</span>
              </div>
            </Link>
          </div>

          {/* ===== Desktop Navigation ===== */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href={buildUrl('/')}
              className={`font-semibold px-3 py-2 text-[18px] transition-colors hover:text-[var(--accent-primary)] text-[var(--text-primary)] relative group`}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* ===== SERVICES MEGA MENU ===== */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link 
                href={buildUrl('/services')}
                onClick={closeAllMenus}
                className={`flex items-center text-[18px] space-x-1 font-semibold px-3 py-6 focus:outline-none transition-colors hover:text-[var(--accent-primary)] text-[var(--text-primary)]`}
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[var(--accent-primary)]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <div
                className={`absolute top-full left-1/3 transform -translate-x-1/3 w-[1000px] max-w-[750px] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-50 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] backdrop-blur-lg ${activeDropdown === "services"
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-95 -translate-y-2 invisible"
                  }`}
              >
                <div className="flex min-h-[480px]">
                  {/* Col 1: Services List */}
                  <div className="w-[240px] flex-shrink-0 py-6 overflow-y-auto scrollbar-thin bg-[var(--bg-tertiary)] border-r border-[var(--border-primary)] scrollbar-thumb-[var(--border-secondary)]">
                    <h3 className="px-6 text-xs font-bold uppercase tracking-wider mb-4 text-[var(--text-muted)]">Services</h3>
                    <div className="space-y-0.5 px-2">
                      {NAV_DATA.services.map((service, idx) => (
                        <Link
                          key={idx}
                          href={buildUrl(service.path)}
                          onClick={closeAllMenus}
                          className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group ${hoveredService.title === service.title
                            ? 'bg-[var(--bg-secondary)] shadow-md text-[var(--accent-primary)] translate-x-1 border border-[var(--border-primary)]'
                            : 'hover:bg-[var(--bg-secondary)] hover:shadow-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                            }`}
                          onMouseEnter={() => handleServiceHover(service)}
                        >
                          <div className={`p-1.5 rounded-md mr-3 transition-colors flex-shrink-0 ${hoveredService.title === service.title
                            ? 'bg-[var(--bg-primary)] bg-opacity-10 text-[var(--accent-primary)]'
                            : 'bg-[var(--bg-primary)] text-[var(--text-muted)] group-hover:text-[var(--accent-primary)]'
                            }`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                            </svg>
                          </div>
                          <span className="font-medium text-sm truncate">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Sub-Categories */}
                  <div className="flex-1 p-8 flex flex-col bg-[var(--bg-secondary)]">
                    <div className="mb-6 pb-4 border-b border-[var(--border-primary)]">
                      <h3 className="text-2xl font-bold flex items-center text-[var(--text-primary)]">
                        <span className="w-1.5 h-8 mr-3 rounded-full bg-[var(--accent-primary)]"></span>
                        {hoveredService.title}
                      </h3>
                      <p className="text-sm mt-2 pl-4 line-clamp-2 text-[var(--text-secondary)]">
                        {hoveredService.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 pl-4">
                      {hoveredService.subItems.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.path ? buildUrl(sub.path) : `${buildUrl(hoveredService.path)}#${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center text-sm font-medium group transition-colors py-1 text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                          onClick={closeAllMenus}
                        >
                          <div className="w-8 h-8 mr-3 rounded-full flex items-center justify-center transition-all bg-[var(--bg-tertiary)] text-[var(--text-muted)] group-hover:bg-opacity-10 group-hover:text-[var(--accent-primary)] border border-[var(--border-primary)] group-hover:border-[var(--accent-primary)]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sub.icon} />
                            </svg>
                          </div>
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 pl-4">
                      <Link
                        href={buildUrl(hoveredService.path)}
                        onClick={closeAllMenus}
                        className="inline-flex items-center justify-center px-5 py-2 border rounded-lg text-sm font-semibold transition-all border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white"
                      >
                        Explore {hoveredService.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== PROJECTS MEGA MENU ===== */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("projects")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href={buildUrl('/projects')}
                onClick={closeAllMenus}
                className={`flex items-center text-[18px] space-x-1 font-semibold px-3 py-6 focus:outline-none transition-colors hover:text-[var(--accent-primary)] text-[var(--text-primary)]`}
              >
                <span>Projects</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180 text-[var(--accent-primary)]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <div
                className={`absolute top-full left-1/3 transform -translate-x-1/3 w-[1000px] max-w-[750px] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-50 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] backdrop-blur-lg ${activeDropdown === "projects"
                  ? "opacity-100 scale-100 translate-y-0 visible"
                  : "opacity-0 scale-95 -translate-y-2 invisible"
                  }`}
              >
                <div className="flex min-h-[400px]">
                  {/* Col 1: Projects List */}
                  <div className="w-[240px] flex-shrink-0 py-6 overflow-y-auto scrollbar-thin bg-[var(--bg-tertiary)] border-r border-[var(--border-primary)] scrollbar-thumb-[var(--border-secondary)]">
                    <h3 className="px-6 text-xs font-bold uppercase tracking-wider mb-4 text-[var(--text-muted)]">Projects</h3>
                    <div className="space-y-0.5 px-2">
                      {projects.map((project, idx) => (
                        <Link
                          key={idx}
                          href={buildUrl(`/projects/${project.slug}`)}
                          onClick={closeAllMenus}
                          className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group ${hoveredProject.name === project.name
                            ? 'bg-[var(--bg-secondary)] shadow-md text-[var(--accent-primary)] translate-x-1 border border-[var(--border-primary)]'
                            : 'hover:bg-[var(--bg-secondary)] hover:shadow-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                            }`}
                          onMouseEnter={() => handleProjectHover(project)}
                        >
                          <span className="font-medium text-sm truncate">{project.name}</span>
                          {project.status === 'Work In Progress' && (
                            <span className="ml-2 w-2 h-2 rounded-full bg-yellow-400"></span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Project Details */}
                  <div className="flex-1 p-8 flex flex-col bg-[var(--bg-secondary)]">
                    <div className="mb-6 pb-4 border-b border-[var(--border-primary)]">
                      <h3 className="text-2xl font-bold flex items-center text-[var(--text-primary)]">
                        <span className="w-1.5 h-8 mr-3 rounded-full bg-[var(--accent-primary)]"></span>
                        {hoveredProject.name}
                        <span className={`ml-3 text-xs px-2 py-0.5 rounded-full font-medium ${hoveredProject.status === 'active'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : hoveredProject.status === 'Work In Progress'
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                          }`}>
                          {hoveredProject.status}
                        </span>
                      </h3>
                      <p className="text-sm mt-2 pl-4 line-clamp-2 text-[var(--text-secondary)]">
                        {hoveredProject.description}
                      </p>
                    </div>

                    <div className="pl-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {hoveredProject.techStack.map((tech, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-primary)]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-6 pl-4">
                      <Link
                        href={buildUrl(`/projects/${hoveredProject.slug}`)}
                        onClick={closeAllMenus}
                        className="inline-flex items-center justify-center px-5 py-2 border rounded-lg text-sm font-semibold transition-all border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white"
                      >
                       View Project Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== PRODUCTS MEGA MENU ===== */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("products")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link 
                href={buildUrl('/products')}
                onClick={closeAllMenus}
                className={`flex items-center text-[18px] space-x-1 font-semibold px-3 py-6 focus:outline-none transition-colors hover:text-[var(--accent-primary)] text-[var(--text-primary)]`}
              >
                <span>Products</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-[var(--accent-primary)]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <div
                className={`absolute top-full left-1/3 transform -translate-x-1/3 w-[1000px] max-w-[750px] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-50 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] backdrop-blur-lg ${activeDropdown === "products"
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-95 -translate-y-2 invisible"
                  }`}
              >
                <div className="flex min-h-[400px]">
                  {/* Col 1: Products List */}
                  <div className="w-[240px] flex-shrink-0 py-6 overflow-y-auto scrollbar-thin bg-[var(--bg-tertiary)] border-r border-[var(--border-primary)] scrollbar-thumb-[var(--border-secondary)]">
                    <h3 className="px-6 text-xs font-bold uppercase tracking-wider mb-4 text-[var(--text-muted)]">Products</h3>
                    <div className="space-y-0.5 px-2">
                      {NAV_DATA.products.map((product, idx) => (
                        <Link
                          key={idx}
                          href={buildUrl(product.path)}
                          onClick={closeAllMenus}
                          className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group ${hoveredProduct.title === product.title
                            ? 'bg-[var(--bg-secondary)] shadow-md text-[var(--accent-primary)] translate-x-1 border border-[var(--border-primary)]'
                            : 'hover:bg-[var(--bg-secondary)] hover:shadow-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                            }`}
                          onMouseEnter={() => handleProductHover(product)}
                        >
                          <div className={`p-1.5 rounded-md mr-3 transition-colors flex-shrink-0 ${hoveredProduct.title === product.title
                            ? 'bg-[var(--bg-primary)] bg-opacity-10 text-[var(--accent-primary)]'
                            : 'bg-[var(--bg-primary)] text-[var(--text-muted)] group-hover:text-[var(--accent-primary)]'
                            }`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.iconPath} />
                            </svg>
                          </div>
                          <span className="font-medium text-sm truncate">{product.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Sub-Items */}
                  <div className="flex-1 p-8 flex flex-col bg-[var(--bg-secondary)]">
                    <div className="mb-6 pb-4 border-b border-[var(--border-primary)]">
                      <h3 className="text-2xl font-bold flex items-center text-[var(--text-primary)]">
                        <span className="w-1.5 h-8 mr-3 rounded-full bg-[var(--accent-primary)]"></span>
                        {hoveredProduct.title}
                        {hoveredProduct.status && (
                          <span className={`ml-3 text-xs px-2 py-0.5 rounded-full font-medium ${hoveredProduct.status === 'Live'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            }`}>
                            {hoveredProduct.status}
                          </span>
                        )}
                      </h3>
                      <p className="text-sm mt-2 pl-4 line-clamp-2 text-[var(--text-secondary)]">
                        {hoveredProduct.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 pl-4">
                      {hoveredProduct.subItems.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.path ? buildUrl(sub.path) : `${buildUrl(hoveredProduct.path)}#${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center text-sm font-medium group transition-colors py-1 text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                          onClick={closeAllMenus}
                        >
                          <div className="w-8 h-8 mr-3 rounded-full flex items-center justify-center transition-all bg-[var(--bg-tertiary)] text-[var(--text-muted)] group-hover:bg-opacity-10 group-hover:text-[var(--accent-primary)] border border-[var(--border-primary)] group-hover:border-[var(--accent-primary)]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sub.icon} />
                            </svg>
                          </div>
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 pl-4">
                      <Link
                        href={buildUrl(hoveredProduct.path)}
                        onClick={closeAllMenus}
                        className="inline-flex items-center justify-center px-5 py-2 border rounded-lg text-sm font-semibold transition-all border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white"
                      >
                        Explore {hoveredProduct.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={buildUrl('/about')}
              className={`font-semibold px-3 py-2 text-[18px] transition-colors hover:text-[var(--accent-primary)] text-[var(--text-primary)] relative group`}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href={buildUrl('/blogs')}
              className={`font-semibold px-3 py-2 text-[18px] transition-colors hover:text-[var(--accent-primary)] text-[var(--text-primary)] relative group`}
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href={buildUrl('/contacts')}
              className={`font-semibold px-3 py-2 text-[18px] transition-colors hover:text-[var(--accent-primary)] text-[var(--text-primary)] relative group`}
            >
              Contacts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* ===== Right Actions (Theme Switcher) ===== */}
          <div className="flex items-center space-x-4">
            <div className=" items-center space-x-4">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
      {/* ==========================================
          MOBILE MENU (Fully Supports Dark Mode)
      ========================================== */}
      {isMenuOpen && (
        <>
          <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMenuAnimating ? 'opacity-100' : 'opacity-0'
              }`}
            onClick={toggleMenu}
          ></div>

          <div className={`fixed top-0 left-0 h-full w-[85%] max-w-sm z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuAnimating ? 'translate-x-0' : '-translate-x-full'
            } bg-[var(--bg-secondary)] border-r border-[var(--border-primary)]`}>
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-5 border-b border-[var(--border-primary)]">
              <div className="flex items-center space-x-2">
                <div className="relative h-10 w-10">
                <Image src="/scientistshub-labs-logo.png" alt="Logo" fill className="object-contain rounded-lg" />
              </div>
              </div>
              <button onClick={toggleMenu} aria-label="Close menu" className="transition-colors text-[var(--text-muted)] hover:text-[var(--accent-danger)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Links */}
            <div className="py-4 px-2 space-y-1 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--border-secondary)]">
              <Link href={buildUrl('/')} onClick={closeAllMenus} className="block px-4 py-3 rounded-lg font-semibold transition-colors text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]">
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-colors text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="rounded-lg mx-2 mt-1 py-2 space-y-1 bg-[var(--bg-tertiary)]">
                    {NAV_DATA.services.map((service, idx) => (
                      <div key={idx} className="border-b last:border-0 border-[var(--border-secondary)]">
                        <button
                          onClick={() => handleMobileServiceClick(idx)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${mobileActiveService === idx
                            ? 'text-[var(--accent-primary)] bg-[var(--active-bg)]'
                            : 'text-[var(--text-muted)] hover:bg-[var(--bg-secondary)]'
                            }`}
                        >
                          <div className="flex items-center">
                            <span className={`flex items-center justify-center w-6 h-6 rounded mr-2 ${mobileActiveService === idx
                              ? 'text-[var(--accent-primary)]'
                              : 'text-[var(--text-muted)]'
                              }`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                              </svg>
                            </span>
                            {service.title}
                          </div>
                          <svg className={`w-3 h-3 transition-transform duration-200 ${mobileActiveService === idx
                            ? 'rotate-180 text-[var(--accent-primary)]'
                            : 'text-[var(--text-muted)]'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {mobileActiveService === idx && (
                          <div className="py-2 px-6 space-y-2 animate-fadeIn bg-[var(--bg-secondary)] bg-opacity-50">
                            <Link
                              href={buildUrl(service.path)}
                              onClick={closeAllMenus}
                              className="block text-sm font-bold hover:underline mb-2 text-[var(--accent-primary)]"
                            >
                              View {service.title} Overview
                            </Link>
                            {service.subItems.map((sub, subIdx) => (
                              <Link
                                key={subIdx}
                                href={sub.path ? buildUrl(sub.path) : `${buildUrl(service.path)}#${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={closeAllMenus}
                                className="block text-sm py-1 border-l-2 pl-3 transition-colors text-[var(--text-muted)] border-[var(--border-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-colors text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]"
                >
                  <span>Products</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isProductsOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="rounded-lg mx-2 mt-1 py-2 space-y-1 bg-[var(--bg-tertiary)]">
                    {NAV_DATA.products.map((product, idx) => (
                      <div key={idx} className="border-b last:border-0 border-[var(--border-secondary)]">
                        <button
                          onClick={() => handleMobileProductClick(idx)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${mobileActiveProduct === idx
                            ? 'text-[var(--accent-primary)] bg-[var(--active-bg)]'
                            : 'text-[var(--text-muted)] hover:bg-[var(--bg-secondary)]'
                            }`}
                        >
                          <div className="flex items-center">
                            <span className={`flex items-center justify-center w-6 h-6 rounded mr-2 ${mobileActiveProduct === idx
                              ? 'text-[var(--accent-primary)]'
                              : 'text-[var(--text-muted)]'
                              }`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.iconPath} />
                              </svg>
                            </span>
                            {product.title}
                            {product.status && (
                              <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full font-medium ${product.status === 'Live'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                }`}>
                                {product.status}
                              </span>
                            )}
                          </div>
                          <svg className={`w-3 h-3 transition-transform duration-200 ${mobileActiveProduct === idx
                            ? 'rotate-180 text-[var(--accent-primary)]'
                            : 'text-[var(--text-muted)]'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {mobileActiveProduct === idx && (
                          <div className="py-2 px-6 space-y-2 animate-fadeIn bg-[var(--bg-secondary)] bg-opacity-50">
                            <Link
                              href={buildUrl(product.path)}
                              onClick={closeAllMenus}
                              className="block text-sm font-bold hover:underline mb-2 text-[var(--accent-primary)]"
                            >
                              View {product.title} Overview
                            </Link>
                            {product.subItems.map((sub, subIdx) => (
                              <Link
                                key={subIdx}
                                href={sub.path ? buildUrl(sub.path) : `${buildUrl(product.path)}#${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={closeAllMenus}
                                className="block text-sm py-1 border-l-2 pl-3 transition-colors text-[var(--text-muted)] border-[var(--border-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Projects Accordion */}
              <div>
                <button
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-colors text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]"
                >
                  <span>Projects</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isProjectsOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="rounded-lg mx-2 mt-1 py-2 space-y-1 bg-[var(--bg-tertiary)]">
                    {projects.map((project, idx) => (
                      <div key={idx} className="border-b last:border-0 border-[var(--border-secondary)]">
                        <Link
                          href={buildUrl(`/projects/${project.slug}`)}
                          onClick={closeAllMenus}
                          className="flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors text-[var(--text-muted)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-primary)]"
                        >
                          <span>{project.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${project.status === 'active'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : project.status === 'Work In Progress'
                              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                            }`}>
                            {project.status}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Link href={buildUrl('/about')} onClick={closeAllMenus} className="block px-4 py-3 rounded-lg font-semibold transition-colors text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]">
                About
              </Link>
              <Link href={buildUrl('/blogs')} onClick={closeAllMenus} className="block px-4 py-3 rounded-lg font-semibold transition-colors text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]">
                Blogs
              </Link>
              <Link href={buildUrl('/contacts')} onClick={closeAllMenus} className="block px-4 py-3 rounded-lg font-semibold transition-colors text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)]">
                Contacts
              </Link>
            </div>

            {/* Mobile Footer */}

            
            {/* Mobile Footer */}
            <div className="p-6 border-t border-[var(--border-primary)] bg-[var(--bg-tertiary)]">
              {/* <div className="flex items-center justify-between mb-6">
                <span className="font-semibold text-[var(--text-primary)]">Appearance</span>
                <ThemeSwitcher />
              </div> */}
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                {[
                  {
                    name: 'Facebook',
                    url: 'https://facebook.com/scientistshublabs',
                    icon: <Facebook className="w-5 h-5 fill-current" />,
                    className: 'bg-[#1877F2] hover:opacity-90'
                  },
                   {
                    name: 'Instagram',
                    url: 'https://instagram.com/scientistshublabs',
                    icon: <Instagram className="w-5 h-5" />,
                    className: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90'
                  },
                  {
                    name: 'X (Twitter)',
                    url: 'https://x.com/scientistshubl',
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                    className: 'bg-black hover:opacity-90 border border-gray-800'
                  },
                  {
                    name: 'YouTube',
                    url: 'https://youtube.com/@scientistshubhq',
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                    className: 'bg-[#FF0000] hover:opacity-90'
                  },
                 
                  {
                    name: 'LinkedIn',
                    url: 'https://linkedin.com/company/scientistshublabs',
                    icon: <Linkedin className="w-5 h-5 fill-current" />,
                    className: 'bg-[#0077B5] hover:opacity-90'
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg text-white transition-all duration-300 shadow-sm hover:scale-110 ${social.className}`}
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="text-center border-t border-[var(--border-primary)] pt-4">
                <p className="text-xs text-[var(--text-muted)]">
                  &copy; {new Date().getFullYear()} ScientistsHub Labs.
                </p>
                <p className="text-[10px] text-[var(--text-muted)] mt-1 uppercase tracking-wider font-semibold">
                  Research & Engineering Studio
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
