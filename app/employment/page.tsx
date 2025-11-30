import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EmploymentPage() {
    const years = [
        { id: "year-1", title: "שנה 1", color: "#10b981" },
        { id: "year-2", title: "שנה 2", color: "#14b8a6" },
        { id: "year-3", title: "שנה 3", color: "#06b6d4" },
        { id: "year-4", title: "שנה 4", color: "#84cc16" }
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="w-full max-w-3xl text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    מדריכי תעסוקה
                </h1>
                <p className="text-lg text-gray-600 font-medium mb-12">
                    בחרו את שנת הלימוד שלכם
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {years.map((year) => (
                        <Link
                            key={year.id}
                            href={`/employment/${year.id}`}
                            className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                        >
                            <div className="flex items-center justify-between">
                                <div className="text-right flex-1">
                                    <h3 className="text-3xl font-black text-gray-900">
                                        {year.title}
                                    </h3>
                                </div>
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                                    style={{ backgroundColor: year.color }}
                                >
                                    <ArrowRight className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
