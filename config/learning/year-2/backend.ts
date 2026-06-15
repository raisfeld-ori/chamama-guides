export const config = {
  title: "פיתוח Backend מתקדם - שנה 2",
  description: "בניית שרתים מתקדמים ואבטחת מידע",
  sections: [
    {
      title: "אבטחת מידע",
      blocks: [
        {
          id: "jwt-keys",
          type: "video" as const,
          title: "מפתחות JWT",
          youtubeId: "Y2H3DXDeS3Q",
          description: "מפתחות JWT הן כלי חשוב מאוד להצפנה",
        },
        {
          id: "webgoat",
          type: "link" as const,
          title: "WebGoat",
          url: "https://youtu.be/gxID0acwBgc?si=f8i0GXFHZSA8EwMp",
          description: "הורדה והתקנה של WebGoat לצורך תרגול פגיעויות",
        }
      ],
    },
    {
      title: "כלים אחרים חשובים לשרתים",
      blocks: [
        {
          type: "video" as const,
          title: "Firebase",
          youtubeId: "BnrkTpgH5Vc",
          description: "שרת ענן של גוגל עם הרבה שירותים מובנים",
        },
        {
          type: "video" as const,
          title: "Docker",
          youtubeId: "DQdB7wFEygo",
          description:
            "כלי חשוב מאוד ליצירת סביבות פיתוח ופריסה של יישומים בצורה קלה וניידת",
        },
        {
          id: "kubernetes-docs",
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
          id: "db-performance-tuning",
          type: "link" as const,
          title: "Database Performance Tuning",
          url: "https://use-the-index-luke.com/",
          description: "מדריך לאופטימיזציה של SQL",
        },
      ],
    },
  ],
};