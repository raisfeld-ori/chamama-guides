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
- **Background**: Organic blob shape with light color
- **Main Icon**: Centered shape in primary color
- **Decorative Elements**: Small circles and lines for visual interest
- **Text Overlay**: Integrated using `<foreignObject>`

#### Example (Main Sections)
```tsx
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  {/* Background blob */}
  <path d="M150,50 Q250,80 250,150 Q250,220 150,250 Q50,220 50,150 Q50,80 150,50 Z" fill={lightColor} />
  
  {/* Decorative circles */}
  <circle cx="80" cy="100" r="15" fill={color} opacity="0.3" />
  
  {/* Main icon circle */}
  <circle cx="150" cy="150" r="60" fill={color} />
  
  {/* Icon using foreignObject */}
  <foreignObject x="110" y="110" width="80" height="80">
    <div className="flex items-center justify-center w-full h-full">
      <Icon className="h-12 w-12 text-white" strokeWidth={2.5} />
    </div>
  </foreignObject>
  
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

## File Structure

```
app/
├── page.tsx                    # Homepage with main sections
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles and animations
└── about/page.tsx             # About page

components/
├── layout/
│   ├── header.tsx             # Navigation with dropdown
│   ├── hero.tsx               # Hero section
│   └── footer.tsx             # Footer
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
