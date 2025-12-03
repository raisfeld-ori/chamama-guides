export const config = {
  title: "פיתוח Backend מתקדם - שנה 2",
  description: "למד ארכיטקטורות Backend מורכבות ומיקרו-שירותים",
  sections: [
    {
      title: "מיקרו-שירותים וארכיטקטורה",
      blocks: [
        {
          type: "video" as const,
          title: "Microservices Architecture",
          youtubeId: "y8OnoxKotPQ",
          description: "מבוא לארכיטקטורת מיקרו-שירותים",
        },
        {
          type: "text" as const,
          title: "מיקרו-שירותים",
          content:
            "מיקרו-שירותים הם גישה ארכיטקטונית לפיתוח אפליקציות כסט של שירותים קטנים ועצמאיים:\n\n1. כל שירות רץ בתהליך נפרד\n2. תקשורת דרך APIs מוגדרים היטב\n3. עצמאות בפיתוח ובפריסה\n4. שימוש בטכנולוגיות שונות לכל שירות\n\nיתרונות: גמישות, מדרגיות, עצמאות\nחסרונות: מורכבות, ניהול רשת, חלוקת נתונים",
        },
        {
          type: "link" as const,
          title: "Martin Fowler - Microservices",
          url: "https://martinfowler.com/articles/microservices.html",
          description: "מאמר יסודי על מיקרו-שירותים",
        },
      ],
    },
    {
      title: "Docker ו-Kubernetes",
      blocks: [
        {
          type: "video" as const,
          title: "Docker מתקדם",
          youtubeId: "3c-iBn73dDE",
          description: "containers, images, ו-orchestration",
        },
        {
          type: "text" as const,
          title: "קונטיינרים וניהול",
          content:
            "Docker ו-Kubernetes מאפשרים פריסה ומדרוג יעיל של אפליקציות:\n\n1. Docker - יצירה ופריסה של קונטיינרים\n2. Docker Compose - ניהול אפליקציות מרובות קונטיינרים\n3. Kubernetes - ניהול clusters של קונטיינרים\n4. Service Mesh - ניהול תקשורת בין שירותים\n\nיתרונות: נייד, מדרג, עקבי בסביבות שונות",
        },
        {
          type: "link" as const,
          title: "Kubernetes Documentation",
          url: "https://kubernetes.io/docs/home/",
          description: "תיעוד רשמי של Kubernetes",
        },
      ],
    },
    {
      title: "בסיסי נתונים מתקדמים",
      blocks: [
        {
          type: "video" as const,
          title: "Database Optimization",
          youtubeId: "HubezKbFL7E",
          description: "אופטימיזציה של ביצועי בסיס נתונים",
        },
        {
          type: "text" as const,
          title: "אופטימיזציה וביצועים",
          content:
            "טכניקות מתקדמות לניהול בסיסי נתונים:\n\n1. אינדקסים מתקדמים ואסטרטגיות שאילתות\n2. Sharding וחלוקת נתונים\n3. Replication ו-High Availability\n4. Caching strategies (Redis, Memcached)\n5. Database migrations ו-schema evolution\n\nמדדי ביצועים: throughput, latency, consistency",
        },
        {
          type: "link" as const,
          title: "Database Performance Tuning",
          url: "https://use-the-index-luke.com/",
          description: "מדריך לאופטימיזציה של SQL",
        },
      ],
    },
  ],
};