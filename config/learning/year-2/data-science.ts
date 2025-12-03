export const config = {
  title: "מדעי נתונים מתקדמים - שנה 2",
  description: "למד אלגוריתמים מתקדמים ולמידת מכונה עמוקה",
  sections: [
    {
      title: "Deep Learning",
      blocks: [
        {
          type: "video" as const,
          title: "Neural Networks Explained",
          youtubeId: "aircAruvnKk",
          description: "הבנה עמוקה של רשתות נוירונים",
        },
        {
          type: "text" as const,
          title: "רשתות נוירונים עמוקות",
          content:
            "Deep Learning מאפשר למחשבים ללמוד מנתונים בדרכים מתקדמות:\n\n1. Convolutional Neural Networks (CNNs) לעיבוד תמונות\n2. Recurrent Neural Networks (RNNs) לעיבוד רצפים\n3. Transformers לעיבוד שפה טבעית\n4. Generative Adversarial Networks (GANs)\n5. Autoencoders לדחיסה וגילוי אנומליות\n\nכלים: TensorFlow, PyTorch, Keras",
        },
        {
          type: "link" as const,
          title: "Deep Learning Specialization",
          url: "https://www.coursera.org/specializations/deep-learning",
          description: "קורס מקיף של Andrew Ng",
        },
      ],
    },
    {
      title: "NLP ועיבוד שפה",
      blocks: [
        {
          type: "video" as const,
          title: "Natural Language Processing",
          youtubeId: "CMrHM8a3hqw",
          description: "עיבוד שפה טבעית עם Python",
        },
        {
          type: "text" as const,
          title: "עיבוד שפה טבעית",
          content:
            "NLP מאפשר למחשבים להבין ולעבד שפה אנושית:\n\n1. Tokenization ו-preprocessing\n2. Word embeddings (Word2Vec, GloVe)\n3. Named Entity Recognition (NER)\n4. Sentiment Analysis\n5. Machine Translation\n6. Question Answering Systems\n7. Large Language Models (LLMs)\n\nספריות: NLTK, spaCy, Hugging Face Transformers",
        },
        {
          type: "link" as const,
          title: "Hugging Face Course",
          url: "https://huggingface.co/course/chapter1/1",
          description: "קורס מקיף ב-NLP מודרני",
        },
      ],
    },
    {
      title: "MLOps ופרודקשן",
      blocks: [
        {
          type: "video" as const,
          title: "Machine Learning in Production",
          youtubeId: "NgWujOrCZFo",
          description: "העברת מודלים לפרודקשן",
        },
        {
          type: "text" as const,
          title: "MLOps וניהול מודלים",
          content:
            "MLOps משלב בין פיתוח מודלים לתפעול production:\n\n1. Model versioning ו-experiment tracking\n2. Automated testing למודלי ML\n3. Continuous Integration/Deployment למודלים\n4. Model monitoring ו-drift detection\n5. A/B testing למודלים\n6. Feature stores ו-data pipelines\n7. Model serving ו-scaling\n\nכלים: MLflow, Kubeflow, Amazon SageMaker, Azure ML",
        },
        {
          type: "link" as const,
          title: "MLOps Community",
          url: "https://mlops.community/",
          description: "קהילה ומשאבים למדעני נתונים",
        },
      ],
    },
  ],
};