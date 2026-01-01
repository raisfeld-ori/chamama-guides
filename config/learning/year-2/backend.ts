export const config = {
  title: "פיתוח Backend מתקדם - שנה 2",
  description: "בניית שרתים מתקדמים ואבטחת מידע",
  sections: [
    {
      title: "אבטחת מידע",
      blocks: [
        {
          type: "video" as const,
          title: "מפתחות JWT",
          youtubeId: "Y2H3DXDeS3Q",
          description: "מפתחות JWT הן כלי חשוב מאוד להצפנה",
        },
        {
          type: "link" as const,
          title: "OWASP WebGoat - התקנה",
          url: "https://owasp.org/www-project-webgoat/",
          description: "הורדה והתקנה של WebGoat לצורך תרגול פגיעויות",
        },
        {
          type: "text" as const,
          title: "השלמת WebGoat - משימות והנחיות",
          content:
            "מטרת התרגול: ללמוד ולהתגבר על פגיעויות נפוצות דרך תרגולים ב-WebGoat.\n\nהנחיות בסיסיות:\n1. הורד והרץ את WebGoat מהקישור הנסופק\n2. פתח את הממשק בכתובת http://localhost:8080 והכנס משתמש חדש\n3. עבוד על תרגילים בסדר הבא: Authentication, Injection, Access Control, Session Management\n4. רשום תובנות לכל תרגיל: מה הגורם לפגיעה וכיצד לתקן\n5. השתמש בכלים כמו Burp Suite למעקב ותיעוד התקפות\n\nהשלמת התרגול: סמן כל מודול כמושלם כשאתה מצליח לנצל ולתקן את הפגיעות ואתה מסוגל לתעד את הפתרון",
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