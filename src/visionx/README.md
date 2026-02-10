# VisionX Module

VisionX is an isolated micro-frontend module for Computer Vision projects within ScientistsHub Labs.

## Architecture

This module is designed to be **portable** and can be extracted to its own subdomain with minimal refactoring.

### Folder Structure

```
visionx/
├── components/       # UI components (Nav, Footer, Hero, ProjectCard)
├── config/          # Configuration and routing
├── data/            # Project data and utilities
└── types/           # TypeScript interfaces
```

### Key Files

- `config/visionx.config.ts` - Main configuration (MODE, BASE_PATH)
- `config/routes.ts` - Routing utilities
- `data/projects.ts` - Project data layer
- `MIGRATION.md` - Guide for moving to subdomain

## Current Mode

**Embedded** - Running at `/visionx` within Labs

## Future Mode

**Standalone** - Can be deployed to `visionx.scientistshub.com`

## Usage

### Importing Components

```typescript
import { ProjectCard, HeroSection } from '@/visionx/components';
```

### Using Routes

```typescript
import { ROUTES } from '@/visionx/config/routes';

// Always use route helpers
<Link href={ROUTES.PROJECTS}>Projects</Link>
```

### Adding New Projects

Edit `data/projects.ts`:

```typescript
export const VISIONX_PROJECTS: VisionXProject[] = [
  {
    id: '6',
    slug: 'new-project',
    title: 'New Project',
    // ... rest of fields
  }
];
```

## Migration

See [MIGRATION.md](./MIGRATION.md) for detailed instructions on moving VisionX to its own subdomain.

## Design Principles

1. **Isolation** - No tight coupling with Labs core
2. **Portability** - Can be extracted easily
3. **Configuration** - All paths/modes configurable
4. **Dark Theme** - Experimental lab aesthetic
