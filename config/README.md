# Configuration Files Guide

This directory contains all the content configuration for the Chamama Guides website. Each section (Learning, Projects, Employment) has its own configuration structure.

## Directory Structure

```
config/
├── learning/
│   ├── year-1/
│   │   ├── frontend.ts
│   │   ├── backend.ts
│   │   ├── devops.ts
│   │   └── data-science.ts
│   ├── year-2/
│   ├── year-3/
│   └── year-4/
├── projects/
│   ├── year-1/
│   │   ├── frontend.ts
│   │   ├── backend.ts
│   │   ├── devops.ts
│   │   └── data-science.ts
│   ├── year-2/
│   ├── year-3/
│   └── year-4/
└── employment/
    ├── year-1.ts
    ├── year-2.ts
    ├── year-3.ts
    └── year-4.ts
```

## Learning Configuration

### File Location
`config/learning/[year]/[category].ts`

### Structure

```typescript
export const config = {
  title: "Course Title",
  description: "Course description",
  sections: [
    {
      title: "Section Title",
      blocks: [
        // Block types below
      ]
    }
  ]
};
```

### Block Types

#### Video Block
```typescript
{
  type: "video" as const,
  title: "Video Title",
  youtubeId: "YouTube_Video_ID",
  description: "Video description"
}
```

#### Text Block
```typescript
{
  type: "text" as const,
  title: "Text Title",
  content: "Your content here.\n\nSupports multiple paragraphs."
}
```

#### Link Block
```typescript
{
  type: "link" as const,
  title: "Link Title",
  url: "https://example.com",
  description: "Link description"
}
```

#### Project Block
```typescript
{
  type: "project" as const,
  title: "Project Title",
  projectId: "unique-project-id",
  description: "Project description",
  difficulty: "Beginner" | "Intermediate" | "Advanced" as const
}
```

### Example: `config/learning/year-1/frontend.ts`

```typescript
export const config = {
  title: "Frontend Development - Year 1",
  description: "Learn the fundamentals of frontend web development",
  sections: [
    {
      title: "HTML Basics",
      blocks: [
        {
          type: "video" as const,
          title: "Introduction to HTML",
          youtubeId: "UB1O30fR-EE",
          description: "Learn HTML fundamentals",
        },
        {
          type: "text" as const,
          title: "What is HTML?",
          content: "HTML stands for HyperText Markup Language...",
        },
        {
          type: "link" as const,
          title: "MDN HTML Documentation",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          description: "Official HTML documentation",
        },
        {
          type: "project" as const,
          title: "Build Your First Webpage",
          projectId: "year-1-frontend-portfolio",
          description: "Create a simple HTML page",
          difficulty: "Beginner" as const,
        },
      ],
    },
  ],
};
```

## Projects Configuration

### File Location
`config/projects/[year]/[category].ts`

### Structure

```typescript
export const projects = [
  {
    id: "unique-project-id",
    title: "Project Title",
    description: "Project description",
    difficulty: "Beginner" | "Intermediate" | "Advanced" as const,
    estimatedTime: "2-3 hours",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    featured: true // Shows star badge
  }
];
```

### Example: `config/projects/year-1/frontend.ts`

```typescript
export const projects = [
  {
    id: "year-1-frontend-portfolio",
    title: "Personal Portfolio Website",
    description: "Build a responsive personal portfolio",
    difficulty: "Beginner" as const,
    estimatedTime: "3-4 hours",
    skills: ["HTML5", "CSS3", "Responsive Design"],
    featured: true,
  },
  {
    id: "year-1-frontend-calculator",
    title: "Interactive Calculator",
    description: "Build a functional calculator with JavaScript",
    difficulty: "Intermediate" as const,
    estimatedTime: "4-5 hours",
    skills: ["HTML", "CSS", "JavaScript", "DOM"],
    featured: false,
  },
];
```

## Employment Configuration

### File Location
`config/employment/[year].ts`

### Structure

```typescript
import { IconName } from "lucide-react";

export const config = {
  title: "Year Title",
  description: "Year description",
  sections: [
    {
      icon: IconName, // Import from lucide-react
      title: "Section Title",
      content: "Section description",
      actions: [
        "Action item 1",
        "Action item 2",
        "Action item 3"
      ]
    }
  ]
};
```

### Available Icons
Import from `lucide-react`:
- `BookOpen`
- `FileText`
- `Users`
- `Target`
- `Briefcase`
- `Linkedin`
- `Code`
- `GraduationCap`

### Example: `config/employment/year-1.ts`

```typescript
import { BookOpen, FileText, Users } from "lucide-react";

export const config = {
  title: "Year 1: Building Your Foundation",
  description: "Focus on learning fundamentals",
  sections: [
    {
      icon: BookOpen,
      title: "Focus on Learning",
      content: "Concentrate on mastering programming fundamentals.",
      actions: [
        "Complete all Year 1 coursework",
        "Practice coding daily",
        "Join coding communities online",
      ],
    },
    {
      icon: FileText,
      title: "Create Your Digital Presence",
      content: "Start building your online presence early.",
      actions: [
        "Create a professional GitHub profile",
        "Set up a LinkedIn account",
        "Write a simple personal website",
      ],
    },
  ],
};
```

## Adding New Content

### To Add Learning Content for a New Year/Category:

1. Create a new file: `config/learning/year-X/category.ts`
2. Copy the structure from an existing file
3. Update the content
4. Save the file

The page will automatically load the new configuration!

### To Add Projects for a New Year/Category:

1. Create a new file: `config/projects/year-X/category.ts`
2. Export an array of project objects
3. Ensure each project has a unique `id`
4. Save the file

### To Add Employment Guidance for a New Year:

1. Create a new file: `config/employment/year-X.ts`
2. Import necessary icons from `lucide-react`
3. Define sections with icons, titles, content, and actions
4. Save the file

## Best Practices

1. **Unique IDs**: Always use unique, descriptive IDs for projects
   - Format: `year-X-category-project-name`
   - Example: `year-1-frontend-portfolio`

2. **YouTube IDs**: Extract from URL
   - URL: `https://youtube.com/watch?v=VIDEO_ID`
   - Use: `VIDEO_ID`

3. **Difficulty Levels**: Use exactly one of:
   - `"Beginner" as const`
   - `"Intermediate" as const`
   - `"Advanced" as const`

4. **Line Breaks**: Use `\n\n` for paragraph breaks in text content

5. **External Links**: Always use full URLs with `https://`

6. **Type Safety**: Always use `as const` for literal types to ensure type safety

## Fallback Behavior

If a configuration file doesn't exist, the system will show a "Coming Soon" message instead of crashing. This allows you to gradually add content for different years and categories.

## Migration from Hardcoded Content

The old hardcoded content has been moved to config files. To update content:

1. Find the appropriate config file
2. Edit the content directly in the TypeScript file
3. Save and the changes will be reflected immediately

## Future Enhancements

Consider:
- Moving to JSON files for easier editing by non-developers
- Creating a web-based admin panel
- Integrating with a CMS (Contentful, Sanity, etc.)
- Adding validation schemas with Zod
