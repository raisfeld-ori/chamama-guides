export const config = {
  title: "ארכיטקטורה ומערכות מורכבות - שנה 3",
  description: "עיצוב מערכות בקנה מידה גדול ולידרות טכנית",
  sections: [
    {
      title: "System Design",
      blocks: [
        {
          type: "video" as const,
          title: "Designing Data-Intensive Applications",
          youtubeId: "xpDnVSmNFX0",
          description: "עיצוב מערכות מורכבות וטיפול בנתונים",
        },
        {
          type: "text" as const,
          title: "עיצוב מערכות בקנה מידה",
          content:
            "עיצוב מערכות מורכבות דורש הבנה עמוקה של קשיים ופתרונות:\n\n1. Scalability patterns - horizontal vs vertical scaling\n2. Load balancing ו-traffic distribution\n3. Database sharding ו-partitioning\n4. Caching strategies בשכבות שונות\n5. Event-driven architectures\n6. CQRS ו-Event Sourcing\n7. CAP theorem ו-distributed systems\n8. Consistency patterns ו-eventual consistency\n\nמושגי מפתח: availability, reliability, consistency",
        },
        {
          type: "link" as const,
          title: "High Scalability",
          url: "http://highscalability.com/",
          description: "אתר עם case studies של מערכות גדולות",
        },
      ],
    },
    {
      title: "Performance Engineering",
      blocks: [
        {
          type: "video" as const,
          title: "Performance Optimization Techniques",
          youtubeId: "dQw4w9WgXcQ",
          description: "טכניקות אופטימיזציה לביצועים",
        },
        {
          type: "text" as const,
          title: "אופטימיזציית ביצועים",
          content:
            "הבנת bottlenecks וטכניקות אופטימיזציה מתקדמות:\n\n1. Profiling ו-performance monitoring\n2. Memory management ו-garbage collection\n3. Async programming ו-non-blocking I/O\n4. Database query optimization\n5. Network optimization ו-compression\n6. CDN strategies ו-edge computing\n7. Code-level optimizations\n8. Hardware considerations ו-resource utilization\n\nכלים: APM, profilers, monitoring dashboards",
        },
        {
          type: "link" as const,
          title: "Web Performance Best Practices",
          url: "https://web.dev/performance/",
          description: "מדריכי ביצועים מ-Google",
        },
      ],
    },
    {
      title: "Security ו-Compliance",
      blocks: [
        {
          type: "video" as const,
          title: "Application Security Best Practices",
          youtubeId: "nSf7b0_eU3w",
          description: "אבטחת אפליקציות ונתונים",
        },
        {
          type: "text" as const,
          title: "אבטחה מתקדמת",
          content:
            "אבטחה כחלק בלתי נפרד מארכיטקטורת המערכת:\n\n1. Threat modeling ו-risk assessment\n2. Secure coding practices\n3. Authentication ו-authorization patterns\n4. Data encryption in transit ו-at rest\n5. Security testing ו-vulnerability scanning\n6. Compliance frameworks (SOC 2, GDPR, HIPAA)\n7. Zero-trust architecture\n8. Incident response ו-security monitoring\n\nעקרונות: defense in depth, least privilege, fail secure",
        },
        {
          type: "link" as const,
          title: "OWASP Top 10",
          url: "https://owasp.org/www-project-top-ten/",
          description: "החולשות הנפוצות באפליקציות web",
        },
      ],
    },
  ],
};