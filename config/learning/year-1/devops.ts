export const config = {
  title: "DevOps - Year 1",
  description: "Learn Python and Networking fundamentals",
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
      title: "Networking Fundamentals",
      blocks: [
        {
          type: "link" as const,
          title: "Networking Course Playlist",
          url: "https://www.youtube.com/playlist?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi",
          description: "Complete networking course playlist covering protocols, architecture, and implementation",
        },
        {
          type: "text" as const,
          title: "What You'll Learn",
          content:
            "This networking course covers:\n\n1. Network protocols (TCP/IP, HTTP, DNS)\n2. OSI model and network layers\n3. Client-server architecture\n4. Socket programming\n5. Network security basics",
        },
      ],
    },
    {
      title: "Networking Projects in Python",
      blocks: [
        {
          type: "project" as const,
          title: "Build Your Own HTTP Server",
          projectId: "year-1-devops-http-server",
          description: "Implement a basic HTTP server from scratch using Python sockets",
          difficulty: "בינוני" as const,
        },
        {
          type: "project" as const,
          title: "Mock Network Implementation",
          projectId: "year-1-devops-mock-network",
          description: "Create a simulated network environment to understand packet routing and protocols",
          difficulty: "בינוני" as const,
        },
        {
          type: "text" as const,
          title: "Additional Project Ideas",
          content:
            "More networking projects to practice:\n\n1. TCP Chat Application\n2. DNS Resolver\n3. Port Scanner\n4. Simple FTP Client\n5. Network Packet Sniffer\n6. Load Balancer Simulation",
        },
      ],
    },
  ],
};
