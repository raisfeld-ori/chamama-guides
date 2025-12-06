export const config = {
  title: "Game Development - Year 1",
  description: "Learn Python, game development fundamentals, and build simple games",
  sections: [
    {
      title: "Learn Python",
      blocks: [
        {
          type: "video" as const,
          title: "Python in 4 Hours - Full Course for Beginners",
          youtubeId: "rfscVS0vtbw",
          description: "Complete Python course covering all the basics in 4 hours",
        },
        {
          type: "text" as const,
          title: "Python Fundamentals",
          content:
            "This course covers:\n\n1. Python syntax and basics\n2. Data structures (lists, dictionaries, sets)\n3. Functions and modules\n4. Object-oriented programming\n5. File handling and exceptions",
        },
      ],
    },
    {
      title: "Game Development Fundamentals",
      blocks: [
        {
          type: "video" as const,
          title: "Pygame Tutorial for Beginners",
          youtubeId: "FfWpgLFMI7w",
          description: "Full beginner Pygame course covering graphics, movement, collisions, and more",
        },
        {
          type: "text" as const,
          title: "What You'll Learn",
          content:
            "This game dev module covers:\n\n1. How games work (game loop, rendering, events)\n2. Sprites, animations, and collisions\n3. Input handling (keyboard / mouse)\n4. Basic physics in 2D games\n5. Structuring a game project",
        },
      ],
    },
    {
      title: "Game Development Projects in Python",
      blocks: [
        {
          type: "project" as const,
          title: "Build a Pong Game",
          projectId: "year-1-game-dev-pong",
          description: "Implement the classic Pong game using Python and Pygame",
          difficulty: "בינוני" as const,
        },
        {
          type: "project" as const,
          title: "Platformer Prototype",
          projectId: "year-1-gamedev-platformer",
          description: "Create a simple side-scrolling platformer with jumping, gravity, and enemies",
          difficulty: "בינוני" as const,
        },
        {
          type: "text" as const,
          title: "Additional Project Ideas",
          content:
            "More game projects to practice:\n\n1. Snake Game\n2. Space Shooter\n3. Breakout / Brick Breaker\n4. Top-Down RPG Movement\n5. Simple Tower Defense\n6. Tile-based Map Editor",
        },
      ],
    },
  ],
};
