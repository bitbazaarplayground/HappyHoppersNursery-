# Happy Hoppers Nursery — Stage 2 prototype

A responsive, bilingual English–Spanish nursery website for Happy Hoppers Nursery. It is a customer-presentation prototype, not a deployed production site.

## Run locally

```bash
npm install
npm run dev
```

For the production build and lint checks:

```bash
npm run build
npm run lint
```

## What is included

- Eight complete presentation routes: Home, About Us, Our Approach & Values, Bilingual Education, Curriculum & Learning, Facilities, Fees & Admissions, and Contact Us.
- Shared responsive header, navigation, language selection, footer and reusable link components.
- English and Spanish UI/content switching, persisted in `localStorage` and reflected in the document `lang` attribute.
- A translated 404 page, route-aware titles, mobile navigation, semantic landmarks, keyboard focus styling and reduced-motion support.
- Reusable interior-page heroes, section headings, information notices, FAQs, CTA panels and card systems.
- No live forms, CMS, availability, enquiry process, pricing, testimonials, reviews or other unverified nursery claims.

## Completed pages

| Route | Current scope |
| --- | --- |
| `/` | Finished homepage and introduction to the concept. |
| `/about-us` | Draft nursery story, mission/vision, environment and team-preview approach. |
| `/our-approach-and-values` | Draft child-centred philosophy, values, play and individual-development content. |
| `/bilingual-education` | Flagship English–Spanish page with illustrative activities, language moments and careful benefit framing. |
| `/our-curriculum-and-learning` | Draft curriculum narrative and reusable seven-area EYFS card system. |
| `/our-facilities` | Neutral environment principles, gallery placeholders and a facilities-information checkpoint. |
| `/fees-and-admissions` | Illustrative process, clearly marked fees/funding placeholders and accessible FAQs. |
| `/contact-us` | Contact-method placeholders, disabled form preview and location placeholder. |

Unknown paths display a translated 404 page with a route back to the homepage.

## Structure

```text
src/
  assets/             Local SVG concept artwork
  components/         Shared navigation, controls and reusable page sections
  content/            Shared and page-specific English/Spanish translation resources
  pages/              Eight routes plus a translated 404 page
  App.jsx             Route state and site shell
  App.css             Responsive component and page styling
```

The lightweight route handling is deliberate: it preserves the existing JavaScript/Vite setup and avoids adding a router dependency for the prototype. It supports browser back/forward navigation and direct in-app route navigation. A production host must be configured with a history fallback before deep links are publicly deployed.

## Maintaining bilingual content

Shared navigation and global interface copy are in `src/content/translations.js`. Page content is maintained in the parallel `src/content/pageTranslations.js` resource, with matching `en` and `es` keys. `getCopy()` combines them at runtime, so page components consume one `copy` object and never hard-code user-facing text.

The language switcher writes the choice to `localStorage`; the application updates the HTML `lang` attribute and document title whenever a language or route changes. When adding a page or visible string, add the English and Spanish content together before wiring it into a component.

## Design choices

The visual system uses warm cream, sage, peach and muted yellow against a deep green foundation. Fraunces gives headings a calm, crafted character; DM Sans keeps navigation and longer copy clear. Soft asymmetry, rounded editorial artwork and generous white space make the website feel reassuring and considered without making unsupported claims about the nursery.

The website links to Google Fonts (Fraunces and DM Sans), both available under the SIL Open Font License. In a production implementation, the fonts can be self-hosted after confirming the preferred licensing and privacy approach. The curriculum page uses the official names of the seven EYFS learning areas, but makes no claim that Happy Hoppers is registered, inspected or operating an approved EYFS curriculum. See the [official EYFS overview](https://www.gov.uk/early-years-foundation-stage) for current guidance.

## Asset inventory and image restrictions

The prototype uses a restrained mix of local concept illustrations and locally stored, face-free illustrative stock photography. The full source, licence, review and replacement record is in [docs/image-assets.md](docs/image-assets.md).

The original local SVG concept illustrations remain in use where photography would imply unconfirmed facts:

| Asset | Usage | Source / restriction |
| --- | --- | --- |
| `src/assets/hero-garden-concept.svg` | Hero | Original local concept placeholder. Not a depiction of Happy Hoppers, its children, staff or facilities. Replace with approved imagery before launch. |
| `src/assets/bilingual-concept.svg` | Bilingual feature | Original local concept placeholder. Not a depiction of real people or the nursery. Replace if approved photography/illustration is supplied. |
| `src/assets/spaces-concept.svg` | Facilities preview | Original local concept placeholder. Not a depiction of real facilities. Replace with approved imagery before launch. |

Every concept visual and stock photograph is labelled on-page as illustrative rather than a depiction of the actual nursery. Do not add identifiable images of children without documented parental/guardian consent and confirmation that the image may be used for the intended channels. Any future stock image must be added to the image inventory with its licence, creator, provider URL and usage restrictions.

## Customer content still needed

- Approved brand assets, legal organisation name and a logo decision.
- Accurate address/service area, phone, email, operating hours and social links.
- Registration/inspection status and any approved regulatory wording.
- Room/age ranges, staffing statements, opening dates, session options, fees, funding and admissions process.
- Confirmed curriculum approach, language model and facilities information.
- Safeguarding, privacy, cookie, accessibility and admissions policies.
- Approved photography/illustration with consent and licence records.

For the individual pages, the highest-priority decisions are:

- Final nursery story, mission, vision and team biographies.
- Confirmed bilingual delivery model, staff language information and wording for the family-language approach.
- Confirmed curriculum statement, room/age information, support and transition approach.
- Approved facilities facts, photographs, floor plans and visitor guidance.
- Fees, session options, funding eligibility, availability and admissions policy.
- Live contact details, visit-booking workflow, form consent wording and enquiry response ownership.

## Current limitations and next steps

The content across all eight routes is presentation-ready draft copy, but it must not be treated as verified operational information. Pages intentionally flag proposed educational approaches and pending customer facts. The contact form is a disabled preview and does not submit any data.

Outstanding production tasks include:

- Secure enquiry/visit forms, consent text, spam prevention, response routing and CRM/CMS decisions.
- Approved customer imagery and artwork replacement, including consent and licence records.
- Per-page SEO research and metadata, structured data, analytics, cookie consent and legal pages.
- Accessibility review with final content and real form testing.
- Hosting configuration with history fallback, domain, deployment and monitoring.
