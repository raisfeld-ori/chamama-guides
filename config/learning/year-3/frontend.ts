export const config = {
  title: "עיצוב, SEO ומיומנויות מתקדמות - שנה 3",
  description: "הכנה מלאה לתעשייה: עיצוב UX/UI, SEO, ביצועים ומיומנויות מקצועיות",
  sections: [
    {
      title: "עיצוב UX/UI למפתחים",
      blocks: [
        {
          id: "ui-ux-for-developers",
          type: "video" as const,
          title: "UX/UI למפתחים",
          youtubeId: "c9Wg6Cb_YlU",
          description: "עקרונות עיצוב חיוניים שכל מפתח צריך לדעת",
        },
        {
          id: "design-systems",
          type: "video" as const,
          title: "Design Systems ו-Component Libraries",
          youtubeId: "YaZg2w2v5o4",
          description: "איך לבנות ולהשתמש במערכות עיצוב עקביות",
        },
        {
          id: "figma-for-developers",
          type: "video" as const,
          title: "Figma למפתחים",
          youtubeId: "QIKOzBePD6I",
          description: "איך לעבוד עם Figma וליישם עיצובים בצורה מדויקת",
        },
        {
          id: "design-principles",
          type: "text" as const,
          title: "עקרונות עיצוב חיוניים למפתחים",
          content:
            "כמפתח frontend, אתם חצי מעצבים! חשוב להבין:\n\n🎨 עקרונות עיצוב בסיסיים:\n• Typography - בחירת גופנים ומדרגות\n• Color theory - פלטות צבעים ונגישות\n• Spacing - margin, padding ו-white space\n• Hierarchy - יצירת מבנה ויזואלי ברור\n• Contrast - קריאות ונגישות\n\n📱 UX מעשי:\n• Mobile-first design\n• Touch targets ו-gestures\n• Loading states ו-feedback\n• Error handling ו-validation\n• Navigation patterns\n\n🛠️ כלים למפתחים:\n• Figma לעבודה עם מעצבים\n• Design tokens לעקביות\n• Component libraries (Shadcn, Headless UI)\n• CSS-in-JS vs Utility classes\n\nמפתח שמבין עיצוב = מפתח יותר מבוקש!",
        },
        {
          id: "design-resources",
          type: "link" as const,
          title: "Refactoring UI",
          url: "https://www.refactoringui.com/",
          description: "משאבי עיצוב מעשיים למפתחים",
        },
      ],
    },
    {
      title: "SEO ו-Web Performance",
      blocks: [
        {
          id: "seo-fundamentals",
          type: "video" as const,
          title: "SEO מלא למפתחים",
          youtubeId: "ZOoVGFQAj68",
          description: "כל מה שמפתח צריך לדעת על SEO",
        },
        {
          id: "web-performance",
          type: "video" as const,
          title: "Web Performance Optimization",
          youtubeId: "0fONene3OIA",
          description: "איך לבנות אתרים מהירים שהגוגל אוהב",
        },
        {
          id: "core-web-vitals",
          type: "video" as const,
          title: "Core Web Vitals מעמיק",
          youtubeId: "AQqFZ5t8uNc",
          description: "הבנת המדדים הכי חשובים לגוגל",
        },
        {
          id: "seo-performance-guide",
          type: "text" as const,
          title: "SEO וביצועים - הגיד הזהב לכל מפתח",
          content:
            "SEO זה לא רק עניין של מרקטינג - זה קריטי לכל אתר:\n\n🔍 SEO טכני:\n• Semantic HTML (h1, h2, nav, article)\n• Meta tags (title, description, og:tags)\n• Structured data (Schema.org)\n• Sitemap.xml ו-robots.txt\n• Internal linking strategy\n• Image optimization ו-alt tags\n• URL structure ו-canonical tags\n\n⚡ Web Performance:\n• Lazy loading של תמונות ו-components\n• Code splitting ו-bundle optimization\n• CDN ו-caching strategies\n• Image formats (WebP, AVIF)\n• Font loading optimization\n• Critical CSS inlining\n\n📊 Core Web Vitals:\n• LCP (Largest Contentful Paint) < 2.5s\n• FID (First Input Delay) < 100ms\n• CLS (Cumulative Layout Shift) < 0.1\n\n💡 כלים חיוניים:\n• Google PageSpeed Insights\n• Lighthouse\n• GTmetrix\n• Search Console\n• Web Vitals Extension",
        },
        {
          id: "web-dev-guide",
          type: "link" as const,
          title: "web.dev Performance Guide",
          url: "https://web.dev/performance/",
          description: "המדריך המקיף של גוגל לביצועי web",
        },
      ],
    },
    {
      title: "Advanced React ו-State Management",
      blocks: [
        {
          id: "advanced-react-patterns",
          type: "video" as const,
          title: "Advanced React Patterns",
          youtubeId: "KYjj1YOpWdg",
          description: "דפוסי עבודה מתקדמים ב-React לפרויקטים מורכבים",
        },
        {
          id: "zustand-tutorial",
          type: "video" as const,
          title: "Zustand - State Management הפשוט",
          youtubeId: "AYO4qHAnLQI",
          description: "אלטרנטיבה קלה ומהירה ל-Redux",
        },
        {
          id: "react-query",
          type: "video" as const,
          title: "React Query / TanStack Query",
          youtubeId: "seU46c6Jz7E",
          description: "ניהול server state והתשומות מהשרת",
        },
        {
          id: "advanced-react-guide",
          type: "text" as const,
          title: "React מתקדם לסביבת עבודה מקצועית",
          content:
            "ברמה מתקדמת תכירו דפוסים ששמים ב-production:\n\n🏗️ Advanced Patterns:\n• Compound Components\n• Render Props\n• Higher Order Components\n• Custom hooks\n• Error boundaries\n• Suspense ו-Concurrent features\n\n📦 State Management:\n• Zustand - פשוט ומהיר\n• Redux Toolkit - לפרויקטים גדולים\n• Jotai - atomic state\n• Valtio - proxy state\n\n🌐 Server State:\n• React Query (TanStack Query)\n• SWR\n• Apollo Client (GraphQL)\n\n⚡ Performance:\n• React.memo\n• useMemo ו-useCallback\n• Code splitting ו-lazy loading\n• Virtualization לרשימות גדולות\n\n🧪 Testing:\n• Jest + React Testing Library\n• Storybook לdocumentation\n• Playwright לE2E testing\n\nזה מה שצריך בעבודה!",
        },
      ],
    },
    {
      title: "Deployment ו-DevOps למפתחי Frontend",
      blocks: [
        {
          id: "vercel-deployment",
          type: "video" as const,
          title: "Deployment עם Vercel ו-Netlify",
          youtubeId: "2HBIzEx6IZA",
          description: "איך לפרסם אתרים לproduction בקלות",
        },
        {
          id: "docker-for-frontend",
          type: "video" as const,
          title: "Docker למפתחי Frontend",
          youtubeId: "gAkwW2tuIqE",
          description: "containerization ו-deployment מתקדם",
        },
        {
          id: "ci-cd-basics",
          type: "video" as const,
          title: "GitHub Actions ו-CI/CD",
          youtubeId: "R8_veQiYBjI",
          description: "אוטומציה של testing ו-deployment",
        },
        {
          id: "deployment-guide",
          type: "text" as const,
          title: "Deployment מקצועי - מfrontend לproduction",
          content:
            "איך להעלות את הפרויקטים שלכם לרשת כמו אמיתיים:\n\n🚀 Deployment Platforms:\n• Vercel - הכי קל לReact/Next.js\n• Netlify - מעולה לstatic sites\n• AWS S3 + CloudFront - לפרויקטים גדולים\n• GitHub Pages - חינמי לפרויקטים אישיים\n\n🔄 CI/CD Workflow:\n• GitHub Actions\n• GitLab CI\n• Azure DevOps\n• Jenkins\n\n📦 Build Optimization:\n• Environment variables\n• Build caching\n• Bundle analysis\n• Tree shaking\n\n🌐 Domain & DNS:\n• Custom domains\n• SSL certificates\n• CDN configuration\n• DNS management\n\n📊 Monitoring:\n• Error tracking (Sentry)\n• Analytics (Google Analytics, Vercel Analytics)\n• Performance monitoring\n• Uptime monitoring\n\nמפתח שיודע deployment = מפתח עצמאי!",
        },
        {
          id: "vercel-docs",
          type: "link" as const,
          title: "Vercel Deployment Guide",
          url: "https://vercel.com/docs",
          description: "המדריך המלא לdeployment מקצועי",
        },
      ],
    },
    {
      title: "מיומנויות מקצועיות וחיפוש עבודה",
      blocks: [
        {
          id: "portfolio-guide",
          type: "video" as const,
          title: "איך לבנות Portfolio שמוכר",
          youtubeId: "sVPzc1l2jU4",
          description: "בניית תיק עבודות שמראה את הכישורים שלכם",
        },
        {
          id: "interview-prep",
          type: "video" as const,
          title: "ראיונות עבודה למפתחי Frontend",
          youtubeId: "vcwCiGiJS3A",
          description: "איך להצליח בראיונות טכניים ואישיותיים",
        },
        {
          id: "freelance-guide",
          type: "video" as const,
          title: "Freelance למפתחי Frontend",
          youtubeId: "fJzaGSNmS_g",
          description: "איך להתחיל לעבוד בפרילנס ולמצוא לקוחות",
        },
        {
          id: "career-guide",
          type: "text" as const,
          title: "המדריך המלא להשתלבות בתעשייה",
          content:
            "איך לעבור ממפתח מתחיל למפתח מקצועי:\n\n💼 בניית Portfolio:\n• 3-5 פרויקטים איכותיים\n• קוד נקי ומתועד\n• Deploy באתר אמיתי\n• GitHub repositories מוקפדות\n• README files מפורטים\n\n🎯 פרויקטים שמראים ערך:\n• E-commerce site עם payment\n• Dashboard עם charts ונתונים\n• Chat app real-time\n• Blog עם CMS\n• API integration מורכבת\n\n📝 קורות חיים ו-LinkedIn:\n• Focus על טכנולוגיות רלוונטיות\n• תיאור ההשפעה שלכם\n• המלצות מ-mentors/עמיתים\n• בלוג טכני או Medium articles\n\n🎤 ראיונות עבודה:\n• Code challenges ו-take-home assignments\n• Live coding sessions\n• System design questions\n• Behavioral questions\n\n💰 שכר ומשא ומתן:\n• Research market rates\n• הכנו רשימת achievements\n• תמיד משאו ומתנו\n• בחנו benefit packages\n\nהיו מוכנים להצליח!",
        },
        {
          id: "frontend-handbook",
          type: "link" as const,
          title: "Frontend Developer Handbook",
          url: "https://frontendmasters.com/guides/front-end-handbook/",
          description: "המדריך השנתי למפתחי frontend",
        },
      ],
    },
  ],
};