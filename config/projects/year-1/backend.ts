export const projects = [
  {
    id: "year-1-backend-rest-api",
    title: "שרת API פשוט",
    description: "שרת API הוא שרת ללא מסך, הנועד בשביל להכין דברים מקדמים עם קוד",
    longDescription: "חפשו משהו שמעניין אותכם- לדוגמה: קולנוע, אומנות, מוזיקה",
    difficulty: "קל" as const,
    estimatedTime: "6-7 שעות",
    skills: ["python", "flask"],
    featured: true,
  },
  {
    id: "year-1-backend-application",
    title: "אפליציה לתיכון החממה",
    description: "רוצים לחדש קצת את התיכון? תכינו אפליקציה לניהול משהו בתיכון",
    longDescription: "חפשו בעיה בתוך התיכון (לדוגמה- קבוצות למידה) ותנסו להכין אפליקציה פשוטה בשביל לנהל אותו",
    difficulty: "בינוני" as const,
    estimatedTime: "7-8 שעות",
    skills: ["Python", "QT / PyQt6"],
    featured: false,
  },
  {
    id: "year-1-portfolio-website",
    title: "אתר פורטפוליו אישי",
    skills: ["Fullstack", "Flask", "Python"],
    difficulty: "קל" as const,
    estimatedTime: "4-5",
    featured: false
  },
  {
    id: "year-1-cdn",
    title: "שרת CDN",
    description: "שרתי CDN הם שרתים מאוד קשוחים ליצור, אבל אלו שמצליחים, הולכים רחוק",
    longDescription: "שבונים להרבה מדינות באותו הזמן, חשוב שכל המדינות יוכלו לגשת אליו באותו הזמן. בשביל זה צריך CDN. עליכם לבנות CDN שנותן לכם לפתוח שרתים על כמה מחשבים ולחבר אותם ביחד",
    skills: ["Python", "Networking", "SQL", "PostgresQL"],
    difficulty: "קשה" as const,
    estimatedTime: "9-10",
    featured: false
  },
  {
    id: "year-1-social-media",
    title: "רשת חברתית מקדמת",
    description: "",
    skills: ["Python", "Flask", "PostgresQL"],
    difficulty: "קשה" as const,
    estimatedTime: "9-10",
    featured: false
  },
];
