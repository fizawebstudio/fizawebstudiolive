/*
# Create contact submissions storage

1. New Tables
- `public.contact_submissions` stores every valid inquiry from the portfolio form.
- `id` uniquely identifies each submission.
- `name`, `email`, `phone`, `subject`, `service`, and `message` store the submitted contact details.
- `email_status` records whether the Gmail notification is pending, sent, or failed.
- `email_error` stores a non-sensitive delivery status note for operational troubleshooting.
- `created_at` records when the inquiry was received.
- `email_sent_at` records when the Gmail notification was successfully sent.

2. Security
- Row Level Security is enabled.
- Direct browser access is denied for anonymous and authenticated users because contact submissions are private business records.
- The Edge Function uses the server-side service role to create and update rows after validating the request.

3. Important Notes
- No existing tables or data are modified.
- The table intentionally has no public read or write path; all writes happen inside the deployed Edge Function.
*/

CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  service text,
  message text NOT NULL,
  email_status text NOT NULL DEFAULT 'pending' CHECK (email_status IN ('pending', 'sent', 'failed')),
  email_error text,
  created_at timestamptz NOT NULL DEFAULT now(),
  email_sent_at timestamptz
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.contact_submissions FROM anon, authenticated;

DROP POLICY IF EXISTS "deny_public_contact_submissions_select" ON public.contact_submissions;
CREATE POLICY "deny_public_contact_submissions_select"
ON public.contact_submissions FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "deny_public_contact_submissions_insert" ON public.contact_submissions;
CREATE POLICY "deny_public_contact_submissions_insert"
ON public.contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (false);

DROP POLICY IF EXISTS "deny_public_contact_submissions_update" ON public.contact_submissions;
CREATE POLICY "deny_public_contact_submissions_update"
ON public.contact_submissions FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

DROP POLICY IF EXISTS "deny_public_contact_submissions_delete" ON public.contact_submissions;
CREATE POLICY "deny_public_contact_submissions_delete"
ON public.contact_submissions FOR DELETE
TO anon, authenticated
USING (false);
