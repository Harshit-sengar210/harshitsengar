#!/bin/bash

# Install TailwindCSS and dependencies
npm install tailwindcss postcss autoprefixer --save

# Install all dependencies with legacy peer deps
npm install --legacy-peer-deps

# Create temporary directory for lib
mkdir -p .vercel/output/static/lib

# Copy necessary lib files
cp -r src/lib/* .vercel/output/static/lib/

# Copy components
mkdir -p .vercel/output/static/components
cp -r src/components/* .vercel/output/static/components/

# Run the build
npm run build 