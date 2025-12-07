export const config = {
  title: "פיתוח Frontend מתקדם - שנה 2",
  description: "למד React, TypeScript וכלים מודרניים לעבודה מקצועית",
  sections: [
    {
      title: "JavaScript מתקדם ו-TypeScript",
      blocks: [
        {
          id: "advanced-javascript",
          type: "video" as const,
          title: "JavaScript מתקדם",
          youtubeId: "AY6X5jZZ_JE",
          description: "ES6+, async/await, modules ופיצ'רים מתקדמים",
        },
        {
          id: "typescript-intro",
          type: "video" as const,
          title: "TypeScript מאפס",
          youtubeId: "2OTq15A5s0Y",
          description: "למד TypeScript - JavaScript עם types חזקים",
        },
        {
          id: "js-typescript-overview",
          type: "text" as const,
          title: "מדוע JavaScript מתקדם ו-TypeScript",
          content:
            "לפני שנתחיל עם frameworks, חשוב לשלוט ב-JavaScript מתקדם:\n\n• Arrow functions ו-destructuring\n• Promises ו-async/await\n• Modules (import/export)\n• Array methods (map, filter, reduce)\n• Spread operator ו-rest parameters\n\nTypeScript מוסיף:\n• Type safety שמונעת שגיאות\n• IntelliSense משופר\n• Code completion טוב יותר\n• רפקטורינג בטוח\n\nזה הבסיס לעבודה מקצועית!",
        },
      ],
    },
    {
      title: "React - ה-Framework הכי פופולרי",
      blocks: [
        {
          id: "react-basics",
          type: "video" as const,
          title: "React מאפס עד מתקדם",
          youtubeId: "SqcY0GlETPk",
          description: "קורס מקיף של React עם דוגמאות מעשיות",
        },
        {
          id: "react-hooks",
          type: "video" as const,
          title: "React Hooks מעמיק",
          youtubeId: "O6P86uwfdR0",
          description: "useState, useEffect, useContext ו-hooks מתקדמים",
        },
        {
          id: "react-overview",
          type: "text" as const,
          title: "מדוע React חשוב לקריירה",
          content:
            "React היא הספרייה הכי מבוקשת בתעשייה:\n\n• ביקוש גבוה בשוק העבודה\n• קהילה ענקית ותמיכה\n• ביצועים מעולים עם Virtual DOM\n• Component-based architecture\n• Rich ecosystem של ספריות\n\nמה תלמדו:\n• Components ו-JSX\n• Props ו-State\n• Event handling\n• Conditional rendering\n• Lists ו-keys\n• Hooks pattern\n• Context API\n• Performance optimization",
        },
        {
          id: "react-docs",
          type: "link" as const,
          title: "תיעוד React החדש",
          url: "https://react.dev/",
          description: "המדריך הרשמי והמעודכן של React",
        },
      ],
    },
    {
      title: "Tailwind CSS - עיצוב מהיר ומקצועי",
      blocks: [
        {
          id: "tailwind-crash-course",
          type: "video" as const,
          title: "Tailwind CSS מאפס",
          youtubeId: "mr15Xzb1Ook",
          description: "למד את framework ה-CSS הכי מהיר וחכם",
        },
        {
          id: "tailwind-overview",
          type: "text" as const,
          title: "למה Tailwind CSS מהפכני",
          content:
            "Tailwind מחליף CSS מסורתי עם utility-first approach:\n\n✅ פיתוח מהיר פי 5\n✅ עיצוב עקבי ופרופסיונלי\n✅ No custom CSS לכתוב\n✅ Responsive design מובנה\n✅ Dark mode מובנה\n✅ Performance מושלם\n\nבמקום לכתוב CSS:\n```css\n.button {\n  background: blue;\n  padding: 1rem 2rem;\n  border-radius: 0.5rem;\n}\n```\n\nתכתבו HTML פשוט:\n```html\n<button class='bg-blue-500 px-8 py-4 rounded-lg'>\n```\n\nזה החסם הכי גדול לעיצוב מהיר!",
        },
        {
          id: "tailwind-docs",
          type: "link" as const,
          title: "Tailwind CSS Documentation",
          url: "https://tailwindcss.com/",
          description: "התיעוד המלא עם דוגמאות ומרכיבי UI",
        },
      ],
    },
    {
      title: "Next.js - Framework עבור Production",
      blocks: [
        {
          id: "nextjs-tutorial",
          type: "video" as const,
          title: "Next.js 14 מלא",
          youtubeId: "wm5gMKuwSYk",
          description: "Framework הכי חזק עבור React apps",
        },
        {
          id: "nextjs-overview",
          type: "text" as const,
          title: "למה Next.js הוא Must-Have",
          content:
            "Next.js לוקח React לרמה הבאה:\n\n🚀 Server Side Rendering (SSR)\n🚀 Static Site Generation (SSG)\n🚀 API routes מובנות\n🚀 File-based routing\n🚀 Image optimization\n🚀 SEO מושלם\n🚀 Performance מטורף\n\nכמעט כל startup ו-עסק משתמשים ב-Next.js היום!\n\nמה תלמדו:\n• App Router החדש\n• Server Components\n• Client Components\n• Data fetching\n• Caching strategies\n• Deployment ל-Vercel",
        },
        {
          id: "nextjs-docs",
          type: "link" as const,
          title: "Next.js Documentation",
          url: "https://nextjs.org/docs",
          description: "המדריך הרשמי של Next.js",
        },
      ],
    },
    {
      title: "כלים מקצועיים לעבודה",
      blocks: [
        {
          id: "vscode-setup",
          type: "video" as const,
          title: "הגדרת VS Code לפיתוח מקצועי",
          youtubeId: "jh2j1wvr3Ao",
          description: "Extensions, shortcuts ונוחות עבודה מקסימלית",
        },
        {
          id: "git-github",
          type: "video" as const,
          title: "Git ו-GitHub מעמיק",
          youtubeId: "3YLp7U28q9A",
          description: "ניהול קוד, branches, pull requests ו-collaboration",
        },
        {
          id: "professional-tools",
          type: "text" as const,
          title: "כלי עבודה חיוניים למפתח",
          content:
            "כלים שכל מפתח צריך לדעת:\n\n📝 VS Code + Extensions:\n• ES7+ React snippets\n• Auto Rename Tag\n• Prettier\n• ESLint\n• Tailwind CSS IntelliSense\n• GitLens\n\n🔧 Git & GitHub:\n• Repository management\n• Branching strategies\n• Pull requests\n• Code reviews\n• GitHub Actions\n\n📦 Package Management:\n• npm / yarn / pnpm\n• package.json\n• Dependencies management\n\n🌐 Browser DevTools:\n• Elements inspection\n• Network debugging\n• Performance profiling\n• Console debugging",
        },
      ],
    },
  ],
};