import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white mt-20">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="חממה"
              className="h-8 w-8 object-contain transition-transform group-hover:rotate-12"
            />
            <span className="gradient-green-shimmer animate-shimmer text-lg font-black">
              מדריכי חממה
            </span>
          </Link>

          <p className="text-sm text-gray-600 font-medium">
            © {new Date().getFullYear()} תיכון חממה 💚
          </p>
        </div>
      </div>
    </footer>
  );
}
