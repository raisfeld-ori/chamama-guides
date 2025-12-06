export const config = {
  title: "פיתוח משחקים - שנה 2",
  description: "למד פיתוח מתקדם ב-C#, Godot ו-C++",
  sections: [
    {
      title: "Godot ו-C# מתקדם",
      blocks: [
        {
          type: "video" as const,
          title: "Godot 4 + C# Advanced Tutorial",
          youtubeId: "LOhfqjmasi0",
          description: "סדנת עומק על פיתוח מתקדם ב-Godot 4 עם C#",
        },
        {
          type: "text" as const,
          title: "ארכיטקטורות במשחקים",
          content:
            "עקרונות ותבניות עיצוב בפיתוח משחקים:\n\n1. Entity Component System (ECS)\n2. Scene Trees ו-Nodes ב-Godot\n3. Event Bus ו-Signal Architecture\n4. Resource Management (textures, audio, memory)\n5. State Machines\n6. Physics Layers ו-Collision systems\n\nעקרונות: performance, modularity, scalability",
        },
        {
          type: "link" as const,
          title: "Godot Documentation",
          url: "https://docs.godotengine.org/en/stable/",
          description: "תיעוד רשמי של Godot",
        },
      ],
    },
    {
      title: "C# ו-C++ למנועי משחק",
      blocks: [
        {
          type: "video" as const,
          title: "C# Advanced Concepts for Game Dev",
          youtubeId: "hJHvdBlSxug",
          description: "קורס מתקדם ב-C# המותאם לפיתוח משחקים",
        },
        {
          type: "text" as const,
          title: "C# ו-C++ מתקדם",
          content:
            "כלים מתקדמים לתכנות משחקים:\n\n1. C# - Generics, Delegates, Events\n2. C# - Multithreading ו-Tasks\n3. C++ - זיכרון, מצביעים, Heap vs Stack\n4. C++ - בניית מנגנוני Game Loop\n5. C++ - בניית מערכות Physics בסיסיות\n6. שילוב C++ במנועים מודרניים (bindings)\n\nיתרונות: מהירות, שליטה במערכת, אופטימיזציה עמוקה",
        },
        {
          type: "link" as const,
          title: "C++ Reference",
          url: "https://en.cppreference.com",
          description: "תיעוד מעמיק לפיתוח ב-C++",
        },
      ],
    },
    {
      title: "ניטור ביצועים ו-Profiling במשחקים",
      blocks: [
        {
          type: "video" as const,
          title: "Game Performance Optimization",
          youtubeId: "e6K5i6Vnl8c",
          description: "שיטות לניטור ואופטימיזציה של ביצועי משחקים",
        },
        {
          type: "text" as const,
          title: "Profiling מתקדם",
          content:
            "כלים וטכניקות לניתוח ביצועים במשחקים:\n\n1. CPU Profiling (frame time, draw calls)\n2. GPU Profiling (shaders, batching)\n3. Memory Leaks ו-Garbage Collection\n4. Physics Debugging\n5. Networking Latency Debugging (אם יש)\n6. כלי פרופיילינג: Godot Profiler, RenderDoc, PIX\n\nמטרות: יציבות, אופטימיזציה, חוויית שחקן חלקה",
        },
        {
          type: "link" as const,
          title: "Godot Optimization Guide",
          url: "https://docs.godotengine.org/en/stable/tutorials/performance/index.html",
          description: "מדריך רשמי לשיפור ביצועים ב-Godot",
        },
      ],
    },
  ],
};
