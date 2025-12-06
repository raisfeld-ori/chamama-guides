export const config = {
  title: "פיתוח משחקים מתקדם - שנה 3",
  description: "בניית מנועי משחק, רינדור תלת־מימדי, ואופטימיזציה נמוכת־רמה",
  sections: [
    {
      title: "פיתוח מנוע משחק (Game Engine Architecture)",
      blocks: [
        {
          type: "video" as const,
          title: "Game Engine Architecture Explained",
          youtubeId: "eM7EcGytCSw",
          description: "מבוא מעמיק לארכיטקטורת מנועי משחק",
        },
        {
          type: "text" as const,
          title: "ארכיטקטורת מנועי משחק",
          content:
            "בניית מנועים וכלי ליבה למשחקים:\n\n1. Scene Graph / ECS Architecture\n2. Game Loop Design (update, physics, render)\n3. Asset Pipeline ו-resource streaming\n4. Physics systems ו-collision optimization\n5. Animation systems (skeletal, blend trees)\n6. Input systems ו-event routing\n7. Tooling: editors, debuggers, internal tools\n8. File formats (FBX, glTF, custom binary)\n\nמטרות: modularity, performance, extensibility",
        },
        {
          type: "link" as const,
          title: "Game Engine Architecture Book",
          url: "https://www.gameenginebook.com",
          description: "הספר הקלאסי לבניית מנועי משחק",
        },
      ],
    },
    {
      title: "OpenGL וגרפיקה תלת־מימדית",
      blocks: [
        {
          type: "video" as const,
          title: "Learn Modern OpenGL",
          youtubeId: "45MIykWJ-C4",
          description: "קורס מקיף על Modern OpenGL (גרסה 3+)",
        },
        {
          type: "text" as const,
          title: "רינדור מתקדם עם OpenGL",
          content:
            "טכניקות רינדור מתקדמות עם C++ ו-OpenGL:\n\n1. Vertex & Fragment Shaders (GLSL)\n2. VAOs, VBOs, Textures, Framebuffers\n3. Lighting models (Phong, Blinn-Phong, PBR basics)\n4. Shadow mapping ו-depth textures\n5. Deferred rendering pipeline\n6. Instancing ו-draw call optimization\n7. HDR, Bloom, SSAO\n8. Using GLM לתלת־מימד (מטריצות, קוואטרניונים)\n\nמטרות: שליטה ב-render pipeline וגרפיקה בזמן אמת",
        },
        {
          type: "link" as const,
          title: "LearnOpenGL",
          url: "https://learnopengl.com",
          description: "המדריך הטוב בעולם ל-OpenGL מודרני",
        },
      ],
    },
    {
      title: "תכנות מערכות ו-Performance",
      blocks: [
        {
          type: "video" as const,
          title: "CPU/GPU Performance for Game Developers",
          youtubeId: "C_6K1ZPmS-g",
          description: "קורס ביצועים למהנדסי משחקים",
        },
        {
          type: "text" as const,
          title: "אופטימיזציה נמוכת־רמה",
          content:
            "ניהול ביצועים, זיכרון ומערכות בזמן אמת:\n\n1. CPU Profiling (cache misses, branches)\n2. GPU Profiling (render passes, draw calls)\n3. Data-Oriented Design (DOD)\n4. Memory layout optimization (SoA vs AoS)\n5. Parallelism (threads, jobs, task systems)\n6. Networking performance (UDP, lag compensation)\n7. Debugging tools: RenderDoc, Tracy, GDE\n8. Build systems: CMake, compilation optimization\n\nכלים: Valgrind, Perf, RenderDoc, PIX, imgui",
        },
        {
          type: "link" as const,
          title: "Awesome Game Dev",
          url: "https://github.com/ellisonleao/magictools",
          description: "רשימת משאבים מקיפה לפיתוח משחקים",
        },
      ],
    },
  ],
};
