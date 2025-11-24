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
      },
      {
        title: "שנה 2",
        href: "/employment/year-2",
        description: "התפתחות מקצועית",
      },
      {
        title: "שנה 3",
        href: "/employment/year-3",
        description: "מומחיות וצמיחה",
      },
      {
        title: "שנה 4",
        href: "/employment/year-4",
        description: "מנהיגות טכנית",
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
      setIsScrolled(window.scrollY > 20);
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
            ? "border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-sm"
            : "bg-background/50 backdrop-blur-sm"
        )}
        onMouseLeave={handleMenuLeave}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* CTA Button - Moved to right side for RTL */}
            <div className="hidden items-center gap-3 lg:flex order-first">
              <Button 
                asChild 
                size="lg"
                className="shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <Link href="/learning/frontend">
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
                      "group inline-flex h-11 items-center justify-center gap-1 rounded-lg px-4 py-2 text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                      activeMenu === item.title && "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.title}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      activeMenu === item.title && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href || "#"}
                    className="group inline-flex h-11 items-center justify-center rounded-lg px-4 py-2 text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </nav>

            {/* Logo */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 transition-transform hover:scale-105"
            >
              <span className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
                מדריכי חממה
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/60 shadow-lg transition-all group-hover:shadow-xl group-hover:shadow-primary/20">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
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
                side="left" 
                className="w-[320px] sm:w-[400px] overflow-y-auto"
              >
                <SheetHeader className="border-b pb-4">
                  <SheetTitle className="text-right text-2xl">תפריט ניווט</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-6">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-3">
                      {item.items ? (
                        <>
                          <div className="flex items-center gap-2 text-lg font-bold text-foreground justify-end">
                            <span>{item.title}</span>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                          <div className="ml-6 space-y-2 border-l-2 border-border pl-4">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href || "#"}
                                onClick={() => setMobileMenuOpen(false)}
                                className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
                              >
                                <div className="flex-1 text-right">
                                  <div className="font-medium text-foreground group-hover:text-accent-foreground">
                                    {subItem.title}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-sm text-muted-foreground">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                                {subItem.icon && (
                                  <span className="text-2xl">{subItem.icon}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-end gap-2 rounded-lg p-3 text-lg font-bold transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="border-t pt-6">
                    <Button 
                      className="w-full shadow-lg" 
                      size="lg"
                      asChild
                    >
                      <Link 
                        href="/learning/frontend"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        התחל ללמוד
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {activeMenuItems?.items && (
          <div 
            className="border-t border-border/40 bg-background/95 backdrop-blur-xl"
            onMouseEnter={() => setActiveMenu(activeMenuItems.title)}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {activeMenuItems.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href || "#"}
                    onClick={() => setActiveMenu(null)}
                    className="group flex flex-col gap-3 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:bg-accent hover:shadow-lg text-right"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary">
                          {subItem.title}
                        </h3>
                        {subItem.description && (
                          <p className="text-sm text-muted-foreground">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                      {subItem.icon && (
                        <span className="text-4xl transition-transform group-hover:scale-110">
                          {subItem.icon}
                        </span>
                      )}
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


