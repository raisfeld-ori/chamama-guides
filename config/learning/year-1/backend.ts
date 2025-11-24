export const config = {
  title: "פיתוח Backend - שנה 1",
  description: "למד את יסודות תכנות צד שרת",
  sections: [
    {
      title: "מבוא ל-Backend",
      blocks: [
        {
          type: "video" as const,
          title: "מה זה פיתוח Backend?",
          youtubeId: "cbSrsYiRamo",
          description: "הבנת תכנות צד שרת",
        },
        {
          type: "text" as const,
          title: "יסודות Backend",
          content:
            "פיתוח Backend מתמקד בלוגיקה של צד השרת, מסדי נתונים ו-APIs. כמפתח Backend, תעבוד עם:\n\n1. שפות צד שרת (Node.js, Python ועוד)\n2. מסדי נתונים (SQL ו-NoSQL)\n3. APIs ושירותי אינטרנט\n4. אימות ואבטחה",
        },
      ],
    },
    {
      title: "יסודות Node.js",
      blocks: [
        {
          type: "video" as const,
          title: "התחלה עם Node.js",
          youtubeId: "TlB_eWDSMt4",
          description: "למד את היסודות של Node.js",
        },
        {
          type: "link" as const,
          title: "תיעוד רשמי של Node.js",
          url: "https://nodejs.org/docs/latest/api/",
          description: "מדריך API מלא של Node.js",
        },
      ],
    },
    {
      title: "פרויקטי תרגול",
      blocks: [
        {
          type: "project" as const,
          title: "REST API פשוט",
          projectId: "year-1-backend-rest-api",
          description: "בנה את ה-REST API הראשון שלך עם Node.js",
          difficulty: "Beginner" as const,
        },
      ],
    },
  ],
};
