export const config = {
  title: "DevOps וענן - שנה 2",
  description: "למד טכנולוגיות ענן מתקדמות ואוטומציה",
  sections: [
    {
      title: "AWS/Azure מתקדם",
      blocks: [
        {
          type: "video" as const,
          title: "AWS Advanced Services",
          youtubeId: "SOTamWNgDKc",
          description: "שירותי AWS מתקדמים לאפליקציות production",
        },
        {
          type: "text" as const,
          title: "ארכיטקטורות ענן",
          content:
            "ארכיטקטורות ענן מתקדמות ודפוסי עיצוב:\n\n1. Serverless Architecture (Lambda, Azure Functions)\n2. Event-Driven Architecture\n3. API Gateway ו-Load Balancing\n4. CDN ו-caching strategies\n5. Multi-region deployments\n6. Disaster recovery ו-backup strategies\n\nעקרונות: scalability, reliability, cost optimization",
        },
        {
          type: "link" as const,
          title: "AWS Well-Architected Framework",
          url: "https://aws.amazon.com/architecture/well-architected/",
          description: "עקרונות ארכיטקטורה בענן AWS",
        },
      ],
    },
    {
      title: "Infrastructure as Code",
      blocks: [
        {
          type: "video" as const,
          title: "Terraform Deep Dive",
          youtubeId: "l5k1ai_GBDE",
          description: "ניהול תשתית עם Terraform",
        },
        {
          type: "text" as const,
          title: "IaC מתקדם",
          content:
            "ניהול תשתית כקוד עם כלים מתקדמים:\n\n1. Terraform - ניהול תשתית cross-platform\n2. AWS CloudFormation / Azure ARM Templates\n3. Ansible - configuration management\n4. Pulumi - IaC עם שפות programming\n5. GitOps workflows\n6. Environment management ו-promotion pipelines\n\nיתרונות: reproducibility, version control, automation",
        },
        {
          type: "link" as const,
          title: "Terraform Documentation",
          url: "https://developer.hashicorp.com/terraform/docs",
          description: "תיעוד רשמי של Terraform",
        },
      ],
    },
    {
      title: "ניטור ו-Observability",
      blocks: [
        {
          type: "video" as const,
          title: "Observability Best Practices",
          youtubeId: "W_QlAWEzKaA",
          description: "מעקב וניטור אפליקציות בפרודקשן",
        },
        {
          type: "text" as const,
          title: "ניטור מתקדם",
          content:
            "מערכות ניטור ו-observability מקיפות:\n\n1. The Three Pillars: Metrics, Logs, Traces\n2. Prometheus ו-Grafana לmetrics\n3. ELK Stack (Elasticsearch, Logstash, Kibana) ללוגים\n4. Jaeger ו-Zipkin לdistributed tracing\n5. APM tools (New Relic, DataDog, AppDynamics)\n6. Alerting ו-incident response\n\nמטרות: reliability, performance optimization, troubleshooting",
        },
        {
          type: "link" as const,
          title: "Observability Engineering Book",
          url: "https://info.honeycomb.io/observability-engineering-oreilly-book-2022",
          description: "ספר מקיף על observability",
        },
      ],
    },
  ],
};