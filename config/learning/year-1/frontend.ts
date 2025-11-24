export const config = {
  title: "פיתוח Frontend - שנה 1",
  description: "למד את יסודות פיתוח ה-Frontend",
  sections: [
    {
      title: "מבוא ל-HTML",
      blocks: [
        {
          type: "video" as const,
          title: "יסודות HTML",
          youtubeId: "UB1O30fR-EE",
          description: "למד את היסודות של HTML",
        },
        {
          type: "text" as const,
          title: "מה זה HTML?",
          content:
            "HTML (HyperText Markup Language) היא שפת סימון סטנדרטית ליצירת דפי אינטרנט. היא מתארת את המבנה של דף אינטרנט באופן סמנטי.\n\nHTML מורכבת מסדרה של אלמנטים, שבהם אתה משתמש כדי לעטוף, לסמן או לעצב חלקים שונים של תוכן כדי לגרום להם להופיע או לפעול בצורה מסוימת.",
        },
        {
          type: "link" as const,
          title: "תיעוד HTML של MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          description: "מדריך מקיף ל-HTML",
        },
      ],
    },
    {
      title: "יסודות CSS",
      blocks: [
        {
          type: "video" as const,
          title: "מבוא ל-CSS",
          youtubeId: "yfoY53QXEnI",
          description: "למד כיצד לעצב דפי אינטרנט עם CSS",
        },
        {
          type: "text" as const,
          title: "יסודות CSS",
          content:
            "CSS (Cascading Style Sheets) משמשת לעיצוב ופריסה של דפי אינטרנט. אתה יכול להשתמש ב-CSS כדי:\n\n1. לשנות צבעים, גופנים ומרווחים\n2. ליצור פריסות ועיצובים רספונסיביים\n3. להוסיף אנימציות ומעברים\n4. לעצב עבור גדלי מסך שונים",
        },
        {
          type: "link" as const,
          title: "CSS Tricks",
          url: "https://css-tricks.com/",
          description: "טיפים, טריקים וטכניקות לשימוש ב-CSS",
        },
      ],
    },
    {
      title: "פרויקטי תרגול",
      blocks: [
        {
          type: "project" as const,
          title: "דף תיק עבודות אישי",
          projectId: "year-1-frontend-portfolio",
          description: "בנה את תיק העבודות האישי הראשון שלך באמצעות HTML ו-CSS",
          difficulty: "Beginner" as const,
        },
        {
          type: "project" as const,
          title: "דף נחיתה רספונסיבי",
          projectId: "year-1-frontend-landing",
          description: "צור דף נחיתה רספונסיבי עם CSS מודרני",
          difficulty: "Intermediate" as const,
        },
      ],
    },
  ],
};
