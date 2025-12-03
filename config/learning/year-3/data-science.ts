export const config = {
  title: "AI/ML מתקדם ומחקר - שנה 3",
  description: "מחקר בתחום AI ופיתוח מודלים מתקדמים",
  sections: [
    {
      title: "Research ו-Paper Implementation",
      blocks: [
        {
          type: "video" as const,
          title: "Reading Research Papers",
          youtubeId: "733m6qBH-jI",
          description: "כיצד לקרוא ולהבין papers במחקר AI",
        },
        {
          type: "text" as const,
          title: "מחקר ויישום",
          content:
            "הבנה ויישום של מחקרים מתקדמים ב-AI:\n\n1. קריאה ביקורתית של research papers\n2. יישום algorithms מ-papers\n3. Experiment design ו-hypothesis testing\n4. Reproducible research practices\n5. Writing technical papers ו-documentation\n6. Contributing to open source AI projects\n7. Peer review ו-scientific collaboration\n8. Ethics in AI research ו-responsible AI\n\nמשאבים: ArXiv, Papers With Code, Google Scholar",
        },
        {
          type: "link" as const,
          title: "Papers With Code",
          url: "https://paperswithcode.com/",
          description: "papers עם implementations ו-benchmarks",
        },
      ],
    },
    {
      title: "Advanced Deep Learning",
      blocks: [
        {
          type: "video" as const,
          title: "Transformer Architecture Deep Dive",
          youtubeId: "4Bdc55j80l8",
          description: "הבנה עמוקה של ארכיטקטורת Transformers",
        },
        {
          type: "text" as const,
          title: "ארכיטקטורות מתקדמות",
          content:
            "פיתוח ויישום של ארכיטקטורות DL מתקדמות:\n\n1. Attention mechanisms ו-self-attention\n2. Vision Transformers ו-multimodal models\n3. Graph Neural Networks (GNNs)\n4. Reinforcement Learning מתקדם\n5. Meta-learning ו-few-shot learning\n6. Neural Architecture Search (NAS)\n7. Federated Learning ו-distributed training\n8. Model compression ו-knowledge distillation\n\nטכנולוגיות: JAX, TPUs, distributed training frameworks",
        },
        {
          type: "link" as const,
          title: "Attention Is All You Need",
          url: "https://arxiv.org/abs/1706.03762",
          description: "המאמר שיצר את מהפכת הTransformers",
        },
      ],
    },
    {
      title: "AI Engineering ו-Production",
      blocks: [
        {
          type: "video" as const,
          title: "Large Scale ML Systems",
          youtubeId: "qrHhYdKoFZw",
          description: "בניית מערכות ML בקנה מידה גדול",
        },
        {
          type: "text" as const,
          title: "מערכות AI בפרודקשן",
          content:
            "בניית מערכות AI production-ready:\n\n1. Model optimization ו-quantization\n2. Inference optimization ו-hardware acceleration\n3. A/B testing למודלים ו-gradual rollouts\n4. Model governance ו-lifecycle management\n5. AI safety ו-robustness testing\n6. Explainable AI ו-interpretability\n7. Data quality ו-drift monitoring\n8. Edge deployment ו-mobile optimization\n\nכלים: TensorRT, ONNX, Triton Inference Server, BentoML",
        },
        {
          type: "link" as const,
          title: "Google AI Platform",
          url: "https://cloud.google.com/ai-platform/docs",
          description: "פלטפורמה לפיתוח AI בקנה מידה",
        },
      ],
    },
  ],
};