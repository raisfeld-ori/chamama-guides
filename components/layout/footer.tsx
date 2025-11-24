import Link from "next/link";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Learning",
    links: [
      { title: "Year 1", href: "/learning/year-1" },
      { title: "Year 2", href: "/learning/year-2" },
      { title: "Year 3", href: "/learning/year-3" },
      { title: "Year 4", href: "/learning/year-4" },
    ],
  },
  {
    title: "Projects",
    links: [
      { title: "Year 1", href: "/projects/year-1" },
      { title: "Year 2", href: "/projects/year-2" },
      { title: "Year 3", href: "/projects/year-3" },
      { title: "Year 4", href: "/projects/year-4" },
    ],
  },
  {
    title: "Employment",
    links: [
      { title: "Year 1", href: "/employment/year-1" },
      { title: "Year 2", href: "/employment/year-2" },
      { title: "Year 3", href: "/employment/year-3" },
      { title: "Year 4", href: "/employment/year-4" },
    ],
  },
  {
    title: "About",
    links: [
      { title: "About Chamama", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "FAQ", href: "/faq" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", href: "#", icon: "𝕏" },
  { name: "GitHub", href: "#", icon: "GitHub" },
  { name: "LinkedIn", href: "#", icon: "in" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Chamama Guides</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Empowering the next generation of developers at Chamama High School.
              Learn, build, and launch your tech career.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chamama High School. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
