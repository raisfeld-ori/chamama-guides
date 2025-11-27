export const projects = [
  {
    id: "year-1-backend-rest-api",
    title: "Simple API server",
    description: "An API server is a program that acts as the middleman for data and functionality between different applications, and has no screen.",
    longDescription: "",
    difficulty: "Beginner_Intermediate" as const,
    estimatedTime: "6-7 hours",
    skills: ["python", "flask"],
    featured: true,
  },
  {
    id: "year-1-backend-application",
    title: "App for the green house highschool",
    description: "Want to create an app for our school?, well why not.",
    longDescription: "Try to find an issue we have at our school e.g unupdated communication when it comes to the students and teachers. Because this is a backend course try to think more about the data you would need to store and less about how the app will look like to the user",
    difficulty: "Intermediate" as const,
    estimatedTime: "8-10 hours",
    skills: ["Python", "QT / PyQt6"],
    featured: false,
  },
  {
    id: "year-1-portfolio-website",
    title: "Create a portfolio website",
    skills: ["Fullstack", "Flask", "Python"],
    difficulty: "Beginner" as const,
    estimatedTime: "4-5 hours",
    featured: false
  },
  {
    id: "year-1-cdn",
    title: "שרת CDN",
    description: "CDN servers are very difficult to make however those that do make it go very far ",
    longDescription: "Building for many countries at the same time, it's important that all countries can access it simultaneously. A CDN (Content Delivery Network) is needed for this. You are required to build a CDN that allows you to start servers on multiple computers and connect them together.",
    skills: ["Python", "Networking", "SQL", "PostgresQL"],
    difficulty: "Advanced" as const,
    estimatedTime: "10 - 12 hours",
    featured: false
  },
  {
    id: "year-1-social-media",
    title: "Social media app",
    description: "Create an api for social media with a db",
    skills: ["Python", "Flask", "PostgresQL"],
    difficulty: "Advanced" as const,
    estimatedTime: "9-10",
    featured: false
  },
];
