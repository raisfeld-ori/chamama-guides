export const config = {
  title: "ארכיטקטורת Backend ומערכות מבוזרות - שנה 3",
  description: "עיצוב מערכות backend מתקדמות ולידרות טכנית",
  sections: [
    {
      title: "Distributed Systems",
      blocks: [
        {
          type: "video" as const,
          title: "Building Distributed Systems",
          youtubeId: "UEAMfLPZZhE",
          description: "עקרונות עיצוב מערכות מבוזרות",
        },
        {
          type: "text" as const,
          title: "מערכות מבוזרות",
          content:
            "עיצוב וניהול מערכות מבוזרות מורכבות:\n\n1. Consensus algorithms (Raft, PBFT)\n2. Distributed databases ו-replication strategies\n3. Message queues ו-event streaming\n4. Service mesh ו-inter-service communication\n5. Distributed caching ו-session management\n6. Circuit breaker ו-fault tolerance patterns\n7. Distributed transactions ו-saga pattern\n8. Load balancing ו-service discovery\n\nאתגרים: network partitions, data consistency, latency",
        },
        {
          type: "link" as const,
          title: "Designing Data-Intensive Applications",
          url: "https://dataintensive.net/",
          description: "ספר מקיף על מערכות נתונים מבוזרות",
        },
      ],
    },
    {
      title: "Event-Driven Architecture",
      blocks: [
        {
          type: "video" as const,
          title: "Event Sourcing and CQRS",
          youtubeId: "8JKjvY4etTY",
          description: "ארכיטקטורות מונחות אירועים",
        },
        {
          type: "text" as const,
          title: "ארכיטקטורות אירועים",
          content:
            "בניית מערכות responsive ו-resilient עם אירועים:\n\n1. Event Sourcing - שמירת state כרצף אירועים\n2. CQRS - הפרדה בין קריאה וכתיבה\n3. Event Streaming עם Kafka/Kinesis\n4. Saga Pattern לעסקאות מבוזרות\n5. Event Choreography vs Orchestration\n6. Domain Events ו-integration events\n7. Event Store implementation ו-snapshots\n8. Eventual consistency ו-compensation patterns\n\nיתרונות: auditability, scalability, decoupling",
        },
        {
          type: "link" as const,
          title: "Apache Kafka Documentation",
          url: "https://kafka.apache.org/documentation/",
          description: "תיעוד רשמי של Kafka",
        },
      ],
    },
    {
      title: "API Design ו-Integration",
      blocks: [
        {
          type: "video" as const,
          title: "API Design Best Practices",
          youtubeId: "MiOSzpfP1Ww",
          description: "עיצוב APIs מתקדמים ואינטגרציה",
        },
        {
          type: "text" as const,
          title: "עיצוב API מתקדם",
          content:
            "עיצוב APIs robust ו-developer-friendly:\n\n1. RESTful API design principles\n2. GraphQL ו-query optimization\n3. gRPC ו-protocol buffers\n4. API versioning strategies\n5. Rate limiting ו-throttling\n6. API documentation ו-OpenAPI\n7. Webhook ו-real-time communication\n8. API gateway ו-service mesh integration\n\nעקרונות: consistency, documentation, backwards compatibility",
        },
        {
          type: "link" as const,
          title: "REST API Tutorial",
          url: "https://restfulapi.net/",
          description: "מדריך מקיף לעיצוב REST APIs",
        },
      ],
    },
  ],
};