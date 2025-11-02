# Overview

This is a medical weight loss platform called "Sema Swiss" that provides GLP-1 treatments (Semaglutide and Tirzepatide) for weight loss. The application is a full-stack React application with Express.js backend that allows patients to request consultations for weight loss medications. The platform features a marketing landing page with treatment information, pricing, patient testimonials, and a consultation request form. The brand emphasizes Swiss medical grade quality and precision.

The website now features an AlgoRx-inspired clean, minimal design with #E93424 as the primary brand color used throughout the interface, pricing sections, and call-to-action elements.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for consultation management
- **Request Processing**: JSON body parsing with input validation
- **Error Handling**: Centralized error middleware with structured responses
- **Development**: Hot reload with Vite integration for full-stack development

## Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon Database serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple

## Authentication and Authorization
- **Session Storage**: PostgreSQL-backed sessions
- **User Management**: Basic user schema with username/password
- **Security**: HIPAA compliance considerations for medical data

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: @neondatabase/serverless driver

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built accessible UI components
- **Radix UI**: Headless UI primitives for complex components
- **Lucide React**: Icon library

### Form and Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation for forms and API
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Development Tools
- **TypeScript**: Type safety across the stack
- **Vite**: Development server and build tool
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with autoprefixer

### Hosting Platform
- **Replit**: Cloud development environment with specialized plugins
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling integration

The application is designed as a monorepo with shared TypeScript schemas between frontend and backend, ensuring type safety across the entire stack. The architecture supports both development and production environments with appropriate tooling for each.