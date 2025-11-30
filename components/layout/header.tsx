"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href?: string;
  description?: string;
  items?: NavItem[];
  icon?: string;
  svg?: React.ReactNode;
}

const navigationItems: NavItem[] = [
  {
    title: "למידה",
    items: [
      {
        title: "פרונטאנד",
        href: "/learning/frontend",
        description: "React, Next.js, TypeScript",
        icon: "🎨",
      },
      {
        title: "בקאנד",
        href: "/learning/backend",
        description: "Node.js, APIs, Databases",
        icon: "⚙️",
      },
      {
        title: "ניהול שרתים",
        href: "/learning/devops",
        description: "CI/CD, Docker, Cloud",
        icon: "🚀",
      },
      {
        title: "מדעי הנתונים",
        href: "/learning/data-science",
        description: "Python, ML, Analytics",
        icon: "📊",
      },
    ],
  },
  {
    title: "פרויקטים",
    items: [
      {
        title: "פרונטאנט",
        href: "/projects/frontend",
        description: "פרויקטי ממשק משתמש",
        icon: "💻",
      },
      {
        title: "בקאנד",
        href: "/projects/backend",
        description: "פרויקטי שרת ו-API",
        icon: "🔧",
      },
      {
        title: "ניהול שרתים",
        href: "/projects/devops",
        description: "פרויקטי תשתית",
        icon: "☁️",
      },
      {
        title: "מדעי הנתונים",
        href: "/projects/data-science",
        description: "פרויקטי ניתוח נתונים",
        icon: "📈",
      },
    ],
  },
  {
    title: "תעסוקה",
    items: [
      {
        title: "שנה 1",
        href: "/employment/year-1",
        description: "התחלת המסע",
        svg: (
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <circle cx="30" cy="30" r="28" fill="#d1fae5" />
            <path d="M20,35 L30,25 L40,35" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="30" cy="25" r="3" fill="#10b981" />
            <text x="30" y="48" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#10b981">1</text>
          </svg>
        ),
      },
      {
        title: "שנה 2",
        href: "/employment/year-2",
        description: "התפתחות מקצועית",
        svg: (
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <circle cx="30" cy="30" r="28" fill="#dcfce7" />
            <path d="M20,30 L27,23 L35,30 L42,23" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="27" cy="23" r="2.5" fill="#22c55e" />
            <circle cx="35" cy="30" r="2.5" fill="#22c55e" />
            <text x="30" y="48" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#22c55e">2</text>
          </svg>
        ),
      },
      {
        title: "שנה 3",
        href: "/employment/year-3",
        description: "מומחיות וצמיחה",
        svg: (
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <circle cx="30" cy="30" r="28" fill="#ccfbf1" />
            <path d="M18,35 L25,28 L30,32 L35,25 L42,30" stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="25" cy="28" r="2.5" fill="#14b8a6" />
            <circle cx="30" cy="32" r="2.5" fill="#14b8a6" />
            <circle cx="35" cy="25" r="2.5" fill="#14b8a6" />
            <text x="30" y="48" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#14b8a6">3</text>
          </svg>
        ),
      },
      {
        title: "שנה 4",
        href: "/employment/year-4",
        description: "מנהיגות טכנית",
        svg: (
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <circle cx="30" cy="30" r="28" fill="#ecfccb" />
            <path d="M30,18 L35,28 L45,28 L37,35 L40,45 L30,38 L20,45 L23,35 L15,28 L25,28 Z" fill="#84cc16" />
            <text x="30" y="48" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#84cc16">4</text>
          </svg>
        ),
      },
    ],
  },
  {
    title: "אודות",
    href: "/about",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = (title: string) => {
    setActiveMenu(title);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const activeMenuItems = navigationItems.find((item) => item.title === activeMenu);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md"
            : "bg-white/80 backdrop-blur-md"
        )}
        onMouseLeave={handleMenuLeave}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* CTA Button - Moved to right side for RTL */}
            <div className="hidden items-center gap-3 lg:flex order-first">
              <Button
                asChild
                size="default"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link href="/learning">
                  <Sparkles className="ml-1 h-4 w-4" />
                  התחל ללמוד
                </Link>
              </Button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) =>
                item.items ? (
                  <button
                    key={item.title}
                    onMouseEnter={() => handleMenuEnter(item.title)}
                    className={cn(
                      "group relative inline-flex h-10 items-center justify-center gap-1 px-4 py-2 text-sm font-bold transition-all hover:text-emerald-600",
                      activeMenu === item.title && "text-emerald-600"
                    )}
                  >
                    {item.title}
                    <ChevronDown className={cn(
                      "h-3 w-3 transition-transform",
                      activeMenu === item.title && "rotate-180"
                    )} />
                    <span className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 transition-all",
                      activeMenu === item.title ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )} />
                  </button>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href || "#"}
                    className="group relative inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-bold transition-all hover:text-emerald-600"
                  >
                    {item.title}
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                )
              )}
            </nav>

            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-transform hover:scale-105"
            >
              <span className="gradient-green-shimmer animate-shimmer text-2xl font-black tracking-tight sm:text-3xl">
                מדריכי חממה
              </span>
              <img
                src="/logo.png"
                alt="חממה"
                className="h-12 w-12 object-contain transition-transform group-hover:rotate-12"
              />
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden order-first">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                  <span className="sr-only">פתח תפריט</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[400px] overflow-y-auto bg-gradient-to-b from-emerald-50 to-white px-6"
                dir="rtl"
              >
                <SheetHeader className="border-b border-emerald-200 pb-4">
                  <SheetTitle className="text-right text-2xl gradient-green-shimmer animate-shimmer font-black">תפריט ניווט</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-4">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      {item.items ? (
                        <>
                          <div className="text-base font-black text-emerald-700 px-4 py-2 bg-emerald-100 rounded-lg text-right">
                            {item.title}
                          </div>
                          <div className="mr-2 space-y-1 border-r-2 border-emerald-300 pr-3">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href || "#"}
                                onClick={() => setMobileMenuOpen(false)}
                                className="group flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-white hover:shadow-sm border border-transparent hover:border-emerald-200"
                              >
                                <div className="flex-1 text-right">
                                  <div className="font-bold text-gray-800 group-hover:text-emerald-700 text-sm">
                                    {subItem.title}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                                {subItem.icon && (
                                  <span className="text-2xl flex-shrink-0">{subItem.icon}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-center rounded-lg px-4 py-3 text-base font-black transition-all bg-white hover:bg-emerald-50 shadow-sm hover:shadow-md border-2 border-emerald-200 hover:border-emerald-400 text-emerald-700 hover:text-emerald-800"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="border-t border-emerald-200 pt-4 mt-2 sticky bottom-0 bg-gradient-to-b from-emerald-50 to-white pb-4">
                    <Link
                      href="/learning"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-base transition-all hover:shadow-xl"
                    >
                      התחל ללמוד
                      <Sparkles className="h-5 w-5" />
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Modern Dropdown Menu */}
        {activeMenuItems?.items && (
          <div
            className="absolute left-0 right-0 top-full bg-white/98 backdrop-blur-sm shadow-lg"
            onMouseEnter={() => setActiveMenu(activeMenuItems.title)}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {activeMenuItems.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href || "#"}
                    onClick={() => setActiveMenu(null)}
                    className="group relative flex items-start gap-4 rounded-xl p-5 transition-all hover:bg-emerald-50 text-right border border-gray-100 hover:border-emerald-300 hover:shadow-md"
                  >
                    {subItem.icon ? (
                      <div className="flex-shrink-0 text-3xl transition-all group-hover:scale-105">
                        {subItem.icon}
                      </div>
                    ) : subItem.svg ? (
                      <div className="flex-shrink-0 w-14 h-14 transition-all group-hover:scale-105">
                        {subItem.svg}
                      </div>
                    ) : null}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-black text-gray-900 mb-1.5 group-hover:text-emerald-600 transition-colors">
                        {subItem.title}
                      </h3>
                      {subItem.description && (
                        <p className="text-sm text-gray-600 leading-snug group-hover:text-gray-700 transition-colors">
                          {subItem.description}
                        </p>
                      )}
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute top-5 left-3 opacity-0 group-hover:opacity-100 transition-all group-hover:left-2">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}


