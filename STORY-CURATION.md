# Story Curation Workflow — 18V History Project

## How it works

1. **Submissions arrive** via the form on plattevalleyairpark.com/history
2. **Netlify captures them** — view at: Netlify Dashboard → Sites → platte-valley-airpark → Forms → history-stories
3. **Notifications email** erin@plattevalleyairpark.com on every new submission (configure in Netlify Dashboard → Forms → Form notifications)
4. **FlyZ curates** — light copyedit, keeps voice genuine, removes spam/junk
5. **Approved stories** go into `data/stories.json` → git push → Netlify auto-deploys → live at plattevalleyairpark.com/stories

## Story JSON format

Add entries to the `stories` array in `data/stories.json`:

```json
{
  "id": "unique-slug-no-spaces",
  "name": "Pilot's name (or handle)",
  "date": "June 2026",
  "era": "1980s",
  "body": "Their story, lightly edited for clarity. Keep their voice.\n\nMultiple paragraphs separated by double newline."
}
```

Fields:
- `id` — required, unique, URL-safe slug
- `name` — required, how they want to be credited
- `date` — optional, when they submitted
- `era` — optional, decade/era the story is from (e.g. "1970s", "Early 2000s")
- `body` — required, the story text. Use `\n\n` for paragraph breaks.

## Curation principles (Dave's direction)

- **Grab everything** — accept broadly, don't filter by length or topic
- **Curate lightly** — fix obvious typos, clean up run-ons, but keep their words
- **Keep it genuine** — no marketing polish. If a pilot writes like a pilot, leave it
- **No junk** — skip test submissions, spam, or anything clearly not a story
- **Photo mentions** — if they mention photos, reply asking them to email erin@plattevalleyairpark.com

## Checking for new submissions

```bash
# Option 1: Netlify CLI (if installed)
netlify api listForms --siteId <your-site-id>

# Option 2: Check Netlify dashboard
# https://app.netlify.com → Sites → platte-valley-airpark → Forms → history-stories

# Option 3: FlyZ polls the inbox (flyz@plattevalleyairpark.com) for Netlify notification emails
```

## Publishing a new story

1. Open `data/stories.json`
2. Add the story object to the `stories` array (newest first or chronological — your call)
3. Commit and push:

```bash
cd /Users/flyz88/.openclaw/workspace/platte-valley-airpark
git add data/stories.json
git commit -m "Add community story: [pilot name]"
git push origin main
```

4. Netlify auto-deploys in ~60 seconds
5. Story live at plattevalleyairpark.com/stories
