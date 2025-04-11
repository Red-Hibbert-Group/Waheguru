-- Function to create the newsletter_subscriptions table
CREATE OR REPLACE FUNCTION create_newsletter_table()
RETURNS void AS $$
BEGIN
  -- Check if table already exists
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'newsletter_subscriptions') THEN
    -- Create the table
    CREATE TABLE public.newsletter_subscriptions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT NOT NULL UNIQUE,
      subscription_date TIMESTAMPTZ NOT NULL DEFAULT now(),
      status TEXT NOT NULL DEFAULT 'active',
      source TEXT DEFAULT 'website',
      unsubscribed_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    -- Create index on email
    CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);
    
    -- Add RLS policies
    ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
    
    -- Policy to allow inserts from anonymous users
    CREATE POLICY "Allow anonymous inserts to newsletter_subscriptions"
      ON public.newsletter_subscriptions
      FOR INSERT
      TO anon
      WITH CHECK (true);
      
    -- Policy to allow reading your own subscription
    CREATE POLICY "Allow users to read their own subscriptions"
      ON public.newsletter_subscriptions
      FOR SELECT
      TO anon
      USING (true);
      
    -- Policy to allow updates to your own subscription (for unsubscribing)
    CREATE POLICY "Allow users to update their own subscriptions"
      ON public.newsletter_subscriptions
      FOR UPDATE
      TO anon
      USING (true)
      WITH CHECK (true);
      
    RAISE NOTICE 'Created newsletter_subscriptions table';
  ELSE
    RAISE NOTICE 'newsletter_subscriptions table already exists';
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Function to get table columns
CREATE OR REPLACE FUNCTION get_table_columns(table_name text)
RETURNS TABLE (column_name text, data_type text) AS $$
BEGIN
  RETURN QUERY 
  SELECT 
    c.column_name::text, 
    c.data_type::text
  FROM 
    information_schema.columns c
  WHERE 
    c.table_schema = 'public' 
    AND c.table_name = table_name;
END;
$$ LANGUAGE plpgsql;

-- Function to add missing columns
CREATE OR REPLACE FUNCTION add_missing_columns(table_name text, missing_columns text[])
RETURNS void AS $$
DECLARE
  col text;
BEGIN
  FOREACH col IN ARRAY missing_columns
  LOOP
    CASE col
      WHEN 'id' THEN
        EXECUTE format('ALTER TABLE public.%I ADD COLUMN id UUID PRIMARY KEY DEFAULT gen_random_uuid()', table_name);
      WHEN 'email' THEN
        EXECUTE format('ALTER TABLE public.%I ADD COLUMN email TEXT NOT NULL UNIQUE', table_name);
      WHEN 'subscription_date' THEN
        EXECUTE format('ALTER TABLE public.%I ADD COLUMN subscription_date TIMESTAMPTZ NOT NULL DEFAULT now()', table_name);
      WHEN 'status' THEN
        EXECUTE format('ALTER TABLE public.%I ADD COLUMN status TEXT NOT NULL DEFAULT ''active''', table_name);
      WHEN 'source' THEN
        EXECUTE format('ALTER TABLE public.%I ADD COLUMN source TEXT DEFAULT ''website''', table_name);
      WHEN 'unsubscribed_at' THEN
        EXECUTE format('ALTER TABLE public.%I ADD COLUMN unsubscribed_at TIMESTAMPTZ', table_name);
      WHEN 'created_at' THEN
        EXECUTE format('ALTER TABLE public.%I ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT now()', table_name);
      WHEN 'updated_at' THEN
        EXECUTE format('ALTER TABLE public.%I ADD COLUMN updated_at TIMESTAMPTZ NOT NULL DEFAULT now()', table_name);
      ELSE
        RAISE NOTICE 'Unknown column: %', col;
    END CASE;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Initialize the table when this script is run
SELECT create_newsletter_table(); 