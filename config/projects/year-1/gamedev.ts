export const projects = [
  {
    id: "year-1-gamedev-pygame-platformer",
    title: "Mini Platformer Game (Pygame)",
    description: "Create a basic 2D platformer using Pygame",
    longDescription:
      "In this project, you'll build a small 2D platformer from scratch using Pygame. You’ll implement player movement, jumping physics, gravity, platforms, collision detection, and a simple level layout. This project introduces core game development concepts like the game loop, event handling, sprite updates, and rendering. By the end, you'll have a fully playable mini-game and a solid foundation for expanding it further.",
    difficulty: "בינוני" as const,
    estimatedTime: "5-6 שעות",
    skills: ["Python", "Pygame", "Game Loop", "Physics", "Collision Detection"],
    featured: true,
  },

  {
    id: "year-1-gamedev-basic-engine",
    title: "Build a Minimal Game Engine Loop",
    description: "Implement a basic game loop using Python to understand how engines work",
    longDescription:
      "Learn how game engines work internally by implementing your own minimal engine structure. You will build an update-render loop, manage delta time, process user input, update game state, render graphics, and control frame rate. This project gives you a deep understanding of the architecture behind engines like Godot, Unity, and Unreal.",
    difficulty: "בינוני" as const,
    estimatedTime: "6-8 hours",
    skills: ["Python", "Game Architecture", "Rendering Basics", "Input Handling"],
    featured: true,
  },

  {
    id: "year-1-gamedev-raycasting",
    title: "Mini Raycasting Engine (Wolfenstein 3D Style)",
    description: "Create a simple 3D engine using raycasting",
    longDescription:
      "In this project, you'll build a miniature raycasting renderer like classic Wolfenstein 3D games. You will implement a 2D map, a movable player camera, raycasting to detect walls, distance correction, and drawing vertical slices to simulate 3D. This teaches the fundamentals of 3D rendering without the complexity of full OpenGL pipelines.",
    difficulty: "בינוני" as const,
    estimatedTime: "8-10 hours",
    skills: ["Python", "Math for Games", "Raycasting", "Rendering", "Game Logic"],
    featured: true,
  },

  {
    id: "year-1-gamedev-sprite-animation",
    title: "2D Sprite Animation System",
    description: "Implement a system that loads, cycles, and animates sprite sheets",
    longDescription:
      "This project teaches how 2D animation works in game engines. You'll load sprite sheets, slice frames, track animation states, and build a reusable animation component. You'll also implement walking, idle, and jumping animations. This is a great foundation for any 2D game engine or Pygame project.",
    difficulty: "קל" as const,
    estimatedTime: "45-75 minutes",
    skills: ["Sprites", "Animation", "Game Loop", "Pygame", "Timing"],
    featured: true,
  },

  {
    id: "year-1-gamedev-level-editor",
    title: "Build a Simple Level Editor",
    description: "Create a tool for designing 2D tile-based levels",
    longDescription:
      "In this project, you'll build a basic level editor using Python and Pygame (or Tkinter). You’ll implement tile placement, erasing, saving/loading level files (JSON), and a simple UI. This is your first step toward building real game-dev tools, similar to Unity's or Godot's scene editors.",
    difficulty: "קל" as const,
    estimatedTime: "20-35 minutes",
    skills: ["Tools Development", "Level Design", "Tilemaps", "JSON", "UI Basics"],
    featured: true,
  },
];
