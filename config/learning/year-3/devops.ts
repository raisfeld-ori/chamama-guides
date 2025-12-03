export const config = {
  title: "Platform Engineering ו-SRE - שנה 3",
  description: "בניית פלטפורמות פיתוח ומהנדסות אמינות",
  sections: [
    {
      title: "Platform Engineering",
      blocks: [
        {
          type: "video" as const,
          title: "Building Internal Developer Platforms",
          youtubeId: "j5i00z3QXyU",
          description: "בניית פלטפורמות פיתוח פנימיות",
        },
        {
          type: "text" as const,
          title: "פלטפורמות פיתוח",
          content:
            "בניית פלטפורמות שמאפשרות לצוותים לעבוד יעיל יותר:\n\n1. Self-service deployment platforms\n2. Developer portals ו-internal tooling\n3. Golden paths ו-platform standardization\n4. Multi-tenancy ו-resource isolation\n5. Platform APIs ו-abstraction layers\n6. Developer experience optimization\n7. Platform metrics ו-adoption tracking\n8. Governance ו-compliance automation\n\nמטרות: developer productivity, consistency, reliability",
        },
        {
          type: "link" as const,
          title: "Platform Engineering Guide",
          url: "https://platformengineering.org/blog/what-is-platform-engineering",
          description: "מדריך מקיף ל-Platform Engineering",
        },
      ],
    },
    {
      title: "Site Reliability Engineering",
      blocks: [
        {
          type: "video" as const,
          title: "SRE Fundamentals",
          youtubeId: "OnK4IKgLl24",
          description: "יסודות מהנדסות אמינות אתרים",
        },
        {
          type: "text" as const,
          title: "מהנדסות אמינות",
          content:
            "SRE משלב בין פיתוח תוכנה לתפעול מערכות:\n\n1. SLIs, SLOs, ו-Error Budgets\n2. Incident management ו-postmortem culture\n3. Chaos engineering ו-resilience testing\n4. Capacity planning ו-performance engineering\n5. Automation ו-toil reduction\n6. Monitoring ו-alerting strategies\n7. Release engineering ו-deployment safety\n8. Disaster recovery ו-business continuity\n\nעקרונות: reliability through software, data-driven decisions",
        },
        {
          type: "link" as const,
          title: "Google SRE Book",
          url: "https://sre.google/sre-book/table-of-contents/",
          description: "הספר הרשמי של Google על SRE",
        },
      ],
    },
    {
      title: "Cloud Native ו-Kubernetes",
      blocks: [
        {
          type: "video" as const,
          title: "Advanced Kubernetes Concepts",
          youtubeId: "X48VuDVv0do",
          description: "Kubernetes מתקדם ו-cloud native patterns",
        },
        {
          type: "text" as const,
          title: "Kubernetes מתקדם",
          content:
            "ניהול production-grade Kubernetes clusters:\n\n1. Advanced scheduling ו-resource management\n2. Custom controllers ו-operators\n3. Service mesh (Istio, Linkerd) integration\n4. Multi-cluster management ו-federation\n5. GitOps workflows עם ArgoCD/Flux\n6. Security policies ו-network policies\n7. Observability ו-troubleshooting\n8. Cost optimization ו-resource efficiency\n\nכלים: Helm, Kustomize, Prometheus, Grafana",
        },
        {
          type: "link" as const,
          title: "CNCF Landscape",
          url: "https://landscape.cncf.io/",
          description: "מפת הטכנולוגיות Cloud Native",
        },
      ],
    },
  ],
};