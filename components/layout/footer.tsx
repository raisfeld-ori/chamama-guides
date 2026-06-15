import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-emerald-100 bg-white">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-2.5 sm:gap-3 transition-all hover:scale-[1.02]">
              <div className="flex items-center justify-center rounded-xl bg-white p-1.5">
                <img
                  src="/logo.png"
                  alt="חממה"
                  className="h-8 w-8 sm:h-9 sm:w-9 object-contain transition-transform group-hover:rotate-6"
                />
              </div>
              <div className="leading-tight text-right">
                <span className="block gradient-green-shimmer animate-shimmer text-xl font-black tracking-tight sm:text-2xl">
                  מדריכי חממה
                </span>
                <span className="text-[11px] font-bold text-emerald-700/80">
                  למידה • פרויקטים • תעסוקה
                </span>
              </div>
            </Link>
            <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-gray-600">
פלטפורמה ללמידה, תרגול וביצוע פרויקטים בשביל מגמת ההייטק, במקום אחד ונגיש    </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-black text-gray-900">ניווט מהיר</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/learning" className="transition-colors hover:text-emerald-700">
                  למידה
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition-colors hover:text-emerald-700">
                  פרויקטים
                </Link>
              </li>
              <li>
                <Link href="/employment" className="transition-colors hover:text-emerald-700">
                  תעסוקה
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-emerald-700">
                  אודות
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-black text-gray-900">עוד באתר</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/finished-tasks" className="transition-colors hover:text-emerald-700">
                  הישגים שהושלמו
                </Link>
              </li>
              <li>
                <Link href="/learning/frontend" className="transition-colors hover:text-emerald-700">
                  מסלול פרונטאנד
                </Link>
              </li>
              <li>
                <Link href="/projects/backend" className="transition-colors hover:text-emerald-700">
                  פרויקטי בקאנד
                </Link>
              </li>
              <li>
                <Link href="/employment/year-4" className="transition-colors hover:text-emerald-700">
                  Freelancing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-5">
          <p className="text-center text-sm font-medium text-gray-600">
            © {new Date().getFullYear()} תיכון עמל חממה. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
