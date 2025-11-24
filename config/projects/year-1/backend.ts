export const projects = [
  {
    id: "year-1-backend-rest-api",
    title: "REST API פשוט",
    description: "בנה RESTful API עם Node.js ו-Express",
    difficulty: "Beginner" as const,
    estimatedTime: "4-5 שעות",
    skills: ["Node.js", "Express", "REST API"],
    featured: true,
  },
  {
    id: "year-1-backend-todo-api",
    title: "API לרשימת משימות",
    description: "צור CRUD API לניהול פריטי משימות",
    difficulty: "Intermediate" as const,
    estimatedTime: "5-6 שעות",
    skills: ["Node.js", "Express", "JSON", "מערכת קבצים"],
    featured: false,
  },
  {
    id: "year-1-backend-auth",
    title: "מערכת אימות בסיסית",
    description: "הטמע פונקציונליות רישום והתחברות משתמשים",
    difficulty: "Intermediate" as const,
    estimatedTime: "6-8 שעות",
    skills: ["Node.js", "Express", "אימות", "אבטחה"],
    featured: true,
  },
];
