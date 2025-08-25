# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack e-commerce web application for Techoland, built with Django (backend) and Next.js (frontend). It's a product catalog system for construction materials and architectural products, featuring laminas, accessories, and project galleries.

## Architecture

### Backend (Django)
- **Framework**: Django 4.2.16 with Django REST Framework
- **Database**: PostgreSQL (configurable)
- **Main Apps**:
  - `products`: Product catalog with models for Producto, ImagenProducto, Grosor, Color
  - `orders`: Order management with MailOrder model for contact forms
- **Key Features**: Product hierarchy (Product → Thickness → Color), image management, email integration

### Frontend (Next.js)
- **Framework**: Next.js 12.2.5 with React 18
- **Styling**: Tailwind CSS
- **Key Pages**:
  - `/`: Homepage
  - `/laminas`: Product catalog for sheets/panels
  - `/accesorios`: Accessories catalog
  - `/proyectos`: Project gallery
  - `/product/[id]`: Product detail pages
  - `/cart`: Shopping cart

### Infrastructure
- **Containerization**: Docker with docker-compose
- **Reverse Proxy**: nginx-proxy-manager for SSL/domain management
- **Static Files**: WhiteNoise for Django static file serving
- **CORS**: Enabled for API communication between frontend/backend

## Development Commands

### Development Environment
```bash
# Build development containers
docker-compose -f docker-compose.dev.yml build

# Start development environment
docker-compose -f docker-compose.dev.yml up

# Stop containers
docker-compose -f docker-compose.dev.yml down
```

### Production Environment
```bash
# Build production containers
docker-compose -f docker-compose.prod.yml build

# Start production environment
docker-compose -f docker-compose.prod.yml up

# Stop containers
docker-compose -f docker-compose.prod.yml down
```

### Frontend Commands (inside client container)
```bash
# Install dependencies
yarn

# Development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Lint code
yarn lint
```

### Backend Commands (inside server container)
```bash
# Run Django development server
python manage.py runserver 0.0.0.0:8000

# Database migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic
```

## Environment Configuration

- **Development**: Uses `.env.dev` file
- **Production**: Uses `.env.prod` file
- **Services**:
  - Django backend: Port 8000
  - Next.js frontend: Port 3000
  - nginx-proxy-manager: Ports 80, 443, 81 (admin)
  - PostgreSQL: Internal container communication

## Database Models

### Product Structure
- **Producto**: Main product entity
- **ImagenProducto**: Product images (one-to-many with Producto)
- **Grosor**: Product thickness variants with pricing
- **Color**: Available colors for each thickness

### Order Structure
- **MailOrder**: Contact form submissions with customer inquiries

## Key Implementation Notes

- The project uses a hierarchical product structure: Product → Thickness → Colors
- Images are stored as text paths in `ImagenProducto.image_src`
- Email functionality configured for Gmail SMTP
- CORS is fully open (`CORS_ALLOW_ALL_ORIGINS = True`) for development
- Django admin is available for content management
- Static files are served through WhiteNoise in production