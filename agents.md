# Larisa Boston website

## Requests and product direction

- Build a personal website for Larisa, inspired by the section layout and visual style of stas.boston.
- Do not publish Larisa's last name until she approves it.
- Present her current focus as healthcare recruiting and her interest in exploring IT recruiting. Do not invent work history, credentials, or personal details.
- Use a light color scheme from 7:00 a.m. to 7:00 p.m. in the visitor's local time and a dark scheme outside those hours.
- Plan for Google sign-in, APIs hosted at `api.preciousstone.info` and `api.contentedwife.com`, and Cloudflare R2-hosted quick-load lists such as blog posts and jobs.

## Current features

- Responsive, single-page personal site with About, Recruiting, Talk to me, and Pitch me a job sections.
- Larisa's supplied portrait is displayed in the home-page hero.
- Recruiting overview distinguishes healthcare recruiting from Larisa's developing interest in IT recruiting.
- Accessible mobile navigation, keyboard dismissal, and skip-to-content link.
- Visitor-local automatic day/night theme, refreshed while the page remains open.
- Docker image serves the static site through Nginx on port 8080; Cloud Build config builds and pushes it to Container Registry.
- Talk-to-me and job-pitch interface previews clearly indicate that their services are not connected. They do not collect or transmit visitor data.
- No surname, contact details, career history, endorsements, or other unverified personal information is published.

## Planned integrations and content

- Configure Google sign-in and connect the conversation assistant to the appropriate authenticated API.
- Connect job pitches to the backend with clear consent, validation, and error handling before collecting or storing submissions.
- Confirm API routes, authorization requirements, and account ownership for both backend domains before implementing requests.
- Use Cloudflare R2 for read-only blog and job-list data if/when those sections are added.
- Add Larisa-approved biography, experience, contact links, and other personal content when supplied.
 