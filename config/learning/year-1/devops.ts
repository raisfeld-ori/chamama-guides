export const config = {
  title: "DevOps - שנה 1",
  description: "מבוא לשיטות וכלים של DevOps",
  sections: [
    {
      title: "מבוא ל-DevOps",
      blocks: [
        {
          type: "video" as const,
          title: "מה זה DevOps?",
          youtubeId: "Xrgk023l4lI",
          description: "הבנת תרבות ושיטות DevOps",
        },
        {
          type: "text" as const,
          title: "יסודות DevOps",
          content:
            "DevOps משלב פיתוח תוכנה ותפעול IT. מושגי מפתח כוללים:\n\n1. אינטגרציה רציפה/פריסה רציפה (CI/CD)\n2. תשתית כקוד\n3. ניטור ורישום\n4. אוטומציה וסקריפטים",
        },
      ],
    },
    {
      title: "בקרת גרסאות עם Git",
      blocks: [
        {
          type: "video" as const,
          title: "יסודות Git ו-GitHub",
          youtubeId: "RGOj5yH7evk",
          description: "למד את יסודות בקרת הגרסאות",
        },
        {
          type: "link" as const,
          title: "תיעוד Git",
          url: "https://git-scm.com/doc",
          description: "תיעוד רשמי ומדריכים של Git",
        },
      ],
    },
    {
      title: "פרויקטי תרגול",
      blocks: [
        {
          type: "project" as const,
          title: "פריסת אתר סטטי",
          projectId: "year-1-devops-static-deploy",
          description: "פרוס את האתר הראשון שלך באמצעות GitHub Pages",
          difficulty: "Beginner" as const,
        },
      ],
    },
  ],
};
