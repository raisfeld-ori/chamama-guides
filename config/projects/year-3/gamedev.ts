export const projects = [
  {
    id: "year-3-gamedev-opengl-renderer",
    title: "Mini OpenGL 3D Renderer",
    description: "Implement a simple 3D renderer with OpenGL and C++",
    longDescription:
      "Learn the basics of real-time 3D rendering by building your own mini renderer. Implement vertex/fragment shaders, transformation matrices, textures, and a basic camera. Understand the render pipeline and GPU workflow.",
    difficulty: "בינוני" as const,
    estimatedTime: "8-10 שעות",
    skills: ["C++", "OpenGL", "Shaders", "Matrices", "3D Math"],
    featured: true,
  },
  {
    id: "year-3-gamedev-engine-loop",
    title: "Custom Game Engine Loop",
    description: "Build a minimal engine loop handling updates, physics, and rendering",
    longDescription:
      "Create a small engine framework in C++ that manages the main game loop, timing, input, and update/render separation. This project teaches how real engines like Unity or Godot manage frame updates and system interactions.",
    difficulty: "בינוני" as const,
    estimatedTime: "6-8 שעות",
    skills: ["C++", "Game Loop", "Input Handling", "Update/Render", "Architecture"],
    featured: true,
  },
  {
    id: "year-3-gamedev-raycaster",
    title: "3D Raycasting Demo",
    description: "Implement a Wolfenstein-style raycasting engine in C++",
    longDescription:
      "Build a 2.5D raycasting engine simulating 3D graphics. Learn about ray-wall intersection, distance correction, and projecting walls to the screen. This project strengthens understanding of 3D math and rendering pipelines.",
    difficulty: "בינוני" as const,
    estimatedTime: "7-9 שעות",
    skills: ["C++", "Raycasting", "3D Math", "Rendering", "Game Logic"],
    featured: true,
  },
  {
    id: "year-3-gamedev-shader-effects",
    title: "Custom Shader Effects",
    description: "Create vertex and fragment shaders for lighting and post-processing",
    longDescription:
      "Experiment with GLSL to implement lighting models, textures, and post-processing effects such as bloom or grayscale. Learn how shaders control GPU rendering and how to integrate them into a small engine or OpenGL project.",
    difficulty: "בינוני" as const,
    estimatedTime: "6-8 שעות",
    skills: ["OpenGL", "GLSL", "Shaders", "Lighting", "Post-Processing"],
    featured: true,
  },
  {
    id: "year-3-gamedev-profiling",
    title: "Game Performance Profiling",
    description: "Analyze and optimize CPU/GPU performance in a small engine",
    longDescription:
      "Use profiling tools to measure frame times, draw calls, memory usage, and bottlenecks. Optimize your code and engine architecture to improve real-time performance. Learn how pro studios measure and improve game efficiency.",
    difficulty: "קל" as const,
    estimatedTime: "2-3 שעות",
    skills: ["Profiling", "Optimization", "C++", "OpenGL", "Performance"],
    featured: true,
  },
];
