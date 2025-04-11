# Waheguru Website

A modern, responsive website for the Waheguru non-profit organization, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth transitions and animations
- Mobile-friendly navigation
- Donation-focused call-to-action
- Clean and maintainable codebase

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/waheguru-website.git
cd waheguru-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout component
│   └── page.tsx      # Home page
├── components/       # React components
│   ├── Header.tsx    # Navigation header
│   ├── Hero.tsx      # Hero section
│   └── Footer.tsx    # Footer component
└── styles/          # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Newsletter Setup

If you encounter an error with the newsletter subscription about missing columns, you need to set up the database table correctly.

### Option 1: Automatic Fix

Visit the following URL to automatically try to fix the database structure:

```
/api/fix-db
```

This will attempt to fix the database structure using different approaches.

### Option 2: Row Level Security Error

If you encounter an error about "violating row-level security policy", you need to configure the RLS policies for the newsletter table. Visit:

```
/api/enable-rls
```

Or run the following SQL in your Supabase SQL Editor:

```sql
-- Enable RLS on the table if it's not already enabled
ALTER TABLE IF EXISTS public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Allow anonymous inserts to newsletter_subscriptions" ON public.newsletter_subscriptions;

-- Create policy to allow inserts from anonymous users
CREATE POLICY "Allow anonymous inserts to newsletter_subscriptions"
  ON public.newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);
  
-- Policy to allow reading subscriptions (needed for insert...returning)
DROP POLICY IF EXISTS "Allow public read access to newsletter_subscriptions" ON public.newsletter_subscriptions;
CREATE POLICY "Allow public read access to newsletter_subscriptions"
  ON public.newsletter_subscriptions
  FOR SELECT
  TO anon
  USING (true);
```

### Option 3: Manual SQL Fix

-- First check if the table exists
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Then add each column if it doesn't exist
DO $$
BEGIN
  -- Check and add subscription_date
  IF NOT EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'newsletter_subscriptions' 
    AND column_name = 'subscription_date'
  ) THEN
    ALTER TABLE public.newsletter_subscriptions 
    ADD COLUMN subscription_date TIMESTAMPTZ DEFAULT now();
  END IF;
  
  -- Check and add status
  IF NOT EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'newsletter_subscriptions' 
    AND column_name = 'status'
  ) THEN
    ALTER TABLE public.newsletter_subscriptions 
    ADD COLUMN status TEXT DEFAULT 'active';
  END IF;
  
  -- Check and add source
  IF NOT EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'newsletter_subscriptions' 
    AND column_name = 'source'
  ) THEN
    ALTER TABLE public.newsletter_subscriptions 
    ADD COLUMN source TEXT DEFAULT 'website';
  END IF;
  
  -- Check and add unsubscribed_at
  IF NOT EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'newsletter_subscriptions' 
    AND column_name = 'unsubscribed_at'
  ) THEN
    ALTER TABLE public.newsletter_subscriptions 
    ADD COLUMN unsubscribed_at TIMESTAMPTZ;
  END IF;
  
  -- Check and add updated_at
  IF NOT EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'newsletter_subscriptions' 
    AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE public.newsletter_subscriptions 
    ADD COLUMN updated_at TIMESTAMPTZ DEFAULT now();
  END IF;
END $$;
``` 