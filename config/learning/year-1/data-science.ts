export const config = {
  title: "מדעי הנתונים - שנה 1",
  description: "מבוא לניתוח נתונים ותכנות Python",
  sections: [
    {
      title: "מבוא למדעי הנתונים",
      blocks: [
        {
          type: "video" as const,
          title: "מה זה מדעי הנתונים?",
          youtubeId: "ua-CiDNNj30",
          description: "הבנת מדעי הנתונים והיישומים שלהם",
        },
        {
          type: "text" as const,
          title: "יסודות מדעי הנתונים",
          content:
            "מדעי הנתונים כוללים חילוץ תובנות מנתונים. תלמד:\n\n1. יסודות תכנות Python\n2. מניפולציה וניתוח נתונים\n3. ויזואליזציה של נתונים\n4. סטטיסטיקה והסתברות בסיסית",
        },
      ],
    },
    {
      title: "יסודות Python",
      blocks: [
        {
          type: "video" as const,
          title: "Python למתחילים",
          youtubeId: "_uQrJ0TkZlc",
          description: "למד את יסודות תכנות Python",
        },
        {
          type: "link" as const,
          title: "מדריך רשמי של Python",
          url: "https://docs.python.org/3/tutorial/",
          description: "תיעוד ומדריכים רשמיים של Python",
        },
      ],
    },
    {
      title: "פרויקטי תרגול",
      blocks: [
        {
          type: "project" as const,
          title: "ניתוח נתונים עם Pandas",
          projectId: "year-1-datascience-pandas",
          description: "נתח מערך נתונים באמצעות Python ו-Pandas",
          difficulty: "Beginner" as const,
        },
      ],
    },
  ],
};
