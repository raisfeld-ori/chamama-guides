export const projects = [
  {
    id: "year-1-devops-static-deploy",
    title: "פריסת אתר סטטי",
    description: "פרוס אתר סטטי באמצעות GitHub Pages",
    difficulty: "Beginner" as const,
    estimatedTime: "2-3 שעות",
    skills: ["Git", "GitHub", "GitHub Pages", "פריסה"],
    featured: true,
  },
  {
    id: "year-1-devops-docker-intro",
    title: "הכנסת אפליקציה לקונטיינר",
    description: "צור את קונטיינר ה-Docker הראשון שלך",
    difficulty: "Intermediate" as const,
    estimatedTime: "4-5 שעות",
    skills: ["Docker", "קונטיינרים", "Dockerfile"],
    featured: false,
  },
  {
    id: "year-1-devops-ci-pipeline",
    title: "צינור CI בסיסי",
    description: "הגדר צינור CI פשוט עם GitHub Actions",
    difficulty: "Intermediate" as const,
    estimatedTime: "5-6 שעות",
    skills: ["GitHub Actions", "CI/CD", "אוטומציה"],
    featured: true,
  },
];
