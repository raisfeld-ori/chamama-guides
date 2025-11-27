# Design Pattern Documentation - Chamama Guides

## Overview
This document describes the complete design system for the Chamama Guides website. The design follows a modern, student-friendly approach with a green/white color scheme and cartoonish elements.

## Color Palette

### Primary Colors
- **Emerald**: `#10b981` (Primary green)
- **Teal**: `#14b8a6` (Secondary green)
- **Lime**: `#84cc16` (Accent green)
- **Cyan**: `#06b6d4` (Accent blue-green)
- **Green**: `#22c55e` (Bright green)

### Light Variants (Backgrounds)
- **Emerald Light**: `#d1fae5`
- **Teal Light**: `#ccfbf1`
- **Lime Light**: `#ecfccb`
- **Cyan Light**: `#cffafe`
- **Green Light**: `#dcfce7`

### Neutral Colors
- **Text Primary**: `#111827` (gray-900)
- **Text Secondary**: `#6b7280` (gray-500)
- **Background**: White to emerald-50 gradients

### Difficulty Badge Colors (Green Shades Only)
- **Easy/קל**: Emerald (`bg-emerald-500/10 text-emerald-700 border-emerald-500/20`)
- **Medium/בינוני**: Teal (`bg-teal-500/10 text-teal-700 border-teal-500/20`)
- **Hard/קשה**: Cyan (`bg-cyan-500/10 text-cyan-700 border-cyan-500/20`)

**Note**: All difficulty levels use green-family colors to maintain consistency with the overall design theme.

## Typography

### Font Weights
- **Font Black**: `font-black` (900) - Used for main titles
- **Font Bold**: `font-bold` (700) - Used for emphasis
- **Font Semibold**: `font-semibold` (600) - Used for subtitles
- **Font Medium**: `font-medium` (500) - Used for body text

### Text Sizes
- **Hero Title**: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`
- **Section Titles**: `text-3xl sm:text-4xl`
- **Card Titles**: `text-lg` to `text-2xl`
- **Body Text**: `text-sm` to `text-base`
- **Small Text**: `text-xs` to `text-[10px]`

## Key Design Elements

### 1. Gradient Shimmer Effect
**Location**: `app/globals.css`

```css
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.animate-shimmer {
  animation: shimmer 3s linear infinite;
}

.gradient-green-shimmer {
  background: linear-gradient(
    90deg,
    #10b981 0%,
    #34d399 25%,
    #6ee7b7 50%,
    #34d399 75%,
    #10b981 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Usage**: Apply to titles for animated shimmer effect
```tsx
<h2 className="gradient-green-shimmer animate-shimmer">Title</h2>
```

### 2. SVG Illustrations

#### Structure
All SVG illustrations follow this pattern:
- **ViewBox**: `0 0 200 200` or `0 0 300 300`
- **Background**: Organic blob shape with light color (static)
- **Main Icon**: Centered shape in primary color (static)
- **Decorative Elements**: Small circles and lines with subtle left-right motion
- **Text Overlay**: Integrated using `<foreignObject>`

#### Framer Motion Animations
Decorative elements (circles and lines) use framer-motion for subtle horizontal movement:
- **Movement Range**: 2-4px left and right
- **Duration**: 2.5-4 seconds per cycle
- **Easing**: `easeInOut` for smooth motion
- **Delays**: Staggered (0.2-1s) to create organic feel
- **Background blobs and main shapes remain static**

#### Example (Main Sections)
```tsx
import { motion } from "framer-motion";

<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  {/* Background blob - STATIC */}
  <path d="M150,50 Q250,80 250,150 Q250,220 150,250 Q50,220 50,150 Q50,80 150,50 Z" fill={lightColor} />
  
  {/* Decorative circles - ANIMATED */}
  <motion.circle 
    cx="80" 
    cy="100" 
    r="15" 
    fill={color} 
    opacity="0.3"
    animate={{ x: [-3, 3, -3] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
  
  {/* Main icon circle - STATIC */}
  <circle cx="150" cy="150" r="60" fill={color} />
  
  {/* Icon using foreignObject */}
  <foreignObject x="110" y="110" width="80" height="80">
    <div className="flex items-center justify-center w-full h-full">
      <Icon className="h-12 w-12 text-white" strokeWidth={2.5} />
    </div>
  </foreignObject>
  
  {/* Decorative lines - ANIMATED */}
  <motion.line 
    x1="150" 
    y1="50" 
    x2="150" 
    y2="90" 
    stroke={color} 
    strokeWidth="3" 
    opacity="0.4"
    animate={{ x1: [148, 152, 148], x2: [148, 152, 148] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
  />
  
  {/* Text overlay */}
  <foreignObject x="50" y="235" width="200" height="60">
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-black animate-shimmer" style={{...shimmerStyle}}>
        Title
      </h3>
      <p className="text-[10px] text-gray-500 font-medium opacity-80">
        Description
      </p>
    </div>
  </foreignObject>
</svg>
```

### 3. Interactive Cards

#### Hover Effects
- **Scale**: `hover:scale-105` (5% scale up)
- **Translate**: `hover:translate-y-[-4px]` (move up 4px)
- **No rotation or shadows** - Keep it clean

#### Border Style
- Use subtle borders: `border border-gray-100 hover:border-emerald-300`
- Avoid heavy black borders

### 4. Buttons

#### Primary Button
```tsx
<Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black shadow-lg hover:shadow-xl transition-all hover:scale-105">
  Button Text
</Button>
```

#### Secondary Button
```tsx
<Button variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-black transition-all hover:scale-105">
  Button Text
</Button>
```

### 5. Navigation (Header)

**File**: `components/layout/header.tsx`

#### Features
- Sticky header with backdrop blur
- Logo with shimmer effect and image
- Underline animation on nav items
- Modern dropdown with SVG icons for employment years

#### Dropdown Cards
```tsx
<Link className="group relative flex items-start gap-4 rounded-xl p-5 transition-all hover:bg-emerald-50 text-right border border-gray-100 hover:border-emerald-300 hover:shadow-md">
  {/* Icon or SVG */}
  <div className="flex-shrink-0 w-14 h-14 transition-all group-hover:scale-105">
    {svg}
  </div>
  
  {/* Content */}
  <div className="flex-1">
    <h3 className="font-black text-gray-900 group-hover:text-emerald-600">Title</h3>
    <p className="text-sm text-gray-600">Description</p>
  </div>
  
  {/* Arrow indicator */}
  <div className="absolute top-5 left-3 opacity-0 group-hover:opacity-100 transition-all group-hover:left-2">
    <svg>...</svg>
  </div>
</Link>
```

### 6. Hero Section

**File**: `components/layout/hero.tsx`

#### Structure
- Gradient background: `from-emerald-50 via-white to-teal-50`
- Animated blur circles for depth
- Badge with icons
- Large title with shimmer effect
- Two CTA buttons
- Decorative wave SVG at bottom

#### Text Style
- Casual, student-friendly tone
- Use emojis sparingly
- Hebrew text with proper RTL support

### 7. Special Components

#### Playful Button
**File**: `components/ui/playful-button.tsx`

Interactive button that moves 3 times before becoming clickable:
- Initial: "יאללה, בואו נתחיל!"
- After first hover: "תפסו אותי! 😜" (moves randomly)
- After 3 hovers: Returns to original text and stays clickable

## Roadmap Design Pattern

### Learning Content Pages
Learning content pages use a vertical roadmap design with the following features:

#### Layout Structure
- **Vertical center line**: Dotted border (`border-r-2 border-dashed border-emerald-300`)
- **Content positioning**: Alternates between left, center, and right (pattern: `['left', 'center', 'right']`)
- **Connector dots**: Colored circles on the center line matching content type
- **Horizontal connectors**: Dotted lines from center to content (except for center-positioned items)

#### Content Cards
- **Smaller size**: Compact cards with `p-4` padding
- **Text sizes**: 
  - Title: `text-base font-black`
  - Description: `text-xs`
  - Buttons: `size="sm"` with `text-xs`
- **Color coding by type**:
  - Video: Emerald (`bg-emerald-50`, `border-emerald-300`, `bg-emerald-500`)
  - Text: Teal (`bg-teal-50`, `border-teal-300`, `bg-teal-500`)
  - Link: Cyan (`bg-cyan-50`, `border-cyan-300`, `bg-cyan-500`)
  - Project: Lime (`bg-lime-50`, `border-lime-300`, `bg-lime-500`)

#### Interactive Elements
- **Icon badges**: 10x10 circles with white icons
- **Section badges**: Small pills showing section titles
- **Hover effects**: `hover:scale-105` and `hover:shadow-xl`
- **End marker**: Gradient circle with white dot center

#### Positioning Logic
```tsx
const positions = ['left', 'center', 'right'];
position: positions[(sectionIndex + blockIndex) % 3]
```

## File Structure

```
app/
├── page.tsx                    # Homepage with main sections
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles and animations
├── about/page.tsx             # About page
└── learning/
    └── [category]/
        └── [year]/
            └── page.tsx       # Roadmap-style learning content

components/
├── layout/
│   ├── header.tsx             # Navigation with dropdown
│   ├── hero.tsx               # Hero section
│   └── footer.tsx             # Footer
├── learning/
│   ├── video-block.tsx        # Video content block
│   ├── text-block.tsx         # Text content block
│   ├── link-block.tsx         # External link block
│   └── project-link.tsx       # Project reference block
├── ui/
│   ├── button.tsx             # Button component
│   └── playful-button.tsx     # Interactive button
└── magicui/
    └── blur-fade.tsx          # Animation component

public/
└── logo.png                   # Logo image (required)
```

## Design Principles

### 1. Consistency
- All cards use similar SVG structure
- Consistent spacing and padding
- Uniform hover effects

### 2. Accessibility
- Proper color contrast
- Semantic HTML
- RTL support for Hebrew text

### 3. Performance
- CSS animations over JavaScript
- Optimized SVG paths
- Minimal dependencies

### 4. User Experience
- Clear visual hierarchy
- Intuitive navigation
- Fun, engaging interactions

## Implementation Guidelines

### Adding New Cards
1. Define color and lightColor
2. Create SVG shape (centered at 100,100)
3. Add decorative circles and lines
4. Integrate text using foreignObject
5. Apply shimmer effect to title

### Color Assignment
- Each category gets a unique green shade
- Use light variant for backgrounds
- Maintain consistent opacity levels (0.2-0.3 for decorative elements)

### Text Integration
Always use this pattern for text in SVGs:
```tsx
<foreignObject x="50" y="235" width="200" height="60">
  <div className="flex flex-col items-center">
    <h3 className="text-lg font-black animate-shimmer" style={{
      background: `linear-gradient(90deg, ${color} 0%, ${color}dd 25%, ${color}99 50%, ${color}dd 75%, ${color} 100%)`,
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}>
      Title
    </h3>
    <p className="text-[10px] text-gray-500 font-medium opacity-80">
      Description
    </p>
  </div>
</foreignObject>
```

## Common Patterns

### Grid Layouts
- Main sections: `grid gap-8 md:grid-cols-3`
- Tracks: `grid gap-8 sm:grid-cols-2 lg:grid-cols-4`
- Footer: `grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6`

### Spacing
- Section padding: `py-16` to `py-20`
- Card padding: `p-5` to `p-8`
- Gap between items: `gap-4` to `gap-8`

### Transitions
- Duration: `duration-300`
- Easing: Default or `ease-out`
- Properties: `transition-all` or specific properties

## Notes for AI Assistants

When working with this design system:
1. Always maintain the green color palette
2. Use shimmer effects on titles
3. Keep SVG illustrations centered (around x=100, y=100 in 200x200 viewBox)
4. Integrate text into SVGs using foreignObject
5. Use font-black for titles, font-medium for body
6. Apply subtle hover effects (scale-105, translate-y-[-4px])
7. Maintain RTL support for Hebrew text
8. Keep the casual, student-friendly tone
9. Use Lucide React icons, not emojis in code (except for decorative purposes)
10. Test all SVG shapes are properly centered before finalizing
11. **Animate decorative elements only** - Use framer-motion for circles and lines with subtle 2-4px horizontal movement
12. **Keep backgrounds and main shapes static** - Only decorative elements should move
13. **Stagger animation delays** - Use different delays (0.2-1s) for organic feel
14. **Use easeInOut easing** - For smooth, natural motion
