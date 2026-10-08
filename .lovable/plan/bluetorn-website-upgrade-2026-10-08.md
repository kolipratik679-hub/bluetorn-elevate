# BLUETORN website upgrade

## Goal
Refine the existing BLUETORN site in place, preserving current routes and verified company facts while implementing the requirements in the supplied brief.

## Work
1. Apply a solid-color visual system around #64D9C4, update the inline logo and square favicon from the supplied mark, clean the navigation, and reduce decorative effects while respecting reduced motion.
2. Establish the real company domain as the canonical source, centralize route metadata, correct absolute canonical/OG/Twitter tags, and align Organization/LocalBusiness data with verified company details. Add a crawlable sitemap and sitemap reference in robots.txt.
3. Correct counts to verified data (13 listed capabilities, 8 industries, 7 delivery stages), remove unsupported numeric claims, and ensure key routes link to related services/resources/contact.
4. Publish six substantial practical articles at `/blog` and article routes, with accurate dates/authorship, canonical/share metadata, internal links, and Article JSON-LD; retain the existing blog URL as a compatibility path.
5. Expand the contact page into four labeled enquiry paths with honest validation and clear send/success states, and add an accessible BLUETORN assistant only with a protected server-side AI integration. Use Lovable Cloud for persistence/server handling; no client API secrets.
6. Validate routes, metadata, schema, navigation, runtime, and representative desktop/mobile layouts. Document any items requiring real-world credentials or facts rather than inventing them.

## Technical approach
- Keep TanStack Start and existing data/components; use route `head()` for page metadata, a shared SEO helper for absolute URLs, and a sitemap server route or static sitemap generated from actual route slugs.
- Use existing company data as the source of truth. Only show certification badges or social profiles if verified details are present.
- Use the project’s semantic CSS tokens and existing UI controls; avoid introducing Express middleware because this app runs on TanStack Start, not Express.
- Server-side assistant/form behavior must use Lovable Cloud and server functions; public client code must not contain provider keys.
