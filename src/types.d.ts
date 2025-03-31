// This file contains type declarations for modules that don't have their own type definitions

// Allow JSX to work properly
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Declare NodeJS namespace for Timeout
declare namespace NodeJS {
  interface Timeout {}
}

// Fix module resolution for React, Framer Motion, and Next.js Image
declare module 'react';
declare module 'framer-motion';
declare module 'next/image'; 