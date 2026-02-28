# Unmuddled — Project Context for Claude

> **READ THIS FIRST.** This document exists so that any new Claude conversation in this project immediately understands what we're building, what decisions have been made, and what the current state of the product is. Do not ask the user to re-explain things covered here.

---

## What Is Unmuddled?

**Unmuddled** is an AI-powered workplace communication platform that translates corporate jargon into plain English. It decodes meeting dynamics, analyses tone and mood, and helps users understand not just what is being said — but what is actually *meant*.

**URL:** unmuddled.world  
**Tagline:** Plain English for Everyone  
**Hero headline:** "Stop translating. Start *understanding.*"

The product is inspired by Greg Isenberg's IdeaBrowser concept for an "AI Social Coach for Neurodivergent Professionals" — but Unmuddled deliberately avoids clinical or stigmatising framing. It is a professional productivity tool that happens to be life-changing for people whose brains work differently.

---

## The Founder

The founder is based in **Fort Lauderdale, Florida**. She previously pitched a yacht repair platform (AlphaMinds AI) to Y Combinator — that project was rejected because the PM-as-middleman model didn't hold up. Y Combinator told her to **reapply**, which is how Unmuddled was born. She has a background in IT, project management, and has built polished presentation decks (the AlphaMinds slides are in the project files for design reference).

---

## Target Users

### Primary Persona
**"The drowning middle manager"** — corporate, not necessarily identified as neurodivergent, overwhelmed by: meeting jargon, inbox chaos (847 unread emails), note-taking while listening, reading social cues and tone. Searches for practical help, not disability tools. Personal and work life boundaries are blurred.

### Secondary Personas
- **Workplace newbies** — first job, thrown into a world where everyone speaks a language they were never taught
- **Neurodivergent professionals** — ADHD, dyslexia, autism — technically brilliant but held back by workplace social dynamics
- **Non-native English speakers** — their English is great; corporate jargon is a dialect nobody taught them
- **Career changers and first-gen professionals**

### Key Insight
Users do NOT need to identify as neurodivergent to use Unmuddled. The non-stigmatising approach is deliberate and strategic — it makes the product accessible to a far wider audience while ensuring those who need it most can find it without labelling themselves.

---

## Market Validation (from IdeaBrowser research)

- **60M+** neurodivergent adults in the US alone
- **673K** monthly searches for neurodivergent terms, growing +50% YoY
- **$2.4B** ASD management market, growing to **$3.9B by 2035**
- **r/socialskills** — 6.3M members; **r/neurodiversity** — 103K members
- IdeaBrowser opportunity rating: **9/10**, problem severity: **9/10**, timing: **9/10**
- Existing tools focus on children or broad mental health — almost nothing for neurodivergent adults in workplace contexts
- Microsoft and SAP already using neurodiversity tools in DEI programs

---

## Product Features (by tier)

### Free
- Jargon quizzes (lead magnet — already built)
- First 100 words translated
- Business jargon glossary
- Abbreviation & idiom lookups

### Bronze — $9/month
- Everything in Free
- Unlimited jargon translation
- Copy & paste on site, no word limits
- Translation history saved

### Silver — $19/month
- Everything in Bronze
- Post-meeting plain English summaries
- Slack integration
- Action item detection

### Gold — $99/year
- Everything in Silver
- AI tone & mood analysis
- Short suggested responses
- Personality notes over time (how colleagues communicate)
- Notion integration
- **CloudScope** — visual Gmail inbox (word cloud interface, designed for neurodivergent users and visual thinkers)

### Enterprise — Custom pricing
- Full company licensing
- Admin dashboard
- DEI reporting
- Custom jargon dictionaries
- SSO

---

## CloudScope

A visual word-cloud interface for personal Gmail accounts. Designed for neurodivergent users and visual thinkers who find a standard inbox overwhelming. Currently positioned as Gold-exclusive but may eventually warrant its own standalone product page and acquisition funnel, particularly targeting ADHD/productivity communities.

---

## Jargon Database

- Currently **314 terms** in `business_jargon_1.xlsx` (in project files)
- Three columns: Jargon/Phrase | Abbreviation | Plain English
- The founder has **1,000–2,000 more terms** to add
- Plan: migrate to **PostgreSQL** database (Vercel Postgres or Supabase)
- Vercel plays nicely with both options; Supabase is free to start

---

## Files in This Project

| File | Description |
|------|-------------|
| `unmuddled-homepage.html` | Main homepage (NOTE: project copy may be older — check outputs for latest version with working translator on page 2) |
| `jargon-translator__1_.html` | Standalone jargon translator with full JS and 314-term dictionary |
| `dyslexia-quiz.html` | Dyslexia self-assessment quiz (lead magnet) |
| `aspie-quiz.html` | Autism/Aspie self-assessment quiz (lead magnet) |
| `business_jargon_1.xlsx` | 314 jargon terms with abbreviations |
| `Gen_Z_Slang_Glossary.md` | Gen Z slang reference (NOTE: Gen Z is NOT part of public-facing messaging) |
| `brown_for_jargon_translator.jpg` | Brand colour reference image |
| `Professional_portrait_with_navy_suit.png` | Founder portrait |
| `the_great_book_of_american_idioms2.pdf` | Idioms reference for future feature |

---

## Outputs (Latest Versions)

The most up-to-date files are in outputs:

- `unmuddled-homepage.html` — Updated homepage with **working two-field jargon translator** on page 2 (replaces the old megaphone animation)
- `pricing.html` — Pricing page with four pointed-tab cards (Process slide layout)
- `Unmuddled_Grant_Pitch.docx` — Full grant pitch document

---

## Design Language

### Colours
```
--ink:    #443030  (warm dark brown — background sections, nav)
--ochre:  #E8A838  (golden amber — accents, CTAs, highlights)
--mud1:   #8B6914  (dark gold)
--mud2:   #C4922A  (mid gold)
--cream:  #faf8f3  (off-white background)
--muted:  #7a6a5a  (body text)
--border: #e0d4c0  (subtle dividers)
```

The founder mentioned the brown could possibly go a touch darker — noted for future consideration.

### Typography
- **Syne** (800/700) — headings, nav, labels, buttons
- **Lora** (italic 400, 600) — body copy, emphasis, hero sub
- **DM Sans** — UI elements, translator interface

### Aesthetic
Warm, editorial, premium but approachable. NOT clinical. NOT tech-bro. NOT corporate cold. The AlphaMinds yacht pitch slides (in project files) show the founder's design sensibility — clean, professional, trustworthy, with soft organic shapes. Unmuddled adapts this into warm browns and ochre instead of slate blues and sage greens.

### Design Reference
The pointed-tab card shape from the founder's AlphaMinds "The Process" slide is used for the pricing page tiers.

---

## Tech Stack

- **Frontend:** HTML/CSS/JS — currently static files
- **AI:** Anthropic Claude API (claude-sonnet-4-20250514) — used in the jargon translator for tense/context matching
- **Deployment:** Vercel (in progress — there was a 404 issue, likely because the GitHub repo wasn't fully populated)
- **Database:** Moving toward PostgreSQL (Vercel Postgres or Supabase) for jargon terms and eventually user data
- **Integrations planned:** Slack, Notion, Gmail (CloudScope)

---

## Marketing & Strategy

### Acquisition Funnel (Greg Isenberg ACP Framework)
1. **Audience:** Neurodivergent professionals, workplace newbies, drowning middle managers
2. **Community:** Reddit (r/socialskills 6.3M, r/neurodiversity 103K), YouTube (How to ADHD style), LinkedIn (DEI angle)
3. **Product:** Quiz-first lead magnet → Free tier → paid conversion

### Value Ladder (Russell Brunson framework)
Free quiz → Bronze (trust) → Silver (recurring) → Gold (premium) → Enterprise (B2B)

### Key Marketing Angle
*"When AI is taking jobs, the last thing you need is to be drowning in the stuff AI could help you with."*

AI replaces processors, not lateral thinkers. Unmuddled removes the friction (jargon, inbox chaos, meeting overload) so real cognitive value shows through.

### What NOT to say publicly
- Do NOT reference Gen Z in public-facing copy (it's a target audience but not how we position)
- Do NOT use clinical/medical framing
- Do NOT say "disability tool" — say "plain English" and "workplace communication"

---

## Grant Pitch Summary

A full grant pitch Word document has been created (`Unmuddled_Grant_Pitch.docx`). Key numbers for any grant application:

- 60M+ neurodivergent adults in the US
- $2.4B market growing to $3.9B by 2035
- 9/10 opportunity rating (IdeaBrowser independent analysis)
- Product already partially built and functional
- Quiz-first lead magnet already deployed
- Y Combinator told founder to reapply (strong signal of concept validity)

Grant angles to consider: workforce development, digital inclusion, disability/neurodiversity in employment, women in tech/entrepreneurship, small business innovation.

---

## Jargon Quiz (PRIORITY FEATURE — do not forget this)

A 5-question on-demand multiple choice quiz pulling from the jargon database. Format:

- A jargon phrase appears ("boil the ocean")
- Four options: A, B, C, D
- User picks one
- Dramatic right/wrong reveal with plain-English explanation
- Final score screen designed to be shareable and competitive

**The vision:** Two people huddled over a phone taking turns, competing for the best score. Laughing at how absurd corporate language is. Potentially viral — people screenshot and share scores.

**Design:** Beautiful, on-brand, warm browns and ochre. Feels like a game not an assessment. Sits alongside the dyslexia and aspie quizzes but is pure fun.

**Future feature:** Challenge-a-friend link that sends the same 5-question set so scores are directly comparable. That's a growth loop.

Questions pull automatically from the jargon database — 314 terms = 314 potential questions. Wrong answer distractors generated from other definitions in the database.

---

## Pending / Next Steps

- [ ] Idioms feature (mentioned — not yet built)
- [ ] Fix Vercel/GitHub deployment 404 issue
- [ ] Migrate jargon database to PostgreSQL (1,000–2,000 more terms to add)
- [ ] Enterprise tier card design for pricing page
- [ ] Update pricing page with $19 Silver / $99 Gold (done in outputs, may need re-deploying)
- [ ] CloudScope standalone landing page consideration
- [ ] Bronze tier value proposition could be stronger

---

## Tone When Working on This Project

The founder is warm, direct, and moves fast. She has strong design instincts (reference the AlphaMinds slides). She is building this largely solo. She values a genuine work partner, not just an executor. Push back constructively when something could be better. Celebrate wins — this is a meaningful product being built by one person with real conviction.

---

*Last updated: February 2026*
