export const config = {
  title: "פיתוח Frontend מתקדם - שנה 2",
  description: "העמק את הידע ב-Frontend עם frameworks וכלים מתקדמים",
  sections: [
    {
      title: "React ו-TypeScript",
      blocks: [
        {
          type: "video" as const,
          title: "מבוא ל-React",
          youtubeId: "Tn6-PIqc4UM",
          description: "למד את יסודות React וקומפוננטות",
        },
        {
          type: "text" as const,
          title: "מה זה React?",
          content:
            "React היא ספריית JavaScript ליצירת ממשקי משתמש. היא מאפשרת ליצור קומפוננטות מורכבות מחלקים קטנים ובלתי תלויים.\n\nReact משתמשת ב-Virtual DOM לביצועים מיטביים ומספקת דרך דקלרטיבית לכתוב UI.\n\nTypeScript מוסיפה בדיקת סוגים סטטית ל-JavaScript, מה שמפחית שגיאות ומשפר את חוויית הפיתוח.",
        },
        {
          type: "link" as const,
          title: "תיעוד React הרשמי",
          url: "https://react.dev/",
          description: "המדריך הרשמי ל-React",
        },
      ],
    },
    {
      title: "State Management",
      blocks: [
        {
          type: "video" as const,
          title: "Redux Toolkit",
          youtubeId: "9zySeP5vH9c",
          description: "ניהול state גלובלי באפליקציות React",
        },
        {
          type: "text" as const,
          title: "ניהול State מתקדם",
          content:
            "כשהאפליקציה גדלה, ניהול state הופך מורכב יותר. כלים כמו Redux, Zustand ו-Context API עוזרים לנהל מצב גלובלי:\n\n1. Redux - פתרון מקיף לניהול state\n2. Zustand - פתרון קל ופשוט\n3. Context API - פתרון מובנה ב-React\n4. React Query - לניהול server state",
        },
        {
          type: "link" as const,
          title: "Redux Toolkit Documentation",
          url: "https://redux-toolkit.js.org/",
          description: "הדרך המודרנית לכתוב Redux",
        },
      ],
    },
    {
      title: "בדיקות ובטחון",
      blocks: [
        {
          type: "video" as const,
          title: "Testing React Applications",
          youtubeId: "8Xwq35cPwYg",
          description: "כיצד לכתוב בדיקות יעילות לאפליקציות React",
        },
        {
          type: "text" as const,
          title: "סוגי בדיקות",
          content:
            "בדיקות הן חלק חיוני מפיתוח אפליקציות איכותיות:\n\n1. Unit Tests - בדיקת קומפוננטות בודדות\n2. Integration Tests - בדיקת אינטראקציות בין קומפוננטות\n3. E2E Tests - בדיקת זרימות שלמות באפליקציה\n4. Performance Tests - בדיקת ביצועים\n\nכלים: Jest, React Testing Library, Cypress, Playwright",
        },
        {
          type: "link" as const,
          title: "React Testing Library",
          url: "https://testing-library.com/docs/react-testing-library/intro/",
          description: "ספרייה לבדיקת React components",
        },
      ],
    },
  ],
};