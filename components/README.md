# Components Structure

This directory contains all reusable components for the application.

## Layout Components (`/layout`)

### Header
- **File**: `components/layout/header.tsx`
- **Features**:
  - Responsive navigation with mobile menu
  - Sticky header with scroll effects
  - Multi-level dropdown navigation using shadcn NavigationMenu
  - Designed to handle many routes efficiently
  - Mobile sheet menu for smaller screens
  - CTA buttons (Login/Get Started)

### Footer
- **File**: `components/layout/footer.tsx`
- **Features**:
  - Multi-column footer layout
  - Social media links
  - Responsive grid (2 cols mobile, 4 cols desktop)
  - Brand section with description
  - Bottom bar with copyright and legal links

### Hero
- **File**: `components/layout/hero.tsx`
- **Features**:
  - Animated entrance with Framer Motion
  - Gradient background effects
  - Stats/social proof section
  - CTA buttons
  - Fully responsive typography

## Magic UI Components (`/magicui`)

### AnimatedGradientText
- Animated gradient text effect with shimmer

### BlurFade
- Fade-in animation with blur effect
- Supports scroll-triggered animations

### ShimmerButton
- Button with shimmer animation effect
- Customizable colors and timing

## UI Components (`/ui`)

Shadcn/ui components installed:
- Button
- NavigationMenu
- Sheet

## Usage

```tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/hero";
import { BlurFade } from "@/components/magicui/blur-fade";
```

## Responsive Design

All components are built with mobile-first approach and scale properly across:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)
