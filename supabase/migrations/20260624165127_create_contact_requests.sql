/*
# Create contact_requests table for Beltah Plumbing

1. New Tables
- `contact_requests` — stores service request submissions from the website contact form
- `id` (uuid, primary key, auto-generated)
- `name` (text, not null) — customer name
- `phone` (text, not null) — customer phone number
- `service_needed` (text) — type of service requested
- `message` (text) — additional details from the customer
- `created_at` (timestamptz, default now) — submission timestamp

2. Security
- Enable RLS on `contact_requests`.
- Allow anonymous (public) submissions since this is a public-facing service request form.
- Allow anonymous read access for the same reason.
- No `user_id` or auth required — this is a single-tenant plumbing service site.
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service_needed text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_requests" ON contact_requests;
CREATE POLICY "anon_insert_contact_requests"
  ON contact_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact_requests" ON contact_requests;
CREATE POLICY "anon_select_contact_requests"
  ON contact_requests FOR SELECT
  TO anon, authenticated
  USING (true);
