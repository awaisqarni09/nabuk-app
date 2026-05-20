# Database Schema — Nabuk Distributors

## Table: `contact_messages`

Stores every validated contact-form submission. **No public read or write.**
The only write path is the `submitContactForm` Server Action, which uses the
Supabase service-role key (bypasses RLS). RLS is enabled with no policies, so
no anon or authenticated client can access rows.

### SQL

```sql
CREATE TABLE public.contact_messages (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  clinic     text,
  email      text        NOT NULL,
  phone      text,
  message    text        NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
-- No RLS policies: zero client-side access.
-- All writes go through the service-role key in the Server Action.
```

### Columns

| Column       | Type        | Nullable | Notes                          |
|--------------|-------------|----------|--------------------------------|
| `id`         | uuid        | NO       | PK, auto-generated             |
| `name`       | text        | NO       | Validated: 2–100 chars         |
| `clinic`     | text        | YES      | Optional practice name         |
| `email`      | text        | NO       | Validated email address        |
| `phone`      | text        | YES      | Optional, max 30 chars         |
| `message`    | text        | NO       | Validated: 10–2 000 chars      |
| `created_at` | timestamptz | NO       | Server-set on insert           |

### Security notes

- RLS **on**, zero policies → no anon/authenticated read or write via client libraries.
- Service-role key is **server-side only** (`SUPABASE_SERVICE_ROLE_KEY`, no `NEXT_PUBLIC_` prefix).
- Data retention: decide with client. No automated deletion is configured.
